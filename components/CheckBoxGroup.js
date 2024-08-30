import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import { Fragment } from "react";

export default function CheckBoxGroup({ data, heading }) {
    return (
        <Fragment>
            <h4>{heading}</h4>
            <FormGroup>
                {data.map((d, index) => {
                    return <FormControlLabel key={index} control={<Checkbox />} label={d} />
                })}
            </FormGroup>
        </Fragment>
    )
}