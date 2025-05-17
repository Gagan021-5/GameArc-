import { createContext, useState, useEffect } from "react";
import axios from "axios";
import { auth } from "../../firebase";
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  signOut,
} from "firebase/auth";

export const AuthUser = createContext();

const google = new GoogleAuthProvider();
const github = new GithubAuthProvider();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [loginErr, setLoginErr] = useState("");

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
      axios
        .get("https://gamearc-espn.onrender.com/api/users/me", {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then((res) => setUser(res.data))
        .catch(async () => {
          setUser(null);
          setToken(null);
          localStorage.removeItem("token");
          await signOut(auth);
        });
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        console.log("Firebase user signed in:", firebaseUser.email);
      } 
    });
    return unsubscribe;
  }, []);

  const signinGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, google);
      const firebaseUser = result.user;
      const idToken = await firebaseUser.getIdToken();
      const response = await axios.post(
        "http://localhost:4000/api/users/oauthlogin",
        { idToken }
      );
      const { token: backendToken, user: backendUser } = response.data;

      localStorage.setItem("token", backendToken);
      setUser(backendUser);
      setToken(backendToken);
      return { backendUser, backendToken };
    } catch {
      setLoginErr("Failed to sign in with Google");
    }
  };

  const signinGit = async () => {
    try {
      const result = await signInWithPopup(auth, github);
      const firebaseUser = result.user;
      const idToken = await firebaseUser.getIdToken();
      const response = await axios.post(
        "http://localhost:4000/api/users/oauthlogin",
        { idToken }
      );
      const { token: backendToken, user: backendUser } = response.data;

      localStorage.setItem("token", backendToken);
      setUser(backendUser);
      setToken(backendToken);
      return { backendUser, backendToken };
    } catch {
      setLoginErr("Failed to sign in with GitHub");
    }
  };

  const loginuser = async (data) => {
    try {
      setLoginErr("");
      const response = await axios.post(
        "http://localhost:4000/api/users/login",
        { email: data.email, password: data.password },
        { withCredentials: true }
      );
      const { user: backendUser, token: backendToken } = response.data;

      localStorage.setItem("token", backendToken);
      setUser(backendUser);
      setToken(backendToken);
      return true;
    } catch (error) {
      if (error.response?.status === 401) {
        setLoginErr("Invalid email or password. Please try again.");
      }
      return false;
    }
  };

  const logout = async () => {
    localStorage.removeItem("token");
    localStorage.removeItem("cart");
    setUser(null);
    setToken(null);
    await signOut(auth);
  };

  return (
    <AuthUser.Provider
      value={{
        loginuser,
        signinGoogle,
        signinGit,
        logout,
        user,
        token,
        loginErr,
        setToken,
        setUser,
      }}
    >
      {children}
    </AuthUser.Provider>
  );
};
