import React from "react"
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
// const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];
import { Modal, ModalHeader, ModalBody } from "reactstrap"

const RenderLineChart = ({ data, toggleChart }) => (
  <div className="chart">
    <Modal isOpen={true} toggle={toggleChart} size="xl">
      <ModalHeader toggle={toggleChart}>Chart</ModalHeader>
      <ModalBody>
        <LineChart width={1000} height={500} data={data}>
          <CartesianGrid />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="amount" stroke="#8884d8" />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ModalBody>
    </Modal>
  </div>
)

export default RenderLineChart

