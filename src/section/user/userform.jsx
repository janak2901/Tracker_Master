import { Box, Button, Card, FormControl, MenuItem, Select, Stack, styled } from '@mui/material';
import { useState } from 'react';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import Typography from '../../core/Typography';
import { useDispatch } from 'react-redux';
import { addUser, fetchUsers, updateItem } from '../../redux/action';
import { Formik, useFormik } from 'formik';
import loginSchema from '../../validation/login.validation';
import TextField from '../../core/Textfieldcore';
import userformSchema from '../../validation/userform.validation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';


const Userform = ({user, resetform }) => {
  const [userData, setUserData] = useState(user);
  console.log('rowdata,,,,', userData);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const space = {
    marginY: '8px'
  }
  const { values, handleChange, errors, handleSubmit, touched, handleBlur } = useFormik({
    initialValues: userData.id || {
      profile_picture: '',
      name: "",
      email: '',
      password: '',
      mobile_no: '',
      address: '',
      role: '',
    },
    validationSchema: userformSchema,
    onSubmit: async (value, { resetform, setSubmitting, }) => {
      console.log(value);

      if (userData.id) {
        dispatch(updateItem({ id: userData.id.id, ...value }));
      } else {
        dispatch(addUser({ payload: value }));
      }
      setSubmitting(true);
      resetform();
      setUserData();      
    }
  })

  return (
    <>
      {/* <ToastContainer /> */}
         <Stack spacing={0} sx={{ width: "50vw" }}>
        <Card sx={{ maxWidth: '100vw', padding: "10px" }}>

          <form noValidate onSubmit={handleSubmit}  resetform={resetform}>

            <Stack marginX={5} marginY={2} >
              <Box sx={space}>
                <TextField type='file' fullWidth size='small' name='profile_picture' value={values.profile_picture} onChange={handleChange} />
              </Box>

              <Box sx={space}>
                <TextField fullWidth size='small' label='Name' name='name' value={values.name} onChange={handleChange} onBlur={handleBlur} />
                {touched.name && Boolean(errors.name) && <Typography color='error' sx={{ color: 'red', fontSize: '12px' }}>{errors.name}</Typography>}
              </Box>
              <Box sx={space}>
                <TextField fullWidth size='small' label='Email' name='email' value={values.email} onChange={handleChange} onBlur={handleBlur} />
                {touched.email && Boolean(errors.email) && <Typography color='error' sx={{ color: 'red', fontSize: '12px' }}>{errors.email}</Typography>}
              </Box>
              <Box sx={space}>
                <TextField size='small' label='Password' variant='outlined' name='password' value={values.password} onChange={handleChange} onBlur={handleBlur} />
                {touched.password && Boolean(errors.password) && <Typography color='error' sx={{ color: 'red', fontSize: '12px' }}>{errors.password}</Typography>}
              </Box>
              <Box sx={space}>
                <TextField size='small' label='Mobile No' variant='outlined' name='mobile_no' value={values.mobile_no} onChange={handleChange} onBlur={handleBlur} />
                {touched.mobile_no && Boolean(errors.mobile_no) && <Typography color='error' sx={{ color: 'red', fontSize: '12px' }}>{errors.mobile_no}</Typography>}
              </Box>

              <Box sx={space}>
                <TextField size='small' label='Address' variant='outlined' name='address' value={values.address} onChange={handleChange} onBlur={handleBlur} />
                {touched.address && Boolean(errors.address) && <Typography color='error' sx={{ color: 'red', fontSize: '12px' }}>{errors.address}</Typography>}
              </Box>
              <Box sx={space}>
                <TextField size='small' label='Role' variant='outlined' name='role' value={values.role} onChange={handleChange} onBlur={handleBlur} />
                {touched.role && Boolean(errors.address) && <Typography color='error' sx={{ color: 'red', fontSize: '12px' }}>{errors.role}</Typography>}
              </Box>

              <Box display='flex' justifyContent='center'>
                <Button type='submit' variant='outlined' sx={{ width: "250px" }}>
                  {userData.id ? 'Update' : 'Create'}
                </Button>
              </Box>
            </Stack>
          </form>
        </Card>
      </Stack>  
    </>
  )
}

export default Userform
