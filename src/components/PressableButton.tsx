import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { Colors } from "../constants/colors";

type Buttons = {
  title: String;
  onPress: () => void;
};

const PressableButton = ({ title, onPress }: Buttons) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default PressableButton;

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
});
