import { useEffect, useState } from 'react';
import "./global";
import 'react-native-get-random-values';
import 'react-native-url-polyfill/auto';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from "expo-font";
import { AppContext } from './utils/AppContext';
import InterBold from "./assets/fonts/Inter-Bold.ttf";
import InterRegular from "./assets/fonts/Inter-Regular.ttf";
import Knewave from "./assets/fonts/knewave.ttf";
import NotoSansKRBlack from "./assets/fonts/NotoSansKR-Black.otf";
import NotoSansKRBold from "./assets/fonts/NotoSansKR-Bold.otf";
import NotoSansKRLight from "./assets/fonts/NotoSansKR-Light.otf";
import NotoSansKRMedium from "./assets/fonts/NotoSansKR-Medium.otf";
import NotoSansKRRegular from "./assets/fonts/NotoSansKR-Regular.otf";
import NotoSansKRThin from "./assets/fonts/NotoSansKR-Thin.otf";

import Homepage from './src/page/HomePage';

const Stack = createNativeStackNavigator();

function App() {
  const [walletAddress, setWalletAddress] = useState(null); 
  const [walletType, setWalletType] = useState(null); 
  const [chainID, setChainID] = useState(null);
  const [userEmail, setUserEmail] = useState(null);
  const [userStatus, setUserStatus] = useState(null);
  const [memberId, setMemberId] = useState(null);
  const [loginDate, setLoginDate] = useState(null);
  const [fcmToken, setFcmToken] = useState(null);
  const [routerHistory, setRouterHistory] = useState(null);
  const [initialRouter, setInitialRouter] = useState("HomePage")
  const [loading, setLoading] = useState(true);

  const [loaded] = useFonts({
    InterRegularFont: InterRegular,
    InterBoldFont: InterBold,
    KnewaveFont: Knewave,
    'material-community': Knewave,
    NotoSansKRBlack: NotoSansKRBlack,
    NotoSansKRBold: NotoSansKRBold,
    NotoSansKRLight: NotoSansKRLight,
    NotoSansKRMedium: NotoSansKRMedium,
    NotoSansKRRegular: NotoSansKRRegular,
    NotoSansKRThin: NotoSansKRThin
  })

  return (
    <SafeAreaView style={{flex: 1}}>
      <AppContext.Provider value={{walletAddress, setWalletAddress, chainID, setChainID, userEmail, setUserEmail, userStatus, setUserStatus, memberId, setMemberId, walletType, setWalletType, loginDate, setLoginDate, fcmToken, setFcmToken, routerHistory, setRouterHistory }}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={initialRouter} screenOptions={{headerShown: false}}>
            <Stack.Screen name="HomePage" component={Homepage} />
          </Stack.Navigator>
        </NavigationContainer>
      </AppContext.Provider>
    </SafeAreaView>
  );
}

export default App;