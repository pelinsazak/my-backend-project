import axios from 'axios';

const API_URL = 'http://localhost:8080/api/siparisler';

export const getAllSiparisler = () => axios.get(API_URL);
export const getSiparis = (id) => axios.get(`${API_URL}/${id}`);
export const createSiparis = (data) => axios.post(API_URL, data);
export const updateSiparis = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteSiparis = (id) => axios.delete(`${API_URL}/${id}`);