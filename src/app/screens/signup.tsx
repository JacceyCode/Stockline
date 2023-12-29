import {
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { Link } from "expo-router";
import { Colors } from "../../constants/colors";
import { useState } from "react";
import Buttons from "../../components/Button";

export default function SignUp() {
  const [username, onChangeUsername] = useState("");
  const [email, onChangeEmail] = useState("");
  const [password, onChangePassword] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.logoContainer}>
          <Image
            style={styles.logo}
            source={require("../../../assets/images/icon.png")}
          />
        </View>
        <View style={styles.glass}></View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Join Stockline</Text>
        <Text style={styles.description}>
          Start investing for your favorite companies with as little as{" "}
          <Text style={styles.amount}>$1</Text>
        </Text>
      </View>

      <View style={styles.inputContainer}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          //   style={styles.inputContainer}
        >
          <TextInput
            style={styles.input}
            placeholder="Username"
            onChangeText={onChangeUsername}
            value={username}
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            onChangeText={onChangeEmail}
            value={email}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            onChangeText={onChangePassword}
            value={password}
            secureTextEntry={true}
          />
        </KeyboardAvoidingView>
        <View style={{ width: "100%", height: 50 }}>
          <Buttons title="Continue" path="verify" primary={false} />
        </View>
      </View>

      <View style={styles.alternativeLoginContainer}>
        <View style={styles.divider}>
          <View style={styles.dividerLine}></View>
          <Text style={styles.dividerText}>Or continue with</Text>
          <View style={styles.dividerLine}></View>
        </View>

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Image
              style={styles.buttonImage}
              source={require("../../../assets/images/google.png")}
            />
          </View>
          <View style={styles.button}>
            <Image
              style={styles.buttonImage}
              source={require("../../../assets/images/apple.png")}
            />
          </View>
        </View>

        <View style={styles.link}>
          <Text style={styles.linkText}>
            Already have an account?{" "}
            <Link href={"/screens/login"} asChild>
              <Text style={styles.linkHref}>Sign In</Text>
            </Link>
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    marginTop: 50,
    gap: 20,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  logoContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: Colors.primary50,
    borderWidth: 15,
    borderColor: Colors.primary200,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: "cover",
  },
  glass: {
    position: "absolute",
    bottom: -50,
    backgroundColor: Colors.white,
    opacity: 0.5,
    width: "100%",
    height: 80,
  },
  textContainer: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    gap: 10,
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
    fontFamily: "SFBold",
  },
  amount: {
    color: Colors.primary50,
  },

  inputContainer: {
    gap: 10,
  },
  input: {
    width: "100%",
    height: 45,
    borderWidth: 2,
    borderColor: Colors.gray400,
    borderRadius: 15,
    paddingHorizontal: 20,
    marginVertical: 5,
    fontSize: 16,
    color: Colors.gray800,
    fontFamily: "SFMedium",
  },
  alternativeLoginContainer: {
    flex: 1,
    marginTop: 15,
    gap: 20,
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  dividerLine: {
    flex: 1,
    backgroundColor: Colors.gray400,
    height: 2,
  },
  dividerText: {
    fontFamily: "SFRegular",
    color: Colors.gray600,
    fontSize: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 16,
    width: "100%",
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: 60,
    borderRadius: 16,
    borderWidth: 2,
    borderColor: Colors.gray400,
  },
  buttonImage: {
    width: 20,
    height: 20,
    resizeMode: "cover",
  },
  link: {
    alignItems: "center",
    marginTop: 20,
  },
  linkText: {
    color: Colors.gray800,
    fontSize: 14,
    fontFamily: "SFBold",
  },
  linkHref: {
    color: Colors.primary50,
  },
});
