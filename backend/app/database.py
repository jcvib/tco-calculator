import sqlite3
from sqlite3 import Connection
from contextlib import contextmanager
import os

DATABASE_URL = os.environ.get("DATABASE_URL", "database.sqlite")

def create_tables():
    """Crée les tables nécessaires à l'application si elles n'existent pas"""
    with get_connection() as conn:
        cursor = conn.cursor()
        
        # Table des tarifs Orange Business
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS orange_pricing (
            region TEXT PRIMARY KEY,
            base_price REAL NOT NULL,
            hourly_rate REAL NOT NULL,
            setup_fee REAL NOT NULL,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        """)
        
        # Table des scénarios
        cursor.execute("""
        CREATE TABLE IF NOT EXISTS scenarios (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            description TEXT,
            configuration JSON NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
        """)
        
        conn.commit()

@contextmanager
def get_connection() -> Connection:
    """Retourne une connexion à la base de données SQLite"""
    conn = sqlite3.connect(DATABASE_URL)
    conn.row_factory = sqlite3.Row  # Pour accéder aux colonnes par nom
    
    # Activer les clés étrangères
    conn.execute("PRAGMA foreign_keys = ON")
    
    try:
        yield conn
    finally:
        conn.close()

# Initialiser la base de données au démarrage
create_tables()
