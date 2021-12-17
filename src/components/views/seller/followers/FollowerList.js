import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Row, Col, ListGroup, CardGroup, Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

function FollowerList() {
    let [followers, setFollowers] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios.get('http://localhost:8080/api/v1/sellers/followers', {
            headers: {
                Authorization: "Bearer "+token
            }
        }).then(res => {
            setFollowers(res.data);
            console.log(res.data);
        }).catch((error) => {
            console.log(error);
        })
    }, [])
    return (
        <Container>
            <Row className="g-4">
                <Col>
                    <CardGroup className="d-flex flex-wrap flex-fill justify-content-start">
                        {followers.length > 0 ? (followers.map(follower =>
                            <Card className="m-4 b-2" style={{ minWidth: '20rem' }}>
                                <Card.Body>
                                    <Card.Title>Name: {`${follower.firstName} ${follower.lastName}`}</Card.Title>
                                    <ListGroup variant="flush">
                                        <ListGroup.Item></ListGroup.Item>
                                        {/*<ListGroup.Item>Date: { new Date(order.dateCreated).toISOString().substring(0, 10) }</ListGroup.Item>*/}
                                    </ListGroup>
                                </Card.Body>
                            </Card>)
                        ):(
                            <div className={"text-center"}>You have no followers</div>
                            )
                    }
                    </CardGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default FollowerList;