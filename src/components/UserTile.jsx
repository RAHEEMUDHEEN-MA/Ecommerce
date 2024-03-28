import React from "react";
import "../assests/styles/UserTile.css";

const UserTile = ({name,email,avatar}) => {
  return (
    <div className="maintile">
      <div className="img-holder">
        <img src={avatar} height={90} width={90} alt="" />
      </div>
      <div className="data-holder">
        <h3>{name}</h3>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserTile;
