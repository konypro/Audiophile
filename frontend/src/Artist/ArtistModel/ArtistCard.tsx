import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import React, {useState} from 'react';
import {ArtistModel} from "./ArtistModel";
import UpdateForm from "./UpdateForm";
import axios from "axios";
import {GoTrashcan} from "react-icons/go";

type props = {
    artistCard: ArtistModel,
    fetchAll: () => void,
}


function ArtistCard(props: props) {
    const [edit, setEdit] = useState<boolean>(false)
    const deleteArtist = () => {
        axios.delete("/api/artists/" + props.artistCard.id)
            .catch((error) => console.log("POST Error: " + error))
            .then(props.fetchAll)

    }
    return (
        <Card border="dark" style={{width: '22rem'}}>
            <Card.Header>
                <Nav justify variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Artist</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>
                    <ul>
                        <li> {props.artistCard.firstName + "  " + props.artistCard.lastName}</li>
                        <br/>
                        <li><a href={props.artistCard.url}> {props.artistCard.url}</a></li>
                    </ul>
                </Card.Title>
                {edit && <UpdateForm artist={props.artistCard} deleteArtist={deleteArtist} setEdit={setEdit}
                                     fetchAll={props.fetchAll}/>}
                {!edit && <Button onClick={() => setEdit(true)} variant="light">Edit</Button>}
                {!edit && <Button onClick={deleteArtist} variant="light"><GoTrashcan/></Button>}


            </Card.Body>

        </Card>

    );
}

export default ArtistCard;