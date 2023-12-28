import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Animated, { SlideInLeft, SlideOutRight } from "react-native-reanimated";
import { Colors } from "../constants/colors";

const ImageSlider2 = () => {
  return (
    <Animated.View
      entering={SlideInLeft}
      exiting={SlideOutRight}
      style={styles.container}
    >
      {/* /////Elliptical dot///// */}
      <View style={styles.dot1}></View>
      <View style={styles.dot2}></View>
      <View style={styles.dot3}></View>
      <View style={styles.dot4}></View>
      <View style={styles.dot5}></View>
      <View style={styles.dot6}></View>
      <View style={styles.dot7}></View>
      <View style={styles.dot8}></View>
      <View style={styles.dot9}></View>
      <View style={styles.dot10}></View>
      <View style={styles.dot11}></View>

      {/* /////Images///// */}
      <Image
        style={styles.chart}
        source={require("../../assets/images/goog.png")}
      />

      <Image
        style={styles.chart1}
        source={require("../../assets/images/fb.png")}
      />

      <View style={styles.imageContainer1}>
        <View style={styles.imageBackground}>
          <Image
            style={styles.passport1}
            source={require("../../assets/images/amazon.png")}
          />
        </View>
        <Text style={styles.location}>+ 6,345%</Text>
      </View>

      <View style={styles.imageContainer2}>
        <View style={styles.imageBackground}>
          <Image
            style={styles.passport2}
            source={require("../../assets/images/netflix.png")}
          />
        </View>
        <Text style={styles.location}>+ 2,345%</Text>
      </View>

      <View style={styles.imageContainer3}>
        <View style={styles.imageBackground}>
          <Image
            style={styles.passport3}
            source={require("../../assets/images/coub.png")}
          />
        </View>
        <Text style={styles.location}>+ 1,666%</Text>
      </View>

      <View style={styles.ellipse}>
        <Image
          style={styles.logo}
          source={require("../../assets/images/union.png")}
        />

        {/* curve */}
        <View style={styles.curveContainer1}>
          <Image
            style={styles.curve1}
            source={require("../../assets/images/curve1.png")}
          />
        </View>
        <View style={styles.curveContainer2}>
          <Image
            style={styles.curve2}
            source={require("../../assets/images/curve2.png")}
          />
        </View>
        <View style={styles.curveContainer3}>
          <Image
            style={styles.curve3}
            source={require("../../assets/images/curve3.png")}
          />
        </View>
      </View>
    </Animated.View>
  );
};

export default ImageSlider2;

const length = Dimensions.get("screen").width - 50;
const ellipse2Len = length - 40;

const styles = StyleSheet.create({
  // Image Container
  container: {
    justifyContent: "center",
    alignItems: "center",
    width: length,
    height: length,
    position: "relative",
  },

  ellipse: {
    justifyContent: "center",
    alignItems: "center",
    width: ellipse2Len,
    height: ellipse2Len,
    borderColor: Colors.primary50,
    borderWidth: 2,
    borderStyle: "dashed",
    borderRadius: ellipse2Len / 2,
    position: "relative",
  },

  // Images
  logo: {
    width: 60,
    height: 60,
    resizeMode: "cover",
  },
  curveContainer1: {
    position: "absolute",
    left: -10,
    top: 80,
    transform: "rotate(-15deg)",
  },
  curve1: {
    width: 30,
    height: 120,
    resizeMode: "contain",
  },
  curveContainer2: {
    position: "absolute",
    right: -10,
    bottom: 0,
    transform: "rotate(-8deg)",
  },
  curve2: {
    width: 150,
    height: 60,
    resizeMode: "contain",
  },
  curveContainer3: {
    position: "absolute",
    right: 8,
    top: -90,
    transform: "rotate(3deg)",
  },
  curve3: {
    width: 90,
    height: 250,
    resizeMode: "contain",
  },
  chart: {
    width: 100,
    height: 50,
    resizeMode: "cover",
    position: "absolute",
    top: 40,
    left: 0,
    zIndex: 10,
  },
  chart1: {
    width: 70,
    height: 70,
    resizeMode: "cover",
    position: "absolute",
    top: 120,
    right: -20,
    zIndex: 10,
  },
  imageContainer1: {
    position: "absolute",
    top: 25,
    right: 50,
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageBackground: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.white,
    justifyContent: "center",
    alignItems: "center",
  },
  passport1: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    borderRadius: 20,
  },
  imageContainer2: {
    position: "absolute",
    bottom: 22,
    right: 18,
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  passport2: {
    width: 30,
    height: 30,
    resizeMode: "cover",
    borderRadius: 15,
  },
  imageContainer3: {
    position: "absolute",
    bottom: 65,
    left: 5,
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  passport3: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    borderRadius: 20,
  },
  location: {
    color: Colors.gray800,
    fontFamily: "SFBold",
    fontSize: 12,
  },

  ////// Dots ///////
  dot1: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.ellipse5,
    position: "absolute",
    top: -10,
    left: 40,
  },
  dot2: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.gray400,
    position: "absolute",
    top: 10,
    left: "40%",
  },
  dot3: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.gray400,
    position: "absolute",
    top: 0,
    right: 0,
  },
  dot4: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.gray400,
    position: "absolute",
    top: 100,
    left: 90,
  },
  dot5: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.gray400,
    position: "absolute",
    top: 135,
    right: 50,
  },
  dot6: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.gray400,
    position: "absolute",
    bottom: 60,
    left: 100,
  },
  dot7: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.dot1,
    position: "absolute",
    bottom: 100,
    right: 110,
  },
  dot8: {
    width: 25,
    height: 25,
    borderRadius: 8,
    backgroundColor: Colors.dot2,
    position: "absolute",
    bottom: 8,
    left: 100,
    transform: "rotate(-20deg)",
    zIndex: 10,
  },
  dot9: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.gray400,
    position: "absolute",
    bottom: 70,
    right: 0,
  },
  dot10: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.gray400,
    position: "absolute",
    bottom: -20,
    left: 80,
  },
  dot11: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.gray400,
    position: "absolute",
    bottom: 0,
    right: 60,
  },
});
