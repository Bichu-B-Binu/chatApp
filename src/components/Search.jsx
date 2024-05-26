const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>

      <div className="userChat">
        <img
          src="https://images.pexels.com/photos/20890415/pexels-photo-20890415/free-photo-of-cobblestone-road-towards-eltz-castle-in-germany.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <div className="userChatInfo">
          <span>Bichu</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
