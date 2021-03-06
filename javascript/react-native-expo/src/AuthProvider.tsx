import AsyncStorage from '@react-native-async-storage/async-storage';
import React from "react";

type User = null | { username: string };

export const AuthContext = React.createContext<{
    user: User;
    login: () => void;
    logout: () => void;
}>({
    user: null,
    login: () => { },
    logout: () => { }
});


interface AuthProviderProps { }

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = React.useState<User>(null);
    return (
        <AuthContext.Provider
            value={{
                user,
                login: () => {
                    const fakeUser = { username: "bob" };
                    setUser(fakeUser);
                    AsyncStorage.setItem("user", JSON.stringify(fakeUser));
                },
                logout: () => {
                    setUser(null);
                    AsyncStorage.removeItem("user");
                }
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
