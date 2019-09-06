import axios from 'axios';
import url from './base_url';

const repository = {
 
  findOnePost(_id){
    return axios.get(`${url.dev}/posts/${_id}`); 
  },
  updatePost(_id, jwt, data){
    return axios.put(`${url.dev}/posts/${_id}`, data); 
  }, 
  deletePost(_id, jwt, data){
    return axios.delete(`${url.dev}/posts/${_id}`); 
  } 
}

export default repository