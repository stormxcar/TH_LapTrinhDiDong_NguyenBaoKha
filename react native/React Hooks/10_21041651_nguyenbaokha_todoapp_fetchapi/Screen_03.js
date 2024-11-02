import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

const Screen_03 = ({ navigation, route }) => {
  const { username, action, todoId, todoName } = route.params;

  const [todo, setTodo] = useState('');

  useEffect(() => {
    if (action === 'edit') {
      setTodo(todoName); // Set initial value for editing
    }
  }, [action, todoName]);

  const handleSaveTodo = () => {
    const newTodo = {
      id: action === 'add' ? (Math.random() * 1000).toString() : todoId,
      name: todo,
    };

    const url = action === 'add' 
      ? 'https://6458b0fd8badff578ef7ea9b.mockapi.io/todo' 
      : `https://6458b0fd8badff578ef7ea9b.mockapi.io/todo/${todoId}`;

    const method = action === 'add' ? 'POST' : 'PUT';

    fetch(url, {
      method,
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    })
      .then((response) => response.json())
      .then(() => {
        setTodo('');
        navigation.navigate('Screen_02', { refresh: Math.random() });
      });
  };

  return (
    <View style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'center' }}>
      <Text style={{ fontSize: 15, fontWeight: '600' }}>Hi, {username}</Text>
      <Text style={{ fontSize: 20, fontWeight: '600' }}>{action === 'add' ? 'ADD YOUR JOB' : 'EDIT YOUR JOB'}</Text>
      <TextInput
        value={todo}
        onChangeText={setTodo}
        style={{ borderWidth: 1, padding: 10, borderRadius: 5, width: '100%' }}
        placeholder = {action === "add" ? "Enter your job" : username}
        
      />
      <TouchableOpacity
        onPress={handleSaveTodo}
        style={{ backgroundColor: 'cyan', padding: 10, borderRadius: 10 }}>
        <Text style={{ color: 'white' }}>{action === 'add' ? 'ADD' : 'SAVE'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Screen_03;
