import { Pressable, PressableProps } from "react-native";

interface ButtonProps extends PressableProps {}

export function Button(props: ButtonProps) {
  return <Pressable {...props} />;
}
