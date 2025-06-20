import { useAuthContext } from "@/contexts/AuthContext";
import { Button } from "@/ui/components/Button";
import { Input } from "@/ui/components/Input";
import { Link, Redirect } from "expo-router";
import { Text, View } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export default function LoginScreen() {
  const { styles } = useStyles(stylesheet);

  const { isLoggedIn, isReady, logIn } = useAuthContext();

  if (!isReady) {
    // Optionally, you can return a loading indicator here
    return null;
  }

  if (isLoggedIn) {
    return <Redirect href="/(protected)/(tabs)/my-profile" />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Vítej zpátky!</Text>

      <View style={styles.buttonContainer}>
        <Button onPress={logIn} variant="outlined">
          Přihlásit se pomocí Google
        </Button>
        <Button onPress={logIn} variant="outlined">
          Přihlásit se pomocí Facebooku
        </Button>
        <Text style={styles.dividerText}>---- Nebo pomocí emailu ----</Text>
        <Input placeholder="Zadejte email" />
        <Input placeholder="Zadejte heslo" />
        <Button onPress={logIn}>Přihlásit se</Button>
      </View>

      <View style={styles.signUpContainer}>
        <Text>Ještě nemáte účet? </Text>

        <Link href="/register">
          <Button variant="plain">Zaregistrujte se</Button>
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
  dividerText: {
    textAlign: "center",
    color: theme.colors.grey["700"],
    marginVertical: 5,
  },
  signUpContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
}));
