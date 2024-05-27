import { IoIosAttach } from "react-icons/io";
import { FaImage } from "react-icons/fa6";
const Input = () => {
  return (
    <div className="input">
      <input type="text" placeholder="Text Something..." />
      <div className="send">
        <IoIosAttach className="sendIcon"></IoIosAttach>
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <FaImage className="sendIcon"></FaImage>
        </label>
        <button>Send</button>
      </div>
    </div>
  );
};

export default Input;
