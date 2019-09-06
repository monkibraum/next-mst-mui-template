import axios from 'axios';
import url from './base_url';

const repository = {
  submitGoogleAccessToken( accessToken ) {
    return axios.get(`${url.dev}/auth/google/callback?access_token=${accessToken}`);
  },
}

export default repository