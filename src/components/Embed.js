import React, { useContext } from "react";
import { VenueContext } from "../App";

function Embed() {
  const {
    env,
    spaceId,
    venueId,
    showUI,
    showReaction,
    showBackground,
    showHands,
    showSpeakers,
    showStage,
    maxNodes,
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
      title="venue"
    ></iframe>
  );
}

export default Embed;
