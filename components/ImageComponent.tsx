import React, { useState } from "react";
import {
  View,
  Button,
  Image,
  Alert,
  StyleSheet,
  PermissionsAndroid,
  Platform,
} from "react-native";
import { launchImageLibrary } from "react-native-image-picker";

const ImageApp = () => {
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  const requestGalleryPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: "Quyền truy cập thư viện ảnh",
          message:
            "Ứng dụng cần quyền truy cập vào thư viện ảnh của bạn để chọn hình ảnh",
          buttonNeutral: "Hỏi lại sau",
          buttonNegative: "Từ chối",
          buttonPositive: "Đồng ý",
        }
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log("Bạn đã cấp quyền truy cập thư viện ảnh");
        openGallery(); // Hàm mở thư viện ảnh
      } else {
        console.log("Quyền truy cập thư viện ảnh bị từ chối");
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const openGallery = () => {
    const options = {
      mediaType: 'photo' as const,
      includeBase64: false,
    };

    launchImageLibrary(options, (response) => {
        if (response.didCancel) {
          console.log('Người dùng đã hủy chọn ảnh');
        } else if (response.errorCode) {
          console.log('Error Code:', response.errorCode);
          console.log('Error Message:', response.errorMessage);
        } else if (response.assets) {
          const source = response.assets[0].uri;
          console.log('Ảnh được chọn:', source);
          setPhotoUri(source);
        }
      });
  };

  return (
    <View style={styles.container}>
      <Button title="Chọn Ảnh Từ Thư Viện" onPress={requestGalleryPermission} />
      {photoUri && <Image source={{ uri: photoUri }} style={styles.image} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
});

export default ImageApp;
