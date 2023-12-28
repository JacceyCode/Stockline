import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Animated, { SlideInLeft, SlideOutRight } from "react-native-reanimated";
import { Colors } from "../constants/colors";

const ImageSlide = () => {
  return (
    <Animated.View
      entering={SlideInLeft}
      exiting={SlideOutRight}
      style={styles.container}
    >
      {/* /////Elliptical dot///// */}
      <View style={styles.dot1}></View>

      {/* /////Images///// */}
      <Image
        style={styles.chart}
        source={require("../../assets/images/charts.png")}
      />

      <View style={styles.imageContainer1}>
        <Image
          style={styles.passport}
          source={require("../../assets/images/avatar-1.png")}
        />
        <Text style={styles.location}>Europe</Text>
      </View>

      <View style={styles.imageContainer2}>
        <Image
          style={styles.passport}
          source={require("../../assets/images/avatar-2.png")}
        />
        <Text style={styles.location}>Asia</Text>
      </View>

      <View style={styles.imageContainer3}>
        <Image
          style={styles.passport}
          source={require("../../assets/images/avatar-3.png")}
        />
        <Text style={styles.location}>U.S.A</Text>
      </View>

      <View style={styles.ellipse1}>
        <View style={styles.ellipse2}>
          <View style={styles.ellipse3}>
            <View style={styles.ellipse4}>
              <View style={styles.ellipse5}>
                <Image
                  style={styles.logo}
                  source={require("../../assets/images/app-logo.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </Animated.View>
  );
};

export default ImageSlide;

const length = Dimensions.get("screen").width - 50;
const ellipse1Len = length;
const ellipse2Len = length - 50;
const ellipse3Len = length - 100;
const ellipse4Len = length - 170;
const ellipse5Len = length - 250;
const styles = StyleSheet.create({
  // Image Container

  container: {
    justifyContent: "center",
    alignItems: "center",
    width: length,
    height: length,
    position: "relative",
  },

  ellipse1: {
    justifyContent: "center",
    alignItems: "center",
    width: ellipse1Len,
    height: ellipse1Len,
    borderColor: Colors.gray400,
    borderWidth: 2,
    borderRadius: ellipse1Len / 2,
  },
  ellipse2: {
    justifyContent: "center",
    alignItems: "center",
    width: ellipse2Len,
    height: ellipse2Len,
    borderColor: Colors.gray400,
    borderWidth: 2,
    borderRadius: ellipse2Len / 2,
  },
  ellipse3: {
    justifyContent: "center",
    alignItems: "center",
    width: ellipse3Len,
    height: ellipse3Len,
    borderColor: Colors.gray400,
    borderWidth: 2,
    borderRadius: ellipse3Len / 2,
  },
  ellipse4: {
    justifyContent: "center",
    alignItems: "center",
    width: ellipse4Len,
    height: ellipse4Len,
    backgroundColor: Colors.gray100,
    opacity: 0.8,
    borderRadius: ellipse4Len / 2,
  },
  ellipse5: {
    justifyContent: "center",
    alignItems: "center",
    width: ellipse5Len,
    height: ellipse5Len,
  },

  // Images
  logo: {
    width: 80,
    height: 80,
    resizeMode: "cover",
  },
  chart: {
    width: 200,
    height: 150,
    resizeMode: "cover",
    position: "absolute",
    top: 40,
    left: -35,
    zIndex: 10,
  },
  imageContainer1: {
    position: "absolute",
    top: 18,
    right: 70,
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer2: {
    position: "absolute",
    bottom: 20,
    right: 70,
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer3: {
    position: "absolute",
    bottom: 50,
    left: 35,
    zIndex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  passport: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    borderRadius: 20,
  },
  location: {
    color: Colors.gray700,
    fontFamily: "SFMedium",
    fontSize: 12,
  },

  ////// Dots ///////
  dot1: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: Colors.ellipse1,
    position: "absolute",
    top: -10,
    left: 40,
  },
});
