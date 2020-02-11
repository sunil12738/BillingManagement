import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, CardBody, CardText, CardTitle, Form, Button, Input } from 'reactstrap';

class BillsList extends React.Component {
    state = {
    }

    render() {
        return (
            <div className="bills-list p-5">
                <h5 className="text-center">You have the following bills</h5>
                <div className="cards-wrap">
                    {this.props.billInitData.map(data => (
                        <div className={`card-wrap ${this.props.billsCanBePaid.indexOf(data.id) >= 0 ? "border-card" : ""}`}>
                            <BillCard
                                data={data}
                                deleteBill={this.props.deleteBill}
                                editBill={this.props.editBill}
                            />
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default BillsList;

const BillCard = ({ data, deleteBill, editBill }) => {
    return (
        <Card>
            <CardBody>
                <CardTitle>{data.description}</CardTitle>
                <CardText>
                    Id: {data.id}<br/>
                    Category: {data.category}<br/>
                    Amount: {data.amount}<br/>
                    Date: {data.date}
                </CardText>
                <Button
                    outline
                    color="primary"
                    onClick={() => deleteBill(data.id)}
                    className="float-right"
                >Delete</Button>
                <Button
                    color="primary"
                    onClick={() => editBill(data.id)}
                    className="float-right mr-1"
                >Edit</Button>
            </CardBody>
        </Card>
    )
}