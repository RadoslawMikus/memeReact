import Meme from "./Meme";

function Sections(props) {
  if (props.pathName === "Regular") {
    return (
      <div className={props.pathName}>
        {props.tablica.map(
          (meme, index) =>
            meme.upvotes - meme.downvotes < 5 && (
              <Meme
                key={index}
                memeContent={meme}
                upvote={() => {
                  props.upvote(props.tablica, index);
                }}
                downvote={() => {
                  props.downvote(props.tablica, index);
                }}
                addToFav={() => {
                  props.addToFav(props.tablica, index);
                }}
              />
            )
        )}
      </div>
    );
  } else if (props.pathName === "Hot") {
    return (
      <div className="Hot">
        {props.tablica.map(
          (meme, index) =>
            meme.upvotes - meme.downvotes >= 5 && (
              <Meme
                key={index}
                memeContent={meme}
                upvote={() => {
                  props.upvote(props.tablica, index);
                }}
                downvote={() => {
                  props.downvote(props.tablica, index);
                }}
                addToFav={() => {
                  props.addToFav(props.tablica, index);
                }}
              />
            )
        )}
      </div>
    );
  } else {
    return (
      <div className="Favorites">
        {props.tablica.map(
          (meme, index) =>
            meme.favorite === true && (
              <Meme
                key={index}
                memeContent={meme}
                upvote={() => {
                  props.upvote(props.tablica, index);
                }}
                downvote={() => {
                  props.downvote(props.tablica, index);
                }}
                addToFav={() => {
                  props.addToFav(props.tablica, index);
                }}
              />
            )
        )}
      </div>
    );
  }
}

export default Sections;
