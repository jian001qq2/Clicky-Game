import React, { Component } from "react";
import Header from "./components/header"
import ImageCards from "./components/imageCard"
import cards from "./cards.json";
import "./App.css"
class App extends Component {
  constructor() {
    super();
    this.state = {
        cards,
        score: 0,
        topScore: 0,
        correct: ""
    }
}
//set all the clicked to false and set socre to 0
restart() {
    this.setState({
        cards: this.state.cards.map(item => {
            item.clicked = false;
            return item;
        }),
        score: 0,
    })
}
//handle when user clicked an image
handleClick =(id) => {
    let  beenClicked = false;
    //check to see if image been clicked 
    this.setState({
        cards: this.state.cards.map(item => {
            if (item.id === id) {
                if (item.clicked) {
                     beenClicked= true;
                }
                item.clicked = true;
            }
            return item;
        }),
        //update the score, if already clicked, return to zero, else add 1
        score:  beenClicked ? 
        this.state.score : this.state.score + 1,
        //check to topscore
        topScore:  beenClicked ? 
        Math.max(this.state.score, this.state.topScore) :
         Math.max(this.state.score + 1, this.state.topScore),
       // update whether the click is true or false
         correct: !beenClicked
  
    },
     () => {
        if ( beenClicked
    ) {
            this.restart();
        }
    });
    
    this.shuffle();
}

shuffle() {
    let newArray = [];
    let oldArray = this.state.cards.slice(0);
    for(let i = oldArray.length - 1; i >= 0; i--) {
        newArray.push(oldArray.splice(
            Math.floor(Math.random() * oldArray.length), 1)[0]);
    }
    //update the newArray to the cards in the state
    this.setState({
        cards: newArray
    })
}
//render the page , pass in all the props for each component
render() {
    return (
        <div>
            <Header correct={this.state.correct} score={this.state.score} topScore={this.state.topScore} />
            <br/>
         <div className="card-container">
         { this.state.cards.map(item => {
            return <ImageCards key={item.id} id={item.id} name={item.name} image={item.image} handleClick={this.handleClick}/>
         })
            }
        </div>
        </div>
    )
}

}

export default App;
