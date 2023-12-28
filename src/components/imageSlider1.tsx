import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import Animated, { SlideInLeft, SlideOutRight } from "react-native-reanimated";
import { Colors } from "../constants/colors";

const ImageSlider1 = () => {
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
          style={styles.passport1}
          source={require("../../assets/images/avatar-2.png")}
        />
        <Text style={styles.location}>Asia</Text>
      </View>

      <View style={styles.imageContainer3}>
        <Image
          style={styles.passport2}
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

export default ImageSlider1;

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
    right: 60,
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
  passport1: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    borderRadius: 20,
    backgroundColor: Colors.ellipse3,
  },
  passport2: {
    width: 40,
    height: 40,
    resizeMode: "cover",
    borderRadius: 20,
    backgroundColor: Colors.ellipse1,
  },
  location: {
    color: Colors.gray700,
    fontFamily: "SFMedium",
    fontSize: 12,
  },

  ////// Dots ///////
  dot1: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.ellipse1,
    position: "absolute",
    top: -10,
    left: 40,
  },
  dot2: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.ellipse2,
    position: "absolute",
    top: 65,
    left: 45,
  },
  dot3: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.ellipse3,
    position: "absolute",
    top: 15,
    right: 0,
  },
  dot4: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.gray400,
    position: "absolute",
    top: 15,
    left: "45%",
  },
  dot5: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.gray400,
    position: "absolute",
    top: "70%",
    right: 100,
  },
  dot6: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: Colors.ellipse5,
    position: "absolute",
    bottom: 0,
    left: 50,
  },
  dot7: {
    width: 10,
    height: 10,
    borderRadius: 5,
    borderColor: Colors.ellipse4,
    borderWidth: 1,
    position: "absolute",
    bottom: 40,
    left: "60%",
  },
});
