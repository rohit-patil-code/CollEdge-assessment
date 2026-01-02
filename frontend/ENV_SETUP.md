# Frontend Environment Variables

## Is .env File Required?

**For Local Development: NO** ✅
- The app automatically uses `http://localhost:5000` by default
- No `.env` file needed when running locally

**For Production Deployment: YES** ✅
- You need to set your backend API URL
- Create `.env` file OR set environment variables in your hosting platform

## For Local Development:

**No action needed!** The app will automatically connect to `http://localhost:5000`

## For Production Deployment:

### Option 1: Create .env file (for local builds)

Create a `.env` file in the `frontend` directory:

```env
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

**Example:**
```env
REACT_APP_API_URL=https://contact-api.onrender.com
```

### Option 2: Set in Hosting Platform (Recommended)

**Vercel:**
1. Go to Project Settings → Environment Variables
2. Add: `REACT_APP_API_URL` = `https://your-backend-url.onrender.com`

**Netlify:**
1. Go to Site Settings → Environment Variables
2. Add: `REACT_APP_API_URL` = `https://your-backend-url.onrender.com`

## Important Notes:

- ✅ React environment variables **must start with `REACT_APP_`**
- ✅ Rebuild the app after changing environment variables (`npm run build`)
- ✅ The API URL is used in `ContactForm.js` and `ContactList.js`
- ✅ For local development, the default `http://localhost:5000` works automatically
- ✅ Never commit `.env` file to Git (already in `.gitignore`)

## Quick Summary:

| Scenario | .env File Needed? | What to Set |
|----------|-------------------|-------------|
| Local Development | ❌ No | Uses `http://localhost:5000` automatically |
| Production Build | ✅ Yes | `REACT_APP_API_URL=https://your-backend-url` |
| Vercel/Netlify | ❌ No (use platform env vars) | Set in platform settings |

