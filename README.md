![BrightCoders Logo](../04-recetario-de-cocina-red-team/recetario/img/logo.png)

# RECETARIO DE COCINA 🥙🌮🍕

## ¿Qué es este proyecto?

Este proyecto muestra la implementación de un **recetario de cocina** desarrollado con React native with **Expo Framework** con TypeScript.

El obejtivo de este proyecto mostrar un recetario de cocina con una barra de busqueda, en la pantalla principal mostrar las recetas recientes y en tendencia y visualizar los detalles de la receta al hacer clic, en la pantalla de detalles se puede **compartir** y dar agregar a **favoritos** la receta!!!

## Contenido:

- **Components**: este proyecto cuenta con 6 componentes: DetailList, OverlayIcons, RecentList, recipeCard, SearchBar y TrendingList, como su nombre lo indica cada uno representa la funcionalidad de cada instrucción del proyecto
- **data** : incluye una carpeta de **images** ya que en este proyecto se estan utilizando imagenes locales, y una carpeta de **screen** que incluye Home y Details ya que son las pantallas utilizadas y por ultimo incluye el archivo **recipes.json** aquí se encuentran las recetas con sus respectivos atributos (en este proyecto no se implementó una DataBase)
- **navigation** : esta carpeta incluye el archivo AppNavigator, donde se programó la navegación entre pantallas
- **types**: el archivo **recipes.tsx** incluye el tipado necesario para las recetas
- **utils**: **getImage** en este archivo se mandan llamar las imagenes
- **App.tsx**: se hace el llamado de AppNavigator 

## Instalación y Requerimientos:

- **Visual Studio Code** versión 1.99.3 || **terminal**
- **React Native**
- **Expo** :
  -Navigation 
  -Ionicons
- **Node JS** versión 20.18.3
  npm install -D ts-node typescript
- **Jest** versión 29.7.0
  npm install --save-dev jest ts-jest @types/jest typescript
  npx ts-jest config:init

## Ejecución:
- **Android Studio** : Android emulator
- **Xcode** : IOS emulator

**Terminal**
- npx expo start: a -> {abrir android emulator}  r -> {reload app}
- npx jest (test) 

## Recursos

- [Documentación React NATIVE](https://reactnative.dev/docsenvironment-setup)
- [EXPO framework](https://docs.expo.dev/get-started/set-up-your-environment/)
- [Navigation React Native](https://reactnative.dev/docs/navigation)
- [Ionicons expo](https://reactnative.dev/docs/navigation)
- [Flatlist](https://reactnative.dev/docs/flatlist)
- [ScrollView](https://reactnative.dev/docs/scrollview)
- [TouchableOpacity](https://reactnative.dev/docs/touchableopacity)
- [TextInput](https://reactnative.dev/docs/textinput)
- [Share expo](https://reactnative.dev/docs/share?language=typescript)
- [Flexbox](https://reactnative.dev/docs/flexbox)
- [Jest expo](https://docs.expo.dev/develop/unit-testing/) **does not support React 19 and above.**
- [Documentación Jest](https://jestjs.io/es-ES/docs/getting-started)
- [CODACY](https://www.codacy.com/)

## Autores

- [Andrea Eunice](https://github.com/AndreaEunice)
- [Carlos Vázquez](https://github.com/vazquezcm)
- [Damian Pinto](https://github.com/alexcodeJSphy)
- [FannyLD](https://github.com/FannyLD)
- [Raúl Páramo](https://github.com/RaulParamo)