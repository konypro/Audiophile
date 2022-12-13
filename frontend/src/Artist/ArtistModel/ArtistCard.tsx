import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import React, {useState} from 'react';
import {ArtistModel} from "./ArtistModel";
import UpdateForm from "./UpdateForm";
import axios from "axios";
import {GoTrashcan} from "react-icons/go";
import Table from 'react-bootstrap/Table';

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
            <Card.Header>Artist</Card.Header>
            <Card.Body>
                <Card.Title>
                    <Table striped bordered hover>
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>{props.artistCard.firstName + "  " + props.artistCard.lastName}</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>official</td>
                            <td><Card.Link href={props.artistCard.url}>{props.artistCard.url}</Card.Link></td>
                        </tr>
                        </tbody>
                    </Table>
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