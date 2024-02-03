import { Link, Stack } from "expo-router";

import { Text, View } from "@ynssenem/lext";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View
        flex={1}
        style={{
          alignItems: "center",
          justifyContent: "center",
          padding: 20,
        }}
      >
        <Text fontSize={20}>This screen doesn't exist.</Text>

        <Link
          href="/"
          style={{
            marginTop: 15,
            paddingVertical: 15,
          }}
        >
          <Text fontSize={14}>Go to home screen!</Text>
        </Link>
      </View>
    </>
  );
}
