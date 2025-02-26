import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { BASENDPOINT, VerifyToken } from "../../../variable";
import Cookies from "js-cookie";
// import useTimer from "./TimeHook";

export const verifyToken = async (token) => {
  try {
    const response = await fetch(BASENDPOINT + VerifyToken, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // Make sure `token` is valid
      },
      credentials: "include",
      body: JSON.stringify({ token }), // Body is not used on the server in this case
    });

    if (!response.ok) {
      throw new Error("Token verification failed");
    }

    const data = await response.json();
    return data.isValid;
  } catch (error) {
    console.error("Token verification failed:", error);
    return null;
  }
};

const PrivateRoute = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  const location = useLocation();
  // const { type: timerType } = useTimer("get-timer");

  useEffect(() => {
    const token = Cookies.get("accessToken"); // Get the token from cookies

    if (token) {
      verifyToken(token).then((isValid) => {
        if (isValid) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      });
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  if (isAuthenticated === null) {
    // Show loading spinner while verifying the token
    return <div>Loading...</div>;
  }

  // Redirect to login if the user is not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/123/admin/login" state={{ from: location }} replace />;
  }

  // For all other cases, validate and allow access
  return <Outlet />;
};

export default PrivateRoute;
