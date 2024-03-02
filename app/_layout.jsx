import FontAwesome from '@expo/vector-icons/FontAwesome';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';
import { TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import Colors from '@/constants/Colors';
import { useNavigation } from 'expo-router';


export {
  ErrorBoundary,
} from 'expo-router';

export const unstable_settings = {
  initialRouteName: 'profileScreens/profileOne',
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    poppinsBold: require('../assets/fonts/Poppins-Bold.ttf'),
    poppinsRegular: require('../assets/fonts/Poppins-Regular.ttf'),
    ...FontAwesome.font,
  });


  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  
  return <RootLayoutNav />;
}

function RootLayoutNav() {

  const navigate = useNavigation()
  

  return (
    
    <Stack>

        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen name="merchantOnboard/messageChat"  options={{
          presentation : 'modal',
          headerTitle : 'Buy Algo',
          headerTitleAlign : 'center',
          headerTitleStyle : {fontFamily : 'SpaceMono',},
          headerShadowVisible : false,
          headerBackVisible : true,
          headerStyle : {backgroundColor : Colors.myYellow},

          headerRight : ()=>(
            <TouchableOpacity onPress={()=> navigate.goBack()}>
              <Ionicons name='ellipsis-vertical' size={20} />
            </TouchableOpacity>
          )
        }}
        />
        <Stack.Screen name="merchantOnboard/register" options={{ headerShown: false }} />
        <Stack.Screen name="merchantOnboard/setupOne" options={{ headerShown: false }} />
        <Stack.Screen name="merchantOnboard/setupTwo" options={{ headerShown: false }} />
        <Stack.Screen name="merchantOnboard/setupThree" options={{ headerShown: false }} />
        <Stack.Screen name="merchantOnboard/setupFour" options={{ headerShown: false }} />

        <Stack.Screen name="profileScreens/profileOne" options={{
          headerTitle : 'Profile', 
          headerShadowVisible : false, 
          headerTitleStyle : {fontFamily : 'SpaceMonoa'},
          headerStyle : {backgroundColor : Colors.myGray},
          headerRight : ()=>(
            <TouchableOpacity onPress={()=> navigate.goBack()}>
              <Ionicons name='ellipsis-vertical' size={20} />
            </TouchableOpacity>
          )
        }} />
      </Stack>

  );
}
