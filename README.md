# Contact Management Web App - MERN Stack

A full-stack contact management application built with MongoDB, Express.js, React.js, and Node.js. This project demonstrates a clean, interview-ready implementation of a CRUD application.

## Features

- ✅ Add new contacts with name, email, phone, and message
- ✅ View all contacts sorted by latest first
- ✅ Delete contacts
- ✅ Client-side form validation
- ✅ Responsive design
- ✅ Real-time updates without page reload

## Tech Stack

- **Frontend**: React.js (Functional Components, Hooks)
- **Backend**: Node.js + Express.js
- **Database**: MongoDB (Mongoose)
- **Styling**: CSS (Minimal, Clean Design)

## Project Structure

```
contact-management-app/
├── backend/
│   ├── models/
│   │   └── Contact.js          # Mongoose schema
│   ├── routes/
│   │   └── contactRoutes.js    # API routes
│   ├── server.js               # Express server
│   ├── package.json
│   └── .env                    # Environment variables (create this)
├── frontend/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── ContactForm.js
│   │   │   ├── ContactForm.css
│   │   │   ├── ContactList.js
│   │   │   └── ContactList.css
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   └── index.css
│   └── package.json
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (Local installation or MongoDB Atlas account)
- npm or yarn

## Local Setup Instructions

### 1. Clone or Download the Project

```bash
# Navigate to the project directory
cd contact-management-app
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Create .env file
# Copy the following and update with your MongoDB URI:
```

Create a `.env` file in the `backend` directory:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/contactdb
```

**For MongoDB Atlas (Cloud):**
```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/contactdb
```

```bash
# Start the backend server
npm start

# Or for development with auto-reload:
npm run dev
```

The backend server will run on `http://localhost:5000`

### 3. Frontend Setup

Open a new terminal window:

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Start the React app
npm start
```

The frontend will run on `http://localhost:3000` and automatically open in your browser.

### 4. Verify Setup

1. Backend should show: "Connected to MongoDB" and "Server is running on port 5000"
2. Frontend should open in browser at `http://localhost:3000`
3. Try adding a contact to verify everything works

## API Endpoints

### POST /api/contacts
Create a new contact

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "Hello"
}
```

**Response:** 201 Created
```json
{
  "_id": "...",
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "1234567890",
  "message": "Hello",
  "createdAt": "2024-01-01T00:00:00.000Z",
  "updatedAt": "2024-01-01T00:00:00.000Z"
}
```

### GET /api/contacts
Get all contacts (sorted by latest first)

**Response:** 200 OK
```json
[
  {
    "_id": "...",
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "1234567890",
    "message": "Hello",
    "createdAt": "2024-01-01T00:00:00.000Z",
    "updatedAt": "2024-01-01T00:00:00.000Z"
  }
]
```

### DELETE /api/contacts/:id
Delete a contact by ID

**Response:** 200 OK
```json
{
  "message": "Contact deleted successfully",
  "contact": { ... }
}
```

## Deployment Instructions

### Backend Deployment (Render/Railway)

#### Option 1: Render

1. **Create Account**: Sign up at [render.com](https://render.com)

2. **Create New Web Service**:
   - Click "New +" → "Web Service"
   - Connect your GitHub repository (or use manual deploy)
   - Select the `backend` folder as root directory

3. **Configure Settings**:
   - **Name**: contact-api (or any name)
   - **Environment**: Node
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Plan**: Free tier is fine

4. **Environment Variables**:
   - Add `MONGODB_URI` with your MongoDB connection string
   - Add `PORT` (Render provides this automatically, but you can set it)

5. **Deploy**: Click "Create Web Service"

6. **Get Backend URL**: After deployment, you'll get a URL like `https://contact-api.onrender.com`

#### Option 2: Railway

1. **Create Account**: Sign up at [railway.app](https://railway.app)

2. **New Project**:
   - Click "New Project"
   - Select "Deploy from GitHub repo" or "Empty Project"

3. **Add Service**:
   - Add a new service
   - Select your backend folder
   - Railway auto-detects Node.js

4. **Environment Variables**:
   - Add `MONGODB_URI` in the Variables tab
   - `PORT` is auto-provided

5. **Deploy**: Railway auto-deploys on push

### Frontend Deployment (Vercel/Netlify)

#### Option 1: Vercel

1. **Create Account**: Sign up at [vercel.com](https://vercel.com)

2. **Import Project**:
   - Click "Add New" → "Project"
   - Import your GitHub repository
   - Select the `frontend` folder as root directory

3. **Configure Build Settings**:
   - **Framework Preset**: Create React App
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

4. **Environment Variables**:
   - Add `REACT_APP_API_URL` with your deployed backend URL
   - Example: `https://contact-api.onrender.com`

5. **Deploy**: Click "Deploy"

#### Option 2: Netlify

1. **Create Account**: Sign up at [netlify.com](https://netlify.com)

2. **New Site from Git**:
   - Click "Add new site" → "Import an existing project"
   - Connect GitHub and select repository
   - Select the `frontend` folder

3. **Build Settings**:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/build`

4. **Environment Variables**:
   - Go to Site settings → Environment variables
   - Add `REACT_APP_API_URL` with your backend URL

5. **Deploy**: Click "Deploy site"

### Important Notes for Deployment

1. **Update Frontend API URL**:
   - After deploying backend, update `REACT_APP_API_URL` in frontend environment variables
   - Or update the API_URL in `ContactForm.js` and `ContactList.js` if not using env vars

2. **CORS Configuration**:
   - The backend already has CORS enabled for all origins
   - For production, you may want to restrict CORS to your frontend domain

3. **MongoDB Atlas**:
   - Use MongoDB Atlas (free tier) for cloud database
   - Whitelist all IPs (0.0.0.0/0) or add your server IPs
   - Get connection string from Atlas dashboard

4. **Environment Variables**:
   - Never commit `.env` files to Git
   - Always set environment variables in your hosting platform

## Troubleshooting

### Backend Issues

- **MongoDB Connection Error**: 
  - Check if MongoDB is running (local) or connection string is correct (Atlas)
  - Verify network access in MongoDB Atlas

- **Port Already in Use**:
  - Change PORT in `.env` file
  - Or kill the process using port 5000

### Frontend Issues

- **API Connection Error**:
  - Check if backend is running
  - Verify API URL in environment variables
  - Check browser console for CORS errors

- **Build Errors**:
  - Delete `node_modules` and `package-lock.json`
  - Run `npm install` again

## Development Tips

- Use `npm run dev` in backend for auto-reload during development
- React app auto-reloads on file changes
- Check browser console and terminal for errors
- Use Postman or Thunder Client to test API endpoints

## License

This project is created for educational purposes and internship assignments.

## Author

Created as a MERN stack demonstration project.

