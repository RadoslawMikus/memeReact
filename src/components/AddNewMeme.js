function AddNewMeme(props) {
  return (
    <div className="AddNewMeme">
      <div className="addNewMemeBox">
        <h1>Dodaj nowy mem</h1>
        <form>
          <input
            type="text"
            id="title"
            placeholder="Tytuł"
            maxLength="25"
            required
          />
          <input
            type="url"
            id="url"
            placeholder="Link do obrazka (https://example.com)"
            pattern="https?://.*"
            required
          />
        </form>
        <button
          id="submit"
          onClick={() => {
            props.addHandler(
              document.querySelector("#title").value,
              document.querySelector("#url").value
            );
          }}
        >
          Dodaj
        </button>
      </div>
    </div>
  );
}

export default AddNewMeme;
