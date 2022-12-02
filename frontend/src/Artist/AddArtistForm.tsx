import {useState} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

type AddArtistFormProps = {
    fetchAll: () => void;
}

export default function AddArtistForm(props: AddArtistFormProps) {
    const [firstName, setFirstName] = useState<String>('')
    const [lastName, setLastName] = useState<String>('')


    const addNewArtist = () => {
        axios.post("/api/artists", {
            firstName: firstName,
            lastName: lastName
        })
            .catch((error) => console.log("POST Error: " + error))
            .then(props.fetchAll)

    }
    return (
        <div id={"name"}>

            <InputGroup className="mb-3">
                <InputGroup.Text>First and Last Name</InputGroup.Text>
                <Form.Control type={"text"} onChange={(event) => setFirstName(event.target.value)}
                              placeholder={"Ozzy"}/>
                <Form.Control type={"text"} onChange={(event) => setLastName(event.target.value)}
                              placeholder={"Osbourne"}/>
            </InputGroup>
            <Button size="lg" variant="light" type={"submit"} onClick={addNewArtist}>Add new card</Button>


        </div>)

}