import React, { useState, useEffect } from 'react';
import { View, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
// Function to get permission for location
const Map = () => {
const [location, setLocation] = useState({
  latitude: 37.78825, // Tọa độ mặc định
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
});

useEffect(() => {
  requestLocationPermission();
}, []);

const requestLocationPermission = async () => {
  if (Platform.OS === 'android') {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Quyền truy cập vị trí',
        message: 'Ứng dụng cần quyền truy cập vị trí của bạn để hiển thị bản đồ',
        buttonNeutral: 'Hỏi lại sau',
        buttonNegative: 'Từ chối',
        buttonPositive: 'Đồng ý',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      console.log('Bạn đã cấp quyền truy cập vị trí');
    } else {
      console.log('Quyền truy cập vị trí bị từ chối');
    }
  }
};

return (
  <View style={styles.container}>
    <MapView
      style={styles.map}
      region={location}
      showsUserLocation={true}
    >
      <Marker
        coordinate={location}
        title={"Vị trí hiện tại"}
      />
    </MapView>
  </View>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
map: {
  ...StyleSheet.absoluteFillObject,
},
});
export default Map;