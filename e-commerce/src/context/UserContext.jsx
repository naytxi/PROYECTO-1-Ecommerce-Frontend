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
    if (!token) {
      console.warn('⚠️ No token disponible para fetchUser');
      return;
    }

    console.log('🔍 Haciendo fetchUser con token:', token);

    try {
      const res = await axios.get(`${API_URL}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log('✅ Usuario obtenido desde /me:', res.data);
      dispatch({ type: 'SET_USER', payload: res.data });
    } catch (error) {
      // Aquí mostramos el error con todo detalle para ayudarte a debuggear
      console.error('❌ Error al obtener perfil:', error);
      if (error.response) {
        console.error('Status:', error.response.status);
        console.error('Data:', error.response.data);
        console.error('Headers:', error.response.headers);
      } else {
        console.error('Error mensaje:', error.message);
      }
      dispatch({ type: 'LOGOUT' });
    }
  };

  useEffect(() => {
    console.log('🎯 useEffect ejecutado - token actual:', state.token);
    if (state.token) {
      fetchUser(state.token);
    } else {
      console.log('🚫 No hay token, no se llama fetchUser');
    }
  }, [state.token]);

  const login = async (credentials) => {
    try {
      console.log('🚀 Enviando login con credenciales:', credentials);
      const res = await axios.post(`${API_URL}/login`, credentials);
      const token = res.data.token;
      console.log('🔑 Token recibido del backend:', token);
      localStorage.setItem('token', token);
      dispatch({ type: 'LOGIN', payload: { token } });
      console.log('Llamando fetchUser después de login con token...');
      await fetchUser(token);
      return { success: true };
    } catch (error) {
      console.error('❌ Error durante login:', error.response?.data || error.message);
      return {
        success: false,
        message: error.response?.data?.error || 'Error al iniciar sesión',
      };
    }
  };

  const logout = () => {
    console.log('👋 Cerrando sesión');
    localStorage.removeItem('token');
    dispatch({ type: 'LOGOUT' });
  };

  return (
    <UserContext.Provider value={{ ...state, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
