import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import React from 'react';
import {ArtistModel} from "./ArtistModel";

type props = { artistCard: ArtistModel }

function ArtistCard(props: props) {
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

                <Button variant="light">Delete</Button>
            </Card.Body>
        </Card>
        // <p>{props.artistCard.firstName}</p>
        //<p>{props.artistCard.lastName}</p>
        //</div>
    );
}

export default ArtistCard;