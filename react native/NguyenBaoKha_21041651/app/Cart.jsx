import {
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Link, router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Picker } from "@react-native-picker/picker";

const Product = () => {

  const [selectedValue , setSelectedValue] = useState('1');
  const [imageSrc , setImageSrc] = useState(require('../images/mobilePhone_1.png'))

  const changeColorBySelected = (value) => {
    switch (value) {
      case '1':
        return require('../images/mobilePhone_1.png');
      case '2':
        return require('../images/mobilePhone_2.png');
      case '3':
        return require('../images/mobilePhone_3.png');
      case '4':
        return require('../images/mobilePhone_4.png');
      default:
        return require('../images/mobilePhone_1.png');
    }
  }

  useEffect(() => {
    setImageSrc(changeColorBySelected(selectedValue))
  }, [selectedValue])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageMain}>
        <Image
          style={{ width: "100%", height: "100%" }}
          source={imageSrc}
          resizeMode="contain"
        />
      </View>
      <View style={styles.details}>
        <View>
          <Text style={{ fontSize: 30 }}>
            Điện thoại Vsmart Joy 3 - Hàng chính hãng
          </Text>
          <View style={{display:'flex',flexDirection:'row',alignItems:'center',gap:15,marginVertical:15}}>
            <View style={{display:'flex',alignItems:'center',flexDirection:'row'}}>
              <AntDesign name="star" size={30} color="yellow" />
              <AntDesign name="star" size={30} color="yellow" />
              <AntDesign name="star" size={30} color="yellow" />
              <AntDesign name="star" size={30} color="yellow" />
              <AntDesign name="star" size={30} color="yellow" />
            </View>

            <Link style={{ fontSize: 20 }} href="#">
              Xem 999 đánh giá
            </Link>
          </View>
        </View>

        <View style={{ display: "flex", gap: 20 }}>
          <Text style={{ fontSize: 20 }}>Gía: 9.999.999 đ</Text>
          <Text style={{ fontSize: 20, color: "red", fontWeight: 600 }}>
            Ở đâu rẻ hơn hoàn tiền !
          </Text>
          <View>
            <Picker
              selectedValue={selectedValue}
              style={styles.select}
              onValueChange={(itemValue) => setSelectedValue(itemValue)}
            >
            {/* <Picker.Item label="chon mau" value='1' /> */}
            <Picker.Item label="Đen" value='1' />
            <Picker.Item label="Xanh dương" value='2' />
            <Picker.Item label="Đỏ" value='3' />
            <Picker.Item label="Bạch kim" value='4' />
            </Picker>
          </View>
        </View>

        <View style={{display:'flex',alignItems:'center',gap:10,flexDirection:'row'}}>
        <TouchableOpacity style={styles.button}
        onPress={() => router.back()}
        >
            <Text style={{color:'#fff',fontSize:15}}>Quay lại</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button, {backgroundColor:'blue',flex:1}]}>
            <Text style={{ textAlign: "center", color: "#fff" }}>Mua ngay</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Product;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  imageMain: {
    width: "100%",
    height: "50%",
    // backgroundColor: "red",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginVertical:20
  },
  details: {
    width: "100%",
    paddingHorizontal: 30,
    // backgroundColor: "green",
    display: "flex",
    height: "50%",
    gap: 20,
    flex: 1,
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    textAlign: "center",
    fontSize: 20,
    borderRadius: 5,
  },
  select: {
    height: 50,
    width: '100%',
    color: 'black',
    backgroundColor: '#fff', 
    borderWidth: 2,
    padding:10
  },
});
