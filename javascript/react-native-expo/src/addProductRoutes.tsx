import { StackNavigationState, TypedNavigator } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Button, Text, TouchableOpacity } from "react-native";
import { Center } from "./Center";
import { HomeParamList, HomeStackNavProps } from "./HomeParamList";
import { SearchParamList } from "./SearchParamList";

function Product({ route, navigation }: HomeStackNavProps<"Product">) {
  return (
    <Center>
      <Text>{route.params.name}</Text>
      <Button
        title="Edit This Product"
        onPress={() =>
          navigation.navigate("EditProduct", {
            name: route.params.name
          })
        }
      />
    </Center>
  );
}

function apiCall(x: any) {
  return x;
}

function EditProduct({ route, navigation }: HomeStackNavProps<"EditProduct">) {
  const [formState] = useState();
  const submit = useRef(() => { });

  submit.current = () => {
    // api call with new form state
    apiCall(formState);
    navigation.goBack();
  };

  useEffect(() => {
    navigation.setParams({ submit });
  }, []);

  return (
    <Center>
      <Text>editing {route.params.name}...</Text>
    </Center>
  );
}

export const addProductRoutes = (
  Stack: TypedNavigator<
    HomeParamList | SearchParamList,
    StackNavigationState,
    any,
    any,
    any
  >
) => {
  return (
    <>
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Edit: ${route.params.name}`,
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                // submit the form
                if (route.params.submit) {
                  route.params.submit.current();
                }
              }}
              style={{ paddingRight: 8 }}
            >
              <Text
                style={{
                  color: "red"
                }}
              >
                Done
              </Text>
            </TouchableOpacity>
          )
        })}
        name="EditProduct"
        component={EditProduct}
      />
      <Stack.Screen
        options={({ route }) => ({
          headerTitle: `Product: ${route.params.name}`
        })}
        name="Product"
        component={Product}
      />
    </>
  );
};
