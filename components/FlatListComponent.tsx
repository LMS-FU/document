import React from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
}

// Danh sách sản phẩm mẫu
const products: Product[] = [
  {
    id: "1",
    name: "Product 1",
    description:
      "Description about product 1 here ... Description about product 1 here ... Description about product 1 here ...",
    price: "$100",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "2",
    name: "Product 2",
    description: "Description about product 1 here ...",
    price: "$200",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "3",
    name: "Product 3",
    description: "Description about product 1 here ...",
    price: "$300",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "4",
    name: "Product 4",
    description: "Description about product 1 here ...",
    price: "$400",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "5",
    name: "Product 5",
    description: "Description about product 1 here ...",
    price: "$100",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "6",
    name: "Product 6",
    description: "Description about product 1 here ...",
    price: "$200",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "7",
    name: "Product 7",
    description: "Description about product 1 here ...",
    price: "$300",
    image: "https://via.placeholder.com/150",
  },
  {
    id: "8",
    name: "Product 8",
    description: "Description about product 1 here ...",
    price: "$400",
    image: "https://via.placeholder.com/150",
  },
];

// Thành phần hiển thị từng sản phẩm
const ProductItem = ({ item }: { item: Product }) => (
  <View style={styles.itemContainer}>
    <Image source={{ uri: item.image }} style={styles.image} />
    <View style={styles.textContainer}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.description} numberOfLines={2} ellipsizeMode="tail">
        {item.description}
      </Text>
      <Text style={styles.price}>{item.price}</Text>
    </View>
  </View>
);

// Thành phần chính
const ProductListScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList<Product>
        data={products}
        renderItem={({ item }) => <ProductItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1, // Để FlatList mở rộng chiếm toàn màn hình
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  itemContainer: {
    flexDirection: "row",
    padding: 10,
    marginVertical: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 10,
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    textAlign: "justify",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
});

export default ProductListScreen;
