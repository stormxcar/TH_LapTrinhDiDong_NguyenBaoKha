import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  ActivityIndicator,
  View,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import {router} from 'expo-router';

const ListProduct_2 = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://6458b0fd8badff578ef7ea9b.mockapi.io/store")
      .then((response) => response.json())
      .then((json) => {
        setData(json);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <SafeAreaView style={styles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
            <Text style={{ fontSize: 18, fontWeight: 600 }}>Back</Text>
        </TouchableOpacity>
       
        <View style={{ flex: 1 }}>
          <TextInput
            style={{
              borderWidth: 1,
              paddingHorizontal: 10,
              paddingVertical: 12,
              borderRadius: 4,
            }}
            placeholder="something"
          />
        </View>
        <Text style={{ fontSize: 18, fontWeight: 600 }}>Cart</Text>
        <Text style={{ fontSize: 18, fontWeight: 600 }}>Menu</Text>
      </View>

      {/* <View style={styles.showProduct}> */}
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.productDetail}>
              <Image
                source={{ uri: item.image }}
                style={styles.image}
                resizeMode="contain"
              />
              <View style={styles.info}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.rating}>Rating: {item.count_rating}</Text>
                <Text style={styles.price}>Price: ${item.price}</Text>
                <Text style={styles.discount}>Discount: {item.discount}%</Text>
              </View>
            </View>
          )}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.flatListContent}
        />
      {/* </View> */}
    </SafeAreaView>
  );
};

export default ListProduct_2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  },
  header: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "cyan",
    padding: 20,
    gap: 15,
    marginBottom:10
  },
  productDetail: {
    flex: 1,
    flexDirection: 'column',
    margin: 10,
    padding: 16,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 120,
    marginRight: 16,
  },
  info: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "red",
  },
  rating: {
    fontSize: 16,
    color: "#888",
  },
  price: {
    fontSize: 16,
    color: "#000",
  },
  discount: {
    fontSize: 16,
    color: "#f00",
  },
  flatListContent: {
    paddingTop:10,
    paddingBottom: 20,
    backgroundColor:'lightgray'
  },
});
