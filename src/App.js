import React, {useState} from "react";
import Embed from './components/Embed';
import CustomForm from './components/CustomForm';
import Box from '@mui/material/Box';


function App() {

  const [venue, setVenue] = useState(null)
  

  return (
    <>
    <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'row',
            alignContent: 'center',
            justifyContent: 'space-between'
          }}
      >
      <Embed 
      venue={venue}
      />
      <CustomForm 
      venue={venue}
      setVenue={setVenue}
      />
      </Box>
    </>
  );
}

export default App;
