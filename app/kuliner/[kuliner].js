import { View, Text, Image } from "react-native";
import React from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import KulinerCard from "../../components/KulinerCard";


const DATA = [
  {
    id: "1",
    category_id: "1",
    title: "Soto Kudus",
    poster:
      "https://www.masakapahariini.com/wp-content/uploads/2020/02/soto-kudus-7.jpg",
      description:
      "soto Kudus adalah soto yang berasal dari daerah Kudus, Jawa Tengah",
  },
  {
    id: "2",
    category_id: "1",
    title: "Pecel",
    poster:
      "https://assets-a1.kompasiana.com/items/album/2021/06/22/pecel-60d169f437f4b95a326098e2.jpg",
      description:
      "Pecel adalah makanan tradisional Indonesia yang terdiri dari sayuran rebus atau kukus yang disiram dengan sambal kacang",
  },
  {
    id: "3",
    category_id: "2",
    title: "Sate Padang",
    poster:
      "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTFZu_MnKgzm0u2uyBws9OwoIpE1UWorXq2sJtf3FJwffmEMhFU",
      description:
      "makanan khas Sumatera Barat dan menjadi salah satu bagian makanan warisan tradisional Indonesia",
  },
  {
    id: "4",
    category_id: "7",
    title: "Papeda",
    poster:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/Papeda%2C_Kuah_Kuning%2C_Ikan_Tude_Bakar_2.jpg/1200px-Papeda%2C_Kuah_Kuning%2C_Ikan_Tude_Bakar_2.jpg",
      description:
      "Papeda adalah makanan khas Papua yang terbuat dari tepung sagu dan memiliki tekstur kenyal, putih, dan lengket",
  },
  {
    id: "5",
    category_id: "7",
    title: "Norohombi",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAvtHk-XCrcQLnLm7WZd0ld2Baa1PtMaGumQ&s",
      description:
      "Norohombi adalah makanan khas Papua yang terbuat dari tepung sagu, parutan kelapa, dan kerang kering yang dipanggang di atas api",
  },
  {
    id: "6",
    category_id: "1",
    title: "Gudeg",
    poster:
      "https://qr.ptsuparmatbk.com/blog/wp-content/uploads/2024/07/gudeg.webp",
      description:
      "Makanan ikon utama Daerah Istimewa Yogyakarta",
  },
  {
    id: "7",
    category_id: "4",
    title: "Chai Kue",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMjDWnURcsKpV5KWPUmPFuKphVJWxNzZSxg&s",
     description:
      "chai kue ada di Pontianak, Kalimantan Barat. Chai kue merupakan makanan khas Pontianak yang diadopsi dari budaya Tionghoa dan diubah sedikit sesuai selera lokal",
  },
  {
    id: "8",
    category_id: "3",
    title: "Ayam Betutu",
    poster:
      "https://akcdn.detik.net.id/community/media/visual/2022/07/14/rekomendasi-ayam-betutu_169.jpeg?w=620",
      description:
      "Ayam betutu adalah makanan khas Bali yang terbuat dari ayam atau bebek utuh yang dimasak dengan bumbu rempah khas Bali",
  },
  {
    id: "9",
    category_id: "1",
    title: "Klepon",
    poster:
      "https://asset.kompas.com/crops/cRn6DGksr-w6MFp4Vcebb-9Iij0=/32x0:1000x645/750x500/data/photo/2023/09/08/64fa7899edc0b.jpeg",
      description:
      "Jajanan pasar yang terbuat dari tepung beras ketan dan dibentuk menjadi bola-bola keci",
  },
  {
    id: "10",
    category_id: "2",
    title: "Rendang",
    poster:
      "https://www.astronauts.id/blog/wp-content/uploads/2023/03/Resep-Rendang-Daging-Sapi-Untuk-Lebaran-Gurih-dan-Nikmat-1024x683.jpg",
      description:
      "Makanan khas Sumatera Barat yang terkenal di seluruh dunia dan memiliki rasa pedas dan lezat. Payakumbuh merupakan daerah penghasil rendang yang legendaris",
  },
  {
    id: "11",
    category_id: "3",
    title: "Bebek Betutu",
    poster:
      "https://www.finnafood.com/blog/wp-content/uploads/2024/08/BEBEK-BETUTU.jpg",
      description:
      "Bebek betutu adalah masakan khas Bali yang terbuat dari bebek utuh yang dimasak dengan bumbu rempah khas Bali. Bebek betutu merupakan salah satu kebanggaan masyarakat Bali dan sering disajikan sebagai menu utama atau lauk di nasi campur Bali",
  },
  {
    id: "12",
    category_id: "1",
    title: "Es Jeruk Songkit",
    poster:
    "https://cdn1-production-images-kly.akamaized.net/n2lXX-Y6n9rDDksofG8wL2lovIM=/0x43:999x606/1200x675/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/4733690/original/033318000_1706944970-shutterstock_406526776.jpg",
    description:
      "Ada sajian minuman di Balikpapan. Es jeruk songkit ini berbeda dengan yang ditemui di tempat lain. Pembuatan es jeruk ini harus memakai bahan dasar jeruk yang masih segar",
  },
  {
    id: "13",
    category_id: "5",
    title: "Coto Makassar",
    poster:
      "https://awsimages.detik.net.id/community/media/visual/2018/04/02/537cd788-471e-415f-bb38-049d69162573.jpeg?w=1200",
      description:
      "Coto Makassar adalah sup tradisional khas Makassar, Sulawesi Selatan yang terbuat dari daging sapi atau kerbau, jeroan, dan kuah kental berbumbu kacang tanah",
  },
  {
    id: "14",
    category_id: "6",
    title: "Talam Sagu Bakar",
    poster:
      "https://static.promediateknologi.id/crop/0x0:0x0/750x500/webp/photo/p2/94/2024/09/02/11298-talam-sagu-ambon-3035263000.jpg",
      description:
      " Kue khas Ambon yang berbahan dasar sagu dan memiliki cita rasa manis",
  },
  {
    id: "15",
    category_id: "6",
    title: "Kue Vor Vor",
    poster:
      "https://radarmukomuko.disway.id/upload/large/df7735cd2d8e1269d35003d0b8706f43.jpg",
      description:
      "Makanan legendaris yang terbuat dari biji melinjo yang ditumbuk halus, dicampur dengan kacang kenari, gula pasir, gula merah, dan kayu manis. Kue ini dibungkus dengan daun bambu dan dipanggang hingga matang",
  },
  {
    id: "16",
    category_id: "8",
    title: "Kolo (Nasi Bambu)",
    poster:
      "https://cdngnfi2.sgp1.cdn.digitaloceanspaces.com/gnfi/uploads/images/2022/11/1916122022-kolo-nasi-bakar-bambu.png",
      description:
      "Kolo merupakan makanan khas NTT yang terbuat dari beras yang dimasak dengan menggunakan batang bambu. Hidangan ini juga kerap disebut dengan nasi bakar khas NTT",
  },
  {
    id: "17",
    category_id: "8",
    title: "Kermanaci",
    poster:
      "https://cdngnfi2.sgp1.cdn.digitaloceanspaces.com/gnfi/uploads/images/2022/11/1916142022-18973356115_b6554dca14_c.jpg",
     description:
      "Karmanaci merupakan makanan khas dari Nusa Tenggara Timur yang tergolong favorit dan populer. Karmanaci sendiri terdiri dari daging sapi cincang yang di tumis dengan bumbu dan rempah-rempah khas NTT",
  },
  {
    id: "18",
    category_id: "2",
    title: "Teh talua",
    poster:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRgzy3cY4Fv3xbBC4evcZFbdjSMDiRoyotQA&s",
      description:
      "Teh talua adalah minuman tradisional khas Sumatera Barat yang terbuat dari teh, gula, telur, dan perasan jeruk nipis",
  },
  {
    id: "19",
    category_id: "5",
    title: "Jus Buton / Jus Salak",
    poster:
      "https://hicookofficial.com/wp-content/uploads/2024/07/jus-salak.webp",
      description:
      "jus salak adalah minuman khas Sulawesi Tenggara. Tapi, kamu juga bisa menemukan minuman ini di Sulawesi Tengah. Sesuai namanya, jus salak dibuat dari buah salak yang diblender",
  },
  {
    id: "20",
    category_id: "3",
    title: "Es tambring",
    poster:
      "https://media.suara.com/pictures/653x366/2023/10/06/98185-es-tambring.jpg",
      description:
      "Es tambring adalah minuman dingin khas Bali yang terbuat dari kelapa muda, air kelapa, dan sirup asam jawa",
  },
];
const KulinerDetail = () => {
  const { kuliner } = useLocalSearchParams();
  const selectedKuliner = DATA.filter(function (item) {
    return item.id === kuliner;
  });

  console.log(selectedKuliner);

  return (
    <SafeAreaView
      style={{
        backgroundColor: "white",
        flex: 1,
        justifyContent: "auto",
        alignItems: "auto",
      }}
    >
      <KulinerCard item={selectedKuliner[0]} />
    </SafeAreaView>
  );
};

export default KulinerDetail;