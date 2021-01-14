import React from 'react';
import Layout from '../../components/Layout';
import { Container, Form, Button, Row, Col } from 'react-bootstrap';
import Input from '../../components/UI/Input';

/**
* @author
* @function Signup
**/

const Signup = (props) => {
  return(
    <Layout>
      <Container>
        <Row style={{marginTop:'50px'}}>
          <Col md={{span:6, offset:3}}>
            <Form>

              <Row>
                <Col md={6}>
                  <Input 
                    label="First Name"
                    type="text"
                    placeholder="First Name"
                    value=""
                    onChange = {()=>{}}
                  />
                </Col>
                <Col md={6}>
                <Input 
                    label="Last Name"
                    type="text"
                    placeholder="Last Name"
                    value=""
                    onChange = {()=>{}}
                  />
                </Col>
              </Row>

              <Input 
                    label="Email Address"
                    type="email"
                    placeholder="Enter email"
                    errorMessage="We'll never share your emali with anyone else"
                    value=""
                    onChange = {()=>{}}
              />

              <Input 
                  label="Password"
                  type="password"
                  placeholder="Password"
                  value=""
                  onChange = {()=>{}}
              />

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

export default Signup