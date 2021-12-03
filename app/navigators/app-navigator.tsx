import React from "react"
import { NavigationContainer, DefaultTheme, DarkTheme } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { navigationRef } from "./navigation-utilities"
import { getHeaderTitle } from "@react-navigation/elements"

// Components
import HeaderNav from "@components/atom/HeaderNav"
import BackButton from "@components/atom/BackButton"

// Styles
import { apply } from "@theme"
import { appearanceHook } from "osmicsx"

import HomeScreen from "@screens/home"
import CalendarScreen from "@screens/calendar"
import MenuScreen from "@screens/menu"

export type NavigatorParamList = {
  home: undefined
  calendar: undefined
  menu: undefined
}

// Documentation: https://reactnavigation.org/docs/stack-navigator/
const Stack = createNativeStackNavigator<NavigatorParamList>()

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: ({ navigation, route, options, back }) => {
          const title = getHeaderTitle(options, route.name)

          return (
            <HeaderNav
              title={title}
              left={
                back ? <BackButton /> : options?.headerLeft ? options?.headerLeft(undefined) : null
              }
              right={options?.headerRight ? options?.headerRight(undefined) : null}
            />
          )
        },
        headerShown: false,
        headerShadowVisible: false,
        headerTitleAlign: "center",
        headerTitleStyle: apply(
          appearanceHook.activeTheme === "dark" ? "text-white" : "text-gray-900",
        ),
        headerBackTitle: "",
      }}
    >
      <Stack.Screen name="home" component={HomeScreen} />
      <Stack.Screen name="calendar" component={CalendarScreen} />
      <Stack.Screen name="menu" component={MenuScreen} />
    </Stack.Navigator>
  )
}

interface NavigationProps extends Partial<React.ComponentProps<typeof NavigationContainer>> {}

export const AppNavigator = (props: NavigationProps) => {
  return (
    <NavigationContainer
      ref={navigationRef}
      theme={appearanceHook.activeTheme === "dark" ? DarkTheme : DefaultTheme}
      {...props}
    >
      <AppStack />
    </NavigationContainer>
  )
}

AppNavigator.displayName = "AppNavigator"

const exitRoutes = ["Components"]
export const canExit = (routeName: string) => exitRoutes.includes(routeName)
