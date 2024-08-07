import { Stack } from "expo-router";

export default function StackLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="home"
        options={{
          headerTitle: "Title page ",
        }}
      />
      <Stack.Screen name="hello" />
    </Stack>
  );
}
