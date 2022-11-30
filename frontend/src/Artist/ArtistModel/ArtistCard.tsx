import React from 'react';
import {ArtistModel} from "./ArtistModel";
type props ={artistCard: ArtistModel}
function ArtistCard(props: props) {
    return (
        <div>
            <p>{props.artistCard.firstName}</p>
            <p>{props.artistCard.lastName}</p>
        </div>
    );
}

export default ArtistCard;