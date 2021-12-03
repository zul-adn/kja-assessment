import { FC, memo } from "react"
import { AntDesign as Icon } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/core"

// Components
import Base from "@components/atom/Button/base"

// Styles
import { appearanceHook } from "osmicsx"
import { apply } from "@theme"

export interface IBackButton {}

const BackButton: FC<IBackButton> = (props) => {
  const navigation = useNavigation()

  return (
    <Base onPress={() => navigation.goBack()}>
      <Icon
        name="arrowleft"
        size={24}
        color={appearanceHook.activeTheme === "dark" ? apply("white") : "gray-900"}
      />
    </Base>
  )
}

export default memo(BackButton)
