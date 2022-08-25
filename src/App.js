import React, { useState, createContext } from "react";
import Embed from "./components/Embed";
import CustomForm from "./components/CustomForm";
import Box from "@mui/material/Box";

export const VenueContext = createContext();

function App() {
  const [env, setEnv] = useState("dev");
  const [spaceId, setSpaceId] = useState("");
  const [venueId, setVenueId] = useState("");
  const [showUI, setShowUI] = useState(true);
  const [showReaction, setShowReaction] = useState(false);
  const [showBackground, setShowBackground] = useState(true);
  const [showHands, setShowHands] = useState(true);
  const [showSpeakers, setShowSpeakers] = useState(true);
  const [showStage, setShowStage] = useState("");
  const [maxNodes, setMaxNodes] = useState("null");

  return (
    <VenueContext.Provider
      value={{
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
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignContent: "center",
          justifyContent: "space-between",
        }}
      >
        <Embed />
        <CustomForm />
      </Box>
    </VenueContext.Provider>
  );
}

export default App;
