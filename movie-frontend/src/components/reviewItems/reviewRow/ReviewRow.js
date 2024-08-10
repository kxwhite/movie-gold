import { Box } from '@mui/material';
import React from 'react'
import { Col, Row } from 'react-bootstrap';

function ReviewRow({ reviews, movie, slice }) {
  return (
    <Box>
      {reviews?.map((r, id) => {
        return (
          <Box key={id}>
            <Row>
              <Col>{r.body}</Col>
            </Row>
            <Row>
              <Col>
                <hr />
              </Col>
            </Row>
          </Box>
        );
      })}
      {movie?.reviewIds
        ?.slice(-slice, movie?.reviewIds?.length)
        .reverse()
        .map((r, id) => {
          return (
            <Box key={id}>
              <Row>
                <Col>{r.body}</Col>
              </Row>
              <Row>
                <Col>
                  <hr />
                </Col>
              </Row>
            </Box>
          );
        })}
    </Box>
  );
}

export default ReviewRow
