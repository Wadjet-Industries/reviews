import React from 'react';
import ReviewList from './ReviewList.jsx';
import axios from 'axios';
import styled from 'styled-components';
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    @import url('https://fonts.googleapis.com/css?family=Josefin+Sans&display=swap');
    font-family: 'Josefin Sans', sans-serif;
  }
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: []
    }
  }

  getReviews() {
    axios.get('/api/L1/reviews')
    .then((response) => {
      // console.log('response: ', response.data);
      this.setState({
        reviews: response.data
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  componentDidMount() {
    this.getReviews();
  }

  render () {
    return (
      <div>
        <GlobalStyle />
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;