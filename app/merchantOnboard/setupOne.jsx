import { View, Text, StyleSheet, TextInput, TouchableOpacity, Button } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { useFonts,  } from 'expo-font'
import { Link, useNavigation } from 'expo-router'
import Colors from '@/constants/Colors'
import { Camera } from 'expo-camera';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Ionicons from '@expo/vector-icons/Ionicons';

const setupOne = () => {

  const [fontLoaded] =useFonts({
    Poppins: require('../../assets/fonts/Poppins-SemiBold.ttf'),
    Poppinsa: require('../../assets/fonts/Poppins-Regular.ttf')
  })


  const [hasCameraPermission, setHasCameraPermission] = useState(null);
  const [camera, setCamera] = useState(null);
  const [image, setImage] = useState('');
  const [type, setType] = useState(Camera.Constants.Type.front);
  
useEffect(() => {
    (async () => {
      const cameraStatus = await Camera.requestCameraPermissionsAsync();
      setHasCameraPermission(cameraStatus.status === 'granted');
})();
  }, []);

  const startCamera =  () => {
    setImage(null)
  }
const takePicture = async () => {
    if(camera){
        const data = await camera.takePictureAsync(null)
        setImage(data.uri);
    }
  }

  if (hasCameraPermission === false) {
    return <Text>No access to camera</Text>;
  }

  
  return (
    <SafeAreaView style={styles.container}>

    <View style={styles.logoDiv}>
      <Text style={{fontSize : 20, fontFamily : 'Poppins', paddingBottom : 30}}>Setup your profile</Text>

        {image ? 
          
          <Image source={{uri: image}} style={{width: 100, height : 100, alignSelf : 'center', borderRadius : 50}}/> :

          <View style={{position : 'relative'}}>
            
            <TouchableOpacity onPress={startCamera}>
            <Image
              source={require('../../assets/images/self.png')}
              style={{width: 100, height : 100, alignSelf : 'center'}}
              
            />
            </TouchableOpacity>


            <TouchableOpacity onPress={startCamera} style={{position : 'absolute', right : 10, bottom: 10}}>
              <FontAwesome name='camera' size={20}/>
            </TouchableOpacity>
          </View>
        }
    </View>


    {
      image === null ? 
   

    <View style={{borderRadius : 40, paddingTop : 30}}>
      <TouchableOpacity onPress={() => takePicture()} 
        style={{backgroundColor : Colors.myYellow, alignSelf : 'center', width : '100%', padding : 12,  }}>
        <Text style={{textAlign : 'center', fontFamily : 'Poppins', fontSize : 15,}}>Take Selfies</Text>
      </TouchableOpacity>  
      
      <View style={styles.cameraContainer}>
            <Camera 
              ref={ref => setCamera(ref)}
              style={styles.fixedRatio} 
              type={type}
              ratio={'1:1'} 
            />
      </View>

   </View>

      : 

      <View style={styles.loginDiv}> 
      <View>
      
        <View style={styles.inputDiv}>
          <Text style={{fontFamily : 'Poppinsa', paddingBottom : 5}}>First Name</Text>
          <TextInput style={{backgroundColor : Colors.myGray, padding : 10, borderRadius : 5}} placeholder='Enter Fullname' />
        </View>

        <View style={styles.inputDiv}>
          <Text style={{fontFamily : 'Poppinsa', paddingBottom : 5}}>Last Name</Text>
          <TextInput style={{backgroundColor : Colors.myGray, padding : 10, borderRadius : 5}} placeholder='Enter Fullname' />
        </View>

        <View style={styles.inputDiv}>
          <Text style={{fontFamily : 'Poppinsa', paddingBottom : 5}}>Phone Number</Text>
          <TextInput style={{backgroundColor : Colors.myGray, padding : 10, borderRadius : 5}} placeholder='Enter Fullname' />
        </View>

      </View>


    </View>

    }



    <View style={styles.buttonStyleDiv}>
      <Link href={'/merchantOnboard/setupTwo'} asChild style={styles.buttonStyle}>
      <TouchableOpacity style={{display : 'flex', alignSelf : 'center', margin : 'auto'}}>
        <Text style={{fontFamily : 'Poppins', textAlign:'center', alignSelf : 'center', display : 'flex'}}>Next</Text>
      </TouchableOpacity>
      </Link>
    </View>

    </SafeAreaView>




  )
}

export default setupOne

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