import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState
} from "react";

import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { User, UserLoginParams } from "../services/getLogin/interface";
import { StorageKeys } from "../constants/storageKeys";
import { getUserLogin } from "../services/getLogin";

interface AuthProviderProps {
  user: User | undefined;
  isLoading: boolean;
  signIn(user: UserLoginParams): void;
  signOut(): void;
}

const AuthContext = createContext({} as AuthProviderProps);

export function AuthProvider({ children }): JSX.Element {
  const [user, setUser] = useState<User>();
  const [isLoading, setIsLoading] = useState(false);

  const signIn = useCallback(async (user: User) => {
    setIsLoading(true);

    const userData = await getUserLogin({
      email: user.email,
      password: user.password
    });

    if (userData.length !== 0) {
      await AsyncStorage.setItem(StorageKeys.user, JSON.stringify(userData[0]));
      setUser(userData[0]);
    }

    setIsLoading(false);
  }, []);

  const signOut = useCallback(async () => {
    await AsyncStorage.removeItem(StorageKeys.user);
    setUser(undefined);
  }, []);

  const loadUser = useCallback(async () => {
    try {
      const userData = await AsyncStorage.getItem(StorageKeys.user);
  
      if (userData !== null) {
        setUser(JSON.parse(userData));
      }

    } catch(err) {
      Alert.alert("Loglife", "Não foi possível fazer o login");
      console.warn(err);
    }

  }, []);

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <AuthContext.Provider value={{ user, signIn, signOut, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
}
