const Login = () => {
  return (
    <>
      <div className="formContainer">
        <div className="formWrapper">
          <span className="logo">Chat App</span>
          <span className="title">Login</span>
          <form>
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />

            <button>Sign In</button>
          </form>
          <p>You do not have an account? Register</p>
        </div>
      </div>
    </>
  );
};

export default Login;
