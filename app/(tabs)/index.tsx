import { Dimensions, Image, StyleSheet, View } from "react-native";
import { PROVIDER_GOOGLE } from "react-native-maps";
import MapView from "react-native-maps";

export default function HomeScreen() {
  return <MapView style={styles.map} provider={PROVIDER_GOOGLE}></MapView>;
}

const styles = StyleSheet.create({
  map: {
    height: Dimensions.get("window").height,
  },
});
