import { useAuthContext } from "@/contexts/AuthContext";
import { Button } from "@/ui/components/Button";
import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function MyProfileScreen() {
  const { styles } = useStyles(stylesheet);

  const { logOut } = useAuthContext();

  return (
    <View style={styles.container}>
      <Text>My Profile</Text>
      <Button onPress={logOut}>Odhlásit se</Button>
    </View>
  );
}

export const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
}));
