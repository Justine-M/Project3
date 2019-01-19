import axios from "axios";

export default {
  logInUser: function(user) { // {email: '', password: ''}
      return axios.post("/api/login", user)
  },
  registerUser: function(user) { // {email: '', password: ''}
      return axios.post("/api/register", user)
  },
  getLoggedInUser: function(){
      return axios.get("/api/currentUser")
  },
  // Saves a guest to the database
  saveGuest: function(guestData) {
    console.log("GUEST data ", guestData)
    return axios.post("/api/guest", guestData);
  },
  // getLoggedInUser:function(){
  //   return axios.get("api/currentUser")
  // },
  // register:function(user){
  //   return axios.get("api/register", user)
  // },
  // logInUser:function(user){
  //   return axios.get("api/login", user)
  // }
  // savePassword:function(email, password){
  //     return axios.post("/api/login");
  // }, 
  // getEmail:function(){
  //     return axios.post("/api/login");
  // },
  getGuests: function(){
      return axios.get("/api/guest")
  }}

