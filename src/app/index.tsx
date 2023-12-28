import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

import Buttons from "../components/Button";
import { Colors } from "../constants/colors";
import { onboardingData } from "../constants/onboardingData";
import {
  GestureDetector,
  Gesture,
  Directions,
} from "react-native-gesture-handler";
import Animated, {
  SlideInLeft,
  SlideInRight,
  SlideOutLeft,
  SlideOutRight,
} from "react-native-reanimated";

export default function OnboardingScreen() {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = onboardingData[screenIndex];
  const isFirstScreen = screenIndex === 0;
  const isLastSCreen = screenIndex === onboardingData.length - 1;

  ///GESTURE
  const onForward = () => {
    if (isLastSCreen) {
      setScreenIndex(0);
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const onBackward = () => {
    if (isFirstScreen) {
      setScreenIndex(onboardingData.length - 1);
    } else {
      setScreenIndex(screenIndex - 1);
    }
  };

  const swipeRight = Gesture.Fling()
    .direction(Directions.RIGHT)
    .onEnd(onBackward);

  const swipeLeft = Gesture.Fling().direction(Directions.LEFT).onEnd(onForward);

  const swipe = Gesture.Simultaneous(swipeRight, swipeLeft);

  return (
    <>
      <View style={styles.container}>
        <Text style={styles.skip}>Skip</Text>

        <GestureDetector gesture={swipe}>
          <View key={screenIndex} style={styles.screen}>
            <Animated.Text
              entering={SlideInLeft}
              exiting={SlideOutRight}
              style={styles.title}
            >
              {data.title}
            </Animated.Text>

            <Animated.Text
              entering={SlideInLeft}
              exiting={SlideOutRight}
              style={styles.description}
            >
              {data.description}
              {data.amount && <Text style={styles.amount}> {data.amount}</Text>}
              .
            </Animated.Text>
          </View>
        </GestureDetector>

        <View style={styles.stepIndicatorContainer}>
          {onboardingData.map((data, index) => (
            <View
              style={[
                styles.stepIndicator,
                {
                  backgroundColor:
                    index === screenIndex ? Colors.primary50 : Colors.gray400,
                },
              ]}
              key={index}
            />
          ))}
        </View>

        <View style={styles.buttons}>
          <Buttons title="Log In" path="login" primary={true} />
          <Buttons title="Get Started" path="signup" primary={false} />
        </View>
      </View>
      <StatusBar style="dark" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: "center",
  },
  skip: {
    // flex: 1,
    color: Colors.primary50,
    fontFamily: "SFMedium",
    fontSize: 16,
    alignSelf: "flex-end",
    paddingTop: 30,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: Colors.gray800,
    fontSize: 22,
    fontFamily: "SFBold",
    lineHeight: 60,
  },
  description: {
    textAlign: "center",
    color: Colors.gray600,
    fontSize: 16,
    fontFamily: "SFMedium",
  },
  amount: {
    color: Colors.primary50,
  },
  buttons: {
    flexDirection: "row",
    gap: 16,
    width: "100%",
  },

  // steps
  stepIndicatorContainer: {
    flexDirection: "row",
    width: 80,
    margin: 30,
    borderRadius: 5,
    backgroundColor: Colors.gray400,
  },
  stepIndicator: {
    flex: 1,
    height: 8,
    borderRadius: 5,
  },
});
