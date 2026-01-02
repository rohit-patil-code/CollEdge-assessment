# MongoDB Atlas Setup Guide

## Fix: IP Whitelist Error

If you're getting the error: **"Could not connect to any servers in your MongoDB Atlas cluster"**, follow these steps:

### Step 1: Whitelist Your IP Address

1. **Log in to MongoDB Atlas**: Go to [https://cloud.mongodb.com](https://cloud.mongodb.com)

2. **Navigate to Network Access**:
   - Click on your project/cluster
   - In the left sidebar, click **"Network Access"** (under Security)

3. **Add IP Address**:
   - Click **"Add IP Address"** button
   - You have two options:

   **Option A: Add Your Current IP (Recommended for Production)**
   - Click **"Add Current IP Address"** button
   - This automatically adds your current IP
   - Click **"Confirm"**

   **Option B: Allow All IPs (For Development Only)**
   - Click **"Allow Access from Anywhere"**
   - Enter `0.0.0.0/0` in the IP Address field
   - Click **"Confirm"**
   - ⚠️ **Warning**: This allows access from anywhere. Only use for development!

4. **Wait for Changes**: It may take 1-2 minutes for the changes to take effect

### Step 2: Verify Database User

1. Go to **"Database Access"** in the left sidebar
2. Make sure you have a database user created
3. If not, click **"Add New Database User"**:
   - Choose **"Password"** authentication
   - Enter username and password
   - Save the password securely!
   - Set user privileges to **"Read and write to any database"** (for development)

### Step 3: Get Connection String

1. Go to **"Database"** in the left sidebar
2. Click **"Connect"** on your cluster
3. Choose **"Connect your application"**
4. Select **"Node.js"** and version **"5.5 or later"**
5. Copy the connection string
   - It looks like: `mongodb+srv://<username>:<password>@cluster.mongodb.net/`
6. Replace `<username>` and `<password>` with your actual credentials
7. Add database name at the end: `/contactdb`

### Step 4: Update .env File

Your `.env` file should look like:

```env
PORT=5000
MONGODB_URI=mongodb+srv://yourusername:yourpassword@cluster.mongodb.net/contactdb
```

**Important**: 
- Replace `yourusername` with your MongoDB Atlas username
- Replace `yourpassword` with your MongoDB Atlas password
- Replace `cluster.mongodb.net` with your actual cluster URL
- Make sure there are no spaces or special characters that need encoding

### Step 5: Test Connection

```bash
npm start
```

You should see: **"Connected to MongoDB"**

## Alternative: Use Local MongoDB

If you prefer to use local MongoDB instead:

1. **Install MongoDB locally**: Download from [mongodb.com/download](https://www.mongodb.com/try/download/community)

2. **Start MongoDB service**:
   - Windows: MongoDB should start automatically as a service
   - Or run: `mongod` in a terminal

3. **Update .env file**:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/contactdb
   ```

4. **Restart your server**:
   ```bash
   npm start
   ```

## Common Issues

### Issue: "Authentication failed"
- **Solution**: Check your username and password in the connection string
- Make sure special characters in password are URL-encoded (e.g., `@` becomes `%40`)

### Issue: "IP still not whitelisted after adding"
- **Solution**: Wait 2-3 minutes for changes to propagate
- Check if you're behind a VPN (your IP might have changed)
- Try using `0.0.0.0/0` for development

### Issue: "Database name not found"
- **Solution**: MongoDB Atlas creates databases automatically
- Just use the database name in your connection string (e.g., `/contactdb`)
- The database will be created when you first insert data

## Still Having Issues?

1. Double-check your connection string format
2. Verify your IP is whitelisted in Network Access
3. Check that your database user has proper permissions
4. Try the local MongoDB option as a fallback

