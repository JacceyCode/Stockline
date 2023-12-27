import { useEffect } from "react";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    SFRegular: require("../../assets/fonts/SF-Pro-Display-Regular.ttf"),
    SFMedium: require("../../assets/fonts/SF-Pro-Display-Medium.ttf"),
    SFBold: require("../../assets/fonts/SF-Pro-Display-Bold.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
}
