import React from 'react';
import ReviewList from './ReviewList.jsx';
import axios from 'axios';

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
      console.log('response: ', response.data);
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
        <ReviewList reviews={this.state.reviews} />
      </div>
    );
  }
}

export default App;