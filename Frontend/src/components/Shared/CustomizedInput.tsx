import { TextField } from "@mui/material"
import "./CustomizedInput.css"

type Props = {
    name: string;
    type: string;
    label: string;
}
export const CustomizedInput = (props:Props) => {
  return (
    <TextField 
    margin= "normal"
    name={props.name} 
    type={props.type} 
    label={props.label}
    InputLabelProps={{ style: {color: "white"} }}
    InputProps={{ 
        style: {
            width: "400px", 
            fontSize: 20,
            borderRadius: 20,
            borderColor: "white",
            color: "white"
        }
    }}
    />
  )
}
