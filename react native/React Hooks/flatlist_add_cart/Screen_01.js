import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
} from 'react-native';
import {useState} from 'react'

const Screen_01 = ({ navigation }) => {
  const [cartItems , setCartItems] = useState([]);
  const dataProduct = [
    {
      id: 1,
      image: require('./assets/images/ca_nau_lau.png'),
      name: 'Ca nấu lẩu, nấu mì mini 180l',
      supplier: 'Shop Devang',
      price: '100.000đ',
      discount: 10,
    },
    {
      id: 2,
      image: require('./assets/images/ga_bo_toi.png'),
      name: '1 kg khô gà bơ tỏi giòn rụm',
      supplier: 'LTĐ Food',
      price: '150.000đ',
      discount: 30,
    },
    {
      id: 3,
      image: require('./assets/images/xa_can_cau.png'),
      name: 'Xe đồ chơi cần cẩu đa năng',
      supplier: 'Thế giới đồ chơi 360',
      price: '350.000đ',
      discount: 20,
    },
    {
      id: 4,
      image: require('./assets/images/do_choi_dang_mo_hinh.png'),
      name: 'Đồ chơi dạng mô hình lắp ráp nhiều chi tiết',
      supplier: 'Thế giới đồ chơi',
      price: '490.000đ',
      discount: 5,
    },
    {
      id: 5,
      image: require('./assets/images/lanh_dao_gian_don.png'),
      name: 'Cuốn sách lãnh đạo giản đơn',
      supplier: 'Minh Long Book',
      price: '120.000đ',
      discount: 15,
    },
    {
      id: 6,
      image: require('./assets/images/hieu_long_con_tre.png'),
      name: 'Cuốn sách hiểu lòng con trẻ',
      supplier: 'Minh Long Book',
      price: '180.000đ',
      discount: 16,
    },
  ];

  const renderProduct = ({ item }) => {
    return (
      <View
        style={{
          borderWidth: 2,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
          marginBottom: 5,
        }}>
        <View style={{ width: '18%', height: '70px', marginRight: 10 }}>
          <Image
            source={item.image}
            style={{ width: '100%', height: '100%' }}
          />
        </View>
        <View style={{ width: '60%' }}>
          <Text style={{ fontWeight: 600 }}>{item.name}</Text>
          <Text style={{ color: 'red' }}>{item.supplier}</Text>
        </View>
        <View style={{ width: '20%' }}>
          <TouchableOpacity style={{ backgroundColor: 'red', padding: 10 }}>
            <Text style={{ color: 'white', textAlign: 'center' }}>Chat</Text>
          </TouchableOpacity>
        </View>
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
        <Text style={{ fontWeight: 600, fontSize: 20 }}>Chat</Text>
        <TextInput
          onFocus={() => navigation.navigate('Screen_02')}
          placeholder="search name product"
          style={{
            borderWidth: 2,
            padding: 10,
            flex: 1,
            marginRight: 5,
            marginLeft: 10,
          }}
        />
       
      </View>
      <Text style={{ paddingLeft: 20, paddingRight: 20, marginBottom: 10 }}>
        Bạn có thắc mắc gì, vui lòng liên hệ với shop để được hổ trợ nhé !!
      </Text>
      <View style={{ height: '400px' }}>
        <FlatList
          data={dataProduct}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderProduct}
          style={{ padding: 10 }}
        />
      </View>
    </SafeAreaView>
  );
};

export default Screen_01;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 10,
  },
});
