import React, { useEffect, useRef, useState } from "react";
import "./Reviews.scss";
import api from '../../api/axiosConfig'
import { useNavigate, useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../../components/reviewItems/reviewForm/ReviewForm";
import { Box, Button, Link, Typography } from "@mui/material";
import ReviewCard from "../../components/reviewItems/reviewCard/ReviewCard";
import EditIcon from "@mui/icons-material/Edit";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";

export default function Reviews({ getMovieData, movie, reviews, setReviews }) {
  const [ratingValue, setRatingValue] = useState(2);
  const [showForm, setShowForm] = useState(false);

  const navigate = useNavigate();

  const refText = useRef();
  const refTitle = useRef();
  const refRating = useRef();

  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, [])

  const addReview = async (e) => {
    e.preventDefault();

    const randomName = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?inc=name,login,picture&noinfo"
        );
        const data = await response.json();
        const user = data.results[0];
        return {
          username: `${user.login.username}`,
          avatar: user.picture.thumbnail,
        };
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    };

    const user = await randomName();

    if (!user) return;

    const reviewBody = refText.current.value;
    const reviewTitle = refTitle.current.value;
    const rating = refRating.current.value;

    try {
      const response = await api.post("/api/v1/reviews", {
        reviewBody,
        title: reviewTitle,
        username: user.username,
        avatar: user.avatar,
        rating,
        imdbId: movieId,
      });

      const newReview = {
        body: reviewBody,
        title: reviewTitle,
        username: user.username,
        avatar: user.avatar,
        rating,
        timestamp: new Date().toISOString(),
      };

      // const newReview = response?.data;

      // const updatedReviews = [newReview];
      // const updatedReviews = [...reviews, newReview];
      const updatedReviews = Array.isArray(reviews) ? [...reviews, newReview] : [newReview];

      refText.current.value = "";
      refTitle.current.value = "";
      setRatingValue(2);

      setReviews(updatedReviews);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className="reviews-main-container">
      <Row>
        <Col>
          <Typography variant="h4" component="h1" gutterBottom sx={{ pt: 6, fontWeight: "900 !important" }}>
            {movie?.title}
          </Typography>
          <Link onClick={() => navigate(-1)} variant="body1" component="button" underline="none" sx={{ color: "#C8CACC", mb: 4, fontWeight: "900 !important", ":hover": { opacity: 0.8 } }}>
            <ArrowBackRoundedIcon sx={{ mr: 1, fontSize: 18 }}/>
            Back to main
          </Link>
        </Col>
      </Row>
      <Row className="mt-2">
        <Col><img src={movie?.poster} alt="" /></Col>
        <Col xs={7}>
          {
            <>
              <Row>
                <Col className="reviews-form">
                {!showForm ? (
                  <Button variant="contained" className="movie-watch-btn" startIcon={<EditIcon />} onClick={() => setShowForm(true)} sx={{mb: 3, color: '#011627', backgroundColor: 'white', borderRadius: '500px', fontWeight: '900 !important', ":hover": { backgroundColor: '#C8CACC'}}}>WRITE REVIEW</Button>
                ):(
                  <ReviewForm
                    handleSubmit={addReview}
                    refText={refText}
                    refTitle={refTitle}
                    refRating={refRating}
                    labelText="Write a review?"
                    ratingValue={ratingValue}
                    setRatingValue={setRatingValue}
                  />
                )}
                </Col>
              </Row>
              <Row>
                <Col className="reviews-hr">
                  <hr />
                </Col>
              </Row>
            </>
          }
          <Row>
            <Box>
              {movie && (movie?.reviewIds?.length > 0 || reviews?.length > 0) ? (
                <Box className="reviews-card-row-container" style={{ height: `${!showForm ? "calc(100vh - 320px)" : "calc(100vh - 660px)"}` }}>
                  <ReviewCard reviews={reviews} movie={movie} />
                </Box>
              ) : (
                <Typography variant="body1" component="h1" gutterBottom sx={{ fontWeight: '900 !important' }}>
                  No reviews yet.
                </Typography>
              )}
            </Box>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
}
