import axios from "axios";

export default {
    getProducts: function() {
        return axios.get("/api/catalog");
    },
    getProduct: function(id) {
        return axios.get("/api/catalog/" + id);
    },
    deleteProduct: function(id) {
        return axios.delete("/api/catalog/" + id);
    },
    postProduct: function(data) {
        return axios.post("/api/catalog", data);
    }
};