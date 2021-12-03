import { OsmiProvider } from "osmicsx"
import CustomTheme from "./customTheme" // your custom style file

export const {apply, connect} = OsmiProvider(CustomTheme)