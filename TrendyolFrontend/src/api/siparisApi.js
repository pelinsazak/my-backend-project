import axios from 'axios';

const API_URL = 'http://localhost:8080/api/siparisler';

export const getAllSiparisler = (params) => axios.get(API_URL, { params });
export const getSiparis = (id) => axios.get(`${API_URL}/${id}`);
export const createSiparis = (data) => axios.post(API_URL, data);
export const updateSiparis = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteSiparis = (id) => axios.delete(`${API_URL}/${id}`);
export const searchSiparisler = (isim) => axios.get(`${API_URL}/ara`, { params: { isim } });