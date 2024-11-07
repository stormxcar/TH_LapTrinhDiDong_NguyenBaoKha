import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
} from 'react-native';
import { useState, useEffect } from 'react';
import numeral from 'numeral';

const Screen_02 = ({ navigation }) => {
  const dataProduct = [
    {
      id: 1,
      image: require('./assets/images/ca_nau_lau.png'),
      name: 'Ca nấu lẩu, nấu mì mini 180l',
      supplier: 'Shop Devang',
      price: 100.0,
      discount: 10,
    },
    {
      id: 2,
      image: require('./assets/images/ga_bo_toi.png'),
      name: '1 kg khô gà bơ tỏi giòn rụm',
      supplier: 'LTĐ Food',
      price: 150.0,
      discount: 30,
    },
    {
      id: 3,
      image: require('./assets/images/xa_can_cau.png'),
      name: 'Xe đồ chơi cần cẩu đa năng',
      supplier: 'Thế giới đồ chơi 360',
      price: 350.0,
      discount: 20,
    },
    {
      id: 4,
      image: require('./assets/images/do_choi_dang_mo_hinh.png'),
      name: 'Đồ chơi dạng mô hình lắp ráp nhiều chi tiết',
      supplier: 'Thế giới đồ chơi',
      price: 490.0,
      discount: 5,
    },
    {
      id: 5,
      image: require('./assets/images/lanh_dao_gian_don.png'),
      name: 'Cuốn sách lãnh đạo giản đơn',
      supplier: 'Minh Long Book',
      price: 120.0,
      discount: 15,
    },
    {
      id: 6,
      image: require('./assets/images/hieu_long_con_tre.png'),
      name: 'Cuốn sách hiểu lòng con trẻ',
      supplier: 'Minh Long Book',
      price: 180.789,
      discount: 16,
    },
  ];
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(dataProduct);
  const [cartItems, setCartItems] = useState([]);

  const handleSearch = () => {
    const result = dataProduct.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredData(result);
  };

  const [cartItemCount, setCartItemCount] = useState(0);

  const handleAddToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );

    if (existingItemIndex === -1) {
      const updatedCartItems = [...cartItems, { ...item, quantity: 1 }];
      setCartItems(updatedCartItems);

      const totalQuantity = updatedCartItems.reduce(
        (total, item) => total + item.quantity,
        0
      );
      setCartItemCount(totalQuantity);

      navigation.navigate('Screen_03', {
        cartItems: updatedCartItems,
        resetCart,
      });
    } else {
      navigation.navigate('Screen_03', { cartItems, resetCart });
    }
  };

  const resetCart = () => {
    setCartItems([]);
    setCartItemCount(0);
  };

  // Tính tổng số lượng sản phẩm trong giỏ hàng mỗi khi cartItems thay đổi
  useEffect(() => {
    const totalQuantity = cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
    setCartItemCount(totalQuantity);
  }, [cartItems]);

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          marginBottom: 10,
          borderWidth: 2,
          width: '48%',
          padding: 10,
          marginRight: 5,
        }}>
        <Image source={item.image} style={{ width: '100%', height: 100 }} />
        <Text style={{ fontWeight: 600 }}>
          {item.name.length > 10 ? item.name.slice(0, 10) + '...' : item.name}
        </Text>
        <Text style={{ color: 'red' }}>{item.supplier}</Text>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Text style={{ fontWeight: 600 }}>
            {numeral(item.price).format('0,0.000') + '₫'}
          </Text>
          <Text>-{item.discount}%</Text>
        </View>
        <TouchableOpacity onPress={() => handleAddToCart(item)}>
          <Text
            style={{
              color: 'green',
              borderWidth: 2,
              padding: 5,
              marginTop: 8,
              textAlign: 'center',
            }}>
            Add to cart
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '100%',
          alignItems: 'center',
          paddingLeft: 10,
          paddingRight: 10,
          marginBottom: 10,
        }}>
        <TextInput
          value={searchText}
          onChangeText={(text) => setSearchText(text)}
          placeholder="search name product"
          style={{ borderWidth: 2, padding: 10, flex: 1 }}
        />
        <TouchableOpacity
          onPress={handleSearch}
          style={{
            paddingVertical: 10,
            borderWidth: 2,
            flex: 1,
            marginRight: 5,
          }}>
          <Text style={{ textAlign: 'center' }}>Tìm</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Screen_03', { cartItems })}
          style={{ borderWidth: 2, padding: 10, flex: 1 }}>
          <Text style={{ textAlign: 'center' }}>Cart({cartItemCount})</Text>
        </TouchableOpacity>
      </View>

      <View style={{ height: '400px', width: '100%' }}>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderItem}
          style={{ marginHorizontal: 10 }}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
};

export default Screen_02;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
