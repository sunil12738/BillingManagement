import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddBills from "./AddBills"
import BillsList from "./BillsList"
import AddBillModal from "./AddBillModal"
import EditBillModal from "./EditBillModal"
import { billInitData, billCategories, DATE_FORMAT } from "../consts"
import RenderLineChart from "./Chart"
import moment from "moment"

class App extends React.Component {
    state = {
        billInitData: billInitData.bills,
        showAddBill: false,
        addBillForm: {},
        showEditBill: false,
        editBillData: {},
        filterByCategory: "",
        showChart: false,
        billsCanBePaid: [],
    }

    componentDidMount(){
        this.setState({
            filterByCategory: ""
        })
    }

    toggleAddBill = () => {
        this.setState({
            showAddBill: !this.state.showAddBill,
        })
    }

    toggleEditBill = () => {
        this.setState({
            showEditBill: !this.state.showEditBill,
        })
    }

    toggleChart = () => {
        this.setState({
            showChart: !this.state.showChart,
        })
    }

    setAddBillForm = (data) => {
        const billsData = this.state.billInitData
        const maxId = this.state.billInitData.map(data => +data.id).sort((a,b) => a-b < 0 ? 0 : -1 )[0] + 1
        data.id = maxId
        billsData.push(data)
        this.setState({
            billInitData: billsData
        })
    }

    deleteBill = (id) => {
        const billsData = this.state.billInitData
        const filteredData = billsData.filter(data => data.id !== id)
        this.setState({
            billInitData: filteredData
        })
    }

    editBill = (id) => {
        this.toggleEditBill()
        const data = this.state.billInitData.find(data => data.id === id)
        this.setState({
            editBillData: data,
        })
    }

    saveBillData = (data) => {
        const filteredData = this.state.billInitData.filter(value => value.id !== data.id)
        filteredData.push(data)
        this.setState({
            billInitData: filteredData
        })
        this.toggleEditBill()
    }

    setFilterCategory = (e) => {
        let category = e.target.value
        console.log(category, this.state)
        if (category === "All") category = ""
        this.setState({
            filterByCategory: category,
        })
    }

    getBillListToShow = () => {
        const { filterByCategory, billInitData } = this.state
        if(!filterByCategory) {
            return billInitData
        } else  {
            return billInitData.filter(data => data.category === filterByCategory)
        }
    }

    getTotalAmt = (month) => {
        const filteredData = this.state.billInitData.filter((data) => {
            const monthValue = moment(data.date, DATE_FORMAT).format("DD")
            if (monthValue == month) {
                return true
            }
        })
        return filteredData.reduce((acc, value) => { return +value.amount+acc }, 0)
    }

    getChartData = () => {
        const start = 1
        const end = 31
        const data = []
        for (let i = start; i<=end;++i ) {
            data.push({
                name: i,
                amount: this.getTotalAmt(i),
            })
        }
        return data
    }
    calculateBillsToPay = () => {
        let budget = Number(document.getElementById("budget").value)
        const billInitData = [...this.state.billInitData]
        const sortedBillsData = billInitData.sort((a,b) => Number(a.amount) - Number(b.amount) < 0 ? 0 : -1)
        const billsCanBePaid = []
        for(let i = 0; i < sortedBillsData.length; ++i) {
            if (budget >= Number(sortedBillsData[i].amount)) {
                // console.log(sortedBillsData[i])
                billsCanBePaid.push(sortedBillsData[i].id)
                budget = budget - Number(sortedBillsData[i].amount)
            }
        }
        this.setState({
            billsCanBePaid,
        })
    }

    render() {
        const { showAddBill, showEditBill, showChart, billsCanBePaid } = this.state
        return (
            <div className="main-wrap">
                <AddBills
                    toggleAddBill={this.toggleAddBill}
                    setAddBillForm={this.setAddBillForm}
                    billCategories={billCategories}
                    setFilterCategory={this.setFilterCategory}
                    toggleChart={this.toggleChart}
                    calculateBillsToPay={this.calculateBillsToPay}
                />
                <BillsList 
                    billInitData={this.getBillListToShow()} 
                    deleteBill={this.deleteBill} 
                    editBill={this.editBill}
                    billsCanBePaid={billsCanBePaid}
                />
                {showAddBill
                    && <AddBillModal
                        toggleAddBill={this.toggleAddBill}
                        setAddBillForm={this.setAddBillForm}
                        billCategories={billCategories}
                    />
                }
                {showEditBill
                    && <EditBillModal
                        toggleEditBill={this.toggleEditBill}
                        editBillData={this.state.editBillData}
                        saveBillData={this.saveBillData}
                        billCategories={billCategories}
                    />
                }
                {showChart
                    && <RenderLineChart
                        data={this.getChartData()}
                        toggleChart={this.toggleChart}
                    />
                }
            </div>
        )
    }
}

export default App;
