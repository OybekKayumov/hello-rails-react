import React from "react"
import { connect } from "react-redux"

const GET_GREETING_REQUEST = 'GET_GREETING_REQUEST'
const GET_GREETING_SUCCESS = 'GET_GREETING_SUCCESS'

export const getGreetingSuccess = (message) => {
  return {
    type: GET_GREETING_SUCCESS,
    message
  }
}

export const getGreeting = () => {
  return dispatch => {
    dispatch({type: GET_GREETING_REQUEST});
    return fetch('/api/greeting')
      .then(res => res.json())
      .then(message => dispatch(getGreetingSuccess(message)))
      .catch(error => console.log(error))
  }
}

class Greeting extends React.Component {
  render () {
    const { greeting } = this.props;
    return (
      <React.Fragment>
       <h2> Greeting: {greeting.message} </h2>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  greeting: state.greeting
})

const mapDispatchToProps = { getGreeting }


export default connect(mapStateToProps, mapDispatchToProps)(Greeting)