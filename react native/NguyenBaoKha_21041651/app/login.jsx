import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link, router } from "expo-router";

export default function loginScreen() {
  return (
    <View style={styles.container}>
      <View style={{marginBottom:40}}>
        <Text style={{ fontSize: 40, fontWeight: 700 }}>Login</Text>
      </View>
      <View style={{ display: "flex", gap: 20 }}>
        <TextInput  style={styles.input} placeholder="email" />
        <TextInput style={styles.input} placeholder="password" />
      </View>
      <View>
        <TouchableOpacity style={styles.button} 
        onPress={() => {
          router.push("/card");
        }}
        >
          <Text style={{ textAlign: "center", fontSize: 30, fontWeight: 600 }}>
            LOGIN
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.options}>
        <Text>When you agree with term and conditions</Text>
        <Link href="/generatorPassword" style={{color:'blue',textDecorationLine:'underline'}}>Forgot your password</Link>
        <Text>You haven't an account ?</Text>
        <Link style={{color:'red',textDecorationLine:'underline'}} href="/signup">Sign up</Link>
        <Text>Or Login with</Text>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          gap: 15,
          flexDirection: "row",
        }}
      >
        <Link style={styles.linkRef} href="/signup">
          Facebook
        </Link>
        <Link style={styles.linkRef} href="/signup">
          Google
        </Link>
        <Link style={styles.linkRef} href="/signup">
          Twitter
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    width: "100%",
    backgroundColor: "#31AA5230",
    height: "100vh",
  },
  button: {
    padding: 10,
    paddingHorizontal:60,
    backgroundColor: "#E3C000",
    flex:1,
    borderRadius:3
  },
  options: {
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginVertical:30
  },
  input: {
    borderRadius: 5,
    padding: 15,
    width: 360,
    backgroundColor: "#fff",
  },
  linkRef: {
    color: "#fff",
    // textDecorationLine:'underline',
    backgroundColor: "blue",
    padding: 15,
    borderRadius:3
  },
});
