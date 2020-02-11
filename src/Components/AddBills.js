import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Label, Input } from 'reactstrap';


function AddBill(props) {
  return (
    <div className="add-bill-wrap d-flex justify-content-around p-3 align-items-center">
      <div>
        <Button color="primary" onClick={props.toggleAddBill}>Add New Bill</Button>
      </div>
      <div>
        <Label for="select">Select a category to filter bills</Label>
        <Input
          type="select"
          name="select"
          id="select"
          onClick={(e) => { props.setFilterCategory(e) }}
        >
          <option selected>All</option>
          {props.billCategories.map(data => <option>{data}</option>)}
        </Input>

      </div>
      <div>
        <Button color="primary" onClick={props.toggleChart}>Show Chart</Button>
      </div>
      <div className="">
        <Label for="budget">Enter budget to know which bills can be paid</Label>
        <div className="d-flex">
        <Input type="text" name="budget" id="budget" placeholder="Enter Amount" />
        <Button color="primary" onClick={props.calculateBillsToPay}>Calculate</Button>

        </div>
      </div>
    </div>
  );
}

export default AddBill;
