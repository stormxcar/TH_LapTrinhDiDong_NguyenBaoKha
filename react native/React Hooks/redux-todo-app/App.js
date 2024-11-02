import React, { useState,useEffect } from 'react';
import {
  View,
  TextInput,
  Button,
  FlatList,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
// khởi tạo một createStore (bển trong nó có reducer - thường tự viết hàm reducer để xử lý)
import { createStore } from 'redux';

// có thể sử dụng component mà react cung cấp để tạo checkbox - @react-native-community/checkbox - thay vì tự tạo

const initialState = {
  todos: [],
};

// nhận một state là một gtri khởi tạo cho nó trong lần đầu ,và 1 action
const todoReducer = (state = initialState, action) => {
  // có nhiều case cho nhiều hành động khác nhau và mặc định là trả về state với lần khởi tạo gtri đầu tiên
  // state cũ + state update => state mới
  switch (action.type) {
    case 'FETCH_TODOS':
      return {
        ...state,
        todos: action.payload || [
          { id: 1, text: 'Learn Redux', completed: false },
          { id: 2, text: 'Build a todo app', completed: true },
        ],
      };
    case 'ADD_TODO':
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now().toString(),
            // payload như là giá trị được lấy ra để thực hiện action đó
            text: action.payload,
            completed: false,
          },
        ],
      };
    case 'REMOVE_TODO':
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    case 'TOGGLE_TODO':
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };
    default:
      return state;
  }
};

const store = createStore(todoReducer);

// hàm render
const TodoItem = ({ item, onToggle, onDelete }) => (
  <View style={styles.taskItem}>
    <View style={styles.taskLeft}>
      <TouchableOpacity
        onPress={() => onToggle(item.id)}
        style={styles.checkbox}>
        {item.completed && <View style={styles.checkedBox} />}
      </TouchableOpacity>
      <Text style={[styles.taskText, item.completed && styles.completedTask]}>
        {item.text.length > 14 ? item.text.slice(0, 14) + '...' : item.text}
      </Text>
    </View>
    <TouchableOpacity
      onPress={() => onDelete(item.id)}
      style={{
        backgroundColor: item.completed ? 'red' : '#e0e0e0',
        padding: 10,
        borderRadius: 5,
      }}>
      {item.completed ? (
        <Text style={styles.deleteButtonText}>Delete</Text>
      ) : (
        <Text style={{ color: 'red' }}>Delete</Text>
      )}
    </TouchableOpacity>
  </View>
);

const TodoApp = () => {
  const [task, setTask] = useState('');
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  //dispatch: bắn ra một hành động: actions trả về một type (bằng với type - case trong reducer và payload)

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch({ type: 'ADD_TODO', payload: task });
      setTask('');
    } else {
      alert('Please enter a task', '');
    }
  };

  const handleDeleteTask = (id) => {
    const todoToDelete = todos.find((todo) => todo.id === id);
    if (!todoToDelete.completed) {
      alert('This task is not completed. Are you sure you want to delete it?', [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            dispatch({ type: 'REMOVE_TODO', payload: id });
            alert('Task deleted successfully', '');
          },
          style: 'destructive',
        },
      ]);
    } else {
      dispatch({ type: 'REMOVE_TODO', payload: id });
      alert('Completed task deleted successfully', '');
    }
  };

  const toggleTodo = (id) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  useEffect(() => {
    dispatch({type: 'FETCH_TODOS', todos});
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Enter task"
          value={task}
          onChangeText={setTask}
        />
        <Button title="Add Task" onPress={handleAddTask} />
      </View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TodoItem
            item={item}
            onToggle={toggleTodo}
            onDelete={handleDeleteTask}
          />
        )}
      />
    </View>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <TodoApp />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 40,
  },
  inputContainer: {
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  taskItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 5,
  },
  taskLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  checkedBox: {
    width: 12,
    height: 12,
    backgroundColor: '#000',
    borderRadius: 6,
  },
  taskText: {
    fontSize: 16,
    flex: 1,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#888',
  },
  deleteButton: {
    backgroundColor: '#ff4444',
    padding: 8,
    borderRadius: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontSize: 14,
  },
});

export default App;
