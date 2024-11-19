import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

export default function AppProfile() {
  return (
    <ScrollView className="p-4 bg-gray-400 flex-1">
      
      <View className="items-center mb-6">
        <Text className="text-xl font-bold text-blue-700">Indonesia Culinary</Text>
        <Text className="text-center text-black-500 mt-1 italic">"Kuliner Nusantara Mendunia"</Text>
      </View>

      
      <View className="bg-white rounded-lg p-4 mb-4">
        <Text className="text-lg font-semibold text-gray-800">Deskripsi</Text>
        <Text className="text-gray-600 mt-2">
          Indonesia Culinary adalah aplikasi interaktif yang mengenalkan makanan khas dari berbagai
          wilayah di Indonesia. Dengan antarmuka sederhana, Anda dapat menjelajahi kelezatan kuliner
          dari Sabang hingga Merauke.
        </Text>
      </View>

      
      <View className="bg-white rounded-lg p-4 mb-4 shadow-2x1">
        <Text className="text-lg font-semibold text-gray-800">Manfaat</Text>
        <View className="mt-2 space-y-1">
          <Text className="text-gray-600">✔ Memperkenalkan keragaman kuliner khas dari berbagai daerah di Indonesia.</Text>
          <Text className="text-gray-600">✔ Membantu generasi muda mengenal dan melestarikan budaya lokal.</Text>
          <Text className="text-gray-600">✔ Meningkatkan eksposur makanan khas Indonesia.</Text>
          <Text className="text-gray-600">✔ Memberikan informasi lengkap tentang makanan khas.</Text>
        </View>
      </View>
    </ScrollView>
  );
}
