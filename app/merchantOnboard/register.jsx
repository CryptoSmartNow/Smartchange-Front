import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image } from 'react-native'
import React from 'react'
import { useFonts,  } from 'expo-font'
import { Link, useNavigation } from 'expo-router'
import Colors from '@/constants/Colors'

const register = () => {

  const [fontLoaded] =useFonts({
    Poppins: require('../../assets/fonts/Poppins-SemiBold.ttf'),
    Poppinsa: require('../../assets/fonts/Poppins-Regular.ttf')
  })




  const navigate = useNavigation()
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.logoDiv}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={{width: 145, height : 35}}
        />
      </View>

      <View style={styles.loginDiv}> 

        <Text style={{fontSize : 20, fontFamily : 'poppinsBold'}}>Create an account</Text>

        <View>
        
          <View style={styles.inputDiv}>
            <Text style={{fontFamily : 'Poppinsa', paddingBottom : 5}}>Email Address</Text>
            <TextInput style={{backgroundColor : Colors.myGray, padding : 10, borderRadius : 5}} placeholder='Enter Email Address'/>
          </View>

          <View style={styles.inputDiv}>
            <Text style={{fontFamily : 'poppinsRegular', paddingBottom : 5}}>Email Address</Text>
            <TextInput style={{backgroundColor : Colors.myGray, padding : 10, borderRadius : 5}} placeholder='Enter Password'/>
          </View>

        </View>

        <Text style={{textAlign : 'center', fontFamily : 'poppinsRegular', paddingTop : 30}}>or</Text>

        <TouchableOpacity style={styles.gmailStyle}>
          <Image
            source={require('../../assets/images/google.png')}
            style={{width: 20, height : 20}}
          />
          <Text style={{fontFamily : 'poppinsRegular', }}>Sign in with Google</Text>
        </TouchableOpacity>

        <Link href={'/merchantOnboard/setupOne'} asChild>
          <TouchableOpacity style={styles.buttonStyle}>
            <Text style={{fontFamily : 'Poppins', textAlign:'center'}}>Next</Text>
          </TouchableOpacity>
        </Link>


        <Text style={{textAlign : 'center', fontFamily : 'poppinsBold', paddingTop : 30}}>
          Already have an account? <Text style={{color : Colors.myYellow}} onPress={()=>navigate.goBack()}>Login in</Text>
        </Text>
        

      </View>
    </SafeAreaView>
  )
}

export default register

const styles = StyleSheet.create({
  container : {
    flex : 1,
    paddingTop : 50,
    paddingHorizontal : 25,
    
  },

  logoDiv: {
    alignSelf : 'center',
  },

  loginDiv :{
    paddingTop : 50
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

  buttonStyle : {
    backgroundColor : Colors.myYellow,
    padding : 12,
    borderRadius : 5,
    marginTop : 50
  }
})