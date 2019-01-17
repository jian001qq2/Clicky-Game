import React from "react";
import "./style.css";

function Header(props) {
   let notes;
if (props.correct===true){
  notes='You guess correctly!';
 } else if (props.correct === false) {
  notes = 'Sorry, you guessed incorrectly!';
} else {
  notes = 'Click an image to begin!';
}
  return (
    <nav className='navbar'>
  
    <span className='title'>Clicky Game</span>
    <span className='notes'>{notes}</span>
    <span className='scoreDisplay'>Score: {props.score} | Top Score: {props.topScore}</span>
</nav>
  )
}

export default Header;
