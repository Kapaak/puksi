import { useAuthContext } from "@/contexts/AuthContext";
import { Redirect, Stack } from "expo-router";

export default function ProtectedLayout() {
  const { isReady, isLoggedIn } = useAuthContext();

  if (!isReady) {
    // Optionally, you can return a loading indicator here
    return null;
  }

  if (!isLoggedIn) {
    return <Redirect href="/login" />;
  }

  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
