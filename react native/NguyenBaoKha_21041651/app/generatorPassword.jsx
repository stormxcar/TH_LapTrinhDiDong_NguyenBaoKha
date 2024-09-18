import {
  SafeAreaView,
  StyleSheet,
  Text,
  CheckBox,
  TextInput,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
// import CheckBox from "@react-native-community/checkbox";

const generatorPassword = () => {
  const [textLength, setTextLength] = useState(8);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [isNumber, setIsNumber] = useState(false);
  const [isSpecialSymbol, setIsSpecialSymbol] = useState(false);

  const [text, setText] = useState("kha");

  const generatePassword = () => {
    const lower = "abcdefghijklmnopqrstuvwxyz";
    const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const symbol = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

    let char = "";

    if (isLowerCase) char += lower;
    if (isUpperCase) char += upper;
    if (isNumber) char += number;
    if (isSpecialSymbol) char += symbol;

    let password = "";

    for (let i = 0; i < textLength; i++) {
      password += char.charAt(Math.floor(Math.random() * char.length));
    }

    setText(password);
  };

  useEffect(() => {
    generatePassword();
  }, [textLength,isLowerCase, isUpperCase, isNumber, isSpecialSymbol]);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={{ color: "#fff", fontSize: 45 }}>Generator Password</Text>
      </View>

      <View
        style={{ width: "100%", paddingHorizontal: 16, paddingVertical: 25 }}
      >
        <TextInput
          style={[
            styles.input,
            { width: "100%", textAlign: "center", fontSize: 30 },
          ]}
          placeholder="your password"
          value={text}
          editable={false}
          selectTextOnFocus={false}
          // multiline={true}
          onChangeText={generatePassword}
        />
      </View>

      <View>
        <View style={styles.label}>
          <Text style={{ color: "#fff", fontSize: 20 }}>Password Length</Text>
          <TextInput
            style={styles.input}
            placeholder="0"
            value={textLength.toString()}
            onChangeText={(value) => setTextLength(parseInt(value) || 0)}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.label}>
          <Text style={{ color: "#fff", fontSize: 20 }}>
            Include lower case letters
          </Text>
          <CheckBox
            value={isLowerCase}
            onValueChange={setIsLowerCase}
            style={styles.checkBox}
            tintColors={{ true: "#fff", false: "#fff" }}
          />
        </View>
        <View style={styles.label}>
          <Text style={{ color: "#fff", fontSize: 20 }}>
            Include upcase letters
          </Text>
          <CheckBox
            value={isUpperCase}
            onValueChange={setIsUpperCase}
            style={styles.checkBox}
            tintColors={{ true: "#fff", false: "#fff" }}
          />
        </View>
        <View style={styles.label}>
          <Text style={{ color: "#fff", fontSize: 20 }}>Include number</Text>
          <CheckBox
            value={isNumber}
            onValueChange={setIsNumber}
            style={styles.checkBox}
            tintColors={{ true: "#fff", false: "#fff" }}
          />
        </View>
        <View style={styles.label}>
          <Text style={{ color: "#fff", fontSize: 20 }}>
            Include special symbol
          </Text>
          <CheckBox
            value={isSpecialSymbol}
            onValueChange={setIsSpecialSymbol}
            style={styles.checkBox}
            tintColors={{ true: "#fff", false: "#fff" }}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default generatorPassword;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    display: "flex",
    gap: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "purple",
  },
  label: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    marginVertical: 15,
    gap: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    borderColor: "#fff",
    borderRadius: 4,
    color: "#fff",
  },
  checkBox: {
    width: 40,
    height: 40,
  },
});
