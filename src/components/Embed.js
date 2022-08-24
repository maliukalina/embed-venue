import React from "react";

function Embed ({venue}) {

  let url = ""
  if (!venue) return
  console.log(venue.spaceId)
  if (venue.spaceId) {
   url = `https://dev.venues.vimeows.com/embed/${venue.venueId}/${venue.spaceId}?showBackground=${venue.showBackground}&showUI=${venue.showUI}&showReaction=${venue.showReaction}&showHands=${venue.showHands}&showSpeakers=${venue.showSpeakers}&showStage=${venue.showStage}&maxNodes=${venue.maxNodes}`

  } else {
    url = `https://dev.venues.vimeows.com/embed/${venue.venueId}?showBackground=${venue.showBackground}&showUI=${venue.showUI}&showReaction=${venue.showReaction}&showHands=${venue.showHands}&showSpeakers=${venue.showSpeakers}&showStage=${venue.showStage}&maxNodes=${venue.maxNodes}`
  }
   console.log({url})

  return(
    <iframe src={url}
          allow="camera;microphone" frameBorder="0" width= "100%" height="750px">
          </iframe>
  )
}

export default Embed;