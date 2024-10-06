import React, { useState } from "react";
import { View, Text, Switch, StyleSheet, ScrollView } from "react-native";

const ProfileScreen = () => {
  // Sử dụng state để lưu trữ giá trị của Switch (true/false)
  const [isMale, setIsMale] = useState(true);

  const toggleSwitch = () => setIsMale((previousState) => !previousState);

  return (
    <View>
      <Text style={styles.label}>Gender:</Text>

      {/* Hiển thị lựa chọn giới tính */}
      <View style={styles.switchContainer}>
        <Text style={styles.genderText}>{isMale ? "Male" : "Female"}</Text>
        <Switch
          trackColor={{ false: "#f4a261", true: "#2a9d8f" }} // Màu của switch
          thumbColor={isMale ? "#f4f3f4" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isMale} // true nếu là Nam, false nếu là Nữ
          style={styles.switch} // Sử dụng style cho transform
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontSize: 18,
    marginBottom: 20,
    fontWeight: "bold",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  genderText: {
    fontSize: 18,
    marginRight: 20,
    fontWeight: "500",
  },
  switch: {
    transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }], // Phóng to Switch
  },
});

export default ProfileScreen;
