import { ReactNode } from "react";
import { TextInput, TextInputProps, View, Platform } from "react-native";
import cslx from "clsx";

import { colors } from "@/styles/colors";

type Variants = "primary" | "secondary" | "tertiary";

type InputProps = {
  children: ReactNode;
  variant?: Variants;
};

function Input({ children, variant = "primary" }: InputProps) {
  return (
    <View
      className={cslx("w-full h-16 flex-row items-center gap-2", {
        "h-14 px-4 rounded-lg border border-zinc-800": variant !== "primary",
        "bg-zinc-950": variant === "secondary",
        "bg-zinc-900": variant === "tertiary",
      })}
    >
      {children}
    </View>
  );
}

function Field({ placeholder, ...rest }: TextInputProps) {
  return (
    <TextInput
      className="flex-1 text-zinc-100 text-lg font-regular"
      placeholder={placeholder}
      placeholderTextColor={colors.zinc[400]}
      cursorColor={colors.zinc[100]}
      selectionColor={Platform.OS === "ios" ? colors.zinc[100] : undefined}
      {...rest}
    />
  );
}

Input.Field = Field;

export { Input };
