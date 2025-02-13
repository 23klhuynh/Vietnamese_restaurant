import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const AuthContext = createContext<{
  user: string | null;
  fetchUser: () => void;
} | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<string | null>(null);

  const fetchUser = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:5000/auth/protected", {
        withCredentials: true,
      });
      setUser(response.data.user);
    } catch (error) {
      setUser(null);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, fetchUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
