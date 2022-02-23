import React,{useState, useEffect} from 'react';
import axios from "axios";
import {useNavigate} from 'react-router-dom'
import {Button, Card, Container, Row, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

    const navigate = useNavigate();

    const [categories, setCategories] = useState([]);
    useEffect(()=>{
        axios('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(({data})=> setCategories(data.categories))
    },[]);

    return (
        <>
                <Row>
                    {categories.map((item)=>(
                        <Col md={4} sm={6} xs={12} key={item.id}>
                            <Card >
                                <Card.Img variant="top" src={`${item.strCategoryThumb}`} />
                                <Card.Body>
                                    <Card.Title>{item.strCategory}</Card.Title>
                                    <Card.Text>
                                        {item.strCategoryDescription }
                                    </Card.Text>
                                    <Button variant="primary" type='button' onClick={()=> navigate(`category/${item.strCategory.toLowerCase()}`)}>Go over</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
        </>
    );
};

export default Home;