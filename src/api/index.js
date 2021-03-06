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
    // localStorage.removeItem("login_iat");
    try {
      await axios.post("/logout");
    } catch(err) {
      // Spice up later.
      alert("Something went wrong");
    }
  }
};

