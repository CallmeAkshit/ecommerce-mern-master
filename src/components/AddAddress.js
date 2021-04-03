import { Accordion, Card, Breadcrumb } from 'react-bootstrap';

import React, { Component } from 'react';

class addAddress extends Component {
    state = {
    };

    handleChange = (event) => {
        console.log('Changing value');
        this.setState({[event.target.name]: event.target.value});
        console.log(this.state);
    }
    
    submitAddress = () => {
        console.log(this.state);
        const { firstName, Mobile, Pincode, houseNo, Locality, City, State} = this.state;
        const request = new Request('/users/me', 
        {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json',
                "Access-Control-Allow-Origin" : "*", 
                "Access-Control-Allow-Credentials" : true 
            }),
            body: JSON.stringify({
                "firstName": firstName,
                "Mobile": Mobile,
                "address":
                {
                    "Pincode": Pincode,
                    "houseNo":houseNo,
                    "Locality": Locality,
                    "City":City,
                    "State": State

                }
                
            })
        });
        fetch(request).then(res => res.json()).then(json => console.log(json));
          
    };

    render() {
        return (
            <div>
                <Breadcrumb ClassName="breadcrumb">
                    <Breadcrumb.Item href="/checkout">Home</Breadcrumb.Item>
                    <Breadcrumb.Item href="/address" active>
                        {' '}
                        Add Address
                    </Breadcrumb.Item>
                    <Breadcrumb.Item href="/payment">Payment</Breadcrumb.Item>
                </Breadcrumb>
                <div className="content">
                    <Accordion defaultActiveKey="0" className="accordion">
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="0">
                                Contact Details
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    <form action="/action_page.php">
                                        <label for="lname">Name:</label>
                                        <input type="text" id="fname" name="fullName" value={this.state.firstName} onChange={this.handleChange}/>
                                        <br />
                                        <br />
                                        <label for="lname">Mobile Number:</label>
                                        <input type="number" id="lname" name="Mobile" value={this.state.Mobile} onChange={this.handleChange} />
                                        <br />
                                        <br />
                                    </form>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                        <Card>
                            <Accordion.Toggle as={Card.Header} eventKey="1">
                                Address
                            </Accordion.Toggle>
                            <Accordion.Collapse eventKey="1">
                                <Card.Body>
                                    <form action="/action_page.php">
                                        <label for="lname">Pincode:</label>
                                        <input type="number" id="fname" name="Pincode" value={this.state.Pincode} onChange={this.handleChange} />
                                        <br />
                                        <br />
                                        <label for="lname">House No:</label>
                                        <input type="text" id="lname" name="houseNo" value={this.state.houseNo} onChange={this.handleChange}/>
                                        <br />
                                        <br />
                                        <label for="lname">Locality/Town:</label>
                                        <input type="text" id="lname" name="Locality" value={this.state.Locality} onChange={this.handleChange}/>
                                        <br />
                                        <br />
                                        <label for="lname">City:</label>
                                        <input type="text" id="lname" name="City" value={this.state.City} onChange={this.handleChange}/>
                                        <br />
                                        <br />
                                        <label for="lname">State:</label>
                                        <input type="text" id="lname" name="State" value={this.state.State} onChange={this.handleChange}/>
                                        <br />
                                        <br />
                                        <button type="submit" onClick={this.submitAddress}>
                                            Add Address
                                        </button>
                                    </form>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                </div>
            </div>
        );
        
    }
}

export default addAddress;
