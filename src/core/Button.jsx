import { Button as MuiButton, styled } from '@mui/material'
const Button = styled(MuiButton)(()=>({
    textTransform:"capitalize",
    border:"1px solid #536DFE",
    color:"white",
    width:"160px",
    fontWeight:600,
    // padding:"8px",
    fontSize:"16px",
    backgroundColor:"#1976d2",
    borderRadius:'25px',
    marginTop:'20px',

    "&:hover":{
        backgroundColor:'white',
        border:"1px solid #1976d2",
        color:"#1976d2"
    }


}))
export default Button;