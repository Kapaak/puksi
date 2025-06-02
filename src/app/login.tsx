import { useAuthContext } from "@/contexts/AuthContext";
import { Button } from "@/ui/components/Button";
import { Text, View } from "react-native";

export default function LoginScreen() {
  const { logIn } = useAuthContext();

  return (
    <View>
      <Text>Login Screen</Text>

      <Button onPress={logIn}>Log in !</Button>
    </View>
  );
}
