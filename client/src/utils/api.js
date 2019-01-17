import axios from "axios";

export default {

    getGuests: function() {
        return axios.get("/api/guests");
      },
      
      getGuests: function(id) {
        return axios.get("/api/Guests/" + id);
      },
    
      deleteBook: function(id) {
        return axios.delete("/api/Guests/" + id);
      },
    
      saveBook: function(guestData) {
        return axios.post("/api/books", guestData);
      }

};