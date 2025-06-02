import "@/ui/theme/unistyle";
import "react-native-reanimated";

import { AuthProvider } from "@/contexts/AuthContext";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { UnistylesProvider } from "react-native-unistyles";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <UnistylesProvider>
      <AuthProvider>
        <StatusBar style="auto" />
        <Stack>
          <Stack.Screen
            name="(protected)"
            options={{ headerShown: false, animation: "none" }}
          />
          <Stack.Screen name="login" options={{ animation: "none" }} />
        </Stack>
      </AuthProvider>
    </UnistylesProvider>
  );
}
