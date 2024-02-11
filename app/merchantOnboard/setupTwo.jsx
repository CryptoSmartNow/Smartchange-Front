import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useFonts,  } from 'expo-font'
import Colors from '@/constants/Colors'
import * as ImagePicker from 'expo-image-picker';
import { Link, useNavigation } from 'expo-router'


const setupTwo = () => {

  const [fontLoaded] =useFonts({
    Poppins: require('../../assets/fonts/Poppins-SemiBold.ttf'),
    Poppinsa: require('../../assets/fonts/Poppins-Regular.ttf')
  })



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


  return (
    <SafeAreaView style={styles.container}>

      <Text style={{fontSize : 20, fontFamily : 'Poppins', paddingBottom : 100, textAlign : 'center'}}>Setup your profile</Text>




    <View style={{ flex: 1, alignItems: 'center',  }}>
        
        {image === null ? 

          <TouchableOpacity onPress={pickImage}>
          <Image
            source={require('../../assets/images/selfa.png')}
            style={{width: 250, height : 250, alignSelf : 'center'}}
            
          />
          </TouchableOpacity> :
        
          <Image source={{ uri: image }} style={{ width: 300, height: 300, borderRadius : 10}} />
        }

    </View>
   
    <View style={styles.buttonStyleDiv}>
      <Link href={'/merchantOnboard/setupThree'} asChild style={styles.buttonStyle}>
      <TouchableOpacity style={{display : 'flex', alignSelf : 'center', margin : 'auto'}}>
        <Text style={{fontFamily : 'Poppins', textAlign:'center', alignSelf : 'center', display : 'flex'}}>Next</Text>
      </TouchableOpacity>
      </Link>
    </View>

    </SafeAreaView>




  )
}

export default setupTwo

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