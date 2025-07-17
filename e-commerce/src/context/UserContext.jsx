import { createContext, useReducer, useEffect } from 'react';
import axios from 'axios';
import UserReducer from './UserReducer';

const API_URL = 'http://localhost:3000/user';

const initialState = {
  user: null,
  token: localStorage.getItem('token') || null,
};

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(UserReducer, initialState);

  const fetchUser = async (token) => {
    if (!token) return;

    try {
      const res = await axios.get(`${API_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: 'SET_USER', payload: res.data });
    } catch (error) {
      dispatch({ type: 'LOGOUT' });
    }
  };

  useEffect(() => {
    if (state.token) {
      fetchUser(state.token);
    }
  }, [state.token]);

  const login = async (credentials) => {
    try {
      const res = await axios.post(`${API_URL}/login`, credentials);
      const token = res.data.token;
      localStorage.setItem('token', token);
      dispatch({ type: 'LOGIN', payload: { token } });
      await fetchUser(token);
      return { success: true };
    } catch (error) {
      return {
        success: false,
        message: error.response?.data?.error || 'Error al iniciar sesión',
      };
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <UserContext.Provider value={{ ...state, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
