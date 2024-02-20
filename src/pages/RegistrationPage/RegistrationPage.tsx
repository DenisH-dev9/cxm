import React from "react";
import { Container, Box, CardMedia, Card, Typography, FormControl, FormGroup, Stack, Autocomplete, TextField, FormControlLabel, Checkbox, Link, Button } from "@mui/material";
import LanguageSelect from "../../components/languageSelect";
import { style } from "../../app/style"; 
import { MuiTelInput } from 'mui-tel-input';
import { iWantToRegisterAs, title, countryOfResidence, preferredLanguage } from "../../constants/registerInputOptions"; 
import ChangeColorMode from "../../components/changeColorMode";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useAppDispatch } from "../../app/hooks";
import { registration } from "../../app/store/slice/auth";
import { useNavigate } from "react-router-dom";

const defaultProps = (option: any) => {
  const props = {
    options: option,
    getOptionLabel: (option: any) => option.title,
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
    repeatPassword: yup.string().required("Cant be blank").min(6,"Minimum 6 symbols"),
    checkbox1: yup.bool().oneOf([true], 'Field must be checked'),
    checkbox2: yup.bool().oneOf([true], 'Field must be checked'),
    checkbox3: yup.bool().oneOf([true], 'Field must be checked'),
    checkbox4: yup.bool().oneOf([true], 'Field must be checked'),
    checkbox5: yup.bool().oneOf([true], 'Field must be checked'),
    checkbox6: yup.bool().oneOf([true], 'Field must be checked'),
    checkbox7: yup.bool().oneOf([true], 'Field must be checked'),
    checkbox8: yup.bool().oneOf([true], 'Field must be checked')
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
    // checkbox1: boolean;
    // checkbox2: boolean;
    // checkbox3: boolean;
    // checkbox4: boolean;
    // checkbox5: boolean;
    // checkbox6: boolean;
    // checkbox7: boolean;
    // checkbox8: boolean;
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
      <Box 
        sx={style.headerBox}
      >
        <CardMedia 
          component="img" 
          src="https://www.gotradehere.com/wp-content/uploads/2023/08/CXM-02-1024x423.png.webp"
          sx={style.headerLogo}
        />
        <LanguageSelect />
        <ChangeColorMode />
      </Box>
      <Card 
      >
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
            <Stack>
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
            </Stack>
            <Stack direction="row">
              <FormGroup>
                <FormControlLabel {...register("checkbox1")} control={<Checkbox />} label="I confirm that I have read, understood and I agree with the Company's" />{errors.checkbox1?.message}
                <FormControlLabel {...register("checkbox2")} control={<Checkbox />} label="I confirm that I have read, understood and I agree with the Company's" />{errors.checkbox2?.message}
                <FormControlLabel {...register("checkbox3")} control={<Checkbox />} label="I confirm that I have read, understood and I agree with the Company's" />{errors.checkbox3?.message}
                <FormControlLabel {...register("checkbox4")} control={<Checkbox />} label="I confirm that I have read, understood and I agree with the Company's" />{errors.checkbox4?.message}
                <FormControlLabel {...register("checkbox5")} control={<Checkbox />} label="I confirm that I have read, understood and I agree with the Company's" />{errors.checkbox5?.message}
                <FormControlLabel {...register("checkbox6")} control={<Checkbox />} label="I confirm that I have read, understood and I agree with the Company's" />{errors.checkbox6?.message}
                <FormControlLabel {...register("checkbox7")} control={<Checkbox />} label="I confirm that I have read, understood and I agree with the Company's" />{errors.checkbox7?.message}
                <FormControlLabel {...register("checkbox8")} control={<Checkbox />} label="I confirm that I have read, understood and I agree with the Company's" />{errors.checkbox8?.message}
              </FormGroup>
              <FormGroup>
                <Link href="#">KYC Policy</Link>
                <Link href="#">Terms of Service</Link>
                <Link href="#">LIquidity Guidelines</Link>
                <Link href="#">Islamic Account Acceptance Form</Link>
                <Link href="#">Client Online Trading Agreement Digital Version</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Dynamic Leverage Policy</Link>
                <Link href="#">Negative Balance Protection Policy</Link>
              </FormGroup>
            </Stack>
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