import { View, Text, StyleSheet } from "react-native";

function Avatar({ color, label }) {
  const styles = createStyles({ color });
  return (
    <View style={styles.root}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.labelBackground} />
    </View>
  );
}

export default Avatar;

const SIZE = 96;

const createStyles = ({ color }) =>
  StyleSheet.create({
    root: {
      borderColor: color,
      borderWidth: 4,
      borderStyle: "solid",
      height: SIZE,
      width: SIZE,
      borderRadius: SIZE / 2,
      justifyContent: "center",
      alignItems: "center",
    },
    label: {
      fontSize: 32,
      fontWeight: "700",
      color,
    },
    labelBackground: {
      position: "absolute",
      width: SIZE,
      height: SIZE,
      backgroundColor: color,
      borderRadius: SIZE / 2,
      marginBottom: 39,
      opacity: 0.1,
    },
  });
