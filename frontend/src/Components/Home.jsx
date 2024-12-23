import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Carousel from "react-bootstrap/Carousel";
import photo from "./CarouselImage/photo.jpg";
import photo2 from "./CarouselImage/photo2.jpg";
import photo3 from "./CarouselImage/photo3.jpg";
import "./Home.css";
import pizza from "./CarouselImage/pizza.jpg";
import burger from "./CarouselImage/burger.jpg";
import paneer from "./CarouselImage/paneer.jpg";
import glasses from "./CarouselImage/glasses.jpg";
import icecream from "./CarouselImage/icecream.jpg";
import beef from "./CarouselImage/beef.jpg";
import pasta from "./CarouselImage/pasta.jpg";
import momo from "./CarouselImage/momos.jpg";
import { Lastdiv } from "./Lastdiv";
import CustomNavbar from "./CustomNavbar";
import Footer from "./Footer";
const Home = () => {
    return (
        <div>
            <CustomNavbar />
            <Carousel fade controls={false} interval={1000}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo}
                        alt="First slide"
                        style={{ height: "600px", objectFit: "cover" }}
                    />
                    <Carousel.Caption className="custom-caption">
                        <h2>Tasty Bites & Healthy Foods</h2>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <Button variant="success">Order Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo2}
                        alt="Second slide"
                        style={{ height: "600px", objectFit: "cover" }}
                    />
                    <Carousel.Caption className="custom-caption">
                        <h2>Healthy Hot & Spicy Thai Foods</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <Button variant="success">Order Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={photo3}
                        alt="Third slide"
                        style={{ height: "600px", objectFit: "cover" }}
                    />
                    <Carousel.Caption className="custom-caption" style={{
                        marginLeft: "1px "
                    }}>
                        <h3 className="abcd">Mega Discounts on</h3>
                        <h2>Exquisite Blend of Flavours</h2>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        <Button variant="success">Order Now</Button>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <div className="background-container">
                <div className="background-overlay"></div>
                <div className="textportion">
                    <div style={{ paddingRight: "30px" }}>
                        <h6>Popular Dishes Of</h6>
                        <h2>Our Restaurant</h2>
                    </div>
                    <div>
                        <p>Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Porttitor massa id neque aliquam vestibulum morbi blandit cursus risus. Orci ac auctor augue mauris augue neque gravida in Aliquam.</p>
                    </div>
                </div>
                <div className="carousel-container">
                    <Carousel controls={false} interval={200} style={{ zIndex: '2' }}>
                        <Carousel.Item>
                            <div className="card-container">
                                <Card className="card2">
                                    <Card.Img variant="top" src={pizza} />
                                    <div className="text2">
                                        <h1>Pizza</h1>
                                        <Button variant="success">Order Now</Button>
                                    </div>
                                </Card>
                                <Card className="card2">
                                    <Card.Img variant="top" src={burger} />
                                    <div className="text2">
                                        <h1>Burger</h1>
                                        <Button variant="success">Order Now</Button>
                                    </div>
                                </Card>
                                <Card className="card2">
                                    <Card.Img variant="top" src={momo} />
                                    <div className="text2">
                                        <h1>Momos</h1>
                                        <Button variant="success">Order Now</Button>
                                    </div>
                                </Card>
                                <Card className="card2">
                                    <Card.Img variant="top" src={icecream} />
                                    <div className="text2">
                                        <h1>Ice-Cream</h1>
                                        <Button variant="success">Order Now</Button>
                                    </div>
                                </Card>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="card-container">
                                <Card className="card2">
                                    <Card.Img variant="top" src={beef} />
                                    <div className="text2">
                                        <h1>Beef</h1>
                                        <Button variant="success">Order Now</Button>
                                    </div>
                                </Card>
                                <Card className="card2">
                                    <Card.Img variant="top" src={pasta} />
                                    <div className="text2">
                                        <h1>Pasta</h1>
                                        <Button variant="success">Order Now</Button>
                                    </div>
                                </Card>
                                <Card className="card2">
                                    <Card.Img variant="top" src={paneer} />
                                    <div className="text2">
                                        <h1>Paneer</h1>
                                        <Button variant="success">Order Now</Button>
                                    </div>
                                </Card>
                                <Card className="card2">
                                    <Card.Img variant="top" src={glasses} />
                                    <div className="text2">
                                        <h1>Mocktails</h1>
                                        <Button variant="success">Order Now</Button>
                                    </div>
                                </Card>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div >


            <Lastdiv />

            <Footer />

        </div>
    );
};

export default Home;
