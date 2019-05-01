import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions

import {getChars} from "../actions";
import Loader from "react-loader-spinner"; // gives us a spinner !!!


import yoda from '../img/yoda_1.png';
import chewie from '../img/chewie.jpg';
const simpleDiv = {
  display: "flex",
  width: "50%",
  justifyContent: "center",
};

const starwarsIMG = {
  maxHeight: "150px",
  margin: "2px",
};

class CharacterListView extends React.Component {
 /* constructor() {
    super();
  }
*/
  componentDidMount() {
    // call our action
    this.props.getChars();
  }

  render() {
    if (this.props.isFetching) {
      // return something here to indicate that you are fetching data
      console.log('fetching NOW');
    }
    return (
      <div className="charactersList_wrapper">
        {this.props.fetchingChars && (
          <Loader type="Ball-Triangle" color="#00BFFF" height="90" width="60" />
        )}

        <div style = {simpleDiv}>
          <img
            src = {yoda}
            alt = "yoda"
            style = {starwarsIMG}
          />
        </div>

        <CharacterList characters={this.props.characters} />

        <div style = {simpleDiv}>
          <img
            src = {chewie}
            alt = "chewie"
            style = {starwarsIMG}
          />
        </div>

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
