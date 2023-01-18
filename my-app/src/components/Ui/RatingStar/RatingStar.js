import * as React from "react";
import Rating from "@mui/material/Rating";

export default function BasicRating({score, size}) {
  // const [value, setValue] = React.useState(score);
  return (
    <Rating name="read-only" value={score} size={size} precision={0.5} readOnly />
  );
}
