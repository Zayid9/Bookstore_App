# Bookstore App

A full-stack bookstore application with user authentication and book management features.

## Features

- User Authentication (Register/Login)
- Profile Management with Avatar Support
- Book Management (Coming Soon)
- Modern UI/UX Design

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Frontend
- React Native (Coming Soon)

## Getting Started

1. Clone the repository
```bash
git clone [your-repo-url]
```

2. Install dependencies
```bash
# Backend
cd Backend
npm install

# Frontend (Coming Soon)
cd ../Frontend
npm install
```

3. Set up environment variables
Create a `.env` file in the Backend directory with:
```
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Run the development server
```bash
# Backend
npm run dev

# Frontend (Coming Soon)
npm start
```

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
- POST `/api/auth/login` - Login user

## Contributing
Feel free to submit issues and pull requests.

## License
MIT 