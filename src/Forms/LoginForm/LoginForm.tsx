import React from "react";
import { Card, FormControl, OutlinedInput, InputAdornment, IconButton, TextField, Button, Typography, FormControlLabel, FormGroup, Checkbox } from "@mui/material";
import { Visibility } from "@mui/icons-material";
import { VisibilityOff } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch } from "../../app/hooks";
import { login } from "../../app/store/slice/auth";
import { useNavigate } from "react-router-dom";
import { style } from "../../app/style";

const LoginForm = () => {

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const scheme = yup.object({
    email: yup.string().required("Email cant be blank").min(6,"Minimum 6 symbols"),
    password: yup.string().required("Password cant be blank").min(6,"Minimum 6 symbols")
  })

  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm({mode:"onBlur", resolver: yupResolver(scheme)});

  interface SignInData {
    email: string;
    password: string;
  }

  const onSubmit = (data: SignInData) => { 
    // console.log(data)
    const user = {
      email: data.email,
      password: data.password
    }
    // console.log("user: ", user)

    dispatch(login(user))
    navigate("/home")
  }

  return (
    <Card 
      sx={style.signInCard}
    >
      <FormControl 
        component="form" 
        onSubmit={handleSubmit(onSubmit)} 
        sx={style.signInFormControl}
      >
        <FormGroup 
          sx={style.signInFormGroup}
        >
          <Typography 
            variant="h4" 
            sx={style.signInFormTitle}
          >
            Sign in
          </Typography>
          <Typography 
            variant="body1" 
            sx={style.signInFormInputLabel}
          >
            Email
          </Typography>
          <TextField 
            {...register("email")} 
            error= { errors.email?.message ? true : false}
            id="outlined-basic" 
            placeholder="Example@email.com"
            variant="outlined"
          />
          <Typography 
            variant="body2" 
            sx={style.signInInputError}
          >
              {errors.email?.message}
          </Typography>
          <Typography 
            variant="body1" 
            sx={style.signInFormInputLabel}
          >
            Password
          </Typography>
            <OutlinedInput
              {...register("password")}
              error= { errors.password?.message ? true : false}
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              placeholder="Password"
            />
            <Typography 
              variant="body2" 
              sx={style.signInInputError}
            >
              {errors.password?.message}
          </Typography>
          <FormGroup row sx={style.signInOptionsFormGroup}>
            <FormControlLabel
              value="Remember me"
              control={<Checkbox />}
              label="Remember me"
              labelPlacement="start"
              sx={style.singInOptionsFormControlLabel}
            />
            <Typography>
              huihui
            </Typography>
          </FormGroup>
          <Button 
            type="submit" 
          >
            Sign In
          </Button>
        </FormGroup>
      </FormControl>
    </Card>
  )
}

export default LoginForm;