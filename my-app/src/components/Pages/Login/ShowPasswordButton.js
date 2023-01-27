import React from "react";
import './style.css'
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

function ShowPasswordButton({changeVisibility}) {
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
    changeVisibility()
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  


  return (
    <div >
          <InputAdornment position="end" >
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
    </div>
  );
}

export default ShowPasswordButton;
