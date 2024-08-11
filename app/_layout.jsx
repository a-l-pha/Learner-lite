import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Title page ",
        }}
      />
      <Stack.Screen name="vocab" />
      <Stack.Screen name="chooseDeck" />
    </Stack>
  );
}
