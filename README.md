# Bookstore App 📚

A full-stack bookstore application with user authentication and book management features.

## Features

- User Authentication (Register/Login) ✅
- Profile Management with Avatar Support (Coming Soon)
- Book Management (Coming Soon)
- Modern UI/UX Design with React Native ✅

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Mobile App
- React Native with Expo
- Zustand for State Management
- React Navigation
- Expo Router for File-based Routing

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

# Mobile App
cd ../Mobile
npm install
```

3. Set up environment variables

Backend: Create a `.env` file in the Backend directory with:
```
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
```

4. Run the development servers

```bash
# Backend
cd Backend
npm run dev

# Mobile App
cd ../Mobile
npx expo start
```

Note: When running the mobile app, make sure to update the API endpoint in `Mobile/store/authStore.js` with your local IP address.

## API Endpoints

### Authentication
- POST `/api/auth/register` - Register a new user
  - Body: `{ username, email, password }`
- POST `/api/auth/login` - Login user (Coming Soon)

## Mobile App Structure

```
Mobile/
├── app/                  # Main application code
│   ├── (auth)/          # Authentication screens
│   │   ├── login.jsx    # Login screen
│   │   └── signup.jsx   # Signup screen
│   └── index.js         # Entry point
├── assets/              # Static assets and styles
├── components/          # Reusable components
├── constants/           # App constants
└── store/              # State management
```

## Recent Updates
- Implemented user registration functionality
- Added mobile app with modern UI
- Integrated backend with mobile app
- Added form validation and error handling

## Contributing
Feel free to submit issues and pull requests.

## License
MIT 