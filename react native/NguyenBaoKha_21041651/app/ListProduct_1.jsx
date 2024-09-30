import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import React from "react";
import { Link } from "expo-router";

const ListProduct_1 = () => {
  const data = [
    {
      id: 1,
      name: "Ca nấu lẩu, nấu mì mini tiện lợi",
      image: require("../images/ca_nau_lau.png"),
      supply: "Devang",
    },
    {
      id: 2,
      name: "1kg khô gà sốt bơ tỏi giòn rụm",
      image: require("../images/ga_bo_toi.png"),
      supply: "LTD Food",
    },
    {
      id: 3,
      name: "Xe cần cẩu đa năng",
      image: require("../images/xa_can_cau.png"),
      supply: "Thế giới đồ chơi",
    },
    {
      id: 4,
      name: "Đồ chơi dạng mô hình lắp ráp",
      image: require("../images/do_choi_dang_mo_hinh.png"),
      supply: "Thế giới đồ chơi",
    },
    {
      id: 5,
      name: "Sách Lãnh đạo đơn giản",
      image: require("../images/lanh_dao_gian_don.png"),
      supply: "Minh long Book",
    },
    {
      id: 6,
      name: "Sách hiểu lòng con trẻ",
      image: require("../images/book.png"),
      supply: "Minh Long Book",
    },
  ];
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 18, fontWeight: 600 }}>Back</Text>
        <Text style={{ fontSize: 18, fontWeight: 600 }}>CHAT</Text>
        <Text style={{ fontSize: 18, fontWeight: 600 }}>Cart</Text>
      </View>

      <View style={styles.showProduct}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.productDetail}>
              <View style={{ flex: 1 }}>
                <Image
                  source={item.image}
                  width={100}
                  height={100}
                  resizeMode="contain"
                />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 17, fontWeight: 500 }}>
                  {item.name}
                </Text>
                <Text>Shop {item.supply}</Text>
              </View>
              <TouchableOpacity
                style={{ padding: 16, backgroundColor: "red", width: 100 }}
              >
                <Text style={{ color: "#fff", textAlign: "center" }}>Chat</Text>
              </TouchableOpacity>
            </View>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
      <TouchableOpacity style={styles.btnLink}>
        <Link style={{fontSize:20,fontWeight:500}} href="/ListProduct_2">Show more product</Link>
        <Text>(render product by call api)</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ListProduct_1;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    flex: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "cyan",
    padding: 20,
  },
  showProduct: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    padding: 20,
  },
  productDetail: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 15,
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
  btnLink:{
    backgroundColor:'cyan',
    display: 'flex',
    alignItems:'center',
    paddingVertical:10
  }
});
