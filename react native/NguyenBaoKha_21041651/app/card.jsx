import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

const card = () => {
  const [increase, setIncrease] = useState(0);
  const [vat, setVat] = useState(0);

  function handleMinus() {
    if (increase > 0) setIncrease(increase - 1);
  }
  function handlePlus() {
    setIncrease(increase + 1);
  }
  function ThanhTien(increase, vat = 0) {
    const price = increase * 140000;
    const totalPrice = price + (price * vat / 100);
    return totalPrice;
  }

  return (
    <View style={styles.container}>
      <View>
        <View style={{ borderBottomWidth: 2, paddingVertical: 10 }}>
          <Text style={{ fontSize: 30, fontWeight: 600 }}>Card</Text>
        </View>

        <View style={styles.details}>
          <View style={styles.top}>
            <View>
              <Image source={require("../images/book.png")} resizeMode="contain" style={{}}/>
            </View>

            <View style={{display:'flex', flexDirection:'column', gap:15}}>
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
                <Text style={{color:'blue',cursor:'pointer'}}>mua sau</Text>
              </View>
            </View>
          </View>

          <View style={{display:'flex',alignItems:'center',flexDirection:'row', gap: 20}}>
            <Text>Ma giam gia da luu</Text>
            <Text style={{color: 'blue'}}>Xem tai day</Text>
          </View>

          <View style={{display:'flex',alignItems:'center',flexDirection:'row', justifyContent:'space-between'}}>
            <TextInput style={{borderWidth:2,padding: 20, flex:1}} placeholder="Nhap ma giam gia" />
            <TouchableOpacity>
              <Text style={{padding: 20, backgroundColor:'blue',color:'#fff',marginLeft:10}}>Ap dung</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </View>

      <View>
        <View style={{display:'flex',alignItems:'center',flexDirection:'row', gap: 20}}>
          <Text>Ban co phieu qua giam gia?</Text>
          <Text>Nhap tai day</Text>
        </View>

        <View style={{display:'flex',alignItems:'center',flexDirection:'row', justifyContent:'space-between',marginTop:10, borderBottomWidth:2, paddingBottom:30}}>
          <Text style={{fontSize:25}}>Tam tinh</Text>
          <Text style={{fontSize:25, color:'red',fontWeight:600}}>{ThanhTien(increase)} VND</Text>
        </View>
      </View>

      <View>
        <View style={{display:'flex',alignItems:'center',flexDirection:'row', justifyContent:'space-between', marginVertical:30}}>
          <Text style={{fontSize:25}}>Thanh tien</Text>
          <Text style={{fontSize:25, color:'red',fontWeight:600}}>{ThanhTien(increase)} VND</Text>
        </View>
        <TouchableOpacity style={styles.submit}>
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 20 }}>
            Tien hanh dat hang
          </Text>
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
    paddingBottom:20,
    borderBottomWidth:2
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
