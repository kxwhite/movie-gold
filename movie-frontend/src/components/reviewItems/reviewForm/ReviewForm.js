import React from 'react';
import './ReviewForm.scss'
import { Button, Rating, TextField, Box, FormLabel } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';

export default function ReviewForm({handleSubmit, refText, labelText, defaultValue, refTitle, refRating, ratingValue, setRatingValue}) {
  return (
    <Box component="form" noValidate autoComplete="off" sx={{ mb: 5 }}>
      <TextField
        required
        label="Review Title"
        variant="outlined"
        fullWidth
        margin="normal"
        inputRef={refTitle}
        defaultValue={defaultValue?.title}
      />

      <TextField
        required
        label={labelText}
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        margin="normal"
        inputRef={refText}
        defaultValue={defaultValue?.body}
      />

      <Box sx={{ my: 2}}>
        <FormLabel component="legend" htmlFor='rating'>Rating</FormLabel>
        <Rating
          name="rating"
          value={ratingValue}
          onChange={(event, newValue) => {
            setRatingValue(newValue);
            refRating.current = { value: newValue };
          }}
          ref={refRating}
          defaultValue={defaultValue?.rating}
          emptyIcon={<StarIcon style={{ color: '#C8CACC', opacity: 0.55 }} fontSize="inherit" />}
        />
      </Box>

      <Button
        variant="outlined"
        sx={{
          color: "#41EAD4",
          borderWidth: 2,
          borderColor: "#1D887A",
          ":hover": { borderWidth: 2, borderColor: "#41EAD4" },
        }}
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
}
