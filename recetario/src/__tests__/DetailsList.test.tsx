import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { NavigationContainer } from "@react-navigation/native";
import DetailsList from "../components/DetailsList";

jest.mock("@react-navigation/native", () => {
  const actualNav = jest.requireActual("@react-navigation/native");
  return {
    ...actualNav,
    useRoute: () => ({
      key: "some-key",
      name: "DetailsList",
      params: {
        recipes: {
          id: 1,
          name: "Receta de prueba",
          category: "Postre",
          image: "test-image.png",
          servings: 4,
          ingredients: [
            { name: "Harina", quantity: "200g" },
            { name: "Azúcar", quantity: "100g" },
          ],
        },
      },
    }),
  };
});

jest.mock("../components/OverlayIcons", () => () => {
  const React = require("react");
  const { View, Text, TouchableOpacity } = require("react-native");
  const [liked, setLiked] = React.useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setLiked(!liked)} testID="like-button">
        <Text>{liked ? "Liked" : "Not liked"}</Text>
      </TouchableOpacity>
    </View>
  );
});

describe("DetailsList", () => {
  test("se renderiza correctamente con ingredientes y toggle like", () => {
    const { getByText, getByTestId } = render(
      <NavigationContainer>
        <DetailsList />
      </NavigationContainer>
    );

    // Verifica que se muestre el nombre de la receta
    expect(getByText("Receta de prueba")).toBeTruthy();

    // Verifica que se muestre un ingrediente y su cantidad
    expect(getByText("Harina")).toBeTruthy();
    expect(getByText("200g")).toBeTruthy();

    expect(getByText("Azúcar")).toBeTruthy();
    expect(getByText("100g")).toBeTruthy();

    // Verifica el texto inicial del botón like
    expect(getByText("Not liked")).toBeTruthy();

    // Simula un toque en el botón like y verifica que cambia el texto
    fireEvent.press(getByTestId("like-button"));
    expect(getByText("Liked")).toBeTruthy();
  });
});
