import * as React from "react";
import Rating from "@mui/material/Rating";

export default function BasicRating({score}) {
  // const [value, setValue] = React.useState(score);
  return (
    <Rating name="read-only" value={score} readOnly />
  );
}