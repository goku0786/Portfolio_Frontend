import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const baseurl = "http://localhost:5000"

  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [info, setInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const authorizationToken = `Bearer ${token}`;

  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  console.log("isLoggedIn", isLoggedIn);

  const LogoutUser = () => {
    setToken("");
    setUser("");
    return localStorage.removeItem("token");
  };

  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`${baseurl}/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        // console.log("user data", data.userData);
        setUser(data.userData);
        setIsLoading(false);
      } else {
        console.error("Error fetching user data");
        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error while fething user data");
    }
  };

  const getServices = async () => {
    try {
      const response = await fetch(`${baseurl}/api/data/service`, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        // console.log("service data", data.message);
        setInfo(data.message);
      }
    } catch (error) {
      console.log(`Error while fething services details: ${error}`);
    }
  };

  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        info,
        authorizationToken,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth used outside of the Provider");
  }
  return authContextValue;
};
