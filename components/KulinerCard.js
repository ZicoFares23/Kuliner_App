import { View, Text, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";

const KulinerCard = ({ item }) => {
  return (
    <Link
      href={{
        pathname: "/kuliner/[kuliner]",
        params: { kuliner: item.id  },
      }}
    >
      <View className="p-4 m-4 rounded-xl flex items-center justify-center">
  <Image
    className="rounded-xl"
    source={{
      uri: item.poster,
      height: 150,
      width: 150,
    }}
  />
  <Text className="text-center font-bold text-black">{item.title}</Text>
  <Text className="text-center text-grey">{item.description}</Text>
</View>
    </Link>
  );
};

export default KulinerCard;