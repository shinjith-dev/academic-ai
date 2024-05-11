import { Box, View } from "dripsy";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Text, ToastAndroid } from "react-native";
import { FormItem, Label } from "react-native-form-component";

const Login = ({ navigation }) => {
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
    if (data.username === "User" && data.password === "Pass") {
      navigation.navigate("Dashboard");
      ToastAndroid.show(`Logged in as ${data.username}`, ToastAndroid.SHORT);
    } else {
      // setToast("Incorrect credentials");
      ToastAndroid.show("Incorrect credentials", ToastAndroid.SHORT);
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
    </View>
  );
};

export default Login;
