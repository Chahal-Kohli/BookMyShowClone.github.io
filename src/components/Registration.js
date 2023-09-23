import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';
function Registration() {
    const [Username, setUserName] = useState("");
    const [EmailId, setEmailId] = useState("");
    const [Passwordd, setPasswordd] = useState("");

    // console.log(Username, EmailId, Passwordd);
    function clearInput() {
        setUserName("");
        setEmailId("");
        setPasswordd("");
    }
    async function UserPost() {
        const UserDetails = {//variable names should be same as given in users.js schema
            "UserName": Username,
            "EmailId": EmailId,
            "Password": Passwordd
        }
        // console.log(UserDetails);
        await axios.post('http://localhost:5000/register', UserDetails);
        swal({
            title: "Submission Succesful",
            text: "Form Submitted Succesfully!",
            icon: "success",
            button: "Ok",
        });
        clearInput();

    }
    return (
        <div>
            <Container style={{ padding: "3%", margin: "1%" }}>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicUserName">
                        <Form.Label>User Name</Form.Label>
                        <Form.Control value={Username} onChange={(e) => setUserName(e.target.value)} type="text" placeholder="Write your username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control value={EmailId} onChange={(e) => setEmailId(e.target.value)} type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={Passwordd} onChange={(e) => setPasswordd(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" onClick={UserPost}>
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    );
}
export default Registration;