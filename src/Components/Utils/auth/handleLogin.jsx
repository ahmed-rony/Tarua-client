import Cookies from "js-cookie";
import { BASENDPOINT, AuthorizeUser } from "../../../variable";

export default async function handleLogin(state, navigate, location) {
  const loadingState = (bool) => state[0](bool);
  const isnotSuccessfullState = (bool) => state[1](bool);
  const responseMessageState = (message) => state[2](message);
  const { username, password } = state[3];
  const handleErrors = (message) => {
    loadingState(false);
    responseMessageState(message);
    isnotSuccessfullState(true);
  };

  loadingState(true);
  isnotSuccessfullState(false);

  if (username) {
    if (password) {
      fetch(BASENDPOINT + AuthorizeUser, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      })
        .then((response) => {
          if (!response.ok) {
            // Check if the response status is not OK (in the range 200-299)
            throw {
              response,
              message: `HTTP error! Status: ${response.status}`,
            };
          }
          return response.json();
        })
        .then((data) => {
          if (data) {
            // Set the token in cookies with a 6 hour expiration
            const expiryDate = new Date();
            expiryDate.setHours(expiryDate.getHours() + 6);
            Cookies.set("accessToken", data.token, { expires: expiryDate });

            const from = location.state?.from?.pathname || "/";
            navigate(from, { replace: true });
          }
        })
        .catch((error) => {
          if (error.response) {
            // Check the status code and handle errors accordingly
            if (error.response.status === 401) {
              handleErrors("Cannot authenticate user");
            } else {
              handleErrors("Something went wrong");
            }
          } else {
            // Handle other types of errors (e.g., network errors)
            console.error("Error:", error);
            handleErrors("An error occurred");
          }
        });
    } else {
      handleErrors("Please input your password!");
    }
  } else {
    handleErrors("Please input your username");
  }
}
