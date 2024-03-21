import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const SecondaryButton = ({ onPress, children, style }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "lightgray",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 2,
    // marginVertical: 4,
    alignItems: "center",
    // Add additional custom styles here
  },
  buttonText: {
    fontSize: 16,
    color: "black",
    textAlign: "center",
  },
});

export default SecondaryButton;
