# Notes App

**Live Link:** (https://notes-app-frontend-sooty.vercel.app/)

A feature-rich Notes Taking App built using **React.js** for the frontend and **Node.js** for the backend. This app allows users to create, manage, and organize their notes efficiently.

---

## Features

- **Text Notes**: Create and save text-based notes.
- **Audio Notes**: Record and save voice notes.
- **Favorites**: Mark important notes as favorites for easy access.
- **Edit & Delete**: Modify or remove notes anytime.
- **Upload Pictures**: Attach images to notes for better context.
- **Search & Filter**: Quickly find notes using keywords or filters.
- **User Authentication**: Secure login & signup functionality.
- **Cloud Storage**: Notes and attachments are stored securely.

---

## Tech Stack

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Token)
- **File Storage**: Cloudinary / Local storage

---

## Installation

### Prerequisites

Ensure you have the following installed:
- **Node.js**
- **MongoDB** (Local or MongoDB Atlas)
- **Cloudinary account** (if using cloud storage for images)

### Steps to Set Up the Project

#### 1. Clone the repository
```sh
git clone [https://github.com/yourusername/notes-app.git](https://github.com/Arpita-oss/Notes_App_Frontend
cd notes-app
```

#### 2. Install dependencies
##### Frontend
```sh
cd frontend
npm install
```
##### Backend
```sh
cd backend
npm install
```

#### 3. Set up environment variables
Create a `.env` file in the **backend** folder and add the following:
```sh
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

#### 4. Run the application
##### Start Backend Server
```sh
cd backend
npm start
```
##### Start Frontend
```sh
cd frontend
npm start
```

#### 5. Open in Browser
The application will be running at:
```
http://localhost:3000
```




