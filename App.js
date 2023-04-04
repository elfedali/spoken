import { NavigationContainer } from "@react-navigation/native";
import SignInScreen from "./src/screens/public/SignInScreen";
import SignUpScreen from "./src/screens/public/SignUpScreen";
import OnBoardingScreen from "./src/screens/public/OnBoardingScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React, { useCallback } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import NotificationScreen from "./src/screens/private/NotificationScreen";
import SettingsScreen from "./src/screens/private/SettingsScreen";
import ProfileScreen from "./src/screens/private/ProfileScreen";
import ChatScreen from "./src/screens/private/ChatScreen";
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import { strings, theme } from "./src/shared";
import { MaterialCommunityIcons } from "@expo/vector-icons";


const Stack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

SplashScreen.preventAutoHideAsync();

const HomeScreen = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: {
          backgroundColor: theme.colors.primary,

        },
        headerTitleStyle: {
          //fontFamily: theme.fonts.bold,
        },
        headerTintColor: theme.colors.black,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarStyle: {
          //backgroundColor: theme.colors.white,
          //borderTopColor: theme.colors.gray,
          //borderTopWidth: 1,
        },
        tabBarLabelStyle: {
          //fontFamily: theme.fonts.regular,
        },



      }}
    >
      <Tabs.Screen name="ChatScreen" component={ChatScreen}
        options={{
          title: strings.screens.private.chat.title,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="chat" color={color} size={26} />
          ),

        }}
      />
      <Tabs.Screen name="NotificationScreen" component={NotificationScreen}
        options={{
          title: strings.screens.private.notification.title,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="bell" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen name="ProfileScreen" component={ProfileScreen}
        options={{
          title: strings.screens.private.profile.title,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
      <Tabs.Screen name="SettingsScreen" component={SettingsScreen}
        options={{
          title: strings.screens.private.settings.title,
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="cog" color={color} size={26} />
          ),
          y
        }}

      />
    </Tabs.Navigator>
  );
};
export default function App() {

  const [fontsLoaded] = Font.useFonts({
    'Kodchasan-Bold': require('./assets/fonts/Kodchasan-Bold.ttf'),
    'Kodchasan-Regular': require('./assets/fonts/Kodchasan-Regular.ttf'),
    'Kodchasan-SemiBold': require('./assets/fonts/Kodchasan-SemiBold.ttf'),
    "Kodchasan-Medium": require("./assets/fonts/Kodchasan-Medium.ttf"),
    "Kodchasan-Light": require("./assets/fonts/Kodchasan-Light.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer
      onReady={() => onLayoutRootView()}
    >
      <Stack.Navigator initialRouteName="OnBoardingScreen">
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen}
          options={{
            headerShown: false
          }}
        />

      </Stack.Navigator>
    </NavigationContainer >
  );
}

