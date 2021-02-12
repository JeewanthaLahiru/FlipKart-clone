import React from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import { login } from '../../actions';
import { useDispatch } from 'react-redux';

/**
* @author
* @function Signin
**/

const Signin = (props) => {

  const dispatch = useDispatch();

  const userLogin = ( e ) =>{
    e.preventDefault();
    const user = {
      email:"jeewantha@gmail.com",
      password:'123456'
    }

    dispatch(login(user));
  }

  return (
    <Layout>
      <Container>
        <Row style={{marginTop:'50px'}}>
          <Col md={{span:6, offset:3}}>
            <Form onSubmit={userLogin}>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>

      </Container>
    </Layout>
  )

}

export default Signin