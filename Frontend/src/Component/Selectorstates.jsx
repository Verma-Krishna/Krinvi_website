import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';



const states = [
    { code: 'AN', label: 'Andaman and Nicobar Islands' },
  { code: 'AP', label: 'Andhra Pradesh' },
  { code: 'AR', label: 'Arunachal Pradesh' },
  { code: 'AS', label: 'Assam' },
  { code: 'BR', label: 'Bihar' },
  { code: 'CH', label: 'Chandigarh' },
  { code: 'CT', label: 'Chhattisgarh' },
  { code: 'DL', label: 'Delhi' },
  { code: 'GA', label: 'Goa' },
  { code: 'GJ', label: 'Gujarat' },
  { code: 'HR', label: 'Haryana' },
  { code: 'HP', label: 'Himachal Pradesh' },
  { code: 'JK', label: 'Jammu and Kashmir' },
  { code: 'JH', label: 'Jharkhand' },
  { code: 'KA', label: 'Karnataka' },
  { code: 'KL', label: 'Kerala' },
  { code: 'LD', label: 'Lakshadweep' },
  { code: 'MP', label: 'Madhya Pradesh' },
  { code: 'MH', label: 'Maharashtra' },
  { code: 'MN', label: 'Manipur' },
  { code: 'ML', label: 'Meghalaya' },
  { code: 'MZ', label: 'Mizoram' },
  { code: 'NL', label: 'Nagaland' },
  { code: 'OR', label: 'Odisha' },
  { code: 'PY', label: 'Puducherry' },
  { code: 'PB', label: 'Punjab' },
  { code: 'RJ', label: 'Rajasthan' },
  { code: 'SK', label: 'Sikkim' },
  { code: 'TN', label: 'Tamil Nadu' },
  { code: 'TG', label: 'Telangana' },
  { code: 'TR', label: 'Tripura' },
  { code: 'UP', label: 'Uttar Pradesh' },
  { code: 'UT', label: 'Uttarakhand' },
  { code: 'WB', label: 'West Bengal' },
];



const Selectorstates = () => {

   

  return (
    <>
                  <select className="block  w-full px-4 py-2 border border-gray-300 bg-white text-gray-700 rounded-md focus:outline-none mb-2">
                  {states.map((country) => (
          <option key={country.code} value={country.label}>
            {country.label}
          </option>
        ))}

                  </select>
    </>

  );
};

export default Selectorstates;
