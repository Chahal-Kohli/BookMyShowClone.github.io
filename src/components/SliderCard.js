import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Carousel from 'react-bootstrap/Carousel';
function SliderCard() {
    return (
        <div style={{ width: "85%", textAlign: "center", justifyContent: "center", margin: "auto", background: "grey", padding: "2%", color: "white" }}>
            <h2>abc heading</h2>
            <Carousel >
                <Carousel.Item>
                    <CardGroup>
                        <Card style={{ padding: "10px", margin: "10px", background: "black" }}>
                            <Card.Img variant="top" src="./logo192.png" tyle={{ height: "15px" }} />
                            <Card.Body>
                                <Card.Title>Indira Gandhi Delhi Technical University for Women</Card.Title>
                                <Card.Text>
                                    Sky is the limit...............................................
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card style={{ padding: "10px", margin: "10px", background: "black" }}>
                            <Card.Img variant="top" src="./logo192.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to
                                    additional content.{' '}
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card style={{ padding: "10px", margin: "10px", background: "black" }}>
                            <Card.Img variant="top" src="./logo192.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </CardGroup>
                </Carousel.Item>
                <Carousel.Item>
                    <CardGroup>
                        <Card style={{ padding: "10px", margin: "10px", background: "black" }}>
                            <Card.Img variant="top" src="./logo192.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card style={{ padding: "10px", margin: "10px", background: "black" }}>
                            <Card.Img variant="top" src="./logo192.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This card has supporting text below as a natural lead-in to
                                    additional content.{' '}
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <Card style={{ padding: "10px", margin: "10px", background: "black" }}>
                            <Card.Img variant="top" src="./logo192.png" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This card has even longer content than the
                                    first to show that equal height action.
                                </Card.Text>
                            </Card.Body>

                        </Card>
                    </CardGroup>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default SliderCard;