import Cookies from "js-cookie";
import { BASENDPOINT, DeAuthorizeToken } from "../../../variable";

export default async function handleLogout() {
  const token = Cookies.get("accessToken"); // Get the token from cookies
  console.log(token);

  if (!token) {
    console.log("User is not authenticated");
    return;
  }

  // Send a request to the backend to invalidate the token
  fetch(BASENDPOINT + DeAuthorizeToken, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",  // For JSON body
      "Authorization": `Bearer ${token}`,  // Send token as Authorization header
    },
    credentials: "include",  // Allow cookies to be sent along with the request
    body: JSON.stringify({ token }),  // Optionally include token in body as well
  })
  
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to logout");
      }
      return response.json();
    })
    .then((data) => {
      // If logout is successful, remove the token from cookies
      Cookies.remove("accessToken");
      window.location.href = "/"; // Redirect to login page
    })
    .catch((error) => {
      console.error("Logout failed:", error);
      // Optionally, handle the error (e.g., show a message to the user)
    });
}
