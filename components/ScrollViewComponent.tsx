import React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const ScrollViewComponent: React.FC = () => {
  return (
    <ScrollView>
      <Image
        source={{ uri: "https://via.placeholder.com/150" }}
        style={styles.logo}
      />

      <ScrollView horizontal>
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.logo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.logo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.logo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.logo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.logo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.logo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.logo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.logo}
        />
      </ScrollView>
      <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.logo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.logo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.logo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.logo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.logo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.logo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.logo}
        />
        <Image
          source={{ uri: "https://via.placeholder.com/150" }}
          style={styles.logo}
        />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    width: 200,
    height: 200,
    margin: 20,
  },
  logo: {
    width: 150,
    height: 150,
    margin: 30,
  },
});

export default ScrollViewComponent;
