const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">Chat App</span>
      <div className="user">
        <img
          src="https://images.pexels.com/photos/20890415/pexels-photo-20890415/free-photo-of-cobblestone-road-towards-eltz-castle-in-germany.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
        />
        <span>john</span>
        <button>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
