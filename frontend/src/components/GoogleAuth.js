import React from "react";
import GoogleLogin from "react-google-login";

import axios from "axios";

export default function GoogleAuth({
  showLogin,
  loginText,
  showLogout,
  logoutText,
}) {
  async function responseGoogle(response) {
    try {
      const {
        email,
        familyName,
        givenName,
        googleId,
        imageUrl,
        name,
      } = await response.profileObj;

      const { tokenObj } = response;
      const user = { email, familyName, givenName, googleId, imageUrl, name };

      localStorage.setItem("email", email);
      localStorage.setItem("familyName", familyName);
      localStorage.setItem("givenName", givenName);
      localStorage.setItem("googleId", googleId);
      localStorage.setItem("imageUrl", imageUrl);
      localStorage.setItem("name", name);
      localStorage.setItem("token", tokenObj.id_token);
      localStorage.setItem("isAuthenticated", true);

      let path = "/login";
      let response = await axios.post(path, user);
      localStorage.setItem("isRegistered", response.data.isRegistered);

      window.location.replace("/");
    } catch (error) {
      console.error(error);
      window.location.replace("/");
    }
  }

  function responseError(response) {
    window.location.replace("/");
  }

  return (
    <div>
      <GoogleLogin
        clientId="899787207644-st7cehta2q31e1sp8804vg0q8ro5t94s.apps.googleusercontent.com"
        buttonText="Sign into Google to get Access"
        onSuccess={responseGoogle}
        onFailure={responseError}
        cookiePolicy={"single_host_origin"}
      />
    </div>
  );
}
