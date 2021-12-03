import { FC, memo } from "react"
import { TextInputProps, TextInput } from "react-native"

// Styles
import styles from "./style"
import { apply } from "@theme"

export interface IInput extends TextInputProps {
  name: string
  value: string
  setFieldValue: (name: string, value: string) => void
}

const Input: FC<IInput> = (props) => {
  const { setFieldValue, value, name } = props

  return (
    <TextInput
      {...props}
      style={styles.inputContainer}
      onChangeText={(value) => setFieldValue(name, value)}
      placeholderTextColor={apply("text-gray-250")}
      value={value}
    />
  )
}

export default memo(Input)
