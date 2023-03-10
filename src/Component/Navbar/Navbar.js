import React, { useState } from "react";
import { Home } from "@mui/icons-material";
import "./Navbar.css";
import LanguageIcon from "@mui/icons-material/Language";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AssignmentTurnedInIcon from "@mui/icons-material/AssignmentTurnedIn";
import ArticleIcon from "@mui/icons-material/Article";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import { Link, useNavigate } from "react-router-dom";
import loginContext from "../Context/Context";
import Post from "../Home/Post";
import { Button } from "@chakra-ui/react";
import { user } from "../../Api/Url";
function Navbar() {
  const [Login, setLogin] = useState(false)
let Navigate=  useNavigate()
  if(Login){
    
  }
  function AddQuestion(){
   
  }
  function Logout(){
    fetch(`${user}?login=true`).then((res) => {
      res.json().then((res) => {
            let obj={...res[0],login: false}
            const id=res[0].id
            fetch(`${user}/${id}`, {
              method: "PATCH",
              headers: { "Content-Type": "application/json" },
              body:JSON.stringify(obj)
            }).then((res)=>{
              res.json().then((res)=>{
               Navigate('/login')
              })
            });
      });
    });
            }
  return (
    <div className="qHeader">
      <Link className="qHeader__logo" to={"/"}>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/250px-Quora_logo_2015.svg.png"
          alt=""
        />
      </Link>

      <div className="qHeader__icons">
        <Link className="active qHeader__icon" to={"/"}>
          <Home />
        </Link>

        <Link className="qHeader__icon" to={"/following"}>
          {" "}
          <ArticleIcon />
        </Link>

        <Link className="qHeader__icon" to={"/answer"}>
          {" "}
          <AssignmentTurnedInIcon />
        </Link>

        <Link className="qHeader__icon">
          {" "}
          <PeopleAltIcon />
        </Link>

        <Link className="qHeader__icon">
          {" "}
          <NotificationsNoneIcon />
        </Link>
      </div>
      <div className="qHeader__input">
        <SearchIcon />
        <input type="text" placeholder="Search Quora" />
      </div>
      <div className="qHeader__Rem">
        <div className="qHeader__avatar">
          <img
            style={{ width: "40px", height: "40px", borderRadius: "25px" }}
            className="Avatar"
            alt="Remy Sharp"
            src="https://images-platform.99static.com//_QXV_u2KU7-ihGjWZVHQb5d-yVM=/238x1326:821x1909/fit-in/500x500/99designs-contests-attachments/119/119362/attachment_119362573"
          ></img>
        </div>
        <LanguageIcon />
        <button onClick={AddQuestion}>Add Question</button>
        <Button onClick={Logout}>Logout</Button>
      </div>
    </div>
  );
}

export default Navbar;
