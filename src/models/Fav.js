import mongoose from "mongoose";

const favSchema = new mongoose.Schema({
  title: String,
  singer: String,
  thumb: String,
  url: String,
  fav: Boolean,
  favNum: Number,
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
});

const Fav = mongoose.model("Fav", favSchema);

export default Fav;
