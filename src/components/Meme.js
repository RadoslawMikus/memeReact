function Meme(props) {
  let memeContent = props.memeContent;

  return (
    <div className="Meme">
      <div className="favoriteBar">
        {memeContent.favorite === true && (
          <span>⭐️💛⭐️💛⭐️💛⭐️💛⭐️💛⭐️💛⭐️💛⭐️</span>
        )}
      </div>
      <div className="title">{memeContent.title}</div>
      <img src={memeContent.img} alt={memeContent.alt} />
      <div className="memeControls">
        <div className="addToFav">
          <span>
            ⭐️ ->
            <input
              onClick={() => {
                props.addToFav();
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
                props.upvote();
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
                props.downvote();
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
