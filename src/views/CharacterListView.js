import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions

import {getChars} from "../actions";

class CharacterListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // call our action
    this.props.getChars();
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean
const mapStateToProps = state => ({
  characters: state.starwars.characters,
  isFetching: state.starwars.isFetching,
  error: state.starwars.error,
});


export default connect(
  // null mapStateToProps replaces null here
  mapStateToProps,
  { getChars } // /* action creators go here */
)(CharacterListView);
