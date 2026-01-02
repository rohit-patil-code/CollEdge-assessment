# Quick Start Guide

## 🚀 Get Running in 5 Minutes

### Step 1: Backend Setup (Terminal 1)

```bash
cd backend
npm install
```

Create `.env` file:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/contactdb
```

Start server:
```bash
npm start
```

✅ You should see: "Connected to MongoDB" and "Server is running on port 5000"

### Step 2: Frontend Setup (Terminal 2)

```bash
cd frontend
npm install
npm start
```

✅ Browser should open at `http://localhost:3000`

### Step 3: Test the App

1. Fill out the contact form
2. Click "Add Contact"
3. See your contact appear in the list below
4. Try deleting a contact

## 🐛 Troubleshooting

**Backend won't start?**
- Make sure MongoDB is running (if using local)
- Check if port 5000 is available
- Verify `.env` file exists with correct MongoDB URI

**Frontend can't connect to backend?**
- Make sure backend is running on port 5000
- Check browser console for errors
- Verify CORS is enabled (it is by default)

**MongoDB Connection Error?**
- For local: Start MongoDB service
- For Atlas: Check connection string and network access

## 📚 Full Documentation

See `README.md` for complete setup and deployment instructions.

