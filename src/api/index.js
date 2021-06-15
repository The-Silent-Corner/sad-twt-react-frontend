import axios from "axios";

export default {
  postLogin: async function(email, password) {
    try {
      const res = await axios.post("/api/getAuth", { email, password });
      localStorage.setItem("login_iat", res.data.iat);
      return res?.status;
    } catch(err) {
      return err?.response?.status || false;
    }
  },
  register: async function(email, password1, password2) {
    try {
      const res = await axios.post(
        "/api/users",
        {
          email, password1, password2
        }
      );
      return res?.status;
    } catch(err) {
      return err?.response?.status || false;
    }
  },
  logout: async function() {
    try {
      await axios.post("/logout");
    } catch(err) {
      alert("Unable to logout from the server");
    }
  }
};

