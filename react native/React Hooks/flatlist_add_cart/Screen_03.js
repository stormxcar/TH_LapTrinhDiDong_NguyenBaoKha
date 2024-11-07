import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { useState, useEffect } from 'react';
import numeral from 'numeral';

const Screen_03 = ({ navigation, route }) => {
  const { cartItems , resetCart } = route.params || [];

  const [quantity, setQuantity] = useState(cartItems.map(() => 1)); // Tạo mảng số lượng tương ứng với số lượng sản phẩm

  // Hàm tính tổng tiền của từng sản phẩm
  const calcPriceProduct = (item, index) => {
    return (item.price * quantity[index]).toFixed(2);
  };

  // Hàm tính tổng tiền của tất cả sản phẩm trong giỏ hàng
  const calcSumProduct = () => {
    return cartItems.reduce(
      (sum, item, index) => sum + item.price * quantity[index],
      0
    );
  };

  // Hàm tăng số lượng
  const increaseQuantity = (index) => {
    const newQuantities = [...quantity];
    newQuantities[index] += 1;
    setQuantity(newQuantities);
  };

  // Hàm giảm số lượng, nếu số lượng > 1 mới được giảm
  const decreaseQuantity = (index) => {
    if (quantity[index] > 1) {
      const newQuantities = [...quantity];
      newQuantities[index] -= 1;
      setQuantity(newQuantities);
    }
  };

   const handlePayment = () => {
    resetCart(); // Reset lại giỏ hàng
    navigation.navigate('Screen_02'); 
    alert('Thanh toán thành công !')
  };

  // Hàm render từng sản phẩm trong giỏ hàng
  const RenderCartItem = ({ item, index }) => {
    return (
      <View
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 10,
          marginBottom: 10,
        }}>
        <View>
          <Text style={{fontWeight:600}}>{item.name}</Text>
          <Text>Giá: {numeral(item.price).format('0,0.000') + '₫'}</Text>
        </View>
        <View
          style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent:'space-between',
            marginTop:5
          }}>
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'row',
            }}>
            <TouchableOpacity
              onPress={() => decreaseQuantity(index)}
              style={{ padding: 10, borderWidth:2, borderRadius:30, width:30, height:30,display:'flex',alignItems:'center', justifyContent:'center' }}>
              <Text style={{textAlign:'center'}}>-</Text>
            </TouchableOpacity>
            <TextInput
              style={{
                borderWidth: 1,
                padding: 10,
                borderRadius: 4,
                width:50,
                height:30,
                textAlign: 'center',
              }}
              value={String(quantity[index])} // Hiển thị số lượng hiện tại
              editable={false} // Không cho phép người dùng chỉnh sửa trực tiếp
            />
            <TouchableOpacity
              onPress={() => increaseQuantity(index)}
              style={{ padding: 10, borderWidth:2, borderRadius:30, width:30, height:30,display:'flex',alignItems:'center', justifyContent:'center' }}>
              <Text style={{textAlign:'center'}}>+</Text>
            </TouchableOpacity>
          </View>
          <Text>Thành tiền: {numeral(calcPriceProduct(item,index)).format('0,0.000') + '₫'}</Text>
        </View>
      </View>
    );
  };

  return (
    <View
      style={{
        padding: 10,
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center',
        width: '100%',
      }}>
      <Text>Giỏ hàng của tôi</Text>

      <View style={{ width: '100%' }}>
        <FlatList
          data={cartItems}
          keyExtractor={(item) => item.id}
          renderItem={({ item, index }) => (
            <RenderCartItem item={item} index={index} />
          )}
          style={{ height: 350 }}
        />
      </View>

      <View>
        <Text>Tổng cộng: {numeral(calcSumProduct()).format('0,0.000') + '₫'}</Text>
      </View>

      <TouchableOpacity
        onPress={handlePayment}
        style={{ padding: 10, backgroundColor: 'cyan' }}>
        <Text>Thanh toán</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen_03;

const styles = StyleSheet.create({});
