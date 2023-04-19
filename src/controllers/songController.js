import Fav from "../models/Fav";
import Song from "../models/Song";
import User from "../models/User";

export const home = async (req, res) => {
  console.log("req.session", req.session);
  if (req.method === "GET") {
    if (req.session.user) {
      const songs = await Song.find();
      return res.render("home", { pageTitle: "Home", songs });
    } else return res.render("enter", { pageTitle: "enter" });
  }

  if (req.method === "POST") {
    console.log("body!! : ", req.body);
    const { title, singer, thumb, url, fav, favNum } = req.body;
    const userId = req.session.userId;
    const filter = { title, singer, user: userId };
    const update = {
      title,
      singer,
      thumb,
      url,
      fav,
      favNum,
      user: userId,
    };
    const options = { upsert: true, new: true, setDefaultsOnInsert: true };

    Fav.findOneAndUpdate(filter, update, options)
      .then((fav) => {
        console.log(`Favorite item updated: ${fav}`);
      })
      .catch((err) => {
        console.error(`Error updating favorite item: ${err.message}`);
      });
    // const newFav = new Fav({
    //   title,
    //   singer,
    //   thumb,
    //   url,
    //   fav,
    //   favNum,
    //   user: userId,
    // });
    // newFav
    //   .save()
    //   .then((fav) => {
    //     console.log(`New favorite item added: ${fav}`);
    //   })
    //   .catch((err) => {
    //     console.error(`Error adding new favorite item: ${err.message}`);
    //   });
  }
};

export const fav = async (req, res) => {
  console.log(req.session.user._id);
  const where = { username: req.session.user._id }; // retrieve all users with age greater than or equal to 18
  Fav.find(where, (err, favs) => {
    if (err) {
      console.log(err);
    } else {
      console.log(favs);
      res.render("fav", { pageTitle: "fav", favs });
    }
  });
};

export const enter = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await User.find({ username });
    if (!user.length) {
      throw new Error("User not found");
    }
    req.session.user = { username };
    req.session.userId = user[0]._id;
    res.redirect("/");
  } catch (err) {
    res.status(404).send(err.message);
  }
};
