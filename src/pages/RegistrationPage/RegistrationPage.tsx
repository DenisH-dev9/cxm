import React from "react";
import { Container, Card, Typography, FormControl, FormGroup, Autocomplete, TextField, FormControlLabel, Link, Button } from "@mui/material";
import { style } from "../../app/style"; 
import { MuiTelInput } from 'mui-tel-input';
import { iWantToRegisterAs, title, countryOfResidence, preferredLanguage } from "../../constants/registerInputOptions"; 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch } from "../../app/hooks";
import { registration } from "../../app/store/slice/auth";
import { useNavigate } from "react-router-dom";

interface DefaultProps {
  title:string;
}

const defaultProps = (option: DefaultProps[]) => {
  const props = {
    options: option,
    getOptionLabel: (option: DefaultProps) => option.title,
  };
  return props
}

const RegistrationPage = () => {

  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const [phoneNumber, setPhoneNumber] = React.useState('')

  const handleChangePhoneNumber = (newValue: string) => {
    setPhoneNumber(newValue)
  }

  const scheme = yup.object({
    registerAs: yup.string().required("Cant be blank"),
    title: yup.string().required("Cant be blank"),
    firstName: yup.string().required("Cant be blank"),
    lastName: yup.string().required("Cant be blank"),
    countryOfResidence: yup.string().required("Cant be blank"),
    tel:yup.string().required("Cant be blank"),
    preferredLanguage: yup.string().required("Cant be blank"),
    email: yup.string().required("Email cant be blank").min(6,"Minimum 6 symbols"),
    password: yup.string().required("Password cant be blank").min(6,"Minimum 6 symbols"),
    repeatPassword: yup.string().required("Cant be blank").min(6,"Minimum 6 symbols")
  })
  const {
    handleSubmit,
    register,
    formState: {errors},
  } = useForm({mode:"onBlur", resolver: yupResolver(scheme)});

  interface RegistrationData {
    // registerAs: string;
    // title: string;
    // firstName: string;
    // lastName: string;
    // countryOfResidence: string;
    // tel: string;
    // preferredLanguage: string;
    email: string;
    password: string;
    // repeatPassword: string;
  }
  const onSubmit = (data: RegistrationData) => { 
    console.log("onSubmit: ", data)
    const newUser = {
      email: data.email,
      password: data.password
    }

    dispatch(registration(newUser))
    navigate("/home")
  }

  return(
    <Container  
      maxWidth="lg" 
      sx={style.GuestPageContainer}
    >
      <Card>
        <FormControl
          component="form" 
          onSubmit={handleSubmit(onSubmit)}
        >
          <Typography 
              variant="h4"
            >
              Registration
          </Typography>
          <FormGroup>
            <Typography variant='body1'> I want to register as</Typography>
              <Autocomplete
                {...defaultProps(iWantToRegisterAs)}
                autoComplete
                includeInputInList
                renderInput={(params) => (
                  <TextField 
                    error= { errors.registerAs?.message ? true : false}
                    {...register("registerAs")} 
                    {...params} 
                    placeholder="Individual Client" 
                    variant="outlined" 
                  />
                )}
              />
              {errors.registerAs?.message}
            <Typography variant='body1'> Title</Typography>
              <Autocomplete
                  {...defaultProps(title)}
                  autoComplete
                  includeInputInList
                  renderInput={(params) => (
                    <TextField 
                      error= { errors.title?.message ? true : false}
                      {...register("title")}
                      {...params} 
                      placeholder="Title" 
                      variant="outlined" 
                    />
                  )}
                />
                {errors.title?.message}
            <Typography variant='body1'> First Name</Typography>
              <TextField
                error= { errors.firstName?.message ? true : false}
                {...register("firstName")}
                placeholder="First Name"
                variant="outlined"
              />
              {errors.firstName?.message}
            <Typography variant='body1'> Last Name</Typography>
              <TextField 
                error= { errors.lastName?.message ? true : false}
                {...register("lastName")}
                placeholder="Last Name"
                variant="outlined"
              />
              {errors.lastName?.message}
            <Typography variant='body1'> Country of Residence</Typography>
              <Autocomplete
                {...defaultProps(countryOfResidence)}
                autoComplete
                includeInputInList
                renderInput={(params) => (
                  <TextField 
                    error= { errors.countryOfResidence?.message ? true : false}
                    {...register("countryOfResidence")}
                    {...params} 
                    placeholder="Country of Residence" 
                    variant="outlined" 
                  />
                )}
              />
              {errors.countryOfResidence?.message}
            <Typography variant='body1'> Phone number</Typography>
              <MuiTelInput 
                {...register("tel")}
                value={phoneNumber} 
                onChange={handleChangePhoneNumber} 
              />
              {errors.tel?.message}
            <Typography variant='body1'> Email</Typography>
              <TextField
                error= { errors.email?.message ? true : false}
                {...register("email")}
                placeholder="Email"
                variant="outlined"
              />
              {errors.email?.message}
            <Typography variant='body1'> Preferred language</Typography>
              <Autocomplete
                {...defaultProps(preferredLanguage)}
                autoComplete
                includeInputInList
                renderInput={(params) => (
                  <TextField 
                  error= { errors.preferredLanguage?.message ? true : false}
                  {...register("preferredLanguage")}
                    {...params} 
                    placeholder="Preferred language" 
                    variant="outlined" 
                  />
                )}
              />
              {errors.preferredLanguage?.message}
            <Typography variant='body1'> Password</Typography>
              <TextField 
                error= { errors.password?.message ? true : false}
                {...register("password")}
                placeholder="Password"
                variant="outlined"
              />
              {errors.password?.message}
            <Typography variant='body1'> Repeat Password</Typography>
              <TextField 
                error= { errors.repeatPassword?.message ? true : false}
                {...register("repeatPassword")}
                placeholder="Repeat Password"
                variant="outlined"
              />
              {errors.repeatPassword?.message}
          </FormGroup>
          <Button type="submit">Register</Button>
          <FormControlLabel
            value="top"
            control={<Link href="/auth" variant="body2">Sign in</Link>}
            label="Already have an account? "
            labelPlacement="start"
          />
        </FormControl>
      </Card>
    </Container>
  )
}

export default RegistrationPage;