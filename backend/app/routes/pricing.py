# backend/app/routes/pricing.py
from fastapi import APIRouter, HTTPException, Depends
from typing import List, Dict, Any
from app.services import aws_service, azure_service, pricing_service
from app.models.pricing import CSPPricing, OrangePricing

router = APIRouter()

@router.get("/aws", response_model=Dict[str, Any])
async def get_aws_pricing():
    """Récupère les tarifs AWS actuels"""
    try:
        return await aws_service.get_pricing()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur récupération tarifs AWS: {str(e)}")

@router.get("/azure", response_model=Dict[str, Any])
async def get_azure_pricing():
    """Récupère les tarifs Azure actuels"""
    try:
        return await azure_service.get_pricing()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur récupération tarifs Azure: {str(e)}")

@router.get("/orange", response_model=Dict[str, OrangePricing])
async def get_orange_pricing():
    """Récupère les tarifs Orange Business actuels"""
    try:
        return await pricing_service.get_orange_pricing()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur récupération tarifs Orange: {str(e)}")

@router.post("/orange", response_model=Dict[str, OrangePricing])
async def update_orange_pricing(pricing: Dict[str, OrangePricing]):
    """Met à jour les tarifs Orange Business"""
    try:
        return await pricing_service.update_orange_pricing(pricing)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur mise à jour tarifs Orange: {str(e)}")
