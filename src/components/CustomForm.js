import React, {useState} from "react";
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from "@mui/material/FormControl";
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';

function CustomForm ({venue, setVenue}) {
  const [spaceId, setSpaceId] = useState("")
  const [venueId, setVenueId] = useState("")
  const [showUI, setShowUI] = useState(true)
  const [showReaction, setShowReaction] = useState(false)
  const [showBackground, setShowBackground] = useState(true)
  const [showHands, setShowHands] = useState(true)
  const [showSpeakers, setShowSpeakers] = useState(true)
  const [showStage, setShowStage] = useState("")
  const [maxNodes, setMaxNodes] = useState("null")

  const handleSubmit = (e) => {
    const newVenue = {
      venueId: venueId,
      spaceId: spaceId,
      showUI: showUI,
      showReaction: showReaction,
      showBackground: showBackground,
      showHands: showHands,
      showSpeakers: showSpeakers,
      showStage: showStage,
      maxNodes: maxNodes
    }; 
    setVenue(newVenue)
  console.log(newVenue) 
}

  return (
   <>
   <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
        }}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'right',
            flexDirection: 'column',
            alignContent: 'right',
          }}
        >
          <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <Typography component="h1" variant="h5">
            Settings
          </Typography>
            <TextField
              margin="normal"
              fullWidth
              id="venueId"
              label="Venue Id"
              name="venueId"
              autoFocus
              value={venueId} onChange={(e) => setVenueId(e.target.value)}
            />
            <TextField
              margin="normal"
              fullWidth
              name="spaceId"
              label="Space Id"
              id="spaceId"
              value={spaceId} onChange={(e) => setSpaceId(e.target.value)}
            />
            <FormGroup
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                justifyContent: "left",
              }}
            >
              <FormControlLabel control={<Checkbox 
                inputProps={{ "aria-label": "controlled" }}
                checked={showBackground}
                onChange={(e) => setShowBackground(e.target.checked)}
               />} label="Show Background" />
              <FormControlLabel control={<Checkbox 
                inputProps={{ "aria-label": "controlled" }}
                checked={showUI}
                onChange={(e) => setShowUI(e.target.checked)}
                />} label="Show UI" />
              <FormControlLabel control={<Checkbox  
              inputProps={{ "aria-label": "controlled" }}
              checked={showReaction}
              onChange={(e) => setShowReaction(e.target.checked)}
              />} label="Show Reaction" />
              <FormControlLabel control={<Checkbox 
                inputProps={{ "aria-label": "controlled" }}
                checked={showHands}
                onChange={(e) => setShowHands(e.target.checked)}
                />} label="Show Hands" />
               <FormControlLabel control={<Checkbox 
                inputProps={{ "aria-label": "controlled" }}
                checked={showSpeakers}
                onChange={(e) => setShowSpeakers(e.target.checked)}
                />} label="Show Speakers" />
            </FormGroup>
        <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel >Show Stage</InputLabel>
            <Select
              value={showStage}
              label="Show Stage"
              onChange={(e) => setShowStage(e.target.value)}
            >
              <MenuItem value="regular">Regular</MenuItem>
              <MenuItem value="theater">Theater</MenuItem>
              <MenuItem value="none">None</MenuItem>
            </Select>
            <TextField
              margin="normal"
              fullWidth
              id="maxNodes"
              label="max Nodes"
              name="maxNodes"
              autoFocus
              value={maxNodes === "null" ? "" : maxNodes } onChange={(e) => {
                if (e.target.value === "") {
                  setMaxNodes("null")
                } else {
                  setMaxNodes(e.target.value)
                }
              }
              }
                 
            />
      </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Apply
            </Button>
            </FormControl>
            </Box>
            </Container>
      </form>

   </>
  )
}

export default CustomForm;