import { Image, StyleSheet, Text, View } from "react-native";

import Buttons from "../../components/Button";
import { Colors } from "../../constants/colors";

const Verification = () => {
  return (
    <View style={styles.container}>
      <View style={styles.container2}>
        <View style={styles.headerContainer}>
          <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require("../../../assets/images/union.png")}
            />

            {/* /////Elliptical dot///// */}
            <View style={styles.dot1}></View>
            <View style={styles.dot2}></View>
            <Image
              style={styles.star1}
              source={require("../../../assets/images/Star1.png")}
            />
            <Image
              style={styles.wave}
              source={require("../../../assets/images/wave.png")}
            />
            <Image
              style={styles.star2}
              source={require("../../../assets/images/Star2.png")}
            />
          </View>
          <View style={styles.glass}></View>
        </View>

        <View style={styles.textContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <Text style={styles.title}>Hello Tocky!</Text>
            <Image
              style={{ width: 20, height: 20, resizeMode: "cover" }}
              source={require("../../../assets/images/hand.png")}
            />
          </View>
          <Text style={styles.title}>Welcome to Stockline</Text>
          <Text style={styles.description}>It’s great to have you here</Text>

          {/* /////Elliptical dot///// */}
          <View style={styles.dot4}></View>
          <View style={styles.dot3}></View>
          <Image
            style={styles.star3}
            source={require("../../../assets/images/Star1.png")}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Buttons
          title="I’m ready to start!"
          path="successPage"
          primary={false}
          // onPress={() => {
          //   Alert.alert(phoneNumber);
          // }}
        />
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  container2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 140,
    height: 140,
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "cover",
  },
  glass: {
    position: "absolute",
    bottom: -50,
    backgroundColor: Colors.white,
    opacity: 0.5,
    width: "100%",
    height: 100,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    gap: 10,
    position: "relative",
  },
  title: {
    fontFamily: "SFBold",
    fontSize: 20,
    color: Colors.gray800,
  },
  description: {
    textAlign: "center",
    color: Colors.gray600,
    fontSize: 13,
    fontFamily: "SFRegular",
    marginTop: 15,
  },

  buttonContainer: {
    width: "100%",
    height: 50,
  },

  ////// Dots ///////
  dot1: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.dot4,
    position: "absolute",
    top: -60,
    left: -60,
  },
  dot2: {
    width: 6,
    height: 6,
    backgroundColor: Colors.ellipse2,
    position: "absolute",
    top: 10,
    right: 0,
    transform: "rotate(-25deg)",
  },
  star1: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    position: "absolute",
    top: 0,
    left: 0,
  },
  wave: {
    width: 50,
    height: 10,
    resizeMode: "contain",
    position: "absolute",
    bottom: 45,
    left: 10,
  },
  star2: {
    width: 20,
    height: 20,
    resizeMode: "contain",
    position: "absolute",
    bottom: 45,
    right: 0,
  },

  star3: {
    width: 15,
    height: 15,
    resizeMode: "contain",
    position: "absolute",
    top: 30,
    left: 0,
  },
  dot3: {
    width: 6,
    height: 6,
    backgroundColor: Colors.dot3,
    position: "absolute",
    top: 10,
    right: 20,
    transform: "rotate(-25deg)",
  },
  dot4: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.dot5,
    position: "absolute",
    bottom: -15,
    left: 90,
  },
});
