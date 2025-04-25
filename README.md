# TCO Calculator for Cloud Connectivity

A tool for calculating the Total Cost of Ownership (TCO) for cloud connectivity solutions, comparing public/private connectivity options across AWS, Azure, and Orange Business services.

## Project Structure

- **backend/**: FastAPI backend providing pricing data and scenario management
- **frontend/**: React frontend with TCO calculator UI

## Getting Started

### Backend

```bash
# Navigate to the backend directory
cd backend

# Create and activate a virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Start the development server
uvicorn app.main:app --reload --host 0.0.0.0 --port 8000
Frontend
bash# Navigate to the frontend directory
cd frontend

# Install dependencies
npm install

# Start the development server
npm run dev
API Documentation
When the backend is running, you can access the Swagger UI documentation at:
http://localhost:8000/docs
License
[Your license information]
