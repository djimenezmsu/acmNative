import { HomeProps } from "../data/types"
import React from "react";
import WebView from "react-native-webview";

const HomeScreen: React.FC<HomeProps> = (props) => {

  return (
    <WebView source={{ uri: 'https://acm.murraystate.edu/' }} userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/99.0.4844.51 Safari/537.36" />
  )
}

export default HomeScreen;