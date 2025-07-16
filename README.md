Vehicle Display App - Secure Node.js MVC Project
=================================================

Overview
--------
This project is a secure, single-page vehicle display system using Node.js and MVC architecture.
It dynamically displays vehicle entry data (e.g., number plate, status, location) triggered via an API.

Features
--------
✅ Dynamic vehicle display using data from API
✅ JWT-based API authentication
✅ CORS restriction
✅ IP whitelisting
✅ Helmet secure HTTP headers
✅ Rate limiting (anti-abuse)
✅ Cookie-based PIN login for display screen
✅ Real-time UI updates (via polling)
✅ Idle timeout fallback to welcome screen
✅ "Approved" (Green) or "Disapproved" (Red) status display
✅ Token generation API

Directory Structure
-------------------
/vehicle-display-app
├── app.js
├── .env
├── package.json
├── middleware/
│   └── auth.js
├── routes/
│   └── api.js
├── public/
│   ├── css/style.css
│   └── js/main.js
├── views/
│   ├── index.ejs
│   └── login.ejs

Environment Configuration (.env)
--------------------------------
JWT_SECRET=your_secure_jwt_secret_here
SCREEN_PIN=1234
ALLOWED_ORIGIN=http://localhost:3000
ALLOWED_IPS=127.0.0.1,::1
AUTH_USER=admin
AUTH_PASS=admin123

Installation
------------
1. Extract the zip:
   $ unzip vehicle-display-app-secure.zip
   $ cd vehicle-display-app

2. Install dependencies:
   $ npm install

3. Start the server:
   $ node app.js

4. Open browser:
   http://localhost:3000 (enter PIN: 1234)

API Endpoints
-------------
1. GET /api/display
   - Returns the current vehicle display data

2. POST /api/update-display
   - Secured endpoint to update vehicle data on screen
   - Requires Authorization header with Bearer <token>
   - Payload example:
     {
       "vehicleNumber": "CH 04 K 5598",
       "entryType": "Employee",
       "laneNumber": "02",
       "gateNumber": "02",
       "location": "Zapbuild Campus",
       "status": "Approved"
     }

3. POST /api/reset
   - Secured endpoint to reset screen to default

4. POST /api/generate-token
   - Returns a JWT token for authorized API access
   - Payload: { "username": "admin", "password": "admin123" }

Security Best Practices
-----------------------
- Use HTTPS in production
- Replace default secrets in .env
- Host behind a firewall or reverse proxy
- Securely generate and store JWT secrets
- Monitor access logs for abuse

Author
------
Created by Abhishek Sharma
July 2025