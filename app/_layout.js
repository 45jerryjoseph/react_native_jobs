import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

//Makes the Native Splash Screen remain Visible until hideAsync is called.
SplashScreen.preventAutoHideAsync()

const Layout = () => {
    const [fontsLoaded] = useFonts({
        DMBold: require('../assets/fonts/DMSans-Bold.ttf'),
        DMMedium: require('../assets/fonts/DMSans-Medium.ttf'),
        DMRegular: require('../assets/fonts/DMSans-Regular.ttf'),
    })


    // Think of the Below as UseEffect
    const onLayoutRootView = useCallback( async () => {
        if (fontsLoaded){
            await SplashScreen.hideAsync();
        }
    },[fontsLoaded])

    if (!fontsLoaded) return null;

    return <Stack  onLayout={onLayoutRootView}/>
}

export default Layout;