import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Button,
  Platform,
  ScrollView,
  Alert
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import * as DocumentPicker from 'expo-document-picker';

const Feedback = () => {
  const [document, setDocument] = useState(null);

  const pickDocument = async () => {
    if (Platform.OS === 'web') {
      // Ensure document is available in the web environment
      const input = window.document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setDocument(URL.createObjectURL(file));
        }
      };
      input.click();
    } else {
      // Use expo-document-picker for mobile
      try {
        const result = await DocumentPicker.getDocumentAsync({
          type: 'image/*', // You can specify the type of documents you want to pick
          copyToCacheDirectory: true,
        });

        if (result.type === 'success') {
          setDocument(result.uri);
        }
      } catch (error) {
        console.error("Error picking document: ", error);
      }
    }
  };

  const handleSubmit = () => {
    // alert("Cam on ban rat nhieu !")

    router.push("/login");
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        horizontal={false}
        showsVerticalScrollIndicator={false}
      >
      <View style={[styles.row , {}]}>
        <TouchableOpacity onPress={() => router.back()}>
          <AntDesign name="arrowleft" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{textAlign:'center', fontSize:30, width:'100%'}}>Feedback</Text>
      </View>

      <View style={styles.row}>
        <Image source={require("../images/book.png")} />
        <Text style={{fontSize:25,}}>Nguyen ly dao ham tich phan</Text>
      </View>

      <View style={styles.column}>
        <Text style={{fontSize:25}}>Cuc ky hai long</Text>
        <View style={styles.row}>
          <AntDesign name="star" size={30} color="yellow" />
          <AntDesign name="star" size={30} color="yellow" />
          <AntDesign name="star" size={30} color="yellow" />
          <AntDesign name="star" size={30} color="yellow" />
          <AntDesign name="star" size={30} color="yellow" />
        </View>
      </View>

      <View style={[styles.column, {borderWidth:1, marginHorizontal:16}]}>
        <Text style={{fontSize:20, paddingVertical:10}}>Them hinh anh:</Text>
        {/* <TextInput placeholder="Chon anh" /> */}
        <Button title="Chon anh" onPress={pickDocument} />
        <View style={styles.showImage}>
          {document && (<Image source={{ uri: document }} style={styles.image} />)}
          {/* {document ? <Button title="Lam moi"/> : null} */}
          
        </View>
      </View>
      <View style={{display:'flex',padding: 16,flexDirection:'column',gap:10}}>
        <Text>De lai binh luan:</Text>
        <TextInput placeholder="thu viet gi do" style={{borderWidth:1,padding:10}} 
        multiline={true}
        numberOfLines={4}
        
        />
        
      </View>
      <View>
        <TouchableOpacity style={{padding: 10, backgroundColor:'blue',textAlign:'center',color:'#fff',fontSize:20,borderRadius:4,margin:16}}
        onPress={handleSubmit}
        >
          Gui
        </TouchableOpacity>
      </View>

    
      </ScrollView>
    </SafeAreaView>
  );
};

export default Feedback;

const styles = StyleSheet.create({
  container:{
    maxHeight:'100vh'
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center',
    padding: 20
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
    alignItems: 'center',
    padding: 20,
  },
  showImage: {
    marginTop: 20,
    alignItems: 'center'
  },
  image: {
    width: 200,
    height: 200,
  }
});