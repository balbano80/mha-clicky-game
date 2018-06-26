import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import CharacterCard from "./components/CharacterCard";
import Footer from "./components/Footer";
import characters from "./images.json";
import './App.css';

class App extends Component {
  state = {
    score: 0,
    topScore: 0,
    display: "Click on an Image to start",
    characters: characters,
    unselectedChars: characters
  }

  shuffle(characters){
    let ctr = characters.length, temp, index;
    while (ctr > 0){
        index = Math.floor(Math.random() * ctr);
        ctr--;
        temp = characters[ctr];
        characters[ctr] = characters[index];
        characters[index] = temp;
    }
    this.setState(characters);
  }// reorganize array

  selectChar = name =>{
    const findChar = this.state.unselectedChars.find(char=>char.name === name);

    if (findChar === undefined){
      this.setState({ 
        display: "You guessed incorrectly!",
        topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
        score: 0,
        characters: characters,
        unselectedChars: characters
      })
    } // guess incorrectly block.  If selected Card name is not found in unselected char name array, lost message, and 
      //reset game.
    else {
      const newChar = this.state.unselectedChars.filter(char => char.name !== name);    
    
      if(this.state.score === 15){
        this.setState({
          display: "You won!!!",
          topScore: (this.state.score > this.state.topScore) ? this.state.score : this.state.topScore,
          score: 0,
          characters: characters,
          unselectedChars: characters
        });
      }
      else{
        this.setState({ 
          display: "You guessed correctly!",
          score: this.state.score + 1,
          characters: characters,
          unselectedChars: newChar
        })
      }
    }  //guess correctly block.  filters unselectedChar array to an array without selected Card name.
    this.shuffle(characters);
  };

  render() {
    return (
      <Wrapper>
        <Navbar
          score = {this.state.score}
          topScore = {this.state.topScore}
          display = {this.state.display}
        />
        <Header/>
          <div className = "main-body">
            {this.state.characters.map(character =>(
              <CharacterCard       
                key = {character.id}
                name= {character.name}
                image={character.image}
                selectChar = {this.selectChar}
                score = {this.state.score}
              />)
            )}
          </div>
        <Footer/>
      </Wrapper>
    );
  }
};

export default App;