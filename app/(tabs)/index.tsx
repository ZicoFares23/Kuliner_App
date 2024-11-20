import { FlatList, Pressable, Text, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import React, { useState, useEffect } from "react";
import KulinerCard from "../../components/KulinerCard";

const CATEGORIES = [
  { id: "1", name: "Jawa" },
  { id: "2", name: "Sumatra" },
  { id: "3", name: "Bali" },
  { id: "4", name: "Kalimantan" },
  { id: "5", name: "Sulawesi" },
  { id: "6", name: "Maluku" },
  { id: "7", name: "Papua" },
  { id: "8", name: "Nusa Tenggara Timur" },
];

const DATA = [
  {
    id: "1",
    category_id: "1",
    title: "Soto Kudus",
    poster:
      "https://www.masakapahariini.com/wp-content/uploads/2020/02/soto-kudus-7.jpg",
  },
  {
    id: "2",
    category_id: "1",
    title: "Pecel",
    poster:
      "https://assets-a1.kompasiana.com/items/album/2021/06/22/pecel-60d169f437f4b95a326098e2.jpg",
  },
  {
    id: "3",
    category_id: "2",
    title: "Sate Padang",
    poster:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTFZu_MnKgzm0u2uyBws9OwoIpE1UWorXq2sJtf3FJwffmEMhFU",
  },
  {
    id: "4",
    category_id: "7",
    title: "Papeda",
    poster:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Papeda%2C_Kuah_Kuning%2C_Ikan_Tude_Bakar_2.jpg/1200px-Papeda%2C_Kuah_Kuning%2C_Ikan_Tude_Bakar_2.jpg",
  },
  {
    id: "5",
    category_id: "7",
    title: "Norohombi",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvtHk-XCrcQLnLm7WZd0ld2Baa1PtMaGumQ&s",
  },
  {
    id: "6",
    category_id: "1",
    title: "Gudeg",
    poster:
      "https://qr.ptsuparmatbk.com/blog/wp-content/uploads/2024/07/gudeg.webp",
  },
  {
    id: "7",
    category_id: "4",
    title: "Chai Kue",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMjDWnURcsKpV5KWPUmPFuKphVJWxNzZSxg&s",
  },
  {
    id: "8",
    category_id: "3",
    title: "Ayam Betutu",
    poster:
      "https://akcdn.detik.net.id/community/media/visual/2022/07/14/rekomendasi-ayam-betutu_169.jpeg?w=620",
  },
  {
    id: "9",
    category_id: "1",
    title: "Klepon",
    poster:
      "https://asset.kompas.com/crops/cRn6DGksr-w6MFp4Vcebb-9Iij0=/32x0:1000x645/750x500/data/photo/2023/09/08/64fa7899edc0b.jpeg",
  },
  {
    id: "10",
    category_id: "2",
    title: "Rendang",
    poster:
      "https://www.astronauts.id/blog/wp-content/uploads/2023/03/Resep-Rendang-Daging-Sapi-Untuk-Lebaran-Gurih-dan-Nikmat-1024x683.jpg",
  },
  {
    id: "11",
    category_id: "3",
    title: "Bebek Betutu",
    poster:
      "https://www.finnafood.com/blog/wp-content/uploads/2024/08/BEBEK-BETUTU.jpg",
  },
  {
    id: "12",
    category_id: "4",
    title: "Es Jeruk Songkit",
    poster:
    "https://cdn1-production-images-kly.akamaized.net/n2lXX-Y6n9rDDksofG8wL2lovIM=/0x43:999x606/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4733690/original/033318000_1706944970-shutterstock_406526776.jpg",
  },
  {
    id: "13",
    category_id: "5",
    title: "Coto Makassar",
    poster:
      "https://awsimages.detik.net.id/community/media/visual/2018/04/02/537cd788-471e-415f-bb38-049d69162573.jpeg?w=1200",
  },
  {
    id: "14",
    category_id: "6",
    title: "Talam Sagu Bakar",
    poster:
      "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p2/94/2024/09/02/11298-talam-sagu-ambon-3035263000.jpg",
  },
  {
    id: "15",
    category_id: "6",
    title: "Kue Vor Vor",
    poster:
      "https://radarmukomuko.disway.id/upload/large/df7735cd2d8e1269d35003d0b8706f43.jpg",
  },
  {
    id: "16",
    category_id: "8",
    title: "Kolo (Nasi Bambu)",
    poster:
      "https://cdngnfi2.sgp1.cdn.digitaloceanspaces.com/gnfi/uploads/images/2022/11/1916122022-kolo-nasi-bakar-bambu.png",
  },
  {
    id: "17",
    category_id: "8",
    title: "Kermanaci",
    poster:
      "https://cdngnfi2.sgp1.cdn.digitaloceanspaces.com/gnfi/uploads/images/2022/11/1916142022-18973356115_b6554dca14_c.jpg",
  },
  {
    id: "18",
    category_id: "2",
    title: "Teh talua",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRgzy3cY4Fv3xbBC4evcZFbdjSMDiRoyotQA&s",
  },
  {
    id: "19",
    category_id: "5",
    title: "Jus Buton / Jus Salak",
    poster:
      "https://hicookofficial.com/wp-content/uploads/2024/07/jus-salak.webp",
  },
  {
    id: "20",
    category_id: "3",
    title: "Es tambring",
    poster:
      "https://media.suara.com/pictures/653x366/2023/10/06/98185-es-tambring.jpg",
  }
];

export default function HomeScreen() {
  const [kuliner, setkuliner] = useState(DATA);
  const filterKuliner = (categoryId) => {
    const filteredKuliner = DATA.filter(function
      (item) {
      return item.category_id === categoryId;
    });
    setkuliner(filteredKuliner);
  }
  return (
    <SafeAreaView style={styles.safeArea}>
      <Text style={styles.title}>Indonesia Culinary</Text>

     
      <FlatList
        data={CATEGORIES}
        horizontal
        renderItem={({ item }) => (
          <Pressable onPress={() => filterKuliner(item.id)}>
            <Text style={styles.categoryText}>{item.name}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.categoryList}
      />

     
      <FlatList
        data={kuliner}
        numColumns={2}
        renderItem={({ item }) => <KulinerCard item={item} />}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.kulinerList}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    padding: 20,
    margin:5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "#093F6A",
    marginBottom: 30,
    borderRadius:20,
    backgroundColor:"#26C6DA",
  },
  categoryList: {
    marginBottom: 16,
  },
  categoryText: {
    backgroundColor: "#00e600",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    marginHorizontal: 5,
    fontSize: 14,
    fontWeight: "500",
    color: "#1D4ED8",
  },
  kulinerList: {
    paddingBottom: 16,
    marginBottom:50,
  },
});