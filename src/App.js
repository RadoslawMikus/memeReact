// ----------------------------
// IMPORTS
// ----------------------------
import "./App.css";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import AddNewMeme from "./components/AddNewMeme";
import { useState } from "react";
import Page404 from "./components/Page404";
import Sections from "./components/Sections";

function App() {
  // ----------------------------
  // DECLARATION OF REGULAR ARRAY
  // ----------------------------
  const [regularArr, setRegularArr] = useState([
    {
      title: "That's why 😂",
      upvotes: 73,
      downvotes: 74,
      img: "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33be8cf4ba7565123c8bc_YPD3ulQQAGQpOcnqIm3QzSTRgzmr1SexpW9ZjMpJ1mAnUxx4iF05XOTu44sk0qQG-8XgBcYmGZGAD-5SAZvJl3TjtmhgWnn-w0C2XKwhBscV78RVvhwZfyp0v_Pa6sNj5zxpOvRW.png",
      alt: "Sheldon Cooper reading something. Why? Why? Why?! Oh, that's why...",
      favorite: false,
    },
    {
      title: "Are you sleeping?",
      upvotes: 33,
      downvotes: 31,
      img: "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Programmer-while-sleeping.jpg?x34900",
      alt: "Are you sleeping? Shut up! I know how to fix the bug on line 255...",
      favorite: true,
    },
    {
      title: "Halloween front-end joke",
      upvotes: 12,
      downvotes: 7,
      img: "https://aws1.discourse-cdn.com/standard14/uploads/daml/original/2X/6/67f84d7cc57fd16c74e4d9f0df50190748848c7b.jpeg",
      alt: "I wanted to dress my nephew as a zombie, but he ended up looking like a full stack developer.",
      favorite: false,
    },
    {
      title: "Enough is enough",
      upvotes: 7,
      downvotes: 4,
      img: "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes.jpg",
      alt: "Me after a 10 lines of coding. Enough for today...",
      favorite: false,
    },
    {
      title: "Can you fix my printer?",
      upvotes: 3,
      downvotes: 5,
      img: "https://www.boredpanda.com/blog/wp-content/uploads/2022/03/clipimage-6229d953dfe08__700.jpg",
      alt: "Just because I'm a programmer doesn't mean that I can fix your printer. I mean, I can fix it. But not because I'm a programmer",
      favorite: true,
    },
    {
      title: "Evolution of memory storage",
      upvotes: 15,
      downvotes: 11,
      img: "https://www.thecoderpedia.com/wp-content/uploads/2020/06/Programming-Memes-Evolution-of-Memory-Storage-1024x996.jpg?x34900",
      alt: "Evolution of memory storage",
      favorite: false,
    },
    {
      title: "I'm not that sure",
      upvotes: 38,
      downvotes: 37,
      img: "https://s3.amazonaws.com/rails-camp-tutorials/blog/programming+memes/programming-or-googling.jpg",
      alt: "Not sure if I'm good at programming or just at googling",
      favorite: false,
    },
    {
      title: "Michael Scott meme",
      upvotes: 121,
      downvotes: 119,
      img: "https://assets-global.website-files.com/5f3c19f18169b62a0d0bf387/60d33bf3a2121cc74f72a286_0AEnnZYBAYzmSXzyGaopjvEGKKO1yFqf_zMXqFTAT6vUDfXVPRifI3J8oBjZUl51PnRQqf2tqpjiRt33IKgg4sTiJi2YShGTN5iNUIoYbNj2HXobiQg4-k7yBiNT54EKOGYyZOR2.png",
      alt: "Looking at programming memes - laughing. Actually coding - crying.",
      favorite: false,
    },
    {
      title: "I wrote it, kind of...",
      upvotes: 29,
      downvotes: 25,
      img: "https://thechive.com/wp-content/uploads/2021/12/4-61ae1fb2015c5__700.jpg?attachment_cache_bust=3901093&quality=85&strip=info&w=400",
      alt: "Friends: How did you write this code so beautifully. I stole it.",
      favorite: false,
    },
    {
      title: "We're gonna fix it, right?",
      upvotes: 43,
      downvotes: 47,
      img: "https://pleated-jeans.com/wp-content/uploads/2021/08/funny-programmer-memes-11.jpg",
      alt: "We're gonna fix it, right?",
      favorite: true,
    },
    {
      title: "There's no i in for!",
      upvotes: 27,
      downvotes: 13,
      img: "https://devs.lol/uploads/2021/12/meme-dev-humor-if-youre-a-programmer-there-is-i-in-for-250.jpg",
      alt: "There's no i in for! Programmers - laughing",
      favorite: false,
    },
    {
      title: "I'm not gonna need that...",
      upvotes: 19,
      downvotes: 3,
      img: "https://cleus.co/wp-content/uploads/2019/03/memecoders.jpg",
      alt: "When you delete the block of code that you thought was useless",
      favorite: false,
    },
  ]);

  // ----------------------------
  // UPVOTE +1
  // ----------------------------
  const upvote = (tablica, index) => {
    const objects = [...tablica];
    objects[index].upvotes += 1;
    setRegularArr(objects);
  };

  // ----------------------------
  // DOWNVOTE +1
  // ----------------------------
  const downvote = (tablica, index) => {
    const objects = [...tablica];
    objects[index].downvotes += 1;
    setRegularArr(objects);
  };

  // ----------------------------
  // ADD TO FAVORITES!
  // ----------------------------
  const addToFav = (tablica, index) => {
    const objects = [...tablica];
    if (objects[index].favorite === true) {
      objects[index].favorite = false;
    } else {
      objects[index].favorite = true;
    }
    setRegularArr(objects);
  };

  // ----------------------------
  // ADD NEW MEME
  // ----------------------------
  const addHandler = (title, url) => {
    if (
      document.querySelector("#url").checkValidity() &&
      document.querySelector("#title").checkValidity()
    ) {
      alert("Wszystko git, wysyłam");
      regularArr.unshift({
        title: title,
        upvotes: 0,
        downvotes: 0,
        img: url,
        alt: "Nowy mem",
        favorite: false,
      });
      setRegularArr(regularArr);
    } else {
      alert("Uzupełnij pola!");
    }
  };

  // ----------------------------
  // NAVIGATION
  // ----------------------------
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <div className="logo">
            <NavLink to="/">{"//memezz"}</NavLink>
          </div>
          <ul>
            <li className="favoritesLink">
              <NavLink to="/favorites">⭐️</NavLink>
            </li>
            <li className="regularLink">
              <NavLink to="/">/regular</NavLink>
            </li>
            <li className="hotLink">
              <NavLink to="/hot">/hot 🔥</NavLink>
            </li>
            <li className="addLink">
              <NavLink to="/add">/add</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <Sections
                tablica={regularArr}
                upvote={upvote}
                downvote={downvote}
                addToFav={addToFav}
                pathName="Regular"
              />
            }
          />

          <Route
            path="/favorites"
            element={
              <Sections
                tablica={regularArr}
                upvote={upvote}
                downvote={downvote}
                addToFav={addToFav}
                pathName="Favorites"
              />
            }
          />

          <Route
            path="/hot"
            element={
              <Sections
                tablica={regularArr}
                upvote={upvote}
                downvote={downvote}
                addToFav={addToFav}
                pathName="Hot"
              />
            }
          />
          <Route
            path="/add"
            element={
              <AddNewMeme tablica={regularArr} addHandler={addHandler} />
            }
          />

          <Route
            path="/memeReact"
            element={
              <Sections
                tablica={regularArr}
                upvote={upvote}
                downvote={downvote}
                addToFav={addToFav}
                pathName="Regular"
              />
            }
          />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
