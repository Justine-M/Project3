import axios from "axios";

export default {
  // Gets all guests
  getGuest: function() {
    return axios.get("/api/guest");
  },
  // Gets the guest with the given id
  getGuest: function(id) {
    return axios.get("/api/books/" + id);
  },
  // Deletes the guest with the given id
  deleteGuest: function(id) {
    return axios.delete("/api/guest/" + id);
  },
  // Saves a book to the database
  saveGuest: function(guestData) {
    return axios.post("/api/guest", guestData);
  }
};