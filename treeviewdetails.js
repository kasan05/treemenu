import React from 'react';
import {Card,CardBody,CardHeader,Form,Row,Col,FormGroup,Label} from 'reactstrap';

class TreeViewDetails extends React.Component{

    
    render(){

        const {modalObj} = this.props;

        return(
                <div className="container">
            {this.props.selectedOption}
            <Card>
                <CardHeader>Modal Details</CardHeader>
                <CardBody>
                <Form>
                <Row>
                    <Col md={6}>
                    <FormGroup as={Row} controlId="modelid">
                        <Label column md={4}>
                       Model Id
                        </Label>
                        <Col md={8}>
                       {modalObj.modelId}
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row} controlId="name">
                        <Label column md={4}>
                        Name
                        </Label>
                        <Col md={8}>
                        {modalObj.name}
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row} controlId="category">
                        <Label column md={4}>
                        Category
                        </Label>
                        <Col md={8}>
                        {modalObj.modelCategory}
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row} controlId="modelInst">
                        <Label column md={4}>
                        model Inst
                        </Label>
                        <Col md={8}>
                        {modalObj.modelInst}
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row} controlId="modelFormula">
                        <Label column md={4}>
                        model Formula
                        </Label>
                        <Col md={8}>
                        {modalObj.modelFormula}
                        </Col>
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup as={Row} controlId="description">
                        <Label column md={4}>
                        Model Description
                        </Label>
                        <Col md={8}>
                        {modalObj.modelDescription}
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row} controlId="modelType">
                        <Label column md={4}>
                       Model Type
                        </Label>
                        <Col md={8}>
                        {modalObj.modelType}
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row} controlId="modelSegId">
                        <Label column md={4}>
                       Model SegId
                        </Label>
                        <Col md={8}>
                       {modalObj.modelSegld}
                        </Col>
                    </FormGroup>
                    <FormGroup as={Row} controlId="modelFormula1">
                        <Label column md={4}>
                       Model Formula1
                        </Label>
                        <Col md={8}>
                       {modalObj.modelFormula1}
                        </Col>
                    </FormGroup>
                    </Col>
                </Row>
                </Form>
                </CardBody>
                </Card>
               
            </div>



        );
    }


}


export default TreeViewDetails;