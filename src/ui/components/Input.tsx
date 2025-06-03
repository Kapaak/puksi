import { TextInput, TextInputProps } from "react-native";
import { createStyleSheet, useStyles } from "react-native-unistyles";

export function Input(props: TextInputProps) {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <TextInput
      style={[styles.input, props.style]}
      placeholderTextColor={theme.colors.grey["300"]}
      {...props}
    />
  );
}

const stylesheet = createStyleSheet((theme) => ({
  input: {
    borderWidth: 1,
    borderColor: theme.colors.grey["300"],
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 14,
    fontSize: 16,
  },
}));
