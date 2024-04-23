import { HomeProps } from "../data/types"
import React, { useEffect, useRef } from "react";
import { BackHandler } from "react-native";
import WebView from "react-native-webview";

const HomeScreen: React.FC<HomeProps> = (props) => {
  const webViewRef = useRef<WebView>(null);
  const handleBackButtonPress = () => {
    try {
        webViewRef.current?.goBack();
        
        return true;
    } catch (err: any) {
        console.log("[handleBackButtonPress] Error : ", err.message);

        return false;
    }
  }

  useEffect(() => {
      BackHandler.addEventListener("hardwareBackPress", handleBackButtonPress)
      return () => {
          BackHandler.removeEventListener("hardwareBackPress", handleBackButtonPress)
      };
  }, []);

  return (
    <WebView 
      ref={webViewRef}
      source={{ uri: 'https://acm.murraystate.edu/' }} 
      userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36"
    />
  )
}

export default HomeScreen;