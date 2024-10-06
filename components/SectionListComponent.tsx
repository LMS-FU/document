import React, { useState } from "react";
import { View, Text, SectionList, StyleSheet } from "react-native";

interface Product {
  id: string;
  name: string;
  price: string;
}

interface ProductSection {
  title: string;
  data: Product[];
}

const DATA: ProductSection[] = [
  {
    title: "Electronics",
    data: [
      { id: "1", name: "Phone", price: "$699" },
      { id: "2", name: "Laptop", price: "$999" },
      { id: "3", name: "Headphones", price: "$199" },
      { id: "4", name: "Phone", price: "$699" },
      { id: "5", name: "Laptop", price: "$999" },
      { id: "6", name: "Headphones", price: "$199" },
    ],
  },
  {
    title: "Groceries",
    data: [
      { id: "7", name: "Apples", price: "$2.99/kg" },
      { id: "8", name: "Bananas", price: "$1.99/kg" },
      { id: "9", name: "Oranges", price: "$3.49/kg" },
      { id: "10", name: "Apples", price: "$2.99/kg" },
      { id: "11", name: "Bananas", price: "$1.99/kg" },
      { id: "12", name: "Oranges", price: "$3.49/kg" },
    ],
  },
  {
    title: "Clothing",
    data: [
      { id: "13", name: "T-shirt", price: "$19.99" },
      { id: "14", name: "Jeans", price: "$49.99" },
      { id: "15", name: "Jacket", price: "$89.99" },
      { id: "16", name: "T-shirt", price: "$19.99" },
      { id: "17", name: "Jeans", price: "$49.99" },
      { id: "18", name: "Jacket", price: "$89.99" },
    ],
  },
];
// Thành phần chính với SectionList
const ProductSectionListScreen = () => {
  const loadMoreProducts = () => {
    console.log("Loading more products...");
    // Logic để tải thêm sản phẩm từ API hoặc dữ liệu khác
  };

  // Thành phần hiển thị từng sản phẩm
  const ProductItem = ({ id, name, price }: Product) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{name}</Text>
      <Text style={styles.itemPrice}>{price}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <SectionList
        sections={DATA}
        keyExtractor={(item) => item.id} // Sử dụng id làm key duy nhất
        renderItem={({ item }) => (
          <ProductItem id={item.id} name={item.name} price={item.price} />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
        onEndReached={loadMoreProducts} // Gọi khi cuộn đến cuối
        onEndReachedThreshold={0.1} // Gọi khi cuộn gần đến cuối
        stickySectionHeadersEnabled={true} // Cho phép header "dính" lại khi cuộn
        initialNumToRender={2} // Số phần tử ban đầu được render
        maxToRenderPerBatch={2} // Số phần tử tối đa được render trong mỗi đợt
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 40,
    paddingHorizontal: 10,
    backgroundColor: "#f5f5f5",
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: "magenta", // Changed to magenta
    color: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginBottom: 5,
    borderRadius: 5,
  },
  itemContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#ff66cc",
    marginBottom: 5,
    borderRadius: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 16,
    color: "#333",
  },
  itemPrice: {
    fontSize: 16,
    color: "blue",
  },
});

export default ProductSectionListScreen;
