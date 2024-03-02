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

const setupFour = () => {

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
        <Text style={{fontSize : 13, fontFamily : 'poppinsBold', paddingBottom : 50, textAlign : 'center'}}>An automated question or instruction</Text>

            <View>

            
                <View style={styles.inputDiv}>
                    <TextInput style={{backgroundColor : Colors.myGray, padding : 10, borderRadius : 5}} placeholder='Type in a quick response' />
                </View>

                <View style={styles.inputDiv}>
                    <Text style={{fontFamily : 'poppinsRegular', paddingBottom : 5}}>Popular picks</Text>
                    
                    <View>
                        <Text style={{marginTop : 20, backgroundColor : Colors.myGray, padding : 15, borderRadius : 10, lineHeight : 20, borderColor : 'grey', borderWidth : 1}}>
                            Good day, Please type in your Phone number and how much you’re buying.
                        </Text>


                        <Text style={{marginTop : 20, backgroundColor : Colors.myGray, padding : 15, borderRadius : 10, lineHeight : 20, borderColor : 'grey', borderWidth : 1}}>
                        Hello there, how much do you want to buy/sell
                        </Text>
                    </View>
                </View>


            </View>


        </View>

        <View style={styles.buttonStyleDiv}>
      <Link href={'/merchantOnboard/setupOne'} asChild style={styles.buttonStyle}>
      <TouchableOpacity style={{display : 'flex', alignSelf : 'center', margin : 'auto'}}>
        <Text style={{fontFamily : 'poppinsRegular', textAlign:'center', alignSelf : 'center', display : 'flex'}}>Finish</Text>
      </TouchableOpacity>
      </Link>
    </View>

    </SafeAreaView>




  )
}

export default setupFour

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