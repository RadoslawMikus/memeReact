import Meme from "./Meme";

function Favorites(props) {
  return (
    <div className="Favorites">
      {props.tablica.map(
        (meme, index) =>
          meme.favorite === true && (
            <Meme
              key={index}
              memeContent={meme}
              Upvote={() => {
                props.Upvote(props.tablica, index);
              }}
              Downvote={() => {
                props.Downvote(props.tablica, index);
              }}
              AddToFav={() => {
                props.AddToFav(props.tablica, index);
              }}
            />
          )
      )}
    </div>
  );
}

export default Favorites;
