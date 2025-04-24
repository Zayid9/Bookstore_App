import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useAuthStore = create((set) => ({
    user: null,
    token: null,
    isLoading: false,

    register: async (username, email, password) => {

        set({ isLoading: true });
        try {
            // const response = await fetch('https://localhost:3000/api/auth/register', {
            // const response = await fetch('http://192.168.100.35:3000/api/auth/register'
            // const response = await fetch('http://192.168.137.1:3000/api/auth/register',
            const response = await fetch('https://bookstore-app-t1qt.onrender.com/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            })

            console.log('Response:', response);

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong!');
            }

            console.log('Data:', data);

            await AsyncStorage.setItem('user', JSON.stringify(data.user));
            await AsyncStorage.setItem('token', data.token);

            console.log('User:', data.user);
            console.log('Token:', data.token);

            set({ token: data.token, user: data.user, isLoading: false });

            console.log('User and token stored in AsyncStorage', data.user, data.token);

            return {
                success: true,
                message: 'Registration successful!',
            }

        } catch (error) {
            set({ isLoading: false });
            return {
                success: false,
                error: error.message || 'Something went wrong!',
            }
        }
    }

}));