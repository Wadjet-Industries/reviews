import React from 'react';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
import noiseIcon from '../../../public/noiseIcon.png';
import recommendIcon from '../../../public/recommendIcon.png';

const SummaryMainDiv = styled.div`
  display: block;
  width: 608px;
  padding-bottom: 2rem;
`;

const SummaryInsideDiv = styled.div`
  display: flex;
  width: 608px;
`;

const SummaryUserReviews = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.33;
  width: 608px;
  color: #2d333f;
  border-bottom: 1px solid #d8d9db;
  padding-bottom: 1rem;
  margin: 0 0 1rem;
  display: flex;
  justify-content: space-between;
  font-family: 'BrandonTextMedium', 'Josefin Sans', sans-serif;
`;

//Left Side of Summary Review

const SummaryLeft = styled.div`
  width: 352px;
  display: block;
  font-family: 'BrandonTextRegular', 'Josefin Sans', sans-serif;
`;

const SummaryOverall = styled.div`
  width: 352px;
  display: block;
  font-size: 16px;
  color: #000000;
  line-height: 1.5;
  font-weight: 500;
  font-family: 'BrandonTextMedium', 'Josefin Sans', sans-serif;
`;

const SummaryReviewDisclaimer = styled.div`
  width: 352px;
  display: block;
  font-size: 16px;
  color: #000000;
  line-height: 1.5;
  padding-top: 8px;
  font-family: 'BrandonTextRegular', 'Josefin Sans', sans-serif;
`;

const SummaryStarRatingDiv = styled.div`
  display: inline-flex;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  align-items: center;
  justify-content: flex-start;
  font-size: 0.875rem;
  color: #2d333f;
  font-weight: 500;
  line-height: 1.43;
  font-family: 'BrandonTextMedium', 'Josefin Sans', sans-serif;
`;

const SummaryReviewRecentRatings = styled.span`
  display: flex;
  font-size: 14px;
  color: #2D333F;
  font-family: 'BrandonTextMedium', 'Josefin Sans', sans-serif;
  margin: 0 0.25rem;
  font-weight: 500;
`;

const SummaryRatingsOuterDiv = styled.div`
  display: flex;
  width: 60.52px;
  height: 39px
`;

const SummaryRatingsDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const SummaryRatingsPropertiesDiv = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0 0.5rem;
  position: relative;
  text-align: center;
  border-right: 1px solid #D3D3D3;
`;

const SummaryRatingsLastPropertyDiv = styled.div`
  display: flex;
  flex-direction: column;
  list-style: none;
  padding: 0 0.5rem;
  position: relative;
  text-align: center;
`;

const SummaryRatingsProperty = styled.div`
  margin: 0;
  padding: 0;
  font-size: 14px;
  font-weight: normal;
  white-space: nowrap;
`;

const SummaryRatingsNumericalValues = styled.div`
  margin: 0;
  padding: 0;
  font-family: 'BrandonTextMedium', 'Josefin Sans', sans-serif;
  font-weight: 500;
  line-height: 1.33;
  font-size: 16px;
`;

const SummaryOverviewDiv = styled.div`
  display: flex;  
  padding-top: 1rem;
  max-width: 100%;
`;

const SummaryNoiseLevel = styled.div`
  display: inline-flex;
  margin: 0 0 0 0.25rem;
  font-weight: 500;
  line-height: 1.43;
  font-size: 14px;
  color: #6f737b;
  font-family: 'BrandonTextMedium', 'Josefin Sans', sans-serif;

  :hover {
    color: #DA4743;
  }
`;

const SummaryDotDiv = styled.div`
  display: inline-flex;  
  padding-top: 5px;
  margin-left: 3px;
  margin-right: 3px;
`;

const SummaryReviewDot = styled.div`
  display: inline-flex;
  height: 2px;
  width: 2px;
  border-radius: 50%;
  background: #6f737b;
  margin: 4px;

  :hover {
    background: #DA4743;
  }
`;

