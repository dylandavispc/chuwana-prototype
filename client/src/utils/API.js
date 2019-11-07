import axios from "axios";

export default {
    getProducts: function() {
        return axios.get("/api/products");
    },
    getProduct: function(id) {
        return axios.get("/api/products/" + id);
    },
    deleteProduct: function(id) {
        return axios.delete("/api/products/" + id);
    },
    postProduct: function(data) {
        return axios.post("/api/products", data);
    }
};