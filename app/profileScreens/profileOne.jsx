import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native'
import React from 'react'
import { useState , useRef} from 'react';
import * as ImagePicker from 'expo-image-picker';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constants/Colors'
import {Picker} from '@react-native-picker/picker';
import { useFonts } from 'expo-font'

const profileOne = () => {

  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };



  const [selectedLanguage, setSelectedLanguage] = useState();
    const pickerRef = useRef();

    function open() {
    pickerRef.current.focus();
    }

    function close() {
    pickerRef.current.blur();
    }

  return (
    <SafeAreaView style={styles.contianer}>

    <View style={{ alignItems: 'center',  }}>
        
        {image === null ? 

          <TouchableOpacity onPress={pickImage}>
            <Image
              source={require('../../assets/images/prof.png')}
              style={{width: 80, height : 80, alignSelf : 'center', borderRadius : 50}}
              
            />

            <Ionicons name='camera-reverse' style={{position : 'absolute', bottom :25, right : 25, borderColor : Colors.myGray}} size={25} color={'white'}/>
          </TouchableOpacity> :
        
          <Image source={{ uri: image }} style={{ width: 80, height: 80, borderRadius : 50}} />
        }

    </View>

      <View style={{paddingTop : 20}}>
        <View>
          <Text style={{fontFamily : 'poppinsRegular'}}>Status</Text>
          <Picker
            ref={pickerRef}
            selectedValue={selectedLanguage}
            style={{backgroundColor : Colors.myGray, borderRadius : 30}}
            onValueChange={(itemValue, itemIndex) =>
            setSelectedLanguage(itemValue)
            }>
            <Picker.Item label="Active" value="Active" style={{fontFamily : 'poppinsRegular'}}/>
            <Picker.Item label="In-Active" value="In-Active" style={{fontFamily : 'poppinsRegular'}}/>
        </Picker>
        </View>

        <View style={styles.inputDiv}>
            <Text style={{fontFamily : 'poppinsRegular', paddingBottom : 5}}>First Name</Text>
            <TextInput style={{backgroundColor : Colors.myGray, padding : 10, borderRadius : 5}} placeholder='Ezekiel Ekondu Christian Emmanuelaudu' />
        </View>


      </View>
    </SafeAreaView>
  )
}

export default profileOne

const styles = StyleSheet.create({
    contianer : {
      flex : 1, 
      paddingTop : 30,
      paddingHorizontal : 20,
    },

    inputDiv : {
      paddingTop : 30
    },
})