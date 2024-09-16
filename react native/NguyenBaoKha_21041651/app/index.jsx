import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Link, router } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 60 }}>
        <View style={styles.circle}></View>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text style={{ fontSize: 40, fontWeight: 600, textAlign: "center" }}>
          GROW
        </Text>
        <Text style={{ fontSize: 40, fontWeight: 600, textAlign: "center" }}>
          YOUR BUSINESS
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 17,
            fontWeight: 200,
            textAlign: "center",
            marginVertical: 40,
          }}
        >
          We will help you to grow your business using online server
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            router.push("/login");
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 20, fontWeight: 500 }}>
            LOGIN
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            router.push("/signup");
          }}
        >
          <Text style={{ textAlign: "center", fontSize: 20, fontWeight: 500 }}>
            SIGN UP
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#00CCF9",
    gap: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 40,
    flexDirection: "column",
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 100,
    borderColor: "black",
    borderWidth: 15,
  },
  button: {
    backgroundColor: "#E3C000",
    padding: 10,
    borderRadius: 7,
    width: 150,
  },
});
