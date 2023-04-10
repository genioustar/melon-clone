// import User from "../models/User";
import Song from "../models/Song";

export const home = async (req, res) => {
  const songs = await Song.find();
  console.log(songs);
  return res.render("home", { pageTitle: "Home", songs });
};

export const fav = async (req, res) => {
  // const faker = [
  //   {
  //     title: "야생화",
  //     singer: "박효신",
  //     thumb: "https://www.youtube.com/watch?v=8xOBBkGbqII",
  //     url: "https://www.youtube.com/watch?v=OxgiiyLp5pk",
  //     fav: true,
  //     favNum: 5,
  //   },
  //   {
  //     title: "너의 모든 순간",
  //     singer: "성시경",
  //     thumb: "",
  //     url: "",
  //     fav: true,
  //     favNum: 10,
  //   },
  //   {
  //     title: "취중고백",
  //     singer: "멜로망스",
  //     thumb: "",
  //     url: "",
  //     fav: true,
  //     favNum: 0,
  //   },
  //   {
  //     title: "모든 날, 모든 순간",
  //     singer: "폴킴",
  //     thumb: "",
  //     url: "",
  //     fav: true,
  //     favNum: 20,
  //   },
  //   {
  //     title: "그댄 행복에 살텐데",
  //     singer: "최유리",
  //     thumb: "",
  //     url: "",
  //     fav: true,
  //     favNum: 7,
  //   },
  //   {
  //     title: "넘처흘러",
  //     singer: "이수",
  //     thumb: "",
  //     url: "",
  //     fav: true,
  //     favNum: 2,
  //   },
  //   {
  //     title: "들리나요",
  //     singer: "태연",
  //     thumb: "",
  //     url: "",
  //     fav: true,
  //     favNum: 0,
  //   },
  //   {
  //     title: "My Story",
  //     singer: "브라운아이드소울",
  //     thumb: "",
  //     url: "",
  //     fav: false,
  //     favNum: 22,
  //   },
  // ];
  // const data = [];
  // for (let i = 0; i < faker.length; i++) {
  //   // console.log(faker[i].title);
  //   data.push({
  //     title: faker[i].title,
  //     singer: faker[i].singer,
  //     thumb: faker[i].thumb,
  //     url: faker[i].url,
  //     fav: faker[i].fav,
  //     favNum: faker[i].favNum,
  //   });
  // }
  // await Song.insertMany(data);
  // const music = new Song({
  //   title: "My Story",
  //   singer: "브라운아이드소울",
  //   thumb: "",
  //   url: "",
  //   fav: false,
  //   favNum: 0,
  // });
  // music.save((error, result) => {
  //   if (error) {
  //     console.log(error);
  //   } else {
  //     console.log(result);
  //   }
  //   mongoose.disconnect();
  // });
};
