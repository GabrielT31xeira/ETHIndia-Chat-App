import React, { useEffect, useState } from "react";
import Image from "next/image";

//INTERNAL IMPORT
import Style from "./Chat.module.css";
import images from "../../../assets";
import { convertTime } from "../../../Utils/apiFeature";
import { Loader } from "../../index";

const Chat = ({
                functionName,
                friendMsg,
                userName,
                loading,
                currentUserName,
                currentUserAddress,
                readUser,
                readMessage,
              }) => {
  const [message, setMessage] = useState("");
  const [chatData, setChatData] = useState({
    name: "",
    address: "",
  });
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    // Simulando dados de um amigo offline
    setChatData({
      name: "OfflineFriendName",
      address: "0xOfflineFriendAddress",
    });

    // Simulando mensagens de chat com o amigo offline
    const offlineMessages = [
      {
        sender: "0uuwwwww",
        msg: "Hi, I'm your offline friend!",
        timestamp: new Date(),
      },
    ];

    setConversations(offlineMessages);
    localStorage.setItem(chatData.address, JSON.stringify(offlineMessages));
  }, []);

  useEffect(() => {
    if (chatData.address) {
      readMessage(chatData.address);
      readUser(chatData.address);

      const localMessages = JSON.parse(localStorage.getItem(chatData.address));

      if (localMessages) {
        setConversations(localMessages);
      }
    }
  }, []);

  useEffect(() => {
    if (friendMsg.length > 0) {
      // When a new friend is added, generate a random message
      const newMessage = {
        sender: "034534535",
        msg: "Hello, I'm your new friend!",
        timestamp: new Date(),
      };
      addMessageToConversations(newMessage);
    }
  }, [friendMsg]);

  const addMessageToConversations = (message) => {
    const newConversations = [...conversations, message];
    setConversations(newConversations);
    localStorage.setItem(chatData.address, JSON.stringify(newConversations));
  };

  return (
      <div className={Style.Chat}>
        {currentUserName && currentUserAddress ? (
            <div className={Style.Chat_user_info}>
              <Image src={images.accountName} alt="image" width={70} height={70} />
              <div className={Style.Chat_user_info_box}>
                <h4>{currentUserName}</h4>
                <p className={Style.show}>{currentUserAddress}</p>
              </div>
            </div>
        ) : (
            ""
        )}

        <div className={Style.Chat_box_box}>
          <div className={Style.Chat_box}>
            <div className={Style.Chat_box_left}>
              {conversations.map((el, i) => (
                  <div key={i}>
                    <div className={Style.Chat_box_left_title}>
                      <Image
                          src={images.accountName}
                          alt="image"
                          width={50}
                          height={50}
                      />
                      <span>
                    {el.sender === chatData.address
                        ? chatData.name
                        : userName}{" "}
                        <small>Time: {convertTime(el.timestamp)}</small>
                  </span>
                    </div>
                    <p key={i + 1}>{el.msg}</p>
                  </div>
              ))}
            </div>
          </div>

          {currentUserName && currentUserAddress ? (
              <div className={Style.Chat_box_send}>
                <div className={Style.Chat_box_send_img}>
                  <Image src={images.smile} alt="smile" width={50} height={50} />
                  <input
                      type="text"
                      placeholder="type your message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                  />
                  <Image src={images.file} alt="file" width={50} height={50} />
                  {loading === true ? (
                      <Loader />
                  ) : (
                      <div>
                        <Image
                            src={images.send}
                            alt="file"
                            width={50}
                            height={50}
                            onClick={() => {
                              functionName({ msg: message, address: chatData.address });

                              const newMessage = {
                                sender: userName,
                                msg: message,
                                timestamp: new Date(),
                              };
                              addMessageToConversations(newMessage);

                              setMessage("");
                            }}
                        />
                        <Image
                            src={images.trash}
                            alt="trash"
                            width={50}
                            height={50}
                            onClick={clearMessages}
                        />
                      </div>
                  )}
                </div>
              </div>
          ) : (
              ""
          )}
        </div>
      </div>
  );
};

export default Chat;
