'use client'
import * as React from 'react';
import { FormControl , InputLabel, MenuItem} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';

const SelectFilter: React.FC = () => {

    const [age, setAge] = React.useState('');
    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
      };


    return (<FormControl  sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-simple-select-label" sx={{color: 'white'}}>Área</InputLabel>
        <Select
          sx={{
            color: 'white',
            backgroundColor: '#1976d2',
            '& .MuiSelect-icon': {
              color: 'white',
            },
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">  </MenuItem>
          <MenuItem value={10}>Almacén de Materia Prima</MenuItem>
          <MenuItem value={20}>Component Prep</MenuItem>
          <MenuItem value={30}>Consumer</MenuItem>
          <MenuItem value={40}>Calidad</MenuItem>
          <MenuItem value={50}>Confiabilidad</MenuItem>
          <MenuItem value={60}>Oficinas</MenuItem>
        </Select>
    </FormControl>)

}

export default SelectFilter;