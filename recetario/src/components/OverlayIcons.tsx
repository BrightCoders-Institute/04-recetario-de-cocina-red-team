import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Share, TouchableOpacity, View, StyleSheet} from "react-native";
import { useNavigation } from "@react-navigation/native";

const OverlayIcons = () => {
    const navigation = useNavigation();
    const [liked, setLiked] = useState(false)

    const handleShare = async () => {
        try {
            await Share.share({
                message:"Share this delicious recipe",
            });
        } catch (error) {
            console.error("Share error",error); 
        }
    };
    return(
        <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="close" size={36} color="white" />
        </TouchableOpacity>
        <View style={styles.iconContainer}>
           
            <TouchableOpacity onPress={handleShare}>
            <Ionicons 
                name="share-outline" 
                size={34} 
                style={styles.iconsLS}
                color="white"
            />
        </TouchableOpacity>
         <TouchableOpacity onPress={() => setLiked(!liked)}>
            <Ionicons 
                style={styles.iconsLS} 
                name={liked ? "heart" : "heart-outline"} 
                size={34} 
                color={liked ? "red" : "#fff"}
            />
            </TouchableOpacity>
        </View>
       
       
    </View>
    );
    
};
const styles = StyleSheet.create({
   container: {
    position: 'absolute',
    top: 60,
    left: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
   },
   iconContainer:{
    flexDirection:"row",
    alignItems: "center",
    marginLeft: 250
   },
   iconsLS:{
    marginRight: 16,
   }


});


export default OverlayIcons;