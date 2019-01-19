import axios from "axios";

export default {

    getGuests: function() {
        return axios.get("/api/guests");
      },
      
      getGuests: function(id) {
        return axios.get("/api/guests/" + id);
      },
    
      deleteBook: function(id) {
        return axios.delete("/api/guests/" + id);
      },
    
      saveBook: function(guest) {
        return axios.post("/api/guests", guest);
      }

};