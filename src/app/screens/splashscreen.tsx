import { StyleSheet, Text, View } from "react-native";
import { Colors } from "../../constants/colors";

const Splash = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Stockline<Text style={styles.dot}>.</Text>
      </Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.white,
  },
  text: {
    color: Colors.gray800,
    fontFamily: "SFBold",
    fontSize: 40,
  },
  dot: {
    color: Colors.primary50,
  },
});
