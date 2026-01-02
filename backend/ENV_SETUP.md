# Environment Variables Setup

Create a `.env` file in the `backend` directory with the following content:

## For Local MongoDB:

```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/contactdb
```

**Note**: Make sure MongoDB is installed and running locally.

## For MongoDB Atlas (Cloud):

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Create a database user
4. **IMPORTANT**: Whitelist your IP address (see MONGODB_ATLAS_SETUP.md for detailed steps)
5. Get your connection string from "Connect" → "Connect your application"
6. Replace `<username>`, `<password>`, and add database name

```env
PORT=5000
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/contactdb
```

## ⚠️ Troubleshooting IP Whitelist Error

If you see "Could not connect to any servers" error:
- **See detailed guide**: `MONGODB_ATLAS_SETUP.md`
- **Quick fix**: Go to MongoDB Atlas → Network Access → Add IP Address → Add Current IP

## Important Notes:

- Never commit the `.env` file to Git
- The `.env` file is already in `.gitignore`
- Make sure MongoDB is running if using local installation
- Special characters in passwords may need URL encoding (e.g., `@` → `%40`)

