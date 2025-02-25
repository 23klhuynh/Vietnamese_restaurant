import React, { createContext, useState, useContext, ReactNode, useEffect } from "react";

interface UserContextType {
  user: boolean;
  setUser: React.Dispatch<React.SetStateAction<boolean>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

interface UserProviderProps {
  children: ReactNode;
}

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<boolean>(!!localStorage.getItem("access_token"));

  useEffect(()=>{
    const handleStorageChange = () => {
      setUser(!!localStorage.getItem("access_token"));
    };
    handleStorageChange()
  }, [])

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
