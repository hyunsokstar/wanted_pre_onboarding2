import React, { useState } from "react";
import "./ClickToEdit.scss";

function ClickToEdit() {
  const [user_name, setUsername] = useState("");
  const [user_name_display, setUsernameDisplay] = useState("");
  const [password, setPassword] = useState("");
  const [password_diplay, setPasswordDisplay] = useState("");

  const handleUserName = (e) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  }
  const handlePsssword = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  }

  const refreshUserNameAndPassword = (e) => {
    console.log("form click");
    console.log(e);

    if(e.target.localName == "div"){
      setUsernameDisplay(user_name);
      setPasswordDisplay(password)
    } else {
      console.log("div 일 경우에만 작동");
    }
    


  }

  return (
    <div class="EditFormContainer" onClick={(e) => refreshUserNameAndPassword(e)}>
      <form class="login">
        <h1>Member Login</h1>
        <div className="loginInputs">
          <div className="loginInput">
            <label className="loginLabel" htmlFor="user-name">
              이름
            </label>
            <input
              type="text"
              id="user-name"
              placeholder="아이디"
              onChange={handleUserName}
            />
          </div>
          <div className="loginInput">
            <label className="loginLabel" htmlFor="user-password">
              비밀 번호
            </label>
            <input type="password" id="user-password" placeholder="비밀번호" onChange={handlePsssword}/>
          </div>
        </div>
        <br /><br />
        <div>
          이름 : &nbsp; &nbsp;
          {user_name_display !== null ? user_name_display : ""}
        </div>
        <div>
          비밀 번호 : &nbsp; &nbsp;
          {password_diplay !== null ? password_diplay : ""}
        </div>
      </form>



    </div>
  );
}

export default ClickToEdit;
