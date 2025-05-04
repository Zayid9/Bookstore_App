# Bookstore App 📚

A full-stack mobile application for book lovers to share and discover book recommendations. Built with React Native (Expo) for the frontend and Node.js/Express for the backend.

## 🌟 Features

### User Management
- 🔐 Secure Authentication (Register/Login)
- 👤 User Profile Management
- 🖼️ Profile Picture Support
- 🔑 JWT-based Authentication

### Book Management
- 📚 Create Book Recommendations
- 🌟 Rate Books (5-star System)
- 📝 Add Book Descriptions
- 🖼️ Upload Book Cover Images
- 🗑️ Delete Own Recommendations

### Social Features
- 📱 Feed of Community Recommendations
- 👥 View Other Users' Recommendations
- 🔄 Pull-to-Refresh Content Updates
- ♾️ Infinite Scroll for Book Feed

### UI/UX Features
- 🎨 Modern and Clean Interface
- 📱 Responsive Design
- 🌓 Custom Color Schemes
- 🔄 Loading States and Animations
- ⚡ Fast and Smooth Performance

## 🛠️ Tech Stack

### Mobile App (Frontend)
- **Framework**: React Native with Expo
- **State Management**: Zustand
- **Navigation**: Expo Router
- **UI Components**: Custom Components with Expo Vector Icons
- **Storage**: AsyncStorage for Local Data
- **Image Handling**: Expo Image Picker & File System
- **Styling**: React Native StyleSheet

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js
- **Database**: MongoDB
- **Authentication**: JWT (jsonwebtoken)
- **Password Security**: bcryptjs
- **Image Storage**: Cloudinary
- **Task Scheduling**: node-cron
- **API Security**: CORS enabled

## 📱 Mobile App Structure

```
Mobile/
├── app/                  # Main application code
│   ├── (auth)/          # Authentication screens
│   │   ├── login.jsx    # Login screen
│   │   └── signup.jsx   # Signup screen
│   └── (tabs)/          # Main app tabs
│       ├── index.jsx    # Home feed
│       ├── create.jsx   # Create recommendation
│       └── profile.jsx  # User profile
├── assets/              # Static assets and styles
├── components/          # Reusable components
├── constants/           # App constants
└── store/              # State management
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Expo CLI
- Expo Go app (for mobile testing)

### Installation

1. Clone the repository
```bash
git clone [your-repo-url]
```

2. Install Backend Dependencies
```bash
cd Backend
npm install
```

3. Install Mobile App Dependencies
```bash
cd ../Mobile
npm install
```

4. Set up environment variables

Backend (.env):
```
PORT=3000
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
```

5. Start the Development Servers

Backend:
```bash
cd Backend
npm run dev
```

Mobile App:
```bash
cd Mobile
npx expo start
```

## 📱 Mobile App Features

### Authentication
- Secure login and registration
- JWT token management
- Persistent sessions
- Form validation

### Book Management
- Create book recommendations with images
- Rate books with a 5-star system
- Add detailed descriptions
- View personal recommendations
- Delete own recommendations

### Feed
- Infinite scroll implementation
- Pull-to-refresh functionality
- Real-time updates
- Optimized image loading

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- Secure image upload
- Protected API endpoints
- Input validation
- Error handling

## 🎯 Future Enhancements

- 🔍 Search functionality
- 💬 Comments on recommendations
- 👍 Like/Save recommendations
- 📱 Offline support
- 🌓 Dark mode
- 📊 Reading statistics

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👏 Acknowledgments

- Expo team for the amazing mobile development framework
- MongoDB team for the robust database solution
- All contributors and users of the app 