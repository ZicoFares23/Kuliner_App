import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";

export default function AppProfile() {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <Text style={styles.title}>Indonesia Culinary</Text>
        <Text style={styles.subtitle}>"Kuliner Nusantara Mendunia"</Text>
      </View>

      
      <View style={styles.imageContainer}>
        <Image
          source={require("@/assets/images/Preview.png")} 
          style={styles.image}
        />
      </View>

      
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>About App</Text>
        <Text style={styles.text}>
          Indonesia Culinary adalah aplikasi interaktif yang mengenalkan makanan khas dari berbagai
          wilayah di Indonesia. Dengan antarmuka sederhana, Anda dapat menjelajahi kelezatan kuliner
          dari Sabang hingga Merauke.
        </Text>
      </View>

     
      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Manfaat</Text>
        <View style={styles.bulletList}>
          <Text style={styles.text}>✔ Memperkenalkan keragaman kuliner khas dari berbagai daerah di Indonesia.</Text>
          <Text style={styles.text}>✔ Membantu generasi muda mengenal dan melestarikan budaya lokal.</Text>
          <Text style={styles.text}>✔ Meningkatkan eksposur makanan khas Indonesia.</Text>
          <Text style={styles.text}>✔ Memberikan informasi lengkap tentang makanan khas.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#f5f5f5",
  },
  header: {
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#007BFF",
  },
  subtitle: {
    fontSize: 16,
    fontStyle: "italic",
    color: "#555",
    marginTop: 4,
  },
  imageContainer: {
    alignItems: "center",
    marginVertical: 16,
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  text: {
    fontSize: 14,
    color: "#666",
    marginBottom: 4,
  },
  bulletList: {
    marginTop: 8,
  },
});
