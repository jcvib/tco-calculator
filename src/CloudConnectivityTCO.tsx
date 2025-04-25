import React, { useState, useEffect } from 'react';
import { ArrowRight, CloudCog, BarChart2, Globe, Database, Settings, ChevronDown, ChevronUp, Table, PieChart, Download, Upload } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart as RechartsPieChart, Pie, Cell, Sector } from 'recharts';

// Formules de conversion corrigées
const convertVolumeToRate = (volumeTB, burstFactor = 2.5) => {
  // Conversion d'un volume mensuel en TB vers un débit en Mbps
  // 1 TB = 8 * 1024 * 1024 Mb (mégabits)
  // Divisé par le nombre de secondes dans un mois (30 * 24 * 60 * 60)
  const mbits = volumeTB * 8 * 1024 * 1024; // TB en Mb
  const seconds = 30 * 24 * 60 * 60; // Secondes dans un mois
  const baseMbps = mbits / seconds; // Débit de base
  return Math.ceil(baseMbps * burstFactor); // Avec facteur de burst
};

const convertRateToVolume = (rateMbps, burstFactor = 2.5) => {
  // Conversion d'un débit en Mbps vers un volume mensuel en TB
  const seconds = 30 * 24 * 60 * 60; // Secondes dans un mois
  const mbits = (rateMbps * seconds) / burstFactor; // Mégabits total
  const tb = mbits / (8 * 1024 * 1024); // Conversion en TB
  return Math.ceil(tb);
};

// Interface pour une région
interface Region {
  name: string;
  volume: number; // En TB
  bandwidth: number; // En Mbps
}

// Interface pour les prix Orange Business
interface OrangePricing {
  basePrice: number; // Prix de base par mois
  hourlyRate: number; // Taux horaire
  setupFee: number; // Frais d'installation
}

