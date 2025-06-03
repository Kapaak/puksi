import { useAuthContext } from "@/contexts/AuthContext";
import { Button } from "@/ui/components/Button";
import { Input } from "@/ui/components/Input";
import { Link, Redirect } from "expo-router";
import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

interface RegisterScreenProps {}

export default function RegisterScreen({}: RegisterScreenProps) {
  const { styles } = useStyles(stylesheet);

  const { isLoggedIn, isReady } = useAuthContext();

  if (!isReady) {
    return null;
  }

  if (isLoggedIn) {
    return <Redirect href="/(protected)/(tabs)/my-profile" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Zaregistrujte se</Text>

      <View style={styles.buttonContainer}>
        <Input placeholder="Jméno" />
        <Input placeholder="Příjmení" />
        <Input placeholder="Přezdívka" />
        <Input placeholder="Zadejte email" />
        <Input placeholder="Zadejte heslo" secureTextEntry />
        <Input placeholder="Potvrdit heslo" secureTextEntry />
        <Button onPress={() => {}}>Vytvořit účet</Button>
      </View>

      <View style={styles.signInContainer}>
        <Text>Už máte účet? </Text>

        <Link href="/login">
          <Button variant="plain">Přihlašte se</Button>
        </Link>
      </View>
    </View>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  container: {
    flex: 1,
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },
  title: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    color: theme.colors.grey["900"],
    paddingBottom: 10,
  },
  buttonContainer: {
    gap: 10,
    width: "100%",
    maxWidth: 400,
  },
  signInContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
}));
