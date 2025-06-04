import React from "react";
import { RouteProp, useRoute } from "@react-navigation/native";
import { RootStackParamList } from "../../navigation/AppNavigator";
import { View, Text } from "react-native";

type DetailsRouteProp = RouteProp<RootStackParamList, "Details">;

const Details = () => {
    const route = useRoute<DetailsRouteProp>();
    const {recipes} = route.params;

    return(
        <View>
            <Text>{recipes.name}</Text>
        </View>
    )
}
export default Details;