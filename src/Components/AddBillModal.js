import React from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap"
import { Button } from "reactstrap"

class AddBillModal extends React.Component {
  addBillData = () => {
    const data = {
      description: document.getElementById("description").value || "",
      category: document.getElementById("category").value || "",
      amount: document.getElementById("amount").value || "",
      date: document.getElementById("date").value || "",
    }
    this.props.setAddBillForm(data)
    this.props.toggleAddBill()
  }

  render() {
    const toggle = this.props.toggleAddBill
    const modal = true
    return (
      <div className="modal-wrap" ref={(el) => {this.modal = el}}>
        <Modal isOpen={modal} toggle={toggle} className={"className"}>
          <ModalHeader toggle={toggle}>Add new bill</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input type="text" name="description" id="description" placeholder="" />
              </FormGroup>
              <FormGroup>
                <Label for="category">Select A Category</Label>
                <Input type="select" name="category" id="category">
                  {this.props.billCategories.map(data => <option>{data}</option>)}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="amount">Amount (₹)</Label>
                <Input type="text" name="amount" id="amount" placeholder="" />
              </FormGroup>
              <FormGroup>
                <Label for="date">Date</Label>
                <Input type="text" name="date" id="date" placeholder="MM-DD-YYYY"/>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addBillData}>Add</Button>{' '}
            <Button color="secondary" onClick={toggle}>Discard</Button>
          </ModalFooter>
        </Modal>

      </div>
    )
  }
}

export default AddBillModal