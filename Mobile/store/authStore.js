import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { API_URL } from '../constants/api';

export const useAuthStore = create((set) => ({
    user: null,
    token: null,
    isLoading: false,
    isCheckingAuth: true,

    register: async (username, email, password) => {
        set({ isLoading: true });
        try {
            const response = await fetch(`${API_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    email,
                    password,
                }),
            });
    
            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong!');
            }

            await AsyncStorage.setItem('user', JSON.stringify(data.user));
            await AsyncStorage.setItem('token', data.token);

            set({ 
                token: data.token, 
                user: data.user, 
                isLoading: false,
                isCheckingAuth: false 
            });

            return {
                success: true,
                message: 'Registration successful!',
            }

        } catch (error) {
            set({ isLoading: false, isCheckingAuth: false });
            return {
                success: false,
                error: error.message || 'Something went wrong!',
            }
        }
    },

    login: async (email, password) => {
        set({ isLoading: true });
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });

            const data = await response.json();
            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong!');
            }

            await AsyncStorage.setItem('user', JSON.stringify(data.user));
            await AsyncStorage.setItem('token', data.token);

            set({ 
                token: data.token, 
                user: data.user, 
                isLoading: false,
                isCheckingAuth: false 
            });

            return {
                success: true,
                message: 'Login successful!',
            }
            
        } catch (error) {
            set({ isLoading: false, isCheckingAuth: false });
            return {
                success: false,
                error: error.message || 'Something went wrong!',
            }
        }
    },

    checkAuth: async () => {
        set({ isCheckingAuth: true });
        try {
            const token = await AsyncStorage.getItem('token');
            const userJson = await AsyncStorage.getItem('user');
            const user = userJson ? JSON.parse(userJson) : null;
            
            set({ 
                token, 
                user,
                isCheckingAuth: false 
            });
        } catch (error) {
            console.log("Auth Check Failed", error);
            set({ 
                token: null, 
                user: null,
                isCheckingAuth: false 
            });
        }
    }, 

    logout: async () => {
        set({ isLoading: true });
        try {
            await AsyncStorage.removeItem('token');
            await AsyncStorage.removeItem('user');
            
            set({ 
                token: null, 
                user: null, 
                isLoading: false,
                isCheckingAuth: false 
            });

            return {
                success: true,
                message: 'Logout successful!'
            };
        } catch (error) {
            console.log("Logout Failed", error);
            set({ isLoading: false, isCheckingAuth: false });
            return {
                success: false,
                error: error.message || 'Logout failed!'
            };
        }
    },
}));