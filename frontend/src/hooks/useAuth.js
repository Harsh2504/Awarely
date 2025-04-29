import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const hasRedirectedRef = useRef(false);

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("token");
      if (!token && !hasRedirectedRef.current) {
        alert("Sorry! You need to login first.");
        hasRedirectedRef.current = true;
        navigate("/login");
        return;
      }

      try {
        const response = await fetch(
          "https://redhouseedtech.onrender.com/api/auth/validate-token",
          {
            method: "GET",
            headers: {
              "auth-token": token,
            },
          }
        );

        if (response.status === 401) {
          // Token is invalid or expired
          alert("Session expired. Please log in again.");
          localStorage.removeItem("token");
          hasRedirectedRef.current = true;
          navigate("/login");
        } else if (response.status !== 200) {
          throw new Error("Failed to validate token");
        }
      } catch (error) {
        console.error("Token validation error:", error);
        alert("An error occurred. Please log in again.");
        localStorage.removeItem("token");
        hasRedirectedRef.current = true;
        navigate("/login");
      }
    };

    validateToken();
  }, [navigate]);
};

export default useAuth;
