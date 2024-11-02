import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const Screen_01 = ({ navigation }) => {
  const [name, setName] = useState('');

  return (
    <View
      style={{
        padding: 20,
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        gap: 20,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text style={{ fontWeight: 600, fontSize: 20 }}>MANAGE YOUR TASK</Text>
      <TextInput
        value={name}
        onChangeText={(val) => setName(val)}
        style={{ borderWidth: 3, padding: 10, borderRadius: 5, width: '100%' }}
        placeholder="Enter your name"
      />
      <TouchableOpacity
        onPress={() => navigation.navigate('Screen_02', {username : name})}
        style={{ padding: 10, backgroundColor: '#0f5132', borderRadius: 10 }}>
        <Text style={{ color: 'white' }}>GET STARTED</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen_01;
