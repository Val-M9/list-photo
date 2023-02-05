import axios from 'axios';
import {ImageDto, QueryParams} from './../common/types';
import {BASE_URL} from '../common/constants';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {'Content-Type': 'application/json'},
});

const apiCall = {
  async getImages({page = 1, limit = 10}: QueryParams): Promise<ImageDto[] | undefined> {
    try {
      const response = await instance.get(`?page=${page}&limit=${limit}`);
      console.log(response.data);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  },
};

export {apiCall};
