import {useState} from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Alert from 'react-bootstrap/Alert';
import {AiFillFolderAdd} from "react-icons/ai";
import {FaRegWindowClose} from "react-icons/fa";

type AddArtistFormProps = {
    fetchAll: () => void;
}

export default function AddArtistForm(props: AddArtistFormProps) {
    const [firstName, setFirstName] = useState<String>('')
    const [lastName, setLastName] = useState<String>('')
    const [showAlert, setShowAlert] = useState<boolean>(false);
    const addNewArtist = () => {
        if (firstName === "" || lastName === "") {
            setShowAlert(true)
        } else {
            axios.post("/api/artists", {
                firstName: firstName,
                lastName: lastName
            })
                .catch((error) => console.log("POST Error: " + error))
                .then(props.fetchAll)

        }
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
            <Button size="lg" variant="light" type={"submit"} onClick={addNewArtist}><AiFillFolderAdd/></Button>
            <Alert show={showAlert} variant="danger">

                <Alert.Heading bsPrefix='alert-heading'>ERROR</Alert.Heading>

                <p>pleas, fill the first and last name </p>
                <Button onClick={() => setShowAlert(false)} variant="light">
                    <FaRegWindowClose/>
                </Button>
                <div className="d-flex justify-content-end">

                </div>
            </Alert>

        </div>)

}