import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TouchableOpacity } from 'react-native'
import { useFonts,  } from 'expo-font'
import Colors from '@/constants/Colors'
import { Link, useNavigation } from 'expo-router'
const Chats = () => {

    const [fontLoaded] =useFonts({
        Poppins: require('../../assets/fonts/Poppins-SemiBold.ttf'),
        Poppinsa: require('../../assets/fonts/Poppins-Regular.ttf')
      })

      
      
  return (
    <SafeAreaView style={{paddingHorizontal : 0, marginTop : 0, flex : 1,}}>
        {/* <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center', paddingHorizontal : 20 }}>
            <Text style={{margin : 'auto', fontSize : 15}}>Chats</Text>

            <TouchableOpacity style={{marginLeft : 'auto', }}>
                <Image
                    source={require('../../assets/images/prof.png')}
                    style={{width: 35, height : 35, alignSelf : 'center', borderRadius : 50 }}
                />
            </TouchableOpacity>
        </View> */}


        {/* ================== Chat One ==================== */}
        <TouchableOpacity style={{
            marginTop : 0, backgroundColor : 'white', 
            borderBottomWidth : 1, 
            borderBottomColor : Colors.myGray,
            padding : 20, display : 'flex', 
            flexDirection : 'row', gap : 10, 
            alignItems : 'center',
            width : '100%',
            // justifyContent : 'center',
        }}>
            <Link href={'/merchantOnboard/messageChat'}  style={{}}>
                <View style={{display : 'flex', flexDirection : 'row', gap : 10, alignItems : 'center', width : '100%',}}>

                
                    <TouchableOpacity style={{ }}>
                        <Image
                            style={{width: 35, height : 35, borderRadius : 50 }}
                            source={require('../../assets/images/prof.png')}
                        />
                    </TouchableOpacity>


                    <View>
                        <View style={{display : 'flex', flexDirection : 'row', gap : 8, alignItems :'center', }}>
                            <Text style={{fontSize : 15, fontFamily : 'Poppins', }}>Jason kassey</Text>
                            <TouchableOpacity style={{backgroundColor : Colors.myRed, paddingHorizontal : 8, borderRadius : 2, height : 15, display : 'flex'}}>
                                <Text style={{fontFamily : 'Poppins',textAlign : 'center', justifyContent: 'center',alignSelf : 'center', fontSize : 10, color : 'white', paddingTop : 1}}>Sell</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={{fontSize : 12, fontFamily : 'Poppinsa', color : Colors.myYellow}}>Session Ongoing . .</Text>
                    </View>

                    <View style={{ marginLeft : 'auto', width : '100%',}}>
                        <Text style={{fontSize : 12, fontFamily : 'Poppinsa', textAlign : 'right'}}>12:34</Text>
                        <Text style={{fontSize : 12, fontFamily : 'Poppinsa',}}>17/02/2024</Text>
                    </View>
                </View>
            </Link>
        </TouchableOpacity>



        {/* ================== Chat Two ==================== */}
        
    </SafeAreaView>
  )
}

export default Chats

const styles = StyleSheet.create({})