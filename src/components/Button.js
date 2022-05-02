import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useState, useEffect } from "react";

function Button({ title, onPress }) {
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    // componentWillMount & componentWillUpdate
    const toggle = () => {
      setDisabled(!disabled);
    };

    const interval = setInterval(() => {
      toggle();
      console.info("toggle button!");
    }, 2000);

    // componentWillUnmount
    return () => {
      clearInterval(interval);
    };
  }, [disabled]);

  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.label}>
        {title} {}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;

const styles = StyleSheet.create({
  button: {
    borderColor: "black",
    borderWidth: 4,
    borderStyle: "solid",
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    padding: 8,
  },
  label: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "700",
  },
});
