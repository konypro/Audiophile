import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ArtistModel} from "./ArtistModel";
import styled from "styled-components";

export default function ArtistAdminGet() {
    const [artistList, setArtistList] = useState<ArtistModel[]>();

    const getArtist = () => {
        axios.get("/api/artist")
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
        <StyledSection>
            <h2>Arists:</h2>

            <StyledUl>
                {artistList
                    ?.map((artist) => <>
                        <p> {artist.firstName}  </p>
                        <p> {artist.lastName}  </p>
                    </>)

                }
            </StyledUl>
        </StyledSection>
    )
}

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10px;
  padding: 8px 20px 25px 20px;
  border: 1px solid rgba(10 10 10 0.3);
  border-radius: 1pc;
  box-shadow: 0 .0625rem .5rem 0 rgba(0, 0, 0, .4), 0 .0625rem .3125rem 0 rgba(0, 0, 0, .4);
`
const StyledUl = styled.ul`
  padding: 0;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
