import { createContext, useState } from "react";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    const savedUser = localStorage.getItem("savedUser");
    return savedUser ? JSON.parse(savedUser) : null;
  });

  if (currentUser) {
    localStorage.setItem("savedUser", JSON.stringify(currentUser));
  } else {
    localStorage.removeItem("savedUser");
  }

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
}
