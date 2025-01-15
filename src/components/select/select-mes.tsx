import React from "react";
import { Select, MenuItem, FormControl, InputLabel, SelectChangeEvent } from "@mui/material";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";

type Option = {
  label: string;
  value: number;
};

type Props = {
  title: string;
  options: Option[];
  initialValue?: number;
  onChange?: (value: number) => void;
};

export const SelectMes = ({ title, options, onChange, initialValue }: Props) => {
  const [value, setValue] = React.useState<number>(initialValue || options[0]?.value || 0);

  const handleChange = (event: SelectChangeEvent<string>) => {
    const newValue = Number(event.target.value);
    setValue(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <FormControl variant="outlined" size="small" sx={{ minWidth: 100 }}>
      <InputLabel sx={{ color: "#8FC043" }}>{title}</InputLabel>
      <Select
        autoWidth
        value={value.toString()}
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
            key={option.value}
            value={option.value.toString()}
            sx={{
              backgroundColor: "#F4F9EC",
              "&.Mui-selected": {
                backgroundColor: "#CBE2A9",
              },
            }}
          >
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
