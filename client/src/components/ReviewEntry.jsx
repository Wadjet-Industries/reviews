import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import StarRatings from 'react-star-ratings';
import textbox from '../../../public/textbox.png';
import report from '../../../public/Report2.png';



const MainDiv = styled.section`
  width: 608px;
  border-bottom: 1px solid #D3D3D3;
  padding-top: 16px;
  padding-bottom: 16px;
`;

const FlexDiv = styled.section`
  display: flex;
`;

//User Div

const UserDiv = styled.section`
  display: block;
  width: 96px;
  margin-left: 16px;
  margin-right: 16px;
`;

const InitialsCircle = styled.section`
  display: flex;
  justify-content: center;
  background-color: #BB6ACD;
  height: 48px;
  width: 48px;
  border-radius: 50%;
  color: #FFFFFF;
  text-align: center;
  vertical-align: middle;
  line-height:3em;
  margin: 0 auto;
  font-size: 16px;
  font-weight: bold;
  font-family: 'Brandon Text', 'Josefin Sans', sans-serif;
`;

const Username = styled.section`
  text-align: center;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
  overflow-wrap: break-word;
  width: 80px;
  font-size: 14px;
  color: #2D333F;
  font-family: 'Brandon Text', 'Josefin Sans', sans-serif;
`;

const UserLocation= styled.section`
  text-align: center;
  margin: 0 auto;
  margin-top: 5px;
  margin-bottom: 5px;
  overflow-wrap: break-word;
  width: 80px;
  font-size: 14px;
  color: #6F737B;
  font-family: 'Brandon Text', 'Josefin Sans', sans-serif;
`;

//Review Div

const ReviewDiv = styled.section`
  display: block;
`;

const ReviewDate = styled.section`
  display: inline-flex;  
  color: #2D333F;
  font-size: 14px;
  margin-left: 4px;
  margin-right: 4px;
  font-family: 'Brandon Text', 'Josefin Sans', sans-serif;
`;

const ReviewPropertiesDiv = styled.section`
  margin-above: 8px;
  font-family: 'Brandon Text', 'Josefin Sans', sans-serif;
`;

const ReviewDot = styled.section`
  display: inline-flex;
  height: 3px;
  width: 3px;
  border-radius: 50%;
  background: #2D333F;
  margin: 4px;
  font-family: 'Brandon Text', 'Josefin Sans', sans-serif;
`;

const ReviewNumericalRating = styled.section`
  display: inline-flex;
  font-weight: bold;
  color: #DA3743;
  font-size: 14px;
  font-family: 'Brandon Text', 'Josefin Sans', sans-serif;
  margin-right: 2px;
`;

const ReviewProperties = styled.section`
  display: inline-flex;
  font-weight: bold;
  color: #2D333F;
  margin-right: 8px;
  font-size: 14px;
  font-family: 'Brandon Text', 'Josefin Sans', sans-serif;
`;

const ReviewStyling = styled.section`
  color: #2D333F;
  font-size: 16px;
  margin-top: 10px;
  margin-bottom: 10px;
  font-family: 'Brandon Text', 'Josefin Sans', sans-serif;
`;

const TextboxNumberReviews = styled.section`
  display: inline-flex;  
  font-size: 12px;
  vertical-align: text-top;
  color: #6F737B;
  font-family: 'Brandon Text', 'Josefin Sans', sans-serif;
`;

const ReviewReportDiv = styled.section`
  height: 32px;
  font-family: 'Brandon Text', 'Josefin Sans', sans-serif;
`;

class ReviewEntry extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {

    const now = moment();
    const dateOfReview = `${this.props.review.date}`;
    const dateDifference = now.diff(dateOfReview, 'days');
    const dateFormat = moment(dateOfReview).format('MMMM Do YYYY');

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
            <UserLocation>
            <div>
              {this.props.review.location}
            </div>
            </UserLocation>
            <Username>
            <div>
              <span><img src={textbox} alt="textbox icon"/></span>
              <TextboxNumberReviews><span>{this.props.review.total_reviews} Reviews</span></TextboxNumberReviews>
            </div>
            </Username>
          </div>
          </UserDiv>
        </div>

        <div>
          <ReviewDiv>
          <div>

            <div>
              <span> <StarRatings rating={this.props.review.overall} starDimension="16px" starSpacing="1px" starRatedColor='#DA3743'/></span>
              <span><ReviewDot></ReviewDot></span>
              <span><ReviewDate>{dateDifference <= 1 ? `Dined a day ago` : dateDifference <= 7 ? `Dined ${dateDifference} days ago` : `Dined on ${dateFormat}`}</ReviewDate></span>
            </div>

            <ReviewPropertiesDiv>
            <div>
              <span><ReviewProperties>Overall</ReviewProperties> <ReviewNumericalRating>{this.props.review.overall}</ReviewNumericalRating></span> 
              <span><ReviewDot></ReviewDot></span>
              <span> <ReviewProperties>Food</ReviewProperties> <ReviewNumericalRating>{this.props.review.food}</ReviewNumericalRating></span>
              <span><ReviewDot></ReviewDot></span>
              <span> <ReviewProperties>Service</ReviewProperties> <ReviewNumericalRating>{this.props.review.service}</ReviewNumericalRating></span>
              <span><ReviewDot></ReviewDot></span>
              <span> <ReviewProperties>Ambience</ReviewProperties> <ReviewNumericalRating>{this.props.review.ambience}</ReviewNumericalRating></span>
            </div>
            </ReviewPropertiesDiv>
            
            <div>
              <ReviewStyling>{this.props.review.review}</ReviewStyling>
            </div>

            <ReviewReportDiv>
            <div>
            <span><img src={report} alt="report icon"/></span>
            </div>
            </ReviewReportDiv>
          
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


