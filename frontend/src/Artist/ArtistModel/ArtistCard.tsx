import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import React, {useState} from 'react';
import {ArtistModel} from "./ArtistModel";
import UpdateForm from "./UpdateForm";

type props = { artistCard: ArtistModel, fetchAll: () => void }


function ArtistCard(props: props) {
    const [edit, setEdit] = useState<boolean>(false)
    return (
        <Card border="dark" style={{width: '18rem'}}>
            <Card.Header>
                <Nav variant="tabs" defaultActiveKey="#first">
                    <Nav.Item>
                        <Nav.Link href="#first">Artist</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#link">Link</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="link-1">PlayList</Nav.Link>
                    </Nav.Item>
                </Nav>
            </Card.Header>
            <Card.Body>
                <Card.Title>{props.artistCard.firstName + " " + props.artistCard.lastName}</Card.Title>
                {edit && <UpdateForm artist={props.artistCard} fetchAll={props.fetchAll}/>}
                <Button onClick={() => setEdit(!edit)} variant="light">Edit</Button>
            </Card.Body>
        </Card>
        // <p>{props.artistCard.firstName}</p>
        //<p>{props.artistCard.lastName}</p>
        //</div>
    );
}

export default ArtistCard;