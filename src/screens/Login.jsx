import { Box, View } from "dripsy";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, Text, ToastAndroid } from "react-native";
import { FormItem, Label } from "react-native-form-component";
import storage from "../../lib/storage";

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
    if (data.password === "Pass") {
      storage.save({
        key: "loginUser", // Note: Do not use underscore("_") in key!
        data: {
          username: data.username,
          password: data.password,
        },

        // if expires not specified, the defaultExpires will be applied instead.
        // if set to null, then it will never expire.
        expires: null,
      });
      navigation.navigate("Academic AI");
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
          rules={{ required: "Register number is required" }}
          render={({ field }) => (
            <FormItem
              {...field}
              onChangeText={field.onChange}
              label="Register number"
              placeholder="Enter your KTU register number"
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
