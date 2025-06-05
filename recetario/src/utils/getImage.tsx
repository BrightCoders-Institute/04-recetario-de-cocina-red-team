const images: {[key:string]:any} = {
    "hotcakes_id1.jpg": require("../data/images/hotcakes_id1.jpg"),
    "pizza_id2.jpg": require("../data/images/pizza_id2.jpg"),
    "hamburger_id3.jpg": require("../data/images/hamburger_id3.jpg")
};

export const getImage = (imageName: string)  => {
    return images[imageName]
}