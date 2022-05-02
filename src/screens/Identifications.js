import { useState } from "react";
import {
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";

import app from "../../app.json";
import data from "../../assets/data.json";
import Button from "../components/Button";

function Identifications() {
  const [value, setValue] = useState("");
  const [member, setMember] = useState(null);
  const [error, setError] = useState(false);
  const onChange = (text) => {
    setValue(text);
  };

  const onPress = () => {
    if (value.length > 0) {
      const newMember = data.members.find(({ firstname, lastname }) => {
        const fullname = `${firstname} ${lastname}`;
        return value.match(new RegExp(fullname, "i"));
      });

      if (newMember) {
        setMember(newMember);
      } else {
        setError(true);
      }
    }
  };
  return (
    <View style={styles.root}>
      <Text style={styles.title}>{app.expo.name}</Text>
      <Image source={require("../../assets/icon.png")} style={styles.logo} />
      <TextInput
        placeholder="Identifiant"
        style={styles.input}
        value={value}
        onChangeText={onChange}
      />
    </View>
  );
}

export default Identifications;

const styles = StyleSheet.create({
  root: {
    alignItems: "center",
  },
  logo: {
    height: 192,
    width: 192,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    margin: 10,
  },
  input: {
    padding: 8,
    borderColor: "black",
    borderWidth: 4,
    borderStyle: "solid",
    width: Dimensions.get("window").width - 64,
    fontSize: 20,
    paddingLeft: 14,
    margin: 10,
  },
});
