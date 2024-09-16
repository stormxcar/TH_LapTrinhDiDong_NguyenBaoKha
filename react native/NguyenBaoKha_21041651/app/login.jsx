import { StyleSheet, Text, View , TextInput ,TouchableOpacity} from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function loginScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text>Login</Text>
      </View>
      <View>
        <TextInput />
        <TextInput />
      </View>
      <View>
        <TouchableOpacity>
          <Text>Log in</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text>When you agree with term and conditions</Text>
        <Text>Forgot your password</Text>
        <Text>Or Login with</Text>
      </View>
      <View>
        <Link style={{ color: "orange" }} href="/signup">
          Sign up
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
