import { create } from 'zustand';
import axios from 'axios';
import { BACKEND_LOCAL_URL } from './urls';

const useStore = create((set) => ({
  user: null,
  token: null,
  bookings: [],
  mechanics: [],
  setUser: (user) => set({ user }),
  setToken: (token) => set({ token }),
  setBookings: (bookings) => set({ bookings }),
  setMechanics: (mechanics) => set({ mechanics }),
  signup: async (userData) => {
    try {
      const response = await axios.post(`${BACKEND_LOCAL_URL}/api/signup`, userData);
      set({ user: response.data.user, token: response.data.token });
    } catch (error) {
      console.error('Signup error:', error);
    }
  },
  signin: async (credentials) => {
    try {
      const response = await axios.post(`${BACKEND_LOCAL_URL}/api/signin`, credentials);
      set({ user: response.data.user, token: response.data.token });
    } catch (error) {
      console.error('Signin error:', error);
    }
  },
  createBooking: async (bookingData) => {
    try {
      const response = await axios.post(`${BACKEND_LOCAL_URL}/api/bookings`, bookingData);
      set((state) => ({ bookings: [...state.bookings, response.data] }));
    } catch (error) {
      console.error('Create booking error:', error);
    }
  },
  getBookings: async () => {
    try {
      const response = await axios.get(`${BACKEND_LOCAL_URL}/api/bookings`);
      set({ bookings: response.data });
    } catch (error) {
      console.error('Get bookings error:', error);
    }
  },
  getBookingById: async (id) => {
    try {
      const response = await axios.get(`${BACKEND_LOCAL_URL}/api/bookings/${id}`);
      return response.data;
    } catch (error) {
      console.error('Get booking by ID error:', error);
    }
  },
  updateBooking: async (id, bookingData) => {
    try {
      const response = await axios.put(`${BACKEND_LOCAL_URL}/api/bookings/${id}`, bookingData);
      set((state) => ({
        bookings: state.bookings.map((booking) =>
          booking._id === id ? response.data : booking
        ),
      }));
    } catch (error) {
      console.error('Update booking error:', error);
    }
  },
  deleteBooking: async (id) => {
    try {
      await axios.delete(`${BACKEND_LOCAL_URL}/api/bookings/${id}`);
      set((state) => ({
        bookings: state.bookings.filter((booking) => booking._id !== id),
      }));
    } catch (error) {
      console.error('Delete booking error:', error);
    }
  },
  createMechanic: async (mechanicData) => {
    try {
      const response = await axios.post(`${BACKEND_LOCAL_URL}/api/mechanics`, mechanicData);
      set((state) => ({ mechanics: [...state.mechanics, response.data] }));
    } catch (error) {
      console.error('Create mechanic error:', error);
    }
  },
  getAllMechanics: async () => {
    try {
      const response = await axios.get(`${BACKEND_LOCAL_URL}/api/mechanics`);
      set({ mechanics: response.data });
    } catch (error) {
      console.error('Get all mechanics error:', error);
    }
  },
  getMechanicById: async (id) => {
    try {
      const response = await axios.get(`${BACKEND_LOCAL_URL}/api/mechanics/${id}`);
      return response.data;
    } catch (error) {
      console.error('Get mechanic by ID error:', error);
    }
  },
  updateMechanicById: async (id, mechanicData) => {
    try {
      const response = await axios.put(`${BACKEND_LOCAL_URL}/api/mechanics/${id}`, mechanicData);
      set((state) => ({
        mechanics: state.mechanics.map((mechanic) =>
          mechanic._id === id ? response.data : mechanic
        ),
      }));
    } catch (error) {
      console.error('Update mechanic error:', error);
    }
  },
  deleteMechanicById: async (id) => {
    try {
      await axios.delete(`${BACKEND_LOCAL_URL}/api/mechanics/${id}`);
      set((state) => ({
        mechanics: state.mechanics.filter((mechanic) => mechanic._id !== id),
      }));
    } catch (error) {
      console.error('Delete mechanic error:', error);
    }
  },
  assignMechanicToBooking: async (bookingId, mechanicId) => {
    try {
      const response = await axios.post(`${BACKEND_LOCAL_URL}/api/bookings/${bookingId}/assignMechanic`, { mechanicId });
      set((state) => ({
        bookings: state.bookings.map((booking) =>
          booking._id === bookingId ? response.data : booking
        ),
      }));
    } catch (error) {
      console.error('Assign mechanic to booking error:', error);
    }
  },
}));

export default useStore;

