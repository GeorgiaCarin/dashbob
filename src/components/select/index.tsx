import React from "react";
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

type Props = {
    title: string;
    options: string[];
    onChange?: (value: string) => void;
};

export const SelectValue = ({ title, options, onChange }: Props) => {
    const [value, setValue] = React.useState<string>(options[0]);

    const handleChange = (event: SelectChangeEvent<string>) => {
        const newValue = event.target.value;
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <FormControl variant="outlined" size="small" sx={{ minWidth: 100 }}>
            <InputLabel>{title}</InputLabel>
            <Select
                value={value}
                onChange={handleChange}
                label={title}
                IconComponent={KeyboardArrowDown}
                sx={{
                    maxWidth: 100,
                    borderRadius: "20px",
                    backgroundColor: "#F4F9EC",
                    color: "#8FC043",
                    fontWeight: "bold",
                    borderColor: "#8FC043"
                }}
            >
                {options.map((option) => (
                    <MenuItem
                        key={option}
                        value={option}
                        sx={{

                            backgroundColor: "#F4F9EC",
                            "&.Mui-selected": {
                                backgroundColor: "#CBE2A9",
                            },
                        }}
                    >
                        {option}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};
