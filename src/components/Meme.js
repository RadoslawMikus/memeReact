function Meme(props) {
  let memeContent = props.memeContent;

  return (
    <div className="Meme">
      <div className="favoriteBar">
        {memeContent.favorite === true && (
          <span>⭐️💛⭐️💛⭐️💛⭐️💛⭐️💛⭐️💛⭐️💛⭐️</span>
        )}
      </div>
      <h1>{memeContent.title}</h1>
      <img src={memeContent.img} />
      <h1>{memeContent.favorite}</h1>
      <div className="memeControls">
        <div className="addToFav">
          <span>
            ⭐️ ->
            <input
              onClick={() => {
                props.AddToFav();
              }}
              type="checkbox"
              defaultChecked={memeContent.favorite === true ? true : false}
            />
          </span>
        </div>

        <div className="memeButtons">
          <div className="memeButtonsLeft">
            <h4>+{memeContent.upvotes}</h4>
            <button
              onClick={() => {
                props.Upvote();
              }}
            >
              +
            </button>
          </div>

          <div className="memeButtonsRight">
            {" "}
            <h4>-{memeContent.downvotes}</h4>
            <button
              onClick={() => {
                props.Downvote();
              }}
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Meme;
