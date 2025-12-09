# Contact Manager – Simple Full-Stack CRUD App

Simple and clean Contact Manager built with:

- **Frontend**: React (Vite or Create React App)
- **Backend**: Python + Flask + Flask-CORS
- **Database**: SQLite (or any you configured in Flask)

### To run the App

#### 1. Start the Backend (Flask)

```bash
# Open a terminal and go to your backend folder
cd backend

# Create virtual environment (recommended)
python -m venv venv
source venv/bin/activate    # On Windows: venv\Scripts\activate

# Install dependencies
pip install flask flask-cors flask-SQLAlchemy

# Run the Flask server
python main.py
```

You should see:
>>> Running on http://127.0.0.1:5000
Keep this terminal running.

#### 2. Start the Frontend (React)

Open a new terminal and go to your React project folder:

```bash
cd frontend   # or just cd to your React app folder

# Install dependencies (only first time)
npm install

# Start the development server
npm run dev
```
