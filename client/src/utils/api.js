import axios from "axios";

export default {
  // Gets all guests
  getGuest: function() {
    return axios.get("/api/guest");
  },
  // Gets the guest with the given id
  getGuests: function(id) {
    return axios.get("/api/guest/" + id);
  },
  // Deletes the guest with the given id
  deleteGuest: function(id) {
    return axios.delete("/api/guest/" + id);
  },
  // Saves a guest to the database
  saveGuest: function(guestData) {
    console.log("GUEST data ", guestData)
    return axios.post("/api/guest", guestData);
  },
  getLoggedInUser:function(){
    return axios.get("api/currentUser")
  },
  register:function(user){
    return axios.get("api/register", user)
  },
  logInUser:function(user){
    return axios.get("api/login", user)
  }
};