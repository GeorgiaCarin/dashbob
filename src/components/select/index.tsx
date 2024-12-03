import { Option, Select } from "@mui/joy"
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

type props = {
    title: string,
    options: string[],
}

export const SelectValue = ({title,options}:props) => {

    return (

        <Select
            defaultValue={options[0]}
            placeholder={title}
            indicator={<KeyboardArrowDown />}
            variant="soft"
            size="md"
            sx={{
                borderRadius: 40,
                minWidth: 100,
                color: '#8FC043',
                backgroundColor: '#F4F9EC',
                fontWeight: 'bold'
            }}
            slotProps={{
                listbox: {
                  sx: {
                    backgroundColor: '#F4F9EC',
                    borderRadius: 8,
                    placement: 'bottom-start',
                  },
                },
            }}
          
        >
            {options.map((item) => (
                    <div className="min-w-24">
                        <Option 
                            sx={{
                                backgroundColor: '#F4F9EC',
                                '&[aria-selected="true"]': {
                                    backgroundColor: '#CBE2A9', 
                                },
                            }} 
                            value={item} >{item}</Option>
                    </div>
                ))}
        </Select>

    )
}