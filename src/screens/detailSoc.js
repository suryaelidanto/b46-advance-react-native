import * as React from "react";
import { Text, Box, Button } from "native-base";

// Declare route
export default function DetailSoc({ route }) {
  return (
    <Box
      safeArea
      bg="primary.400"
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      <Button onPress={() => console.log(route)}>Klik Saya</Button>
      <Text fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        {/* Implement Params to get Data on previous screen  */}
        {route.params.surya || "Not Found"}
      </Text>
    </Box>
  );
}
