import mongoose from "mongoose";

const songSchema = new mongoose.Schema({
  title: String,
  singer: String,
  thumb: String,
  url: String,
  fav: Boolean,
  favNum: Number,
  username: String,
});

const Song = mongoose.model("Song", songSchema);

export default Song;
