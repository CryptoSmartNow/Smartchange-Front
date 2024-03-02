import { StyleSheet, Text, View, SafeAreaView, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { useFonts } from 'expo-font'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from "@expo/vector-icons/FontAwesome";
const messageChat = () => {

    const [fontLoaded] =useFonts({
        Poppins: require('../../assets/fonts/Poppins-SemiBold.ttf'),
        Poppinsa: require('../../assets/fonts/Poppins-Regular.ttf')
      })

      

  return (
    <SafeAreaView style={{paddingHorizontal : 0,  flex : 1,  backgroundColor : Colors.myYellow}}>
        <View style={{borderTopLeftRadius : 30, borderTopRightRadius : 30, flex : 1, backgroundColor : 'white'}}>
            <View style={{display : 'flex', flexDirection : 'row',justifyContent: 'space-between', padding : 20, paddingBottom : 10 , alignItems :'center', gap : 10, borderBottomColor : Colors.myGray, borderBottomWidth : 1}}>
                <TouchableOpacity style={{position : 'relative'}}>
                    <Image
                        source={require('../../assets/images/prof.png')}
                        style={{width: 25, height : 25,  borderRadius : 50 }}
                    />

                    <Ionicons name='ellipse' color={Colors.myGreen} style={{position : 'absolute', bottom : 0, left : 20, borderColor : 'white', borderWidth : 1}} size={7}/>
                </TouchableOpacity>
                <Text style={{fontFamily : 'poppinsBold', fontSize : 15}}>Jason kassey</Text>

                <View style={{display : 'flex', flexDirection : 'row', marginLeft : 'auto', gap : 5, alignItems : 'center'}}>
                    <Ionicons name='time-outline' color={Colors.myGreen}/>
                    <Text style={{color : Colors.myGreen}}>29:59</Text>
                </View>
            </View>

            <ScrollView style={{padding : 20, height : '75%',}}>
                <Text style={{textAlign : 'center', fontFamily : 'poppinsRegular', fontSize : 12, color : 'gray'}}>Current rate $318.01</Text>

                <View style={{marginBottom : 30}}>
                    <View style={{
                        backgroundColor : Colors.myGray, 
                        width : '70%', padding :15, 
                        marginTop : 20, borderTopLeftRadius : 15, 
                        borderTopRightRadius : 15, borderBottomRightRadius : 15,

                    }}>
                        <Text>Buying Algo</Text>
                        <Text style={{textAlign : 'right', paddingTop : 5, fontSize : 12}}>3:32pm</Text>
                    </View>

                    <View style={{backgroundColor : Colors.myYellow, 
                        width : '70%', padding :15, 
                        display : 'flex', justifyContent : 'flex-end',
                        alignSelf : 'flex-end', marginTop : 20, borderTopRightRadius : 15, 
                        borderTopLeftRadius : 15, borderBottomLeftRadius : 15,
                    }}>
                        <Text>Good day, please type in your Phone number and amount you’re buying.</Text>
                        <Text style={{textAlign : 'right', paddingTop : 5, fontSize : 12}}>3:32pm</Text> 
                    </View>

                    <View style={{
                        backgroundColor : Colors.myGray, 
                        width : '70%', padding :15, 
                        marginTop : 20, borderTopLeftRadius : 15, 
                        borderTopRightRadius : 15, borderBottomRightRadius : 15,

                    }}>
                        <Text>Phone number: +2347038570548 Crypto Amount: 250 ALGO </Text>
                        <Text style={{textAlign : 'right', paddingTop : 5, fontSize : 12}}>3:32pm</Text>
                    </View>

                    <View style={{
                        backgroundColor : Colors.myGray, 
                        width : '70%', padding :15, 
                        marginTop : 20, borderTopLeftRadius : 15, 
                        borderTopRightRadius : 15, borderBottomRightRadius : 15,

                    }}>
                        <Text>Phone number: +2347038570548 Crypto Amount: 250 ALGO </Text>
                        <Text style={{textAlign : 'right', paddingTop : 5, fontSize : 12}}>3:32pm</Text>
                    </View>
                </View>
            </ScrollView>



            <View style={{ flex : 1 ,  justifyContent: 'flex-end',  width: '100%', paddingBottom : 10}}>
                <View style={{
                    marginHorizontal : 20, 
                    display : 'flex', flexDirection : 'row', padding : 10,
                    alignItems : 'center', gap : 10, paddingHorizontal : 20, 
                    borderRadius : 10,
                    backgroundColor: 'white',
                    borderRadius: 8,
                    shadowColor: '#000',
                    shadowOpacity: 0.30,
                    shadowRadius: 3.84,
                    elevation: 5, 
                    borderColor : Colors.myGray, borderWidth : 0.5,

                }}>
                    <TouchableOpacity>
                        <Ionicons name='add-circle-sharp' color={Colors.myYellow}  size={27}/>
                    </TouchableOpacity>

                    <TextInput placeholder='Type A Message' style={{height: '100%', flex: 1,}}/>

                    <TouchableOpacity>
                        <Ionicons name='send' size={20} style={{marginLeft : 'auto'}}/>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
      
    </SafeAreaView>
  )
}

export default messageChat

const styles = StyleSheet.create({

})