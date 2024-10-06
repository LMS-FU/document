import React, { useRef } from "react";
import {
  View,
  Text,
  Button,
  DrawerLayoutAndroid,
  StyleSheet,
} from "react-native";

export default function DrawerLayoutDemo() {
  const drawer = useRef<DrawerLayoutAndroid>(null);

  const navigationView = (
    <View style={styles.navigationContainer}>
      <Text style={styles.paragraph}>Tùy chọn điều hướng</Text>
      <Button
        title="Đóng ngăn kéo"
        onPress={() => {
          if (drawer.current) {
            drawer.current.closeDrawer();
          }
        }}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={() => navigationView}
    >
      <View style={styles.container}>
        <Text style={styles.paragraph}>Màn hình chính</Text>
        <Button
          title="Mở ngăn kéo"
          onPress={() => {
            if (drawer.current) {
              drawer.current.openDrawer();
            }
          }}
        />
      </View>
    </DrawerLayoutAndroid>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navigationContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16,
  },
  paragraph: {
    fontSize: 15,
    textAlign: "center",
  },
});
