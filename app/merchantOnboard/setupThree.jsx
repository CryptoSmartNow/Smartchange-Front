import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { useFonts,  } from 'expo-font'
import { Link, useNavigation } from 'expo-router'
import Colors from '@/constants/Colors'
import { Camera } from 'expo-camera';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';
import {Picker} from '@react-native-picker/picker';

const setupThree = () => {

  const [selectedLanguage, setSelectedLanguage] = useState();
    const pickerRef = useRef();

    function open() {
    pickerRef.current.focus();
    }

    function close() {
    pickerRef.current.blur();
    }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.loginDiv}> 
        <Text style={{fontSize : 20, fontFamily : 'poppinsBold', paddingBottom : 10, textAlign : 'center'}}>Setup your profile</Text>
        <Text style={{fontSize : 13, fontFamily : 'poppinsBold', paddingBottom : 50, textAlign : 'center'}}>Select a payment method</Text>

            <View>

            <Text style={{fontFamily : 'Poppinsa', paddingBottom : 5}}>Bank Name</Text>
                <Picker
                    ref={pickerRef}
                    selectedValue={selectedLanguage}
                    style={{backgroundColor : Colors.myGray, borderRadius : 30}}
                    onValueChange={(itemValue, itemIndex) =>
                    setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Kuda Microfinace Bank" value="kuda" />
                    <Picker.Item label="Opay" value="opay" />
                    <Picker.Item label="UBA" value="uba" />
                    <Picker.Item label="Diamond Bank" value="diamond" />
                    <Picker.Item label="Palmpay" value="Palmpay" />
                    <Picker.Item label="First Bank" value="first bank" />
                    <Picker.Item label="Eco Bank" value="eco" />
                    <Picker.Item label="Monie Point" value="MoniePoint" />
                    <Picker.Item label="Standard Chartered" value="standard" />
                </Picker>
            
                <View style={styles.inputDiv}>
                    <Text style={{fontFamily : 'Poppinsa', paddingBottom : 5}}>Account Number</Text>
                    <TextInput style={{backgroundColor : Colors.myGray, padding : 10, borderRadius : 5}} placeholder='2118395124' />
                </View>

                <View style={styles.inputDiv}>
                    <Text style={{fontFamily : 'Poppinsa', paddingBottom : 5}}>Account Name</Text>
                    <TextInput style={{backgroundColor : Colors.myGray, padding : 10, borderRadius : 5}} placeholder='John Doe' />
                </View>

                <View style={{display : 'flex', flexDirection : 'row', paddingTop : 20,  gap : 10, alignItems : 'center', alignSelf : 'center', justifyContent : 'center',}}>
                     <Ionicons name='add-circle-outline' size={25} color={Colors.myYellow}/>
                    <Text style={{color : Colors.myYellow, textAlign: 'center', fontSize : 16, fontFamily : 'Poppinsa', }}>Add Account</Text>

                </View>

            </View>


        </View>

        <View style={styles.buttonStyleDiv}>
      <Link href={'/merchantOnboard/setupFour'} asChild style={styles.buttonStyle}>
      <TouchableOpacity style={{display : 'flex', alignSelf : 'center', margin : 'auto'}}>
        <Text style={{fontFamily : 'poppinsBold', textAlign:'center', alignSelf : 'center', display : 'flex'}}>Next</Text>
      </TouchableOpacity>
      </Link>
    </View>

    </SafeAreaView>




  )
}

export default setupThree

const styles = StyleSheet.create({
  container : {
    flex : 1,
    paddingTop : 50,
    paddingHorizontal : 25,
    position : 'relative',
    
  },

  logoDiv: {
    alignSelf : 'center',
  },

  loginDiv :{
    paddingTop : 0
  },

  inputDiv : {
    paddingTop : 30
  },

  gmailStyle : {
    backgroundColor : Colors.myGray,
    padding : 12,
    borderRadius : 5,
    marginTop : 20,
    display : "flex",
    flexDirection : 'row',
    gap : 10,
    alignItems : 'center',
    justifyContent : 'center',

  },


  buttonStyleDiv : {
    position : 'absolute',
    bottom : 50,
    left : 0,
    right : 0,
  },
  
  buttonStyle : {
    backgroundColor : Colors.myYellow,
    padding : 12,
    borderRadius : 5,
    width : '90%',
    display : 'flex',
    alignSelf : 'center',
    alignItems : 'center',
    justifyContent : 'center',
    alignContent : 'center',
    margin : 'auto'
  },


  cameraContainer: {
    flex: 1,
    flexDirection: 'row',
    borderRadius : 20
},
fixedRatio:{
    flex: 1,
    aspectRatio: 1,
    borderRadius : 20
}
})