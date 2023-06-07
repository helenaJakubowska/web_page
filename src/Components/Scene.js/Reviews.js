import React from 'react';
import styled from 'styled-components';
import img1 from '../../images/reviews/img1.jpg';
import img2 from '../../images/reviews/img2.jpg';
import img3 from '../../images/reviews/img3.jpg';
import img4 from '../../images/reviews/img4.jpg';
import img5 from '../../images/reviews/img5.jpg';
import img6 from '../../images/reviews/img6.jpg';
import img7 from '../../images/reviews/img7.jpg';
import img8 from '../../images/reviews/img8.jpg';

const ReviewStyled = styled.div`
  text-align: center;
  margin-top: 130px;

  max-width: 1500px;

  .reviews-title {
    font: small-caps bold 26px/2 cursive;
    margin-bottom: 90px;
    color: #00a08bff;
  }

  .flex {
    max-width: 1300px;
    display: flex;
    flex-wrap: wrap;
  }

  .review {
    width: 22%;
    height: 22%;
    border: 2px solid #fab400ff;
    padding: 5px;
    margin: 15px;
    background-image: url({review.image});
  }

  .review:hover {
    background-position: center;
    scale: calc(1.8);
    transition: ease-in-out 0.5s;
  }
`;

const imagesWithReviews = [
  { id: 1, image: img1 },
  { id: 2, image: img2 },
  { id: 3, image: img3 },
  { id: 4, image: img4 },
  { id: 5, image: img5 },
  { id: 6, image: img6 },
  { id: 7, image: img7 },
  { id: 8, image: img8 },
];

const Reviews = () => {
  const listReviews = imagesWithReviews.map((review, index) => (
    <img
      className="review"
      alt={`review${imagesWithReviews.id}`}
      key={index}
      src={review.image}
    ></img>
  ));

  return (
    <ReviewStyled>
      <h3 className="reviews-title">
        Вот что пишут обо мне и занятиях со мной:
      </h3>
      <div className="flex">{listReviews}</div>
    </ReviewStyled>
  );
};

export default Reviews;
