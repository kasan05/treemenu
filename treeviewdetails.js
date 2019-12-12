import React from 'react';
import {Card,Form,Button,Row,Col} from 'react-bootstrap';
import ReactTable from 'react-table';

class TreeViewDetails extends React.Component{

    
    render(){

        const {modalObj} = this.props;

        return(
                <div className="container">
            {this.props.selectedOption}
            <Card>
                <Card.Header>Modal Details</Card.Header>
                <Card.Body>
                <Form>
                <Row>
                    <Col md={6}>
                    <Form.Group as={Row} controlId="modelid">
                        <Form.Label column md={4}>
                       Model Id
                        </Form.Label>
                        <Col md={8}>
                        <Form.Control plaintext readOnly value={modalObj.modelId}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="name">
                        <Form.Label column md={4}>
                        Name
                        </Form.Label>
                        <Col md={8}>
                        <Form.Control plaintext readOnly value={modalObj.name}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="category">
                        <Form.Label column md={4}>
                        Category
                        </Form.Label>
                        <Col md={8}>
                        <Form.Control plaintext readOnly value={modalObj.modelCategory}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="modelInst">
                        <Form.Label column md={4}>
                        model Inst
                        </Form.Label>
                        <Col md={8}>
                        <Form.Control plaintext readOnly value={modalObj.modelInst}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="modelFormula">
                        <Form.Label column md={4}>
                        model Formula
                        </Form.Label>
                        <Col md={8}>
                        <Form.Control plaintext readOnly value={modalObj.modelFormula}/>
                        </Col>
                    </Form.Group>
                    </Col>
                    <Col md={6}>
                    <Form.Group as={Row} controlId="description">
                        <Form.Label column md={4}>
                        Model Description
                        </Form.Label>
                        <Col md={8}>
                        <Form.Control plaintext readOnly value={modalObj.modelDescription}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="modelType">
                        <Form.Label column md={4}>
                       Model Type
                        </Form.Label>
                        <Col md={8}>
                        <Form.Control plaintext readOnly value={modalObj.modelType}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="modelSegId">
                        <Form.Label column md={4}>
                       Model SegId
                        </Form.Label>
                        <Col md={8}>
                        <Form.Control plaintext readOnly value={modalObj.modelSegld}/>
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="modelFormula1">
                        <Form.Label column md={4}>
                       Model Formula1
                        </Form.Label>
                        <Col md={8}>
                        <Form.Control plaintext readOnly value={modalObj.modelFormula1}/>
                        </Col>
                    </Form.Group>
                    </Col>
                </Row>
                </Form>
                </Card.Body>
                </Card>
               
            </div>



        );
    }


}


export default TreeViewDetails;