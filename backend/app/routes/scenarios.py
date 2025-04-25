# backend/app/routes/scenarios.py
from fastapi import APIRouter, HTTPException, Depends
from typing import List, Dict, Any
from app.models.scenarios import Scenario, ScenarioCreate, ScenarioUpdate
from app.services import pricing_service

router = APIRouter()

@router.post("/", response_model=Scenario)
async def create_scenario(scenario: ScenarioCreate):
    """Crée un nouveau scénario de calcul TCO"""
    try:
        return await pricing_service.save_scenario(scenario)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur création scénario: {str(e)}")

@router.get("/", response_model=List[Scenario])
async def get_scenarios():
    """Récupère tous les scénarios enregistrés"""
    try:
        return await pricing_service.get_all_scenarios()
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur récupération scénarios: {str(e)}")

@router.get("/{scenario_id}", response_model=Scenario)
async def get_scenario(scenario_id: int):
    """Récupère un scénario spécifique par ID"""
    try:
        scenario = await pricing_service.get_scenario(scenario_id)
        if not scenario:
            raise HTTPException(status_code=404, detail="Scénario non trouvé")
        return scenario
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur récupération scénario: {str(e)}")

@router.put("/{scenario_id}", response_model=Scenario)
async def update_scenario(scenario_id: int, scenario: ScenarioUpdate):
    """Met à jour un scénario existant"""
    try:
        updated_scenario = await pricing_service.update_scenario(scenario_id, scenario)
        if not updated_scenario:
            raise HTTPException(status_code=404, detail="Scénario non trouvé")
        return updated_scenario
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur mise à jour scénario: {str(e)}")

@router.delete("/{scenario_id}", response_model=Dict[str, bool])
async def delete_scenario(scenario_id: int):
    """Supprime un scénario existant"""
    try:
        success = await pricing_service.delete_scenario(scenario_id)
        if not success:
            raise HTTPException(status_code=404, detail="Scénario non trouvé")
        return {"success": True}
    except HTTPException:
        raise
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Erreur suppression scénario: {str(e)}")
