import {useState} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {ArtistModel} from "./ArtistModel";

type UpdateFormProps = {
    artist: ArtistModel,
    fetchAll: () => void
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

        </div>)

}