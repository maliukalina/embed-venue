import React, { useContext } from "react";
import { VenueContext } from "../App";

function Embed() {
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

  let baseUrl = "";
  console.log(env);
  env === "dev"
    ? (baseUrl = "https://dev.venues.vimeows.com")
    : (baseUrl = "https://venues.vimeo.com");

  if (venueId === "") return;

  let spacer = spaceId === "" ? "" : "/";

  let url = `${baseUrl}/embed/${venueId}${spacer}${spaceId}?showBackground=${showBackground}&showUI=${showUI}&showReaction=${showReaction}&showHands=${showHands}&showSpeakers=${showSpeakers}&showStage=${showStage}&maxNodes=${maxNodes}`;

  console.log({ url });

  return (
    <iframe
      src={url}
      allow="camera;microphone"
      frameBorder="0"
      width="100%"
      height="750px"
    ></iframe>
  );
}

export default Embed;
