import { Link } from "expo-router";
import { StyleSheet, Button, Pressable, Text } from "react-native";
import { Colors } from "../constants/colors";

type Buttons = {
  title: String;
  path: String;
  primary?: Boolean;
};

const Buttons = ({ title, path, primary }: Buttons) => {
  return (
    <Link href={`/screen/${path}`} asChild>
      <Pressable style={primary ? styles.primaryButton : styles.button}>
        <Text style={primary ? styles.primaryText : styles.text}>{title}</Text>
      </Pressable>
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
    backgroundColor: Colors.white,
    padding: 8,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colors.primary50,
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  primaryText: {
    color: Colors.primary50,
    fontSize: 14,
    fontFamily: "SFBold",
  },
});
