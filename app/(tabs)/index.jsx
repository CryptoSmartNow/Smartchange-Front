import { StyleSheet, Text, View, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import React, { useState, useEffect } from 'react'
import { useFonts,  } from 'expo-font'
import { TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

const HomeScreen = () => {

  return (
    <SafeAreaView style={{paddingHorizontal : 15, paddingTop : 0, position : 'relative', flex : 1}}>
        {/* <View style={{display : 'flex', flexDirection : 'row', alignItems : 'center', }}>

            <Image
                source={require('../../assets/images/logo.png')}
                style={{width: 100, height : 20, alignSelf : 'center'}}
            />

            <TouchableOpacity style={{marginLeft : 'auto', }}>
                <Image
                    source={require('../../assets/images/prof.png')}
                    style={{width: 35, height : 35, alignSelf : 'center', borderRadius : 50 }}
                />
            </TouchableOpacity>
        </View> */}


        <View style={{backgroundColor : 'white', 
                    padding : 15,  alignItems : 'center', justifyContent : 'center', 
                    display : 'flex', marginTop : 0, borderRadius : 10 
                }}>
            <View>
                <Text style={{textAlign : 'center', fontFamily : 'poppinsRegular', fontSize : 12}}>Number of trades</Text>
                <Text style={{textAlign : 'center', fontFamily : 'poppinsRegular', fontSize :30, paddingVertical : 5}}>52</Text>
                
                <TouchableOpacity style={{backgroundColor : '#E4E4E4', borderRadius : 5}}>
                    <Text style={{textAlign : 'center', fontFamily : 'poppinsRegular', padding : 6, paddingHorizontal: 20, fontSize : 12 }}>View Achievements</Text>
                </TouchableOpacity>
            </View>
        </View>

        <View style={{backgroundColor : 'white', marginTop : 20, padding : 20, flex : 1}}>
            <Text style={{fontFamily : 'poppinsRegular'}}>Transaction history</Text>
            <View style={{paddingTop : 20, }}>
                <View style={{display :'flex', flexDirection : 'row', }}>
                    <Text style={{fontSize : 15, fontFamily : 'Poppins'}}>ETH</Text>
                    <Text style={{marginLeft : 'auto', fontSize : 15, fontFamily : 'poppinsRegular'}}>0.123</Text>
                </View>

                <View style={{display :'flex', flexDirection : 'row', }}>
                    <Text style={{ fontFamily : 'poppinsRegular', fontSize : 12}}>2023-11-27 08:27:27</Text>
                    <Text style={{marginLeft : 'auto', fontFamily : 'poppinsRegular', fontSize : 12}}>Completed</Text>
                </View>
            </View>

            

            <View style={{paddingTop : 20, }}>
                <View style={{display :'flex', flexDirection : 'row', }}>
                    <Text style={{fontSize : 15, fontFamily : 'poppinsRegular'}}>ALGO</Text>
                    <Text style={{marginLeft : 'auto', fontSize : 15, fontFamily : 'poppinsRegular'}}>0.123</Text>
                </View>

                <View style={{display :'flex', flexDirection : 'row', }}>
                    <Text style={{ fontFamily : 'poppinsRegular', fontSize : 12}}>2023-11-26 09:32:00</Text>
                    <Text style={{marginLeft : 'auto', fontFamily : 'poppinsRegular', fontSize : 12}}>Completed</Text>
                </View>
            </View>
            <Text style={{textAlign : 'center', paddingTop : 40, fontFamily : 'poppinsRegular', fontSize : 12, color : 'gray'}}>No more data </Text>
        </View>


    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({

})