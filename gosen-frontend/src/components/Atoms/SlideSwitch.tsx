import { FormControlLabel, FormGroup } from "@mui/material";
import Switch from "@mui/material/Switch";
import "./AtomsStyle.css";

const SlideSwitch = () => {
    const label = { inputProps: { 'aria-label': 'Switch demo' } };
    return(
        <div>
            <div className="slideSwitch">
                <Switch {...label} />
            </div>
        </div>
    );
}

export default SlideSwitch;