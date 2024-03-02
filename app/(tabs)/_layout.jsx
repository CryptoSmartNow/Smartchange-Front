
import {Tabs} from 'expo-router'
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Colors from '@/constants/Colors';
import { Image, TouchableOpacity, View, Text } from 'react-native';
import { Link } from 'expo-router';
export default () => {

  return(
    
    <Tabs screenOptions=
    {{
      headerLeft : ()=>(

          <Image
            source={require('../../assets/images/logo.png')}
            style={{width: 100, height : 20, alignSelf : 'center', marginLeft : 20}}
          />
      ),

      headerRight : () =>(
        <TouchableOpacity style={{marginRight : 20}}>
          <Link href={'profileScreens/profileOne'} as>
            <View>
                <Image
                  source={require('../../assets/images/prof.png')}
                  style={{width: 30, height : 30, alignSelf : 'center', borderRadius :300 }}
              />
            </View>
          </Link>
        </TouchableOpacity>
      ),
      headerStyle : {backgroundColor: Colors.myGray,},
      tabBarStyle : {
        backgroundColor : 'white',
        height : 50
      }
    }}>


    <Tabs.Screen
        name="index"
        options={{
          tabBarShowLabel : false,
          tabBarLabel: "Home",
          tabBarLabelStyle : {
            fontSize : 13,
            paddingBottom : 10
          },
          title: "",
          tabBarIcon: ({ focused }) => (
            <View style={{alignItems : 'center'}}>
              <Ionicons
                size={23}
                style={{ marginBottom: -3 }}
                name="home"
                color={focused ? Colors.myYellow : 'gray'}
              />
              <Text style={{color : focused ? Colors.myYellow : 'gray', marginLeft : 0, fontFamily : 'poppinsBold', fontSize : 12 }}>Home</Text>
            </View>
          ),
        }}
      />

      <Tabs.Screen
        name="chats"
        options={{
          tabBarShowLabel : false,
          tabBarLabel: "Chats",
          tabBarLabelStyle : {
            fontSize : 13,
            paddingBottom : 10
            
          },
          title: "",
          tabBarIcon: ({ focused }) => (
            <View>
              <Ionicons
                size={23}
                style={{ marginBottom: -3 }}
                name="chatbox-outline"
                color={focused ? Colors.myYellow : 'gray'}
              />
              <Text style={{color : focused ? Colors.myYellow : 'gray', marginLeft : 0, fontFamily : 'poppinsBold', fontSize : 12}}>Chat</Text>
            </View>
          ),
        }}
      />
    </Tabs>
  )
}