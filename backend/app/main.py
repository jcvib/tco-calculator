from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import os

app = FastAPI(
    title="TCO Calculator API",
    description="API pour le calculateur de TCO de connectivité cloud",
    version="0.1.0"
)

# Configuration CORS pour permettre au frontend d'accéder à l'API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # À remplacer par les origines spécifiques en production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "TCO Calculator API is running"}
