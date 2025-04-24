# Bookstore Mobile App 📚

A React Native mobile application for the Bookstore platform, built with Expo.

## Features

- Modern UI/UX Design
- User Authentication
- File-based Routing with Expo Router
- State Management with Zustand
- Form Validation
- Error Handling

## Getting Started

1. Install dependencies

   ```bash
   npm install
   ```

2. Update API Configuration

   Open `store/authStore.js` and update the API endpoint with your local IP address:
   ```javascript
   const API_URL = 'http://YOUR_LOCAL_IP:3000';
   ```

3. Start the app

   ```bash
   npx expo start
   ```

   This will show a QR code and options to run the app on:
   - Android Emulator
   - iOS Simulator
   - Physical device via Expo Go app

## Project Structure

```
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

## State Management

We use Zustand for state management. The main stores are:
- `authStore.js`: Handles user authentication state and API calls

## Development

- The app uses Expo's file-based routing system
- Styles are organized in the `assets/styles` directory
- Constants (colors, etc.) are in the `constants` directory

## Troubleshooting

1. Network Issues
   - Ensure your mobile device is on the same network as your development machine
   - Check that the API endpoint in `authStore.js` matches your local IP address
   - Verify the backend server is running

2. Expo Issues
   - Clear expo cache: `expo start -c`
   - Rebuild: `expo start --no-dev --minify`

## Learn More

- [Expo Documentation](https://docs.expo.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Zustand Documentation](https://github.com/pmndrs/zustand)
