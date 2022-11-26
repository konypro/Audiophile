import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ArtistModel} from "./ArtistModel";

export default function AllArtists() {
    const [artistList, setArtistList] = useState<ArtistModel[]>();

    const getArtist = () => {
        axios.get("/api/artists")
            .then((response) => {
                return response.data
            })
            .catch((error) => {
                console.log('[Axios Error] => :', error)
            })
            .then(data => setArtistList(data))
    }
    useEffect(() => {
        getArtist();
    }, [])

    return (
        <body>
        <div>
            <h2>Artists List:</h2>

            <menu>
                {artistList
                    ?.map((artist) =>
                        <button className={artist.id}>
                            <p>{artist.firstName}</p>
                            <p>{artist.lastName}</p>
                        </button>
                    )
                }
            </menu>
        </div>
        </body>
    )
}



