import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ArtistModel} from "./ArtistModel";
import AddArtistForm from "../AddArtistForm";
import ArtistCard from "./ArtistCard";

export default function AllArtists() {
    const [artistList, setArtistList] = useState<ArtistModel[]>();

    const getArtists = () => {
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
        getArtists();
    }, [])

    return (
        <div>
            <AddArtistForm fetchAll={getArtists}/>
            <div>
                <h2>Artists List:</h2>
            </div>
            <div className="list">
                {artistList
                    ?.map((artist) =>
                        <ArtistCard artistCard={artist} key={artist.id}/>
                    )
                }
            </div>
        </div>
    )
}



