import React from "react";
import { SampleData } from "./SampleData.js";
import TodoCardContainer from "./TodoCardContainer.js";

class MainContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [],
    };
  }

  componentDidMount() {
    this.setState({ cards: SampleData.cards });
  }

  handleListClick = (cardId, listId) => {
    const foundCard = this.state.cards.find((card) => card.id == cardId);
    const foundList = foundCard.lists.find((list) => list.id == listId);

    foundList.completed = !foundList.completed;

    const newLists = foundCard.lists.map((list) => {
      if (list.id == listId) {
        return foundList;
      } else {
        return list;
      }
    });
    foundCard.lists = newLists;

    const newCards = this.state.cards.map((card) => {
      if (card.id == cardId) {
        return foundCard;
      } else {
        return card;
      }
    });

    this.setState({ cards: newCards });
  };

  addList = (cardId, input) => {
    const foundCard = this.state.cards.find((card) => card.id == cardId);
    foundCard.lists = [...foundCard.lists, { id: input, completed: false }];

    const newCards = this.state.cards.map((card) => {
      if (card.id == cardId) {
        return foundCard;
      } else {
        return card;
      }
    });

    this.setState({ cards: newCards });
  };

  render() {
    return (
      <div className="main-container">
        <TodoCardContainer
          handleListClick={this.handleListClick}
          addList={this.addList}
          cards={this.state.cards}
        />
      </div>
    );
  }
}

export default MainContainer;
