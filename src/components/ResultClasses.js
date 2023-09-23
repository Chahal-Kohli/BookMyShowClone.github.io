import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
function ResultClasses() {
    return (
        <div style={{ width: "85%", textAlign: "center", justifyContent: "center", margin: "auto", background: "grey", padding: "1.5%", color: "white" }}>
            <h2>Classes</h2>
            <CardGroup>
                <Card onClick={() => window.location.href = "/results"} className="bg-dark text-white" style={{ margin: "1%" }}>
                    <Card.Img src="./logo192.png" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white" style={{ margin: "1%" }}>
                    <Card.Img src="./logo192.png" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
                <Card className="bg-dark text-white" style={{ margin: "1%" }}>
                    <Card.Img src="./logo192.png" alt="Card image" />
                    <Card.ImgOverlay>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                    </Card.ImgOverlay>
                </Card>
            </CardGroup>

        </div>
    );
}

export default ResultClasses;