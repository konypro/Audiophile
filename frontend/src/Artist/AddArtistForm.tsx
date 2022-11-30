import {useState} from "react";
import axios from "axios";

type AddArtistForm = {
    fetchAll: () => void;
}

export default function AddArtistForm(props: AddArtistForm) {
    const [firstName, setfirstName] = useState<String>('')
    const [lastName, setLastName] = useState<String>('')


    const addNewArtist = () => {
        axios.post("/api/artists", {
            firstName: firstName,
            lastName: lastName
        })
            .catch((error) => console.log("POST Error: " + error))

    }
    return (
        <div id={"name"}>
            <div>
                <p>First Name:</p>
                <input type={"text"} onChange={(event) => setfirstName(event.target.value)} placeholder={"Ozzy"}/>
            </div>
            <div>
                <p>Last Name:</p>
                <input type={"text"} onChange={(event) => setLastName(event.target.value)} placeholder={"Osbourne"}/>
            </div>
            <button type={"submit"} onClick={addNewArtist}>SAVE</button>

        </div>)

}