import { Pressable, PressableProps, Text } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

type ButtonVariant = "filled" | "outlined" | "plain";

interface ButtonProps extends PressableProps {
  variant?: ButtonVariant;
}

export function Button({
  variant = "filled",
  style,
  children,
  ...props
}: ButtonProps) {
  const { styles } = useStyles(stylesheet);

  return (
    <Pressable {...props} style={[styles.base, styles[variant]]}>
      {typeof children === "string" ? (
        <Text style={styles[`${variant}Text` as const]}>{children}</Text>
      ) : (
        children
      )}
    </Pressable>
  );
}

const stylesheet = createStyleSheet((theme) => ({
  base: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  filled: {
    backgroundColor: theme.colors.primary.main,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  outlined: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: theme.colors.primary.main,
    paddingVertical: 12,
    paddingHorizontal: 20,
  },
  plain: {
    backgroundColor: "transparent",
    borderWidth: 0,
    padding: 0,
  },
  filledText: {
    color: theme.colors.grey["100"],
    fontWeight: "600",
  },
  outlinedText: {
    color: theme.colors.primary.main,
    fontWeight: "600",
  },
  plainText: {
    color: theme.colors.primary.main,
    fontWeight: "600",
  },
}));
