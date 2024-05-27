import { CiCamera } from "react-icons/ci";
import { IoIosPersonAdd } from "react-icons/io";
import { IoMdMore } from "react-icons/io";
import Messages from "./Messages";
import Input from "./Input";
const Chat = () => {
  return (
    <div className="chat">
      <div className="chatInfo">
        <span>jhon</span>

        <div className="chatIcons">
          <CiCamera className="icon"></CiCamera>
          <IoIosPersonAdd className="icon"></IoIosPersonAdd>
          <IoMdMore className="icon"></IoMdMore>
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
