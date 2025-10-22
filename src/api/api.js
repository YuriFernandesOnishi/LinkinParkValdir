import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: "https://parkingapisenai.azurewebsites.net",
  timeout: 10000,
});

// Interceptor para adicionar o token no header Authorization automaticamente
api.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('@token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.log("Erro ao pegar token do AsyncStorage", error);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
