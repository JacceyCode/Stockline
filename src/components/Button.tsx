import { Link } from "expo-router";
import { StyleSheet, Pressable, Text, TouchableOpacity } from "react-native";
import { Colors } from "../constants/colors";

type Buttons = {
  title: String;
  path: String;
  primary?: Boolean;
  onPress?: any;
};

const Buttons = ({ title, path, primary, onPress }: Buttons) => {
  return (
    <Link href={`/screens/${path}`} asChild>
      <TouchableOpacity
        onPress={onPress}
        style={primary ? styles.primaryButton : styles.button}
      >
        <Text style={primary ? styles.primaryText : styles.text}>{title}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: Colors.primary50,
    padding: 8,
    borderRadius: 16,
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: Colors.white,
    fontSize: 14,
    fontFamily: "SFBold",
  },
  primaryButton: {
    flex: 1,
    padding: 8,
    borderRadius: 16,
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: Colors.primary50,
  },
  primaryText: {
    color: Colors.primary50,
    fontSize: 14,
    fontFamily: "SFBold",
  },
});
