import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import { useState, useEffect } from 'react';

const Screen_02 = ({ navigation, route }) => {
  const { username } = route.params;
  console.log(username);

  const [dataTodo, setDataTodo] = useState([]);

  const fetchData = () => {
    fetch('https://6458b0fd8badff578ef7ea9b.mockapi.io/todo')
      .then((response) => response.json())
      .then((data) => {
        setDataTodo(data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (route.params?.refresh) {
      fetchData();
    }
  }, [route.params?.refresh]);

  const renderItem = ({ item }) => {
    return (
      <View
        style={{
          borderWidth: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          width: '100%',
          marginBottom: 10,
          alignItems: 'center',
        }}>
        <Text>
          {item.name.length > 10 ? item.name.slice(0, 10) + '...' : item.name}
        </Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
        onPress={() =>
          navigation.navigate('Screen_03', {
            username,
            todoName: item.name,
            todoId: item.id,
            action: 'edit',
            
          })
        }
        style={{ padding: 5, backgroundColor: 'blue', marginRight: 5 }}>
        <Text style={{ color: 'white' }}>Edit</Text>
      </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleDelete(item.id)}
            style={{ padding: 5, backgroundColor: 'red' }}>
            <Text style={{ color: 'white' }}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  const handleDelete = (id) => {
    fetch(`https://6458b0fd8badff578ef7ea9b.mockapi.io/todo/${id}`, {
      method: 'DELETE',
    }).then((response) => {
      if (response.ok) {
        setDataTodo((prevData) => prevData.filter((item) => item.id !== id));
      }
    });
  };

  return (
    <View
      style={{
        padding: 20,
        display: 'flex',
        flexDirection: 'column',

        alignItems: 'center',
      }}>
      <Text style={{ fontSize: 15, fontWeight: 600 }}>Hi, {username} !</Text>
      <TextInput
        style={{
          borderWidth: 3,
          padding: 10,
          borderRadius: 5,
          width: '100%',
          marginBottom: 20,
        }}
        placeholder="Search"
      />

      <View
        style={{
          height: '350px',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 10,
        }}>
        <FlatList
          data={dataTodo}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          style={{ width: '100%' }}
        />
      </View>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Screen_03', { username, action: 'add' })
        }
        style={{ padding: 10, borderRadius: 10, backgroundColor: 'cyan' }}>
        <Text style={{ color: 'white' }}>Add todo</Text>
      </TouchableOpacity>

     
    </View>
  );
};

export default Screen_02;
const styles = StyleSheet.create({});
