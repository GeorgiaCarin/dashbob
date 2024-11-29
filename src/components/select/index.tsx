import { Option, Select } from "@mui/joy"
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

type props = {
    title: string,
    options: string[],
}

export const SelectValue = ({title,options}:props) => {
    return (

        <Select
            color="success"
            placeholder={title}
            indicator={<KeyboardArrowDown />}
            variant="soft"
            size="md"
          
        >
            {options.map((item) => (
                    <div className="min-w-24">
                    <Option value={item } >{item}</Option>
                    </div>
                ))}
        </Select>

    )
}