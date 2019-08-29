import React from 'react';
import styled from 'styled-components';

const MainDiv = styled.section`
  width: 50%;
`;

const FlexDiv = styled.section`
  display: flex;
`;

const UserDiv = styled.section`
  display: block;
  width: 110px;
  height: 150px;
`;

const ReviewDiv = styled.section`
  display: block;
  height: 150px;
`;

const ReviewDot = styled.section`
  display: inline-flex;
  height: 3px;
  width: 3px;
  border-radius: 50%;
  background: #2D333F;
  margin: 3px;
`;

const ReviewNumericalRating = styled.section`
  display: inline-flex;
  font-weight: bold;
  color: #DA3743;
  font-size: 14px;
  margin: 5px;
`;

const ReviewProperties = styled.section`
  display: inline-flex;
  font-weight: bold;
  color: #2D333F;
  font-size: 14px;
`;

const ReviewStyling = styled.section`
  color: #2D333F;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const InitialsCircle = styled.section`
  display: flex;
  justify-content: center;
  background-color: #BB6ACD;
  height: 50px;
  width: 50px;
  border-radius: 50%;
  color: #FFFFFF;
  text-align: center;
  vertical-align: middle;
  line-height:3em;
  margin: 0 auto;
`;

const Username = styled.section`
  display: flex;
  justify-content: center;
  text-align: center;
  margin-top: 5px;
  margin-bottom: 5px;
`;

class ReviewEntry extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <MainDiv>
      <div> 
       
       <FlexDiv>
        <div>
          <UserDiv>
          <div>
            <InitialsCircle>
            
            <div>
              {this.props.review.user_initials}
            </div>
            </InitialsCircle>
            <Username>
            <div>
              {this.props.review.user}
            </div>
            </Username>
            <Username>
            <div>
              {this.props.review.location}
            </div>
            </Username>
          </div>
          </UserDiv>
        </div>

        <div>
          <ReviewDiv>
          <div>
            <div>
              <span><ReviewProperties>Overall</ReviewProperties> <ReviewNumericalRating>{this.props.review.overall}</ReviewNumericalRating></span> 
              <span><ReviewDot></ReviewDot></span>
              <span> <ReviewProperties>Food</ReviewProperties> <ReviewNumericalRating>{this.props.review.food}</ReviewNumericalRating></span>
              <span><ReviewDot></ReviewDot></span>
              <span> <ReviewProperties>Service</ReviewProperties> <ReviewNumericalRating>{this.props.review.service}</ReviewNumericalRating></span>
              <span><ReviewDot></ReviewDot></span>
              <span> <ReviewProperties>Ambience</ReviewProperties> <ReviewNumericalRating>{this.props.review.ambience}</ReviewNumericalRating></span>
            </div>
            
            
            <div>
              <ReviewStyling>{this.props.review.review}</ReviewStyling>
            </div>
          
          </div>
          </ReviewDiv>

        </div>
        </FlexDiv>

      </div>
      </MainDiv>
      

    )
  }
}


export default ReviewEntry;


