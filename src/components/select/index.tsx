import React from "react";
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

type Props = {
    title: string;
    options: (string | number )[];
    initialValue?: string | number;
    onChange?: (value: string) => void;
};

export const SelectValue = ({ title, options, onChange,initialValue }: Props) => {
    const [value, setValue] = React.useState<string | number >(initialValue || options[0] || "");

    const handleChange = (event: SelectChangeEvent<string>) => {
        const newValue = event.target.value;
        setValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <FormControl variant="outlined" size="small" sx={{ minWidth: 100, inputLabelRoot: {
            color: 'red',
          } }}>
            <InputLabel sx={{
                color: "#8FC043"
            }}>{title}</InputLabel>
            <Select
                autoWidth
                value={value}
                onChange={handleChange}
                label={title}
                IconComponent={KeyboardArrowDown}
                sx={{   
                    borderRadius: "20px",
                    backgroundColor: "#F4F9EC",
                    color: "#8FC043",
                    fontWeight: "bold",
                    
               
                    
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
