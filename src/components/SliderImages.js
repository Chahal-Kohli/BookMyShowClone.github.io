import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
function SliderImages() {
    return (
        <Carousel >
            <Carousel.Item>
                <img
                    className="d-block w-45"
                    // src="https://admissionadvice.in/wp-content/uploads/2020/11/IGDTUW-Delhi-Admission.jpg"
                    src="./logo192.png"
                    alt="First slide"
                />
                <Carousel.Caption style={{ color: "black" }}>
                    <h3>First slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-45"
                    src="./logo192.png"
                    alt="Second slide"
                />

                <Carousel.Caption style={{ color: "black" }}>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-45"
                    src="./logo192.png"
                    alt="Third slide"
                />

                <Carousel.Caption style={{ color: "black" }}>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default SliderImages;
