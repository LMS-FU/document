import React, { useState, useEffect } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import axios from "axios";

const UserList = () => {
  interface User {
    id: number;
    name: string;
    // Add other properties if needed
  }

  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setUsers(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <View style={styles.container}>
      <Text>Danh sách người dùng</Text>
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: "#efefef",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UserList;
