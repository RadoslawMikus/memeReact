import Meme from "./Meme";

function Hot(props) {
  return (
    <div className="Hot">
      {props.tablica.map(
        (meme, index) =>
          meme.upvotes - meme.downvotes >= 5 && (
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

export default Hot;
