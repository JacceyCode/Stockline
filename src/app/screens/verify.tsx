import { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import PhoneInput from "react-native-phone-number-input";
import Buttons from "../../components/Button";
import { Colors } from "../../constants/colors";

const Verification = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const params = useLocalSearchParams();

  console.log(params);

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
          <Text style={styles.header}>Enter your phone number</Text>
          <Text style={styles.description}>
            You'll receive a 4 digit code for the phone number verification
          </Text>
        </View>

        <View style={styles.numberContainer}>
          <PhoneInput
            defaultValue={phoneNumber}
            defaultCode="US"
            containerStyle={styles.flag}
            textContainerStyle={styles.text}
            textInputStyle={styles.numberStyle}
            flagButtonStyle={{
              borderRightWidth: 2,
              borderRightColor: Colors.gray400,
              paddingVertical: 5,
            }}
            codeTextStyle={{
              color: Colors.gray600,
              fontFamily: "SFRegular",
              fontSize: 15,
            }}
            autoFocus
            onChangeFormattedText={(text) => setPhoneNumber(text)}
          />
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Buttons
          title="Send Code"
          path="otpConfirmation"
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
  },
  flag: {
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors.gray400,
  },
  text: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: Colors.white,
  },
  numberStyle: {
    color: Colors.gray800,
    fontFamily: "SFRegular",
    fontSize: 15,
  },
  buttonContainer: {
    width: "100%",
    height: 50,
  },
});