const CloudConnectivityTCO = () => {
  const [activeTab, setActiveTab] = useState('configuration');
  const [burstFactor, setBurstFactor] = useState(2.5);
  
  // Mode de saisie: 'bandwidth' (débit) ou 'volume' (volume de données)
  const [inputMode, setInputMode] = useState('volume');
  
  // Durée (en mois)
  const [duration, setDuration] = useState(36);
  
  // Régions et CSPs
  const [regions, setRegions] = useState<{[key: string]: Region[]}>({ 
    aws: [{ name: 'eu-west-1', volume: 30, bandwidth: convertVolumeToRate(30, burstFactor) }],
    azure: [{ name: 'west-europe', volume: 30, bandwidth: convertVolumeToRate(30, burstFactor) }]
  });
  const [selectedCSPs, setSelectedCSPs] = useState(['aws', 'azure']);
  const [connectivityType, setConnectivityType] = useState('both'); // 'public', 'private', 'both'
  const [calculationComplete, setCalculationComplete] = useState(false);
  
  // État pour l'affichage détaillé des coûts
  const [showDetailedCosts, setShowDetailedCosts] = useState(false);
  const [expandedRegionDetails, setExpandedRegionDetails] = useState<{[key: string]: boolean}>({});
  
  // Prix Orange Business personnalisables
  const [orangePricing, setOrangePricing] = useState<{[key: string]: OrangePricing}>({
    'eu-west': { basePrice: 500, hourlyRate: 3.2, setupFee: 800 },
    'eu-central': { basePrice: 550, hourlyRate: 3.4, setupFee: 900 },
    'eu-north': { basePrice: 580, hourlyRate: 3.5, setupFee: 950 },
    'eu-south': { basePrice: 580, hourlyRate: 3.6, setupFee: 950 },
    'us-east': { basePrice: 600, hourlyRate: 3.3, setupFee: 950 },
    'us-west': { basePrice: 650, hourlyRate: 3.4, setupFee: 1000 },
    'us-central': { basePrice: 650, hourlyRate: 3.4, setupFee: 1000 },
    'ca-central': { basePrice: 700, hourlyRate: 3.5, setupFee: 1100 },
    'ca-east': { basePrice: 700, hourlyRate: 3.5, setupFee: 1100 },
    'ap-east': { basePrice: 800, hourlyRate: 4.1, setupFee: 1400 },
    'ap-south': { basePrice: 780, hourlyRate: 4.0, setupFee: 1350 },
    'ap-northeast': { basePrice: 820, hourlyRate: 4.2, setupFee: 1400 },
    'ap-southeast': { basePrice: 750, hourlyRate: 3.9, setupFee: 1300 },
    'sa-east': { basePrice: 730, hourlyRate: 3.7, setupFee: 1200 },
    'me-north': { basePrice: 750, hourlyRate: 3.8, setupFee: 1250 },
    'me-south': { basePrice: 750, hourlyRate: 3.8, setupFee: 1250 },
    'af-north': { basePrice: 780, hourlyRate: 3.9, setupFee: 1300 },
    'af-south': { basePrice: 780, hourlyRate: 3.9, setupFee: 1300 },
    'default': { basePrice: 700, hourlyRate: 3.6, setupFee: 1100 }
  });
  
  // Liste complète des régions disponibles
  const availableRegions = {
    aws: [
      // Europe
      'eu-west-1', // Irlande
      'eu-west-2', // Londres
      'eu-west-3', // Paris
      'eu-central-1', // Francfort
      'eu-north-1', // Stockholm
      'eu-south-1', // Milan
      // Amérique du Nord
      'us-east-1', // Virginie du Nord
      'us-east-2', // Ohio
      'us-west-1', // Californie
      'us-west-2', // Oregon
      'ca-central-1', // Canada
      // Asie-Pacifique
      'ap-east-1', // Hong Kong
      'ap-south-1', // Mumbai
      'ap-northeast-1', // Tokyo
      'ap-northeast-2', // Séoul
      'ap-northeast-3', // Osaka
      'ap-southeast-1', // Singapour
      'ap-southeast-2', // Sydney
      // Amérique du Sud
      'sa-east-1', // São Paulo
      // Moyen-Orient et Afrique
      'me-south-1', // Bahreïn
      'af-south-1'  // Le Cap
    ],
    azure: [
      // Europe
      'west-europe', // Pays-Bas
      'north-europe', // Irlande
      'uk-south', // Londres
      'uk-west', // Cardiff
      'france-central', // Paris
      'germany-west-central', // Francfort
      'switzerland-north', // Zurich
      'norway-east', // Oslo
      'sweden-central', // Gävle
      // Amérique du Nord
      'east-us', // Virginie
      'east-us-2', // Virginie
      'central-us', // Iowa
      'west-us', // Californie
      'west-us-2', // Washington
      'west-us-3', // Arizona
      'south-central-us', // Texas
      'north-central-us', // Illinois
      'canada-central', // Toronto
      'canada-east', // Québec
      // Asie-Pacifique
      'east-asia', // Hong Kong
      'southeast-asia', // Singapour
      'japan-east', // Tokyo
      'japan-west', // Osaka
      'australia-east', // Nouvelle-Galles du Sud
      'australia-southeast', // Victoria
      'central-india', // Pune
      'south-india', // Chennai
      'korea-central', // Séoul
      // Amérique du Sud
      'brazil-south', // São Paulo
      // Moyen-Orient et Afrique
      'uae-north', // Dubaï
      'south-africa-north' // Johannesburg
    ]
  };
  
  // Mapping des régions CSP vers les régions Orange
  const orangeRegionMapping = {
    // AWS Europe
    'eu-west-1': 'eu-west',
    'eu-west-2': 'eu-west',
    'eu-west-3': 'eu-west',
    'eu-central-1': 'eu-central',
    'eu-north-1': 'eu-north',
    'eu-south-1': 'eu-south',
    // AWS Amérique du Nord
    'us-east-1': 'us-east',
    'us-east-2': 'us-east',
    'us-west-1': 'us-west',
    'us-west-2': 'us-west',
    'ca-central-1': 'ca-central',
    // AWS Asie-Pacifique
    'ap-east-1': 'ap-east',
    'ap-south-1': 'ap-south',
    'ap-northeast-1': 'ap-northeast',
    'ap-northeast-2': 'ap-northeast',
    'ap-northeast-3': 'ap-northeast',
    'ap-southeast-1': 'ap-southeast',
    'ap-southeast-2': 'ap-southeast',
    // AWS Amérique du Sud
    'sa-east-1': 'sa-east',
    // AWS Moyen-Orient et Afrique
    'me-south-1': 'me-south',
    'af-south-1': 'af-south',
    
    // Azure Europe
    'west-europe': 'eu-west',
    'north-europe': 'eu-north',
    'uk-south': 'eu-west',
    'uk-west': 'eu-west',
    'france-central': 'eu-west',
    'germany-west-central': 'eu-central',
    'switzerland-north': 'eu-central',
    'norway-east': 'eu-north',
    'sweden-central': 'eu-north',
    // Azure Amérique du Nord
    'east-us': 'us-east',
    'east-us-2': 'us-east',
    'central-us': 'us-central',
    'west-us': 'us-west',
    'west-us-2': 'us-west',
    'west-us-3': 'us-west',
    'south-central-us': 'us-central',
    'north-central-us': 'us-central',
    'canada-central': 'ca-central',
    'canada-east': 'ca-east',
    // Azure Asie-Pacifique
    'east-asia': 'ap-east',
    'southeast-asia': 'ap-southeast',
    'japan-east': 'ap-northeast',
    'japan-west': 'ap-northeast',
    'australia-east': 'ap-southeast',
    'australia-southeast': 'ap-southeast',
    'central-india': 'ap-south',
    'south-india': 'ap-south',
    'korea-central': 'ap-northeast',
    // Azure Amérique du Sud
    'brazil-south': 'sa-east',
    // Azure Moyen-Orient et Afrique
    'uae-north': 'me-north',
    'south-africa-north': 'af-north'
  };
  
  // Récupérer le nom des régions Orange Business
  const getOrangeRegionNames = () => {
    const orangeRegions = new Set<string>();
    Object.values(orangeRegionMapping).forEach(region => orangeRegions.add(region));
    return Array.from(orangeRegions).sort();
  };
  
  // Noms conviviaux pour les régions
  const regionFriendlyNames = {
    'eu-west': 'Europe de l\'Ouest',
    'eu-central': 'Europe Centrale',
    'eu-north': 'Europe du Nord',
    'eu-south': 'Europe du Sud',
    'us-east': 'États-Unis Est',
    'us-west': 'États-Unis Ouest',
    'us-central': 'États-Unis Central',
    'ca-central': 'Canada Central',
    'ca-east': 'Canada Est',
    'ap-east': 'Asie Est',
    'ap-south': 'Asie Sud',
    'ap-northeast': 'Asie Nord-Est',
    'ap-southeast': 'Asie Sud-Est',
    'sa-east': 'Amérique du Sud Est',
    'me-north': 'Moyen-Orient Nord',
    'me-south': 'Moyen-Orient Sud',
    'af-north': 'Afrique Nord',
    'af-south': 'Afrique Sud',
    'default': 'Région par défaut'
  };
  
  // Mettre à jour les valeurs lors du changement de mode d'entrée ou du facteur de burst
  useEffect(() => {
    // Mettre à jour les régions en fonction du mode d'entrée
    setRegions(prevRegions => {
      const newRegions: {[key: string]: Region[]} = {};
      
      for (const [csp, cspRegions] of Object.entries(prevRegions)) {
        newRegions[csp] = cspRegions.map(region => {
          if (inputMode === 'bandwidth') {
            // Recalculer le volume basé sur la bande passante
            return {
              ...region,
              volume: convertRateToVolume(region.bandwidth, burstFactor)
            };
          } else {
            // Recalculer la bande passante basée sur le volume
            return {
              ...region,
              bandwidth: convertVolumeToRate(region.volume, burstFactor)
            };
          }
        });
      }
      
      return newRegions;
    });
  }, [inputMode, burstFactor]);
  
  // Prix fictifs basés sur des estimations (à remplacer par des données réelles)
  const pricingData = {
    aws: {
      public: { 
        // Prix par GB sortant (décroissant par palier)
        dataTransfer: {
          'eu-west-1': [
            { limit: 10, price: 0.09 }, // $0.09 par GB jusqu'à 10 TB
            { limit: 50, price: 0.085 }, // $0.085 par GB de 10 à 50 TB
            { limit: 150, price: 0.07 }, // $0.07 par GB de 50 à 150 TB
            { limit: 500, price: 0.05 }, // $0.05 par GB de 150 à 500 TB
            { limit: Infinity, price: 0.04 } // $0.04 par GB au-delà de 500 TB
          ],
          'eu-west-2': [
            { limit: 10, price: 0.09 },
            { limit: 50, price: 0.085 },
            { limit: 150, price: 0.07 },
            { limit: 500, price: 0.05 },
            { limit: Infinity, price: 0.04 }
          ],
          'eu-west-3': [
            { limit: 10, price: 0.09 },
            { limit: 50, price: 0.085 },
            { limit: 150, price: 0.07 },
            { limit: 500, price: 0.05 },
            { limit: Infinity, price: 0.04 }
          ],
          'eu-central-1': [
            { limit: 10, price: 0.09 },
            { limit: 50, price: 0.086 },
            { limit: 150, price: 0.075 },
            { limit: 500, price: 0.055 },
            { limit: Infinity, price: 0.045 }
          ],
          'eu-north-1': [
            { limit: 10, price: 0.09 },
            { limit: 50, price: 0.085 },
            { limit: 150, price: 0.07 },
            { limit: 500, price: 0.05 },
            { limit: Infinity, price: 0.04 }
          ],
          'eu-south-1': [
            { limit: 10, price: 0.09 },
            { limit: 50, price: 0.085 },
            { limit: 150, price: 0.07 },
            { limit: 500, price: 0.05 },
            { limit: Infinity, price: 0.04 }
          ],
          'us-east-1': [
            { limit: 10, price: 0.085 },
            { limit: 50, price: 0.08 },
            { limit: 150, price: 0.07 },
            { limit: 500, price: 0.05 },
            { limit: Infinity, price: 0.04 }
          ],
          'us-east-2': [
            { limit: 10, price: 0.085 },
            { limit: 50, price: 0.08 },
            { limit: 150, price: 0.07 },
            { limit: 500, price: 0.05 },
            { limit: Infinity, price: 0.04 }
          ],
          'us-west-1': [
            { limit: 10, price: 0.09 },
            { limit: 50, price: 0.085 },
            { limit: 150, price: 0.07 },
            { limit: 500, price: 0.05 },
            { limit: Infinity, price: 0.04 }
          ],
          'us-west-2': [
            { limit: 10, price: 0.09 },
            { limit: 50, price: 0.085 },
            { limit: 150, price: 0.07 },
            { limit: 500, price: 0.05 },
            { limit: Infinity, price: 0.04 }
          ],
          'ap-southeast-1': [
            { limit: 10, price: 0.12 },
            { limit: 50, price: 0.11 },
            { limit: 150, price: 0.08 },
            { limit: 500, price: 0.06 },
            { limit: Infinity, price: 0.05 }
          ],
          // Pour les autres régions, utiliser des valeurs par défaut
          'default': [
            { limit: 10, price: 0.1 },
            { limit: 50, price: 0.09 },
            { limit: 150, price: 0.075 },
            { limit: 500, price: 0.055 },
            { limit: Infinity, price: 0.045 }
          ]
        }
      },
      private: { 
        // Prix par Mbps par mois
        bandwidth: {
          'eu-west-1': 3.5,
          'eu-west-2': 3.5,
          'eu-west-3': 3.5,
          'eu-central-1': 3.7,
          'eu-north-1': 3.8,
          'eu-south-1': 3.8,
          'us-east-1': 3.3,
          'us-east-2': 3.3,
          'us-west-1': 3.4,
          'us-west-2': 3.4,
          'ca-central-1': 3.5,
          'ap-east-1': 4.2,
          'ap-south-1': 4.1,
          'ap-northeast-1': 4.0,
          'ap-northeast-2': 4.0,
          'ap-northeast-3': 4.0,
          'ap-southeast-1': 4.2,
          'ap-southeast-2': 4.2,
          'sa-east-1': 3.9,
          'me-south-1': 4.3,
          'af-south-1': 4.3,
          'default': 4.0
        },
        setup: {
          'eu-west-1': 1000,
          'eu-west-2': 1000,
          'eu-west-3': 1000,
          'eu-central-1': 1100,
          'eu-north-1': 1100,
          'eu-south-1': 1100,
          'us-east-1': 1200,
          'us-east-2': 1200,
          'us-west-1': 1300,
          'us-west-2': 1300,
          'ca-central-1': 1300,
          'ap-east-1': 1600,
          'ap-south-1': 1500,
          'ap-northeast-1': 1500,
          'ap-northeast-2': 1500,
          'ap-northeast-3': 1500,
          'ap-southeast-1': 1500,
          'ap-southeast-2': 1500,
          'sa-east-1': 1400,
          'me-south-1': 1600,
          'af-south-1': 1600,
          'default': 1500
        }
      }
    },
    azure: {
      public: { 
        // Prix par GB sortant (décroissant par palier)
        dataTransfer: {
          'west-europe': [
            { limit: 10, price: 0.087 },
            { limit: 50, price: 0.083 },
            { limit: 150, price: 0.07 },
            { limit: 500, price: 0.05 },
            { limit: Infinity, price: 0.043 }
          ],
          'north-europe': [
            { limit: 10, price: 0.087 },
            { limit: 50, price: 0.083 },
            { limit: 150, price: 0.07 },
            { limit: 500, price: 0.05 },
            { limit: Infinity, price: 0.043 }
          ],
          'uk-south': [
            { limit: 10, price: 0.087 },
            { limit: 50, price: 0.083 },
            { limit: 150, price: 0.07 },
            { limit: 500, price: 0.05 },
            { limit: Infinity, price: 0.043 }
          ],
          'east-us': [
            { limit: 10, price: 0.08 },
            { limit: 50, price: 0.075 },
            { limit: 150, price: 0.065 },
            { limit: 500, price: 0.045 },
            { limit: Infinity, price: 0.038 }
          ],
          'southeast-asia': [
            { limit: 10, price: 0.11 },
            { limit: 50, price: 0.105 },
            { limit: 150, price: 0.075 },
            { limit: 500, price: 0.055 },
            { limit: Infinity, price: 0.048 }
          ],
          // Pour les autres régions, utiliser des valeurs par défaut
          'default': [
            { limit: 10, price: 0.09 },
            { limit: 50, price: 0.085 },
            { limit: 150, price: 0.07 },
            { limit: 500, price: 0.05 },
            { limit: Infinity, price: 0.043 }
          ]
        }
      },
      private: { 
        // Prix par Mbps par mois
        bandwidth: {
          'west-europe': 3.3,
          'north-europe': 3.3,
          'uk-south': 3.3,
          'uk-west': 3.3,
          'france-central': 3.4,
          'germany-west-central': 3.6,
          'switzerland-north': 3.7,
          'norway-east': 3.6,
          'sweden-central': 3.6,
          'east-us': 3.1,
          'east-us-2': 3.1,
          'central-us': 3.2,
          'west-us': 3.2,
          'west-us-2': 3.2,
          'southeast-asia': 4.0,
          'default': 3.5
        },
        setup: {
          'west-europe': 1200,
          'north-europe': 1200,
          'uk-south': 1200,
          'uk-west': 1200,
          'france-central': 1250,
          'germany-west-central': 1300,
          'switzerland-north': 1350,
          'norway-east': 1300,
          'sweden-central': 1300,
          'east-us': 1300,
          'east-us-2': 1300,
          'central-us': 1350,
          'west-us': 1350,
          'west-us-2': 1350,
          'southeast-asia': 1600,
          'default': 1400
        }
      }
    }
  };

  // Calculer le coût pour la connectivité publique CSP basé sur le volume
  const calculatePublicCost = (csp, selectedRegions) => {
    if (!pricingData[csp] || !pricingData[csp].public) return 0;
    
    const costDetails = [];
    let totalCost = 0;
    
    selectedRegions.forEach(regionData => {
      const region = regionData.name;
      const regionVolume = regionData.volume; // Volume mensuel en TB pour cette région
      
      // Convertir TB en GB pour le calcul
      const volumeGB = regionVolume * 1024;
      
      // Obtenir la grille tarifaire de la région ou utiliser la grille par défaut
      const pricingTiers = pricingData[csp].public.dataTransfer[region] || 
                          pricingData[csp].public.dataTransfer['default'];
      
      // Calculer le coût en appliquant les tarifs par palier
      let remainingVolume = volumeGB;
      let tier = 0;
      let regionCost = 0;
      const tierBreakdown = [];
      
      while (remainingVolume > 0 && tier < pricingTiers.length) {
        const currentTier = pricingTiers[tier];
        const nextTier = pricingTiers[tier + 1];
        const tierLimit = currentTier.limit * 1024; // Convertir TB en GB
        
        const volumeInTier = nextTier 
          ? Math.min(remainingVolume, tierLimit) 
          : remainingVolume;
          
        const tierCost = volumeInTier * currentTier.price;
        regionCost += tierCost;
        
        tierBreakdown.push({
          tier: tier + 1,
          volume: volumeInTier / 1024, // Convertir en TB pour l'affichage
          rate: currentTier.price,
          cost: tierCost
        });
        
        remainingVolume -= volumeInTier;
        tier++;
      }
      
      const monthlyRegionCost = regionCost;
      totalCost += monthlyRegionCost * duration;
      
      costDetails.push({
        region,
        volume: regionVolume,
        monthlyCost: monthlyRegionCost,
        totalCost: monthlyRegionCost * duration,
        tierBreakdown
      });
    });
    
    return {
      totalCost: Math.round(totalCost),
      monthlyCost: Math.round(totalCost / duration),
      details: costDetails
    };
  };

  // Calculer le coût pour la connectivité privée basé sur la bande passante
  const calculatePrivateCost = (csp, selectedRegions) => {
    if (!pricingData[csp] || !pricingData[csp].private) return 0;
    
    const costDetails = [];
    let totalCost = 0;
    let setupCost = 0;
    let recurrentCost = 0;
    
    selectedRegions.forEach(regionData => {
      const region = regionData.name;
      
      // Utiliser directement la bande passante de la région
      const regionBandwidth = regionData.bandwidth;
      
      // Coût mensuel basé sur la bande passante
      const bandwidthPrice = pricingData[csp].private.bandwidth[region] || 
                            pricingData[csp].private.bandwidth['default'];
      const monthlyCost = regionBandwidth * bandwidthPrice;
      
      // Ajouter les frais d'installation
      const setupFee = pricingData[csp].private.setup[region] || 
                      pricingData[csp].private.setup['default'];
      
      const regionRecurrentCost = monthlyCost * duration;
      const regionTotalCost = regionRecurrentCost + setupFee;
      
      totalCost += regionTotalCost;
      setupCost += setupFee;
      recurrentCost += monthlyCost;
      
      costDetails.push({
        region,
        bandwidth: regionBandwidth,
        bandwidthPrice,
        monthlyCost,
        recurrentCost: regionRecurrentCost,
        setupFee,
        totalCost: regionTotalCost
      });
    });
    
    return {
      totalCost: Math.round(totalCost),
      monthlyCost: Math.round(recurrentCost),
      setupCost: Math.round(setupCost),
      recurrentTotalCost: Math.round(recurrentCost * duration),
      details: costDetails
    };
  };

  // Calculer le coût Orange pour la connectivité privée
  const calculateOrangeCost = (selectedRegions) => {
    const costDetails = [];
    let totalCost = 0;
    let setupCost = 0;
    let monthlyCost = 0;
    
    // Regrouper les besoins en bande passante par région Orange
    const regionBandwidthNeeds = {};
    
    selectedRegions.forEach(regionData => {
      const cspRegion = regionData.name;
      const orangeRegion = orangeRegionMapping[cspRegion] || 'default';
      
      // Utiliser directement la bande passante de la région
      const regionBandwidth = regionData.bandwidth;
      
      // Agréger les besoins en bande passante par région Orange
      if (!regionBandwidthNeeds[orangeRegion]) {
        regionBandwidthNeeds[orangeRegion] = {
          bandwidth: regionBandwidth,
          cspRegions: [{ name: cspRegion, bandwidth: regionBandwidth }]
        };
      } else {
        regionBandwidthNeeds[orangeRegion].bandwidth += regionBandwidth;
        regionBandwidthNeeds[orangeRegion].cspRegions.push({ name: cspRegion, bandwidth: regionBandwidth });
      }
    });
    
    // Calculer le coût pour chaque région Orange
    Object.entries(regionBandwidthNeeds).forEach(([orangeRegion, data]) => {
      const bandwidth = data.bandwidth;
      const cspRegions = data.cspRegions;
      
      // Obtenir les prix Orange pour cette région
      const orangePrices = orangePricing[orangeRegion] || orangePricing['default'];
      
      // Calculer le coût mensuel (prix de base + taux horaire * bande passante)
      const regionMonthlyCost = orangePrices.basePrice + (orangePrices.hourlyRate * bandwidth);
      
      // Frais d'installation
      const setupFee = orangePrices.setupFee;
      
      const regionRecurrentCost = regionMonthlyCost * duration;
      const regionTotalCost = regionRecurrentCost + setupFee;
      
      totalCost += regionTotalCost;
      setupCost += setupFee;
      monthlyCost += regionMonthlyCost;
      
      costDetails.push({
        region: orangeRegion,
        bandwidth,
        basePrice: orangePrices.basePrice,
        hourlyRate: orangePrices.hourlyRate,
        monthlyCost: regionMonthlyCost,
        recurrentCost: regionRecurrentCost,
        setupFee,
        totalCost: regionTotalCost,
        cspRegions
      });
    });
    
    return {
      totalCost: Math.round(totalCost),
      monthlyCost: Math.round(monthlyCost),
      setupCost: Math.round(setupCost),
      recurrentTotalCost: Math.round(monthlyCost * duration),
      details: costDetails
    };
  };

  // Générer les données pour le graphique
  const generateChartData = () => {
    const chartData = [];
    
    if (connectivityType === 'public' || connectivityType === 'both') {
      selectedCSPs.forEach(csp => {
        const costData = calculatePublicCost(csp, regions[csp] || []);
        chartData.push({
          name: `${csp.toUpperCase()} Public`,
          cost: costData.totalCost,
          monthlyCost: costData.monthlyCost,
          setupCost: 0,
          recurrentCost: costData.totalCost,
          details: costData.details
        });
      });
    }
    
    if (connectivityType === 'private' || connectivityType === 'both') {
      selectedCSPs.forEach(csp => {
        const costData = calculatePrivateCost(csp, regions[csp] || []);
        chartData.push({
          name: `${csp.toUpperCase()} Private`,
          cost: costData.totalCost,
          monthlyCost: costData.monthlyCost,
          setupCost: costData.setupCost,
          recurrentCost: costData.recurrentTotalCost,
          details: costData.details
        });
      });
      
      // Ajouter Orange Business
      const allRegions = [];
      selectedCSPs.forEach(csp => {
        allRegions.push(...regions[csp] || []);
      });
      
      const orangeCostData = calculateOrangeCost(allRegions);
      chartData.push({
        name: 'Orange Business Private',
        cost: orangeCostData.totalCost,
        monthlyCost: orangeCostData.monthlyCost,
        setupCost: orangeCostData.setupCost,
        recurrentCost: orangeCostData.recurrentTotalCost,
        details: orangeCostData.details
      });
    }
    
    return chartData;
  };

  // Calculer les économies par rapport à chaque option
  const calculateSavings = (chartData) => {
    const orangeCost = chartData.find(item => item.name === 'Orange Business Private')?.cost || 0;
    const savings = {};
    
    chartData.forEach(item => {
      if (item.name !== 'Orange Business Private' && item.cost > 0) {
        savings[item.name] = {
          percentage: Math.round((item.cost - orangeCost) / item.cost * 100),
          absolute: Math.round(item.cost - orangeCost)
        };
      }
    });
    
    return savings;
  };

  const handleCalculate = () => {
    setCalculationComplete(true);
    setActiveTab('results');
  };

  // Fonction pour bascules l'affichage détaillé des coûts
  const toggleDetailedCosts = () => {
    setShowDetailedCosts(!showDetailedCosts);
  };

  // Fonction pour bascule les détails d'une région spécifique
  const toggleRegionDetails = (regionKey) => {
    setExpandedRegionDetails(prev => ({
      ...prev,
      [regionKey]: !prev[regionKey]
    }));
  };

  // Gestion des régions
  const handleAddRegion = (csp) => {
    const availableForCSP = availableRegions[csp] || [];
    const currentSelected = regions[csp] || [];
    const currentRegionNames = currentSelected.map(r => r.name);
    
    // Trouver la première région non sélectionnée
    const newRegion = availableForCSP.find(r => !currentRegionNames.includes(r));
    
    if (newRegion) {
      // Ajouter la nouvelle région avec des valeurs par défaut
      const updatedRegions = [...currentSelected, {
        name: newRegion,
        volume: 10, // Valeur par défaut
        bandwidth: convertVolumeToRate(10, burstFactor)
      }];
      
      setRegions({
        ...regions,
        [csp]: updatedRegions
      });
    }
  };

  const handleRemoveRegion = (csp, regionName) => {
    const currentSelected = regions[csp] || [];
    
    if (currentSelected.length <= 1) return; // Garder au moins une région
    
    // Filtrer la région à supprimer
    const updatedRegions = currentSelected.filter(r => r.name !== regionName);
    
    setRegions({
      ...regions,
      [csp]: updatedRegions
    });
  };

  const handleRegionValueChange = (csp, regionName, field, newValue) => {
    const currentSelected = [...regions[csp]] || [];
    
    // Trouver l'index de la région modifiée
    const regionIndex = currentSelected.findIndex(r => r.name === regionName);
    if (regionIndex === -1) return;
    
    // Valider que la valeur est positive
    const validValue = Math.max(0, newValue);
    
    // Mettre à jour la région modifiée
    const updatedRegion = { ...currentSelected[regionIndex] };
    
    if (field === 'volume') {
      updatedRegion.volume = validValue;
      updatedRegion.bandwidth = convertVolumeToRate(validValue, burstFactor);
    } else if (field === 'bandwidth') {
      updatedRegion.bandwidth = validValue;
      updatedRegion.volume = convertRateToVolume(validValue, burstFactor);
    }
    
    currentSelected[regionIndex] = updatedRegion;
    
    setRegions({
      ...regions,
      [csp]: currentSelected
    });
  };

  const toggleCSP = (csp) => {
    if (selectedCSPs.includes(csp)) {
      // Ne pas désélectionner si c'est le dernier CSP
      if (selectedCSPs.length > 1) {
        setSelectedCSPs(selectedCSPs.filter(c => c !== csp));
      }
    } else {
      setSelectedCSPs([...selectedCSPs, csp]);
    }
  };

  // Gestion des prix Orange Business
  const handleOrangePriceChange = (region, field, value) => {
    // Valider la valeur numérique
    const numValue = parseFloat(value);
    if (isNaN(numValue) || numValue < 0) return;
    
    setOrangePricing(prev => ({
      ...prev,
      [region]: {
        ...prev[region],
        [field]: numValue
      }
    }));
  };

  // Exporter la configuration des prix
  const exportPricingConfiguration = () => {
    const config = {
      orangePricing,
      lastUpdated: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'orange-business-pricing.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  // Importer la configuration des prix
  const importPricingConfiguration = (event) => {
    const file = event.target.files[0];
    if (!file) return;
    
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const config = JSON.parse(e.target.result);
        if (config.orangePricing) {
          setOrangePricing(config.orangePricing);
          alert('Configuration des prix importée avec succès');
        } else {
          alert('Fichier de configuration invalide');
        }
      } catch (error) {
        alert('Erreur lors de l\'importation du fichier: ' + error.message);
      }
    };
    reader.readAsText(file);
    
    // Réinitialiser l'input de fichier
    event.target.value = '';
  };

  const generateComparisonChartData = () => {
    // Générer des données pour un graphique comparant l'évolution des coûts
    // en fonction du volume de données
    const volumePoints = [50, 100, 200, 500, 1000, 2000];
    const chartData = [];
    
    // Sauvegarder l'état actuel des régions
    const originalRegions = {...regions};
    
    for (const vol of volumePoints) {
      const dataPoint = { volume: vol };
      
      // Pour chaque CSP sélectionné, calculer les coûts
      for (const csp of selectedCSPs) {
        const cspRegions = regions[csp] || [];
        
        // Créer temporairement des régions avec le volume modifié
        const tempRegions = cspRegions.map(region => {
          const scaleFactor = vol / region.volume;
          return {
            ...region,
            volume: vol,
            bandwidth: convertVolumeToRate(vol, burstFactor)
          };
        });
        
        // Calculer les coûts avec ces régions temporaires
        const publicCostData = calculatePublicCost(csp, tempRegions);
        const privateCostData = calculatePrivateCost(csp, tempRegions);
        
        dataPoint[`${csp}_public`] = publicCostData.totalCost;
        dataPoint[`${csp}_private`] = privateCostData.totalCost;
      }
      
      // Calculer le coût Orange
      const allTempRegions = [];
      selectedCSPs.forEach(csp => {
        const cspRegions = regions[csp] || [];
        const tempRegions = cspRegions.map(region => ({
          ...region,
          volume: vol,
          bandwidth: convertVolumeToRate(vol, burstFactor)
        }));
        allTempRegions.push(...tempRegions);
      });
      
      const orangeCostData = calculateOrangeCost(allTempRegions);
      dataPoint.orange = orangeCostData.totalCost;
      
      chartData.push(dataPoint);
    }
    
    return chartData;
  };

  // Générer des données pour le graphique de répartition des coûts
  const generateCostDistributionData = (costDetails) => {
    // Si aucun détail, retourner un tableau vide
    if (!costDetails || costDetails.length === 0) return [];
    
    return costDetails.map(item => ({
      name: regionFriendlyNames[item.region] || item.region,
      value: Math.round(item.totalCost)
    }));
  };

  // Fonction de rendu des régions pour un CSP
  const renderCSPRegions = (csp) => {
    const cspRegions = regions[csp] || [];
    const isActive = selectedCSPs.includes(csp);
    
    return (
      <div className="space-y-3">
        {cspRegions.map(region => (
          <div key={`${csp}-${region.name}`} className="bg-gray-50 p-3 rounded-md border border-gray-200">
            <div className="flex items-center justify-between mb-2">
              <select 
                className="p-2 border rounded-md w-48"
                value={region.name}
                disabled={!isActive}
                onChange={(e) => {
                  const newRegions = [...cspRegions];
                  const index = newRegions.findIndex(r => r.name === region.name);
                  if (index !== -1) {
                    newRegions[index] = { ...newRegions[index], name: e.target.value };
                    setRegions({ ...regions, [csp]: newRegions });
                  }
                }}
              >
                {availableRegions[csp].map(regionName => (
                  <option 
                    key={regionName} 
                    value={regionName}
                    disabled={cspRegions.some(r => r.name === regionName && r.name !== region.name)}
                  >
                    {regionName}
                  </option>
                ))}
              </select>
              
              <button
                className="p-1 text-gray-500 hover:text-red-500"
                disabled={!isActive || cspRegions.length === 1}
                onClick={() => handleRemoveRegion(csp, region.name)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-sm text-gray-600">Volume (TB/mois)</label>
                <div className="flex">
                  <input
                    type="number"
                    className="w-full p-2 border rounded-l-md"
                    value={region.volume}
                    disabled={!isActive}
                    onChange={(e) => handleRegionValueChange(csp, region.name, 'volume', parseInt(e.target.value) || 0)}
                    min="0"
                  />
                  <div className="bg-gray-200 px-3 py-2 rounded-r-md flex items-center">TB</div>
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm text-gray-600">Bande passante (Mbps)</label>
                <div className="flex">
                  <input
                    type="number"
                    className="w-full p-2 border rounded-l-md"
                    value={region.bandwidth}
                    disabled={!isActive}
                    onChange={(e) => handleRegionValueChange(csp, region.name, 'bandwidth', parseInt(e.target.value) || 0)}
                    min="0"
                  />
                  <div className="bg-gray-200 px-3 py-2 rounded-r-md flex items-center">Mbps</div>
                </div>
              </div>
            </div>
          </div>
        ))}
        
        {isActive && cspRegions.length < availableRegions[csp].length && (
          <button
            className="text-sm text-orange-500 hover:text-orange-700 flex items-center"
            onClick={() => handleAddRegion(csp)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
            Ajouter une région
          </button>
        )}
      </div>
    );
  };

  // Rendu de l'édition des prix Orange Business
  const renderOrangePricingEditor = () => {
    const orangeRegions = getOrangeRegionNames();
    
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-medium">Tarification Orange Business</h3>
          <div className="flex gap-2">
            <button 
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
              onClick={exportPricingConfiguration}
            >
              <Download className="w-4 h-4 mr-1" />
              Exporter
            </button>
            <label className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center cursor-pointer">
              <Upload className="w-4 h-4 mr-1" />
              Importer
              <input 
                type="file" 
                className="hidden" 
                accept=".json" 
                onChange={importPricingConfiguration}
              />
            </label>
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-md">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-2 px-4 border-b text-left">Région</th>
                <th className="py-2 px-4 border-b text-right">Prix de base ($/mois)</th>
                <th className="py-2 px-4 border-b text-right">Taux horaire ($/Mbps)</th>
                <th className="py-2 px-4 border-b text-right">Frais d'installation ($)</th>
              </tr>
            </thead>
            <tbody>
              {orangeRegions.map(region => (
                <tr key={region} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">
                    {regionFriendlyNames[region] || region}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input
                      type="number"
                      className="w-full p-2 border rounded-md text-right"
                      value={orangePricing[region]?.basePrice || 0}
                      onChange={(e) => handleOrangePriceChange(region, 'basePrice', e.target.value)}
                      min="0"
                      step="10"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input
                      type="number"
                      className="w-full p-2 border rounded-md text-right"
                      value={orangePricing[region]?.hourlyRate || 0}
                      onChange={(e) => handleOrangePriceChange(region, 'hourlyRate', e.target.value)}
                      min="0"
                      step="0.1"
                    />
                  </td>
                  <td className="py-2 px-4 border-b">
                    <input
                      type="number"
                      className="w-full p-2 border rounded-md text-right"
                      value={orangePricing[region]?.setupFee || 0}
                      onChange={(e) => handleOrangePriceChange(region, 'setupFee', e.target.value)}
                      min="0"
                      step="100"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  // Rendu du contenu des résultats
  const renderResults = () => {
    const chartData = generateChartData();
    const savings = calculateSavings(chartData);
    
    // Calculer le volume et la bande passante totale
    let totalVolume = 0;
    let totalBandwidth = 0;
    
    Object.values(regions).forEach(cspRegions => {
      cspRegions.forEach(region => {
        totalVolume += region.volume;
        totalBandwidth += region.bandwidth;
      });
    });
    
    // Générer les données pour le graphique de la répartition des coûts
    const orangeData = chartData.find(item => item.name === 'Orange Business Private');
    const distributionData = orangeData ? generateCostDistributionData(orangeData.details) : [];
    
    return (
      <div className="space-y-6">
        <h3 className="text-lg font-medium">Résultats du calcul TCO</h3>
        
        <div className="p-4 bg-gray-50 border rounded-md">
          <h4 className="font-medium mb-3">Récapitulatif de la configuration</h4>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <p><span className="font-medium">Volume total:</span> {totalVolume} TB/mois</p>
              <p><span className="font-medium">Bande passante totale:</span> {totalBandwidth} Mbps</p>
              <p><span className="font-medium">Durée:</span> {duration} mois</p>
              <p><span className="font-medium">Facteur de burst:</span> {burstFactor}x</p>
            </div>
            <div>
              <p><span className="font-medium">CSPs:</span> {selectedCSPs.map(csp => csp.toUpperCase()).join(', ')}</p>
              <p><span className="font-medium">Type de connectivité:</span> {
                connectivityType === 'public' ? 'Publique' : 
                connectivityType === 'private' ? 'Privée' : 
                'Publique et Privée'
              }</p>
              <p><span className="font-medium">Nombre de régions:</span> {
                Object.values(regions).reduce((sum, cspRegions) => sum + cspRegions.length, 0)
              }</p>
            </div>
          </div>
        </div>
        
        <div className="p-4 bg-gray-50 border rounded-md">
          <div className="flex justify-between items-center mb-3">
            <h4 className="font-medium">Coûts totaux sur {duration} mois</h4>
            <button
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center"
              onClick={toggleDetailedCosts}
            >
              {showDetailedCosts ? (
                <>
                  <ChevronUp className="w-4 h-4 mr-1" />
                  Masquer les détails
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4 mr-1" />
                  Afficher les détails
                </>
              )}
            </button>
          </div>
          
          <div className="h-80 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis 
                  label={{ value: 'Coût total ($)', angle: -90, position: 'insideLeft' }}
                  width={80}
                />
                <Tooltip 
                  formatter={(value, name, props) => {
                    if (name === 'cost') return [`$${value.toLocaleString()}`, 'Coût total'];
                    if (name === 'setupCost') return [`$${value.toLocaleString()}`, 'Frais d\'installation'];
                    if (name === 'recurrentCost') return [`$${value.toLocaleString()}`, 'Coûts récurrents'];
                    return [value, name];
                  }}
                />
                <Legend />
                <Bar dataKey="recurrentCost" name="Coûts récurrents" stackId="a" fill="#ff9960" />
                <Bar dataKey="setupCost" name="Frais d'installation" stackId="a" fill="#f16e00" />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {chartData.map((item, index) => (
              <div key={index} className="p-3 border rounded-md bg-white">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-xl">${item.cost.toLocaleString()}</span>
                </div>
                <div className="mt-1 text-sm text-gray-600">
                  Coût mensuel: ${item.monthlyCost.toLocaleString()}
                </div>
                {item.setupCost > 0 && (
                  <div className="mt-1 text-sm text-gray-600">
                    Frais d'installation: ${item.setupCost.toLocaleString()}
                  </div>
                )}
                {item.name === 'Orange Business Private' && (
                  <div className="mt-2 text-sm text-green-600">
                    Solution recommandée
                  </div>
                )}
                {savings[item.name] && (
                  <div className="mt-2 text-sm text-green-600">
                    Économie potentielle avec Orange Business: {savings[item.name].percentage}% 
                    (${savings[item.name].absolute.toLocaleString()})
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {showDetailedCosts && (
            <div className="mt-4">
              <h4 className="font-medium mb-3">Détails des coûts par région</h4>
              
              {chartData.map((item, index) => (
                <div key={`${item.name}-details`} className="mb-4 border rounded-md overflow-hidden">
                  <div 
                    className="p-3 bg-gray-100 flex justify-between items-center cursor-pointer"
                    onClick={() => toggleRegionDetails(`${item.name}`)}
                  >
                    <span className="font-medium">{item.name}</span>
                    <div className="flex items-center">
                      <span className="mr-2">${item.cost.toLocaleString()}</span>
                      {expandedRegionDetails[`${item.name}`] ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                  
                  {expandedRegionDetails[`${item.name}`] && (
                    <div className="p-3">
                      <div className="overflow-x-auto">
                        <table className="min-w-full border border-gray-200">
                          <thead>
                            <tr className="bg-gray-50">
                              <th className="py-2 px-3 text-left border-b">Région</th>
                              {item.name.includes('Public') ? (
                                <>
                                  <th className="py-2 px-3 text-right border-b">Volume (TB)</th>
                                  <th className="py-2 px-3 text-right border-b">Coût mensuel ($)</th>
                                </>
                              ) : (
                                <>
                                  <th className="py-2 px-3 text-right border-b">Bande passante (Mbps)</th>
                                  <th className="py-2 px-3 text-right border-b">Coût mensuel ($)</th>
                                  <th className="py-2 px-3 text-right border-b">Frais d'installation ($)</th>
                                </>
                              )}
                              <th className="py-2 px-3 text-right border-b">Coût total ($)</th>
                            </tr>
                          </thead>
                          <tbody>
                            {item.details.map((detail, detailIndex) => (
                              <tr key={`${item.name}-${detail.region}-${detailIndex}`} className="hover:bg-gray-50">
                                <td className="py-2 px-3 border-b">
                                  {regionFriendlyNames[detail.region] || detail.region}
                                </td>
                                {item.name.includes('Public') ? (
                                  <>
                                    <td className="py-2 px-3 text-right border-b">{detail.volume}</td>
                                    <td className="py-2 px-3 text-right border-b">${Math.round(detail.monthlyCost).toLocaleString()}</td>
                                  </>
                                ) : (
                                  <>
                                    <td className="py-2 px-3 text-right border-b">{detail.bandwidth}</td>
                                    <td className="py-2 px-3 text-right border-b">${Math.round(detail.monthlyCost).toLocaleString()}</td>
                                    <td className="py-2 px-3 text-right border-b">${Math.round(detail.setupFee).toLocaleString()}</td>
                                  </>
                                )}
                                <td className="py-2 px-3 text-right border-b">${Math.round(detail.totalCost).toLocaleString()}</td>
                              </tr>
                            ))}
                          </tbody>
                          <tfoot>
                            <tr className="bg-gray-100 font-medium">
                              <td className="py-2 px-3 border-t">Total</td>
                              {item.name.includes('Public') ? (
                                <>
                                  <td className="py-2 px-3 text-right border-t">
                                    {item.details.reduce((sum, detail) => sum + detail.volume, 0)}
                                  </td>
                                  <td className="py-2 px-3 text-right border-t">
                                    ${item.monthlyCost.toLocaleString()}
                                  </td>
                                </>
                              ) : (
                                <>
                                  <td className="py-2 px-3 text-right border-t">
                                    {item.details.reduce((sum, detail) => sum + detail.bandwidth, 0)}
                                  </td>
                                  <td className="py-2 px-3 text-right border-t">
                                    ${item.monthlyCost.toLocaleString()}
                                  </td>
                                  <td className="py-2 px-3 text-right border-t">
                                    ${item.setupCost.toLocaleString()}
                                  </td>
                                </>
                              )}
                              <td className="py-2 px-3 text-right border-t">${item.cost.toLocaleString()}</td>
                            </tr>
                          </tfoot>
                        </table>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
        
        {orangeData && orangeData.details.length > 0 && (
          <div className="p-4 bg-gray-50 border rounded-md">
            <h4 className="font-medium mb-3">Répartition des coûts Orange Business par région</h4>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <RechartsPieChart>
                    <Pie
                      data={distributionData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={80}
                      fill="#f16e00"
                      dataKey="value"
                    >
                      {distributionData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={`hsl(${index * 30}, 70%, 60%)`} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Coût total']} />
                    <Legend />
                  </RechartsPieChart>
                </ResponsiveContainer>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full border border-gray-200">
                  <thead>
                    <tr className="bg-gray-50">
                      <th className="py-2 px-3 text-left border-b">Région</th>
                      <th className="py-2 px-3 text-right border-b">Bande passante (Mbps)</th>
                      <th className="py-2 px-3 text-right border-b">Coût mensuel ($)</th>
                      <th className="py-2 px-3 text-right border-b">Coût total ($)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {orangeData.details.map((detail, index) => (
                      <tr key={`orange-detail-${index}`} className="hover:bg-gray-50">
                        <td className="py-2 px-3 border-b">
                          {regionFriendlyNames[detail.region] || detail.region}
                        </td>
                        <td className="py-2 px-3 text-right border-b">{detail.bandwidth}</td>
                        <td className="py-2 px-3 text-right border-b">${Math.round(detail.monthlyCost).toLocaleString()}</td>
                        <td className="py-2 px-3 text-right border-b">${Math.round(detail.totalCost).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr className="bg-gray-100 font-medium">
                      <td className="py-2 px-3 border-t">Total</td>
                      <td className="py-2 px-3 text-right border-t">
                        {orangeData.details.reduce((sum, detail) => sum + detail.bandwidth, 0)}
                      </td>
                      <td className="py-2 px-3 text-right border-t">
                        ${orangeData.monthlyCost.toLocaleString()}
                      </td>
                      <td className="py-2 px-3 text-right border-t">
                        ${orangeData.cost.toLocaleString()}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {connectivityType === 'both' && (
          <div className="p-4 bg-gray-50 border rounded-md">
            <h4 className="font-medium mb-3">Comparaison des coûts selon le volume</h4>
            
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={generateComparisonChartData()}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="volume" 
                    label={{ value: 'Volume mensuel (TB)', position: 'insideBottom', offset: -5 }}
                  />
                  <YAxis 
                    label={{ value: 'Coût total ($)', angle: -90, position: 'insideLeft' }}
                    width={80}
                  />
                  <Tooltip formatter={(value) => [`$${value.toLocaleString()}`, 'Coût total']} />
                  <Legend />
                  
                  {selectedCSPs.includes('aws') && (
                    <>
                      <Line type="monotone" dataKey="aws_public" name="AWS Public" stroke="#ff9900" />
                      <Line type="monotone" dataKey="aws_private" name="AWS Private" stroke="#ff9900" strokeDasharray="5 5" />
                    </>
                  )}
                  
                  {selectedCSPs.includes('azure') && (
                    <>
                      <Line type="monotone" dataKey="azure_public" name="Azure Public" stroke="#0078d4" />
                      <Line type="monotone" dataKey="azure_private" name="Azure Private" stroke="#0078d4" strokeDasharray="5 5" />
                    </>
                  )}
                  
                  <Line type="monotone" dataKey="orange" name="Orange Business" stroke="#f16e00" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
            
            <div className="mt-4 text-sm">
              <p>Le graphique ci-dessus montre l'évolution des coûts en fonction du volume de données. À partir d'un certain seuil, la connectivité privée devient généralement plus avantageuse que la connectivité publique.</p>
            </div>
          </div>
        )}
        
        <div className="flex justify-between">
          <button
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 flex items-center"
            onClick={() => setActiveTab('configuration')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            Retour à la configuration
          </button>
          
          <button
            className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
            onClick={() => window.print()}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1 inline" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 4v3H4a2 2 0 00-2 2v3a2 2 0 002 2h1v2a2 2 0 002 2h6a2 2 0 002-2v-2h1a2 2 0 002-2V9a2 2 0 00-2-2h-1V4a2 2 0 00-2-2H7a2 2 0 00-2 2zm8 0H7v3h6V4zm0 8H7v4h6v-4z" clipRule="evenodd" />
            </svg>
            Imprimer / Exporter PDF
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full p-4 bg-gray-100">
      <div className="mb-4 bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-orange-500 to-orange-600 text-white p-4">
          <h2 className="text-xl font-bold">Calculateur TCO pour Connectivité Cloud</h2>
        </div>
        <div className="p-4">
          <div className="w-full">
            <div className="flex border-b mb-4">
              <button 
                className={`flex items-center gap-2 px-4 py-2 ${activeTab === 'configuration' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab('configuration')}
              >
                <CloudCog className="w-4 h-4" />
                Configuration
              </button>
              <button 
                className={`flex items-center gap-2 px-4 py-2 ${activeTab === 'results' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab('results')}
                disabled={!calculationComplete}
              >
                <BarChart2 className="w-4 h-4" />
                Résultats
              </button>
              <button 
                className={`flex items-center gap-2 px-4 py-2 ${activeTab === 'settings' ? 'border-b-2 border-orange-500 text-orange-500' : 'text-gray-500'}`}
                onClick={() => setActiveTab('settings')}
              >
                <Settings className="w-4 h-4" />
                Paramètres avancés
              </button>
            </div>
            
            {activeTab === 'configuration' && (
              <div className="space-y-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Paramètres généraux</h3>
                  
                  <div className="p-4 border border-gray-200 rounded-md bg-gray-50">
                    <div className="mb-4">
                      <label className="text-sm font-medium mb-2 block">Mode de saisie</label>
                      <div className="flex rounded-md overflow-hidden border border-gray-300">
                        <button 
                          className={`flex-1 py-2 px-3 ${inputMode === 'volume' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'}`}
                          onClick={() => setInputMode('volume')}
                        >
                          Volume de données
                        </button>
                        <button 
                          className={`flex-1 py-2 px-3 ${inputMode === 'bandwidth' ? 'bg-orange-500 text-white' : 'bg-white text-gray-700'}`}
                          onClick={() => setInputMode('bandwidth')}
                        >
                          Bande passante
                        </button>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Durée (mois)</label>
                        <div className="flex items-center">
                          <input
                            type="number"
                            className="w-full p-2 border rounded-l-md"
                            value={duration}
                            onChange={(e) => setDuration(parseInt(e.target.value) || 0)}
                            min="1"
                            max="60"
                          />
                          <div className="bg-gray-200 px-3 py-2 rounded-r-md">mois</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <label className="text-sm font-medium">Facteur de burst</label>
                      <div className="flex items-center">
                        <input
                          type="range"
                          className="w-full"
                          min="1"
                          max="5"
                          step="0.1"
                          value={burstFactor}
                          onChange={(e) => setBurstFactor(parseFloat(e.target.value))}
                        />
                        <div className="ml-2 w-12 text-center">{burstFactor}x</div>
                      </div>
                      <div className="text-sm text-gray-500">
                        Facteur multiplicateur pour tenir compte des pics d'utilisation
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Type de connectivité</label>
                    <select 
                      className="w-full p-2 border rounded-md"
                      value={connectivityType} 
                      onChange={(e) => setConnectivityType(e.target.value)}
                    >
                      <option value="public">Connectivité publique uniquement</option>
                      <option value="private">Connectivité privée uniquement</option>
                      <option value="both">Les deux (comparaison)</option>
                    </select>
                  </div>
                  
                  <h3 className="text-lg font-medium mt-4">Cloud Service Providers</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* AWS Configuration */}
                    <div className={`border-2 rounded-lg overflow-hidden ${selectedCSPs.includes('aws') ? 'border-orange-500' : 'border-gray-200'}`}>
                      <div className="p-4 pb-2 border-b">
                        <div className="flex justify-between items-center">
                          <h3 className="text-md font-medium flex items-center gap-2">
                            <CloudCog className="w-5 h-5" />
                            AWS
                          </h3>
                          <button 
                            className={`px-3 py-1 text-sm rounded-md ${selectedCSPs.includes('aws') ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                            onClick={() => toggleCSP('aws')}
                          >
                            {selectedCSPs.includes('aws') ? "Activé" : "Désactivé"}
                          </button>
                        </div>
                      </div>
                      
                      <div className={`p-4 ${selectedCSPs.includes('aws') ? "" : "opacity-50"}`}>
                        <div className="space-y-3">
                          <label className="text-sm font-medium">Régions</label>
                          {renderCSPRegions('aws')}
                        </div>
                      </div>
                    </div>
                    
                    {/* Azure Configuration */}
                    <div className={`border-2 rounded-lg overflow-hidden ${selectedCSPs.includes('azure') ? 'border-orange-500' : 'border-gray-200'}`}>
                      <div className="p-4 pb-2 border-b">
                        <div className="flex justify-between items-center">
                          <h3 className="text-md font-medium flex items-center gap-2">
                            <CloudCog className="w-5 h-5" />
                            Azure
                          </h3>
                          <button 
                            className={`px-3 py-1 text-sm rounded-md ${selectedCSPs.includes('azure') ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                            onClick={() => toggleCSP('azure')}
                          >
                            {selectedCSPs.includes('azure') ? "Activé" : "Désactivé"}
                          </button>
                        </div>
                      </div>
                      
                      <div className={`p-4 ${selectedCSPs.includes('azure') ? "" : "opacity-50"}`}>
                        <div className="space-y-3">
                          <label className="text-sm font-medium">Régions</label>
                          {renderCSPRegions('azure')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="flex justify-end">
                  <button
                    className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 flex items-center"
                    onClick={handleCalculate}
                  >
                    Calculer le TCO
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
            
            {activeTab === 'results' && renderResults()}
            
            {activeTab === 'settings' && renderOrangePricingEditor()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudConnectivityTCO;
