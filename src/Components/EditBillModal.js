import React from "react"
import { Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from "reactstrap"
import { Button } from "reactstrap"

class AddBillModal extends React.Component {
  saveBillData = () => {
    const data = {
      description: document.getElementById("description").value || "",
      category: document.getElementById("category").value || "",
      amount: document.getElementById("amount").value || "",
      date: document.getElementById("date").value || "",
      id: this.props.editBillData.id,
    }
    this.props.saveBillData(data)
    this.props.toggleEditBill()
  }

  componentDidMount() {
    const { description, category, amount, date } = this.props.editBillData
    //Temp Hack. Fix later
    setTimeout(() => {
        document.getElementById("description").value = description
        document.getElementById("category").value = category
        document.getElementById("amount").value = amount
        document.getElementById("date").value = date 
    }, 500)
  }

  render() {
    const toggle = this.props.toggleEditBill
    const modal = true
    const { category } = this.props.editBillData
    return (
      <div className="modal-wrap" ref={(el) => {this.modal = el}}>
        <Modal isOpen={modal} toggle={toggle} className={"className"}>
          <ModalHeader toggle={toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Form>
              <FormGroup>
                <Label for="description">Description</Label>
                <Input type="text" name="description" id="description" />
              </FormGroup>
              <FormGroup>
                <Label for="category">Select A Category</Label>
                <Input type="select" name="category" id="category">
                    {this.props.billCategories.map(data => <option selected={data === category}>{data}</option>)}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label for="amount">Amount (INR)</Label>
                <Input type="text" name="amount" id="amount" placeholder="" />
              </FormGroup>
              <FormGroup>
                <Label for="date">Date</Label>
                <Input type="text" name="date" id="date" placeholder="MM-DD-YYYY"/>
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.saveBillData}>Save</Button>{' '}
            <Button outline color="primary" onClick={toggle}>Discard</Button>
          </ModalFooter>
        </Modal>

      </div>
    )
  }
}

export default AddBillModal