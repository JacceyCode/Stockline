import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { Stack, router, useLocalSearchParams } from "expo-router";
import OTPTextInput from "react-native-otp-textinput";
import { Colors } from "../../constants/colors";
import PressableButton from "../../components/PressableButton";

const Verification = () => {
  const [otpInput, setOtpInput] = useState<string>("");
  const { code, name } = useLocalSearchParams();

  const onConfirmOTPHandler = () => {
    const isValidOTP = otpInput === code;

    if (!isValidOTP) {
      Alert.alert("Error", "Invalid OTP input!");
      return;
    }
    router.replace({
      pathname: "/screens/successPage",
      params: { name: name },
    });
  };

  return (
    <View style={styles.container}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "",
        }}
      />

      <View style={styles.inputContainer}>
        <View style={styles.inputHeader}>
          <Text style={styles.header}>Enter verification code</Text>
          <Text style={styles.description}>
            We have sent the code verification to your mobile number
          </Text>
        </View>

        <View style={styles.numberContainer}>
          <OTPTextInput
            textInputStyle={styles.otpInput}
            handleTextChange={(text) => setOtpInput(text)}
          />
          <TouchableOpacity onPress={() => router.back()}>
            <Text style={styles.resendCode}>Resend Code</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <PressableButton
          title="Verify Accounts"
          onPress={onConfirmOTPHandler}
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
  inputContainer: {
    gap: 40,
  },
  inputHeader: {
    alignItems: "center",
    gap: 6,
  },
  header: {
    color: Colors.gray800,
    fontFamily: "SFBold",
    fontSize: 20,
  },
  description: {
    textAlign: "center",
    color: Colors.gray600,
    fontFamily: "SFRegular",
    fontSize: 15,
    paddingHorizontal: 35,
  },
  numberContainer: {
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  resendCode: {
    textAlign: "center",
    color: Colors.primary50,
    fontFamily: "SFBold",
    fontSize: 12,
  },
  otpInput: {
    borderWidth: 2,
    borderBottomWidth: 2,
    borderRadius: 10,
  },

  buttonContainer: {
    width: "100%",
    height: 50,
  },
});
