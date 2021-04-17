import AsyncStorage from '@react-native-async-storage/async-storage';
import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { AppTabs } from "./AppTabs";
import { AuthContext } from "./AuthProvider";
import { AuthStack } from "./AuthStack";
import { Center } from "./Center";

interface RoutesProps { }

export const Routes: React.FC<RoutesProps> = ({ }) => {
  const { user, login } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // check if the user is logged in or not
    AsyncStorage.getItem("user")
      .then(userString => {
        if (userString) {
          login();
        }
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (loading) {
    return (
      <Center>
        <ActivityIndicator size="large" />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      {user ? <AppTabs /> : <AuthStack />}
    </NavigationContainer>
  );
};
