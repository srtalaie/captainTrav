import axios from 'axios';

export default {
    addProduct: function(product){
        return axios.post('/api/addProduct', product);
    },

    getProducts: function(){
        return axios.get('/api/getAllProduct');
    },

    getProduct: function(id){
        return axios.get(`/api/getProduct/${id}`);
    },

    updateProduct: function(id, newProduct){
        return axios.put(`/api/updateProduct/${id}`, newProduct);
    },

    deleteProduct: function(id){
        return axios.delete(`/api/deleteProduct/${id}`);
    }
}
