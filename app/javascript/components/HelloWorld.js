import React from "react"
import PropTypes from "prop-types"
import { createStructuredSelector } from "reselect"
import { connect } from "react-redux"

const GET_THINGS_REQUEST = 'GET_THINGS_REQUEST';
const GET_THINGS_SUCCESS = 'GET_THINGS_SUCCESS';

function getThings(){
  console.log('getThings() Action!!');
  return dispatch => {
    dispatch({type: GET_THINGS_REQUEST});
    return fetch(`v1/things`)
      .then(res => res.json())
      .then(json => dispatch(getThingsSuccess(json)))
      .catch(err => console.log(err))
  }
}

export function getThingsSuccess(json) {
  return {
    type: GET_THINGS_SUCCESS,
    json
  }
}

class HelloWorld extends React.Component {
  render () {
    const { things } = this.props;
    const thingsList = things.map((thing, index) => {
      return <li key={index}>{thing.name} {thing.guid}</li>
    })
    return (
      <React.Fragment>
        Greeting: {this.props.greeting}
        <br/ >
        <button className="getThingsbtn" onClick={() => this.props.getThings()}>getThings</button>
        <ul>{ thingsList }</ul>
      </React.Fragment>
    );
  }
}

const structuredSelector = createStructuredSelector({
  things: state => state.things
})

const mapDispatchToProps = { getThings }

export default connect(structuredSelector, mapDispatchToProps)(HelloWorld)