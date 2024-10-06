import { useState } from "react";
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function FrmLogin() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const validUsername = "admin";
  const validPassword = "12345";
  const handleLogin = () => {
    if (name === validUsername && password === validPassword) {
      alert("Login successfully");
      // navigation.navigate('Home', { user: username });
    } else {
      alert("Login failed");
    }
  };

  // const handleLogin = async () => {
  //   try {
  //     const response = await fetch('https://yourapi.com/login', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         username,
  //         password,
  //       }),
  //     });

  //     const data = await response.json();

  //     if (data.success) {
  //       Alert.alert('Đăng nhập thành công!', `Chào mừng ${username}`);
  //     } else {
  //       Alert.alert('Đăng nhập thất bại', 'Sai tên đăng nhập hoặc mật khẩu.');
  //     }
  //   } catch (error) {
  //     Alert.alert('Lỗi', 'Có lỗi xảy ra, vui lòng thử lại sau.');
  //   }
  // };
  return (
    <>
      <Image
        style={styles.avatar}
        source={require("../assets/logofptdn.jpg")}
      />
      <View style={styles.secondWrapper}>
        <Text>Hello, {name}</Text>
        <TextInput
          style={styles.inputText}
          placeholder="Enter username"
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.inputText}
          placeholder="Enter password"
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.buttonLogin}
          onPress={handleLogin}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
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
    borderColor: "orange",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    shadowColor: "orange",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1, // This is for Android shadow
    marginTop: 10,
  },
  buttonLogin: {
    backgroundColor: "orange",
    marginTop: 10,
  },
  buttonText:{
    padding: 10,
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",

  }
});
