import { Box, Button, Text } from "@ynssenem/lext";
import { useState } from "react";

export default function TabOneScreen() {
  const [count, setCount] = useState(0);
  return (
    <Box>
      <Text fontSize={20} textAlign={"center"}>
        Count: {count}
      </Text>
      <Button onPress={() => setCount(count + 1)}>Press me</Button>
    </Box>
  );
}
