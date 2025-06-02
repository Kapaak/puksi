import { useAuthContext } from "@/contexts/AuthContext";
import { Button } from "@/ui/components/Button";
import { ScrollView, Text, View } from "react-native";

export default function MyProfileScreen() {
  const { logOut } = useAuthContext();

  return (
    <ScrollView>
      <View>
        <Text>My Profile</Text>
        <Button onPress={logOut}>Logout</Button>
      </View>
    </ScrollView>
  );
}
