import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import "./App.css";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    score: 0,
    clicked: []

  };

  shuffleFriends = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friends = this.shuffle(this.state.friends);
    // Set this.state.friends equal to the new friends array
    this.setState({ friends });

    this.decisionDepot(id);
  };

  decisionDepot (id) {
      if (this.state.clicked.indexOf (id) === -1)
        {let newState = [...this.state.clicked, id]
        this.setState({
          clicked: newState, score: this.state.score +1
        })
        
        }
        else {
          this.setState({
            clicked: [], score: 0

          })
        }
  }

  shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}  


winner() {
  if(this.state.score === 5) {
    return (<div>
      <p>We Have a winner</p>
      </div>)
  }
}
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {

    const isThereWinner = this.winner();

    return (
      <Wrapper>
        <Title>Gilmore Girls Game</Title>
        {isThereWinner}
        <p>Score:{this.state.score}</p>

        {this.state.friends.map(friend => (
          <FriendCard
            shuffleFriends={this.shuffleFriends}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
