import { StatusBar } from "expo-status-bar";
import { Platform } from "react-native";

import { Text, View } from "@ynssenem/lext";

export default function ModalScreen() {
  return (
    <View
      flex={1}
      style={{
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text fontSize={20}>Modal</Text>

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}
