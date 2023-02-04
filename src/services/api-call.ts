import axios from 'axios';
import {Images} from './../common/types';
import {BASE_URL} from '../common/constants';

const instance = axios.create({
  baseURL: BASE_URL,
});

const apiCall = {
  async getImages(): Promise<Images> {
    const response = await instance.get('v2/list');
    return response.data;
  },
};

export {apiCall};
