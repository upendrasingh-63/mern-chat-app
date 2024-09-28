import React from "react";

const Message = () => {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              src="https://cdn0.iconfinder.com/data/icons/communication-line-10/24/account_profile_user_contact_person_avatar_placeholder-512.png"
              alt="Tailwind CSS chat bubble component"
            />
          </div>
        </div>
        <div className="chat-bubble bg-amber-900 text-white  pb-2">
          Hi! whats upp!
        </div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
          12:42
        </div>
      </div>
    </div>
  );
};

export default Message;
