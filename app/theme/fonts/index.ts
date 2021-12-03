import * as Font from "expo-font"

export const initFonts = async () => {
  // Refer to ./assets/fonts/custom-fonts.md for instructions.
  // ...
  // Welcome back! Just uncomment this and replace/append with your font file names!
  // ⬇
  await Font.loadAsync({
    'Mukta-Bold': require("./Mukta-Bold.ttf"),
    "Mukta-Medium": require("./Mukta-Medium.ttf"),
    "Mukta-Regular": require("./Mukta-Regular.ttf"),
    "Mukta-SemiBold": require("./Mukta-SemiBold.ttf"),
    'Nunito-Bold': require("./Nunito-Bold.ttf"),
    "Nunito-Regular": require("./Nunito-Regular.ttf"),
    "Nunito-SemiBold": require("./Nunito-SemiBold.ttf"),
  })
}
