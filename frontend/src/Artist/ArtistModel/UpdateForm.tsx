import React, {Dispatch, SetStateAction, useState} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {ArtistModel} from "./ArtistModel";
import {RiArrowGoBackFill} from "react-icons/ri";
import {GoTrashcan} from "react-icons/go";

type UpdateFormProps = {
    deleteArtist: () => void,
    artist: ArtistModel,
    fetchAll: () => void,
    setEdit: Dispatch<SetStateAction<boolean>>
}

export default function UpdateForm(props: UpdateFormProps) {
    const [firstName, setfirstName] = useState<String>(props.artist.firstName)
    const [lastName, setlastName] = useState<String>(props.artist.lastName)
    const updateNewArtist = () => {
        axios.put("/api/artists/" + props.artist.id, {
            firstName: firstName,
            lastName: lastName,
            id: props.artist.id
        })
            .catch((error) => console.log("UPDATE Error: " + error))
            .then(props.fetchAll)

    }
    return (
        <div id={"name"}>

            <InputGroup size="sm" className="mb-3">
                <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" type={"text"}
                              onChange={(event) => setfirstName(event.target.value)}
                              placeholder={"first"}/>
                <Form.Control aria-label="Small" aria-describedby="inputGroup-sizing-sm" type={"text"}
                              onChange={(event) => setlastName(event.target.value)}
                              placeholder={"last name"}/>
            </InputGroup>
            <Button variant="light" type={"submit"} onClick={updateNewArtist}>Save</Button>
            <Button onClick={() => props.setEdit(false)} variant="light"> <RiArrowGoBackFill/> </Button>
            <Button onClick={props.deleteArtist} variant="light"><GoTrashcan/></Button>

        </div>)

}