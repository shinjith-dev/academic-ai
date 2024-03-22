import { Box, View } from "dripsy";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Text } from "react-native";
import { FormItem, Label } from "react-native-form-component";
import Toast from "react-native-root-toast";

const Login = ({ navigation }) => {
  const [toast, setToast] = useState("");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    if (data.username === "shinjith" && data.password === "pass") {
      setToast("Successfully logged in");
      setTimeout(() => {
        setToast("");
      }, 1000);
      navigation.navigate("Dashboard");
    } else {
      setToast("Incorrect credentials");
      setTimeout(() => {
        setToast("");
      }, 1000);
    }
  };

  return (
    <View sx={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Box sx={{ width: 300 }}>
        <Controller
          control={control}
          name="username"
          rules={{ required: "Username is required" }}
          render={({ field }) => (
            <FormItem
              {...field}
              onChangeText={field.onChange}
              label="Username"
              placeholder="Enter your username"
            />
          )}
        />

        <Controller
          control={control}
          name="password"
          rules={{ required: "Password is required" }}
          render={({ field }) => (
            <FormItem
              {...field}
              onChangeText={field.onChange}
              secureTextEntry
              label="Password"
              placeholder="Enter your password"
            />
          )}
        />

        <Button title="Submit" onPress={handleSubmit(onSubmit)}>
          <Text>Login</Text>
        </Button>

        <Box sx={{ my: 8 }}>
          {errors.username && <Text>{errors.username.message}</Text>}
          {errors.password && <Text>{errors.password.message}</Text>}
        </Box>
      </Box>

      <Toast
        visible={Boolean(toast)}
        position={120}
        shadow
        animation
        hideOnPress={true}
      >
        {toast}
      </Toast>
    </View>
  );
};

export default Login;
