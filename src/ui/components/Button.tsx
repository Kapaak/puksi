import { Pressable, PressableProps, Text } from "react-native";

interface ButtonProps extends PressableProps {}

export function Button(props: ButtonProps) {
  return (
    <Pressable {...props}>
      {typeof props.children === "string" ? (
        <Text>{props.children}</Text>
      ) : (
        props.children
      )}
    </Pressable>
  );
}
