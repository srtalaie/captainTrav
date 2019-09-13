import axios from 'axios';

export default {
    addProduct: function(product){
        return axios.post('/api/addProduct', product);
    },

    getProduct: function(){
        return axios.get('/api/getAllProduct');
    },

    updateProduct: function(id, newProduct){
        return axios.put(`/api/updateProduct/${id}`, newProduct);
    },

    deleteProduct: function(id){
        return axios.delete(`/api/deletProduct/${id}`);
    }
}
