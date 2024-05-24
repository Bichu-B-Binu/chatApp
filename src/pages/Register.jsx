import { MdInsertPhoto } from "react-icons/md";
const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat App</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="Your name please" />
          <input type="email" placeholder="Enter your email" />
          <input type="password" placeholder="Enter your password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <MdInsertPhoto />
            <span>Add an avatar</span>
          </label>
          <button>Sign Up</button>
        </form>
        <p>You do have an account? Login</p>
      </div>
    </div>
  );
};

export default Register;
