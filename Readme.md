# URL Shortener - Backend

This is the backend service for the URL Shortener project.  
It is built with **Node.js, Express, and MongoDB (Atlas)** and provides the API endpoints for shortening and redirecting URLs.

---

## 🚀 Features
- Shorten long URLs into custom short links
- Redirect to original URLs
- MongoDB Atlas as database
- CORS enabled for frontend integration
- Deployed on [Render](https://render.com/)

---

## 🛠️ Tech Stack
- Node.js
- Express.js
- MongoDB + Mongoose
- Render (Deployment)

---

## ⚙️ Setup (Local Development)

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/url-shortener-backend.git
   cd url-shortener-backend

2. Install dependencies:
```
npm install
```

3. Create a .env file in the root of backend/:
```
PORT=5000
MONGO_URI=your_mongodb_atlas_connection_string
BASE_URL=http://localhost:5000
```

4. Run the server:
```
npm start
```

### The backend will run on: http://localhost:5000

### 🌍 API Endpoints

Shorten URL
```
POST /api/shorten
```

### Body (JSON):
```
{
  "longUrl": "https://example.com"
}

```
#### Response:
```
{
  "shortUrl": "http://localhost:5000/abc123",
  "longUrl": "https://example.com"
}
```
### Redirect
```
GET /:code
```

Redirects to original URL.
🚀 Deployment

# Backend deployed on Render:

👉 🌐 https://url-shortener-backend-sw4a.onrender.com