import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useRouter , Link, router } from "expo-router";

const card = () => {
  const router = useRouter();

  const [increase, setIncrease] = useState(0);

  const randomSpecial = Math.floor(Math.random() * 9999);
  const [randNum, setRandNum] = useState(0);

  function handleMinus() {
    if (increase > 0) setIncrease(increase - 1);
  }
  function handlePlus() {
    setIncrease(increase + 1);
  }
  function ThanhTien(increase) {
    return increase * 140000;
  }

  return (
    <View style={styles.container}>
      <View>
        <View
          style={{
            borderBottomWidth: 2,
            paddingVertical: 10,
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 15,
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <AntDesign name="arrowleft" size={30} color="black" />
          </TouchableOpacity>
          <Text style={{ fontSize: 30, fontWeight: 600 }}>Card</Text>
        </View>

        <View style={styles.details}>
          <View style={styles.top}>
            <View>
              <Image
                source={require("../images/book.png")}
                resizeMode="contain"
                style={{}}
              />
            </View>

            <View style={{ display: "flex", flexDirection: "column", gap: 15 }}>
              <View>
                <Text style={{ fontSize: 30, fontWeight: 500, width: 250 }}>
                  Nguyen ham tich pha ung dung
                </Text>
                <Text style={{ fontSize: 18, color: "gray" }}>
                  Cung cap boi Tiki trading
                </Text>
              </View>
              <Text style={{ fontSize: 25 }}>Gia : 140.000 đ</Text>
              <View
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                  gap: 15,
                }}
              >
                <TouchableOpacity onPress={() => handleMinus()}>
                  <AntDesign
                    style={styles.btnHandle}
                    name="minus"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
                <Text>{increase}</Text>
                <TouchableOpacity onPress={() => handlePlus()}>
                  <AntDesign
                    style={styles.btnHandle}
                    name="plus"
                    size={24}
                    color="black"
                  />
                </TouchableOpacity>
              </View>
              <View>
                <Text style={{ color: "blue", cursor: "pointer" }}>
                  mua sau
                </Text>
              </View>
            </View>
          </View>

          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              gap: 20,
            }}
          >
            <Text style={{ color: "red" }}>Ma giam gia da luu</Text>
            <TouchableOpacity
              style={{ color: "blue" }}
              onPress={() => setRandNum(randomSpecial)}
            >
              Lay tai day:
            </TouchableOpacity>
          </View>

          <View
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextInput
              style={{ borderWidth: 2, padding: 20, flex: 1 }}
              placeholder="Nhap ma giam gia"
              value={randNum}
            />

            <TouchableOpacity
              onPress={() =>
                Alert.alert("Da ap dung ma vao don hang cua ban !")
              }
            >
              <Text
                style={{
                  padding: 20,
                  backgroundColor: "blue",
                  color: "#fff",
                  marginLeft: 10,
                }}
              >
                Ap dung
              </Text>
            </TouchableOpacity>
          </View>
          {randNum ? <Text>Giam 10% cho tong hoa don</Text> : null}
        </View>
      </View>

      <View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            gap: 20,
          }}
        ></View>

        <View
          style={{
            display: "flex",
            // alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
            borderBottomWidth: 2,
            paddingBottom: 30,
          }}
        >
          <Text style={{ fontSize: 25 }}>Tam tinh</Text>
          <Text style={{ fontSize: 25, color: "red", fontWeight: 600 }}>
            {ThanhTien(increase)}
            {randNum ? (
              <Text style={{ display: "block" }}>
                {" "}
                - {0.1 * ThanhTien(increase)}
              </Text>
            ) : null}
          </Text>
        </View>
      </View>

      <View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 30,
          }}
        >
          <Text style={{ fontSize: 25 }}>Thanh tien</Text>
          <Text style={{ fontSize: 25, color: "red", fontWeight: 600 }}>
            {randNum
              ? ThanhTien(increase) - 0.1 * ThanhTien(increase)
              : ThanhTien(increase)}
          </Text>
        </View>
        <TouchableOpacity style={styles.submit}>
          <Link style={{color:'#fff',textAlign:'center', fontSize:26}} href="/feedback">Thanh toan</Link>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default card;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    gap: 20,
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  details: {
    display: "flex",
    flexDirection: "column",
    gap: 15,
    paddingVertical: 30,
    maxWidth: "100%",
  },
  top: {
    display: "flex",
    gap: 15,
    flexDirection: "row",
    paddingBottom: 20,
    borderBottomWidth: 2,
  },
  btnHandle: {
    borderWidth: 2,
  },
  submit: {
    backgroundColor: "red",
    padding: 15,
    borderRadius: 7,
  },
});
