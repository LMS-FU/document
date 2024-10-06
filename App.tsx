import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import FrmLogin from "./components/frmLogin";
import ScrollViewComponent from "./components/ScrollViewComponent";
import ProfileScreen from "./components/ProfileScreenComponent";
import ProductListScreen from "./components/FlatListComponent";
import ProductSectionListScreen from "./components/SectionListComponent";
import NavigationComponent from "./components/NavigationComponent";
import DrawerLayoutDemo from "./components/DrawerLayoutComponent";
import APIComponent from "./components/APIComponent";
import Map from "./components/MapComponent";
import Camera from "./components/CameraComponent";
import ImageApp from "./components/ImageComponent";

export default function App() {
 
  return (
    <ImageApp/>
    // <Camera/>
    // <Map />
    // <APIComponent />
    // <DrawerLayoutDemo />
      // <NavigationComponent />
      // {/* <ProductSectionListScreen /> */}
      // {/* <ProductListScreen /> */}
      // {/* <ProfileScreen /> */}
      // {/* <ScrollViewComponent /> */}
      // {/* <FrmLogin /> */}
    //   <View style={styles.container}>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  secondWrapper: {
    width: "90%",
  },
  inputText: {
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,

  },
});
