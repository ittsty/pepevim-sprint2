/* eslint-disable react-refresh/only-export-components */

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
} from "react";

import { logout } from "../services/auth";
import { getUser } from "@/services/user";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const checkAuth = useCallback(async () => {
    try {
      setLoading(true);

      const res = await getUser();
      console.log("🚀 ~ fetchUser ~ res:", res);
      if (res.success) {
        setUser(res.data.user);
        return res.data.user;
      }
    } catch (error) {
      console.log("🚀 ~ fetchUser ~ error:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  const hdlLogout = useCallback(async () => {
    try {
      const result = await logout();
      if (result.success) {
        setUser(null);
        checkAuth();
        return { success: true };
      }
      return { success: false };
    } catch (error) {
      console.log("🚀 ~ AuthProvider ~ error:", error);
      return { success: false };
    }
  }, [checkAuth]);

  useEffect(() => {
    checkAuth();
  }, []);

  const value = { user, loading, checkAuth, hdlLogout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
