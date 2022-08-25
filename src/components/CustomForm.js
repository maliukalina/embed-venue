import React, { useContext } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { VenueContext } from "../App";

function CustomForm() {
  const {
    env,
    setEnv,
    spaceId,
    setSpaceId,
    venueId,
    setVenueId,
    showUI,
    setShowUI,
    showReaction,
    setShowReaction,
    showBackground,
    setShowBackground,
    showHands,
    setShowHands,
    showSpeakers,
    setShowSpeakers,
    showStage,
    setShowStage,
    maxNodes,
    setMaxNodes,
  } = useContext(VenueContext);

  return (
    <>
      <form>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              flexDirection: "column",
              alignContent: "right",
            }}
          >
            <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
              <Typography component="h1" variant="h5">
                Settings
              </Typography>
              <br />
              <FormControl>
                <InputLabel>Environment</InputLabel>
                <Select
                  value={env}
                  label="Environment"
                  onChange={(e) => setEnv(e.target.value)}
                >
                  <MenuItem value="dev">dev</MenuItem>
                  <MenuItem value="prod">prod</MenuItem>
                </Select>
              </FormControl>
              <TextField
                margin="normal"
                fullWidth
                id="venueId"
                label="Venue Id"
                name="venueId"
                autoFocus
                value={venueId}
                onChange={(e) => setVenueId(e.target.value)}
              />
              <TextField
                margin="normal"
                fullWidth
                name="spaceId"
                label="Space Id"
                id="spaceId"
                value={spaceId}
                onChange={(e) => setSpaceId(e.target.value)}
              />
              <FormGroup
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "left",
                  justifyContent: "left",
                }}
              >
                <FormControlLabel
                  control={
                    <Checkbox
                      inputProps={{ "aria-label": "controlled" }}
                      checked={showBackground}
                      onChange={(e) => setShowBackground(e.target.checked)}
                    />
                  }
                  label="Show Background"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      inputProps={{ "aria-label": "controlled" }}
                      checked={showUI}
                      onChange={(e) => setShowUI(e.target.checked)}
                    />
                  }
                  label="Show UI"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      inputProps={{ "aria-label": "controlled" }}
                      checked={showReaction}
                      onChange={(e) => setShowReaction(e.target.checked)}
                    />
                  }
                  label="Show Reaction"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      inputProps={{ "aria-label": "controlled" }}
                      checked={showHands}
                      onChange={(e) => setShowHands(e.target.checked)}
                    />
                  }
                  label="Show Hands"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      inputProps={{ "aria-label": "controlled" }}
                      checked={showSpeakers}
                      onChange={(e) => setShowSpeakers(e.target.checked)}
                    />
                  }
                  label="Show Speakers"
                />
              </FormGroup>
              <br />
              <FormControl>
                <InputLabel>Show Stage</InputLabel>
                <Select
                  value={showStage}
                  label="Show Stage"
                  onChange={(e) => setShowStage(e.target.value)}
                >
                  <MenuItem value="regular">Regular</MenuItem>
                  <MenuItem value="theater">Theater</MenuItem>
                  <MenuItem value="none">None</MenuItem>
                </Select>
              </FormControl>
              <TextField
                margin="normal"
                fullWidth
                id="maxNodes"
                label="max Nodes"
                name="maxNodes"
                autoFocus
                value={maxNodes === "null" ? "" : maxNodes}
                onChange={(e) => {
                  if (e.target.value === "") {
                    setMaxNodes("null");
                  } else {
                    setMaxNodes(e.target.value);
                  }
                }}
              />
            </FormControl>
          </Box>
        </Container>
      </form>
    </>
  );
}

export default CustomForm;
