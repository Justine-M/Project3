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
  savePassword:function(email, password){
      return axios.post("/api/login");
  }, 
  getEmail:function(){
      return axios.post("/api/login");
  },
  getGuests: function(){
      return axios.get("/api/guest")
  },
 saveGuest: function(guest){
    return axios.get("/api/guest", guest)
}
};
