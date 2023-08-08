import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Switch from "@mui/material/Switch";

const FunctionSet = () => {
    return(
        <div>
            <FormGroup>
                <FormControlLabel control={<Switch/>} label="Video Camera"/>
                <FormControlLabel control={<Switch/>} label="Timer"/>
                <FormControlLabel control={<Switch/>} label="Manual Watering"/>
                <FormControlLabel control={<Switch/>} label="Option 1"/>
                <FormControlLabel control={<Switch/>} label="Option 2"/>
                <FormControlLabel control={<Switch/>} label="Option 3"/>
                <FormControlLabel control={<Switch/>} label="Option 4"/>
                <FormControlLabel control={<Switch/>} label="Option 5"/>
                <FormControlLabel control={<Switch/>} label="Option 6"/>
                <FormControlLabel control={<Switch/>} label="Option 7"/>
                <FormControlLabel control={<Switch/>} label="Option 8"/>
                <FormControlLabel control={<Switch/>} label="Option 9"/>
                <FormControlLabel control={<Switch/>} label="Option 10"/>
            </FormGroup>
        </div>
    );
}

export default FunctionSet;