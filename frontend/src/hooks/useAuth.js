import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const useAuth = () => {
  const navigate = useNavigate();
  const hasRedirectedRef = useRef(false);

  useEffect(() => {
    const validateToken = async () => {
      const token = localStorage.getItem("token");

      if (!token && !hasRedirectedRef.current) {
        toast.error("⚠️ You need to log in first.");
        hasRedirectedRef.current = true;
        navigate("/login");
        return;
      }

      const toastId = toast.loading("Validating session...");

      try {
        const response = await fetch(
          "http://localhost:1313/api/auth/validate-token",
          {
            method: "GET",
            headers: {
              "auth-token": token,
            },
          }
        );

        if (response.status === 401) {
          toast.error("Session expired. Please log in again.", { id: toastId });
          localStorage.removeItem("token");
          hasRedirectedRef.current = true;
          navigate("/login");
        } else if (response.status !== 200) {
          throw new Error("Failed to validate token");
        } else {
          toast.dismiss(toastId); // Token is valid
        }
      } catch (error) {
        console.error("Token validation error:", error);
        toast.error("An error occurred. Please log in again.", { id: toastId });
        localStorage.removeItem("token");
        hasRedirectedRef.current = true;
        navigate("/login");
      }
    };

    validateToken();
  }, [navigate]);
};

export default useAuth;