const SummaryNoiseText = styled.span`
font-size: 14px;
color: #6f737b;
font-family: 'BrandonTextRegular', 'Josefin Sans', sans-serif;

:hover {
  color: #DA4743;
} 
`;

const SummaryRecommendText = styled.span`
margin-left: 4px;
font-size: 14px;
color: #6f737b;
font-family: 'BrandonTextRegular', 'Josefin Sans', sans-serif;

:hover {
  color: #DA4743;
}
`;
//Right Side of Summary Review

const SummaryRight = styled.div`
  width: 256px;
  display: flex;
  font-family: 'BrandonTextRegular', 'Josefin Sans', sans-serif;
`;

class ReviewSummary extends React.Component {
  constructor(props) {
    super(props);
  }


  render () {

    return (
      <SummaryMainDiv>
        <SummaryUserReviews>What {this.props.overallSummary.users} People Are Saying</SummaryUserReviews>
        <SummaryInsideDiv>
          <SummaryLeft>
            <SummaryOverall>Overall ratings and reviews</SummaryOverall>
            <SummaryReviewDisclaimer>Reviews can only be made by diners who have eaten at this restaurant</SummaryReviewDisclaimer>
            <SummaryStarRatingDiv>
              <StarRatings rating={this.props.overallSummary.overallRating} starDimension="16px" starSpacing="1px" starRatedColor='#DA3743'/> 
              <SummaryReviewRecentRatings>{this.props.overallSummary.overallRating.toFixed(1)} </SummaryReviewRecentRatings>
              <SummaryReviewRecentRatings>based on recent ratings</SummaryReviewRecentRatings>
            </SummaryStarRatingDiv>
            <SummaryRatingsOuterDiv>
              <SummaryRatingsDiv>
                <SummaryRatingsPropertiesDiv>
                  <SummaryRatingsNumericalValues>
                    {this.props.overallSummary.overallFoodRating}
                  </SummaryRatingsNumericalValues>
                  <SummaryRatingsProperty>
                    Food
                  </SummaryRatingsProperty>
                </SummaryRatingsPropertiesDiv>
                <SummaryRatingsPropertiesDiv>
                  <SummaryRatingsNumericalValues>
                    {this.props.overallSummary.overallServiceRating}
                  </SummaryRatingsNumericalValues>
                  <SummaryRatingsProperty>
                    Service
                  </SummaryRatingsProperty>
                </SummaryRatingsPropertiesDiv>
                <SummaryRatingsPropertiesDiv>
                  <SummaryRatingsNumericalValues>
                    {this.props.overallSummary.overallAmbienceRating}
                  </SummaryRatingsNumericalValues>
                  <SummaryRatingsProperty>
                    Ambience
                  </SummaryRatingsProperty>
                </SummaryRatingsPropertiesDiv>
                <SummaryRatingsLastPropertyDiv>
                  <SummaryRatingsNumericalValues>
                    {this.props.overallSummary.overallValueRating}
                  </SummaryRatingsNumericalValues>
                  <SummaryRatingsProperty>
                    Value
                  </SummaryRatingsProperty>
                </SummaryRatingsLastPropertyDiv>
              </SummaryRatingsDiv>
            </SummaryRatingsOuterDiv>
            <SummaryOverviewDiv>
              <span><img src={noiseIcon} alt="noise icon"/></span>
              <SummaryNoiseLevel>Noise 
                <SummaryDotDiv><SummaryReviewDot></SummaryReviewDot></SummaryDotDiv>
                <SummaryNoiseText>{this.props.overallSummary.overallNoiseLevel}</SummaryNoiseText> 
              </SummaryNoiseLevel>
            </SummaryOverviewDiv>
            <SummaryOverviewDiv>
            <span><img src={recommendIcon} alt="recommend icon"/></span>
            <SummaryRecommendText>{this.props.overallSummary.percentWouldRecommend}% of people would recommend it to a friend</SummaryRecommendText>
            </SummaryOverviewDiv>
          </SummaryLeft>
        </SummaryInsideDiv>
      </SummaryMainDiv>
    );
  }
}

export default ReviewSummary;


