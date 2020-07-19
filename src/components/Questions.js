import React, { Component } from 'react';
import { Input } from 'reactstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import QuestionButton from './QuestionButton';

class Questions extends Component {
    constructor(props) {
        super(props);

        this.state = {
            questNum: 1,
            disable: true,
            disableRemove: false,
            stakeholders: '',
            msa: '',
            nda1: '',
            projRoom: '',
            progFund: '',
            trail: '',
            projNumber: '',
            projName: '',
            sponser: '',
            projManager: '',
            projLead: '',
            budgetAmt: '',
            comment: '',
            startDate: new Date(),
            endDate: new Date()
        }
    }

    handleAddQuest = () => {
        if (this.state.questNum !== 20) {
            this.setState({ questNum: this.state.questNum + 1, disable: true });
            if (this.state.questNum === 16) {
                this.setState({ questNum: 18, disable: true });
            }
        }
    }

    handleRemoveQuest = () => {
        this.setState({ questNum: this.state.questNum + 1, disable: true });
    }

    handleChangeInput = (e) => {
        const { name, value } = e.target;

        if (this.state.questNum === 20) {
            this.setState({
                [name]: value,
                disable: true
            });
        } else {
            this.setState({
                [name]: value,
                disable: false
            });
        }
    }

    handleDateChange = (date) => {
        this.setState({
            startDate: date,
            disable: false
        });
    }

    handleDateChangeEnd = (date) => {
        this.setState({
            endDate: date,
            disable: false
        });
    }

    handleRadio = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
            disable: false
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.stakeholders !== this.state.stakeholders) {
            if (this.state.stakeholders === 'yes') {
                this.setState({ questNum: 7, disable: true });
            } else if (this.state.stakeholders === 'no') {
                this.setState({ questNum: 6, disable: true });
            }
        } else if (prevState.msa !== this.state.msa) {
            if (this.state.msa === 'yes') {
                this.setState({ questNum: 11, disable: true });
            } else if (this.state.msa === 'no') {
                this.setState({ questNum: 10, disable: true });
            }
        } else if (prevState.nda1 !== this.state.nda1) {
            if (this.state.nda1 === 'yes') {
                this.setState({ questNum: 13, disable: true });
            } else if (this.state.nda1 === 'no') {
                this.setState({ questNum: 12, disable: true });
            }
        } else if (prevState.projRoom !== this.state.projRoom) {
            if (this.state.projRoom === 'yes') {
                this.setState({ questNum: 15, disable: true });
            } else if (this.state.projRoom === 'no') {
                this.setState({ questNum: 14, disable: true });
            }
        } else if (prevState.progFund !== this.state.progFund) {
            if (this.state.progFund === 'yes') {
                this.setState({ questNum: 16, disable: true });
            } else if (this.state.progFund === 'no') {
                this.setState({ questNum: 17, disable: true });
            } else if (this.state.progFund === 'IDK') {
                this.setState({ questNum: 18, disable: true });
            }
        } else if (prevState.trail !== this.state.trail) {
            if (this.state.trail === 'yes') {
                this.setState({ questNum: 20, disable: true });
            } else if (this.state.trail === 'no') {
                this.setState({ questNum: 19, disable: true });
            }
        }
    }

    render() {

        switch (this.state.questNum) {
            case 1:
                return (
                    <div className="questionSurvey">
                        <p>What is the Project Number?</p>
                        <Input type="text" name="projNumber" value={this.state.projNumber} onChange={this.handleChangeInput} placeholder="Enter Project Number" />
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove={this.state.disableRemove} />
                    </div>
                )
            case 2:
                return (
                    <div className="questionSurvey">
                        <p>What is the Project Name?</p>
                        <Input type="text" name="projName" value={this.state.projName} onChange={this.handleChangeInput} placeholder="Enter Project Name" />
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove={this.state.disableRemove} />
                    </div>
                )
            case 3:
                return (
                    <div className="questionSurvey">
                        <p>What is the Project Period? Specify the Start and End Dates</p>
                        <p>Start Date:</p>
                        <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} dateFormat="MM/dd/yyyy" placeholderText="MM/DD/YYYY" />
                        <p className="endDate">End Date:</p>
                        <DatePicker selected={this.state.endDate} onChange={this.handleDateChangeEnd} dateFormat="MM/dd/yyyy" placeholderText="MM/DD/YYYY" />
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove={this.state.disableRemove} />
                    </div>
                )
            case 4:
                return (
                    <div className="questionSurvey">
                        <p>Who is the Sponsor?</p>
                        <Input type="text" name="sponser" value={this.state.sponser} onChange={this.handleChangeInput} placeholder="Enter Sponsor" />
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove={this.state.disableRemove} />
                    </div>
                )
            case 5:
                return (
                    <div className="questionSurvey">
                        <p>Are all the Stakeholders identified?</p>
                        <input type="radio" name="stakeholders" value="yes" onChange={this.handleRadio} /> Yes
                        <input type="radio" name="stakeholders" value="no" onChange={this.handleRadio} /> No
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove="true" />
                    </div>
                )
            case 6:
                return (
                    <div className="questionSurvey">
                        <p>If No, when will it be completed? Specify the Date</p>
                        <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} dateFormat="MM/dd/yyyy" placeholderText="MM/DD/YYYY" />
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove={this.state.disableRemove} />
                    </div>
                )
            case 7:
                return (
                    <div className="questionSurvey">
                        <p>Who is the Project Manager?</p>
                        <Input type="text" name="projManager" value={this.state.projManager} onChange={this.handleChangeInput} placeholder="Enter Project Manager" />
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove={this.state.disableRemove} />
                    </div>
                )
            case 8:
                return (
                    <div className="questionSurvey">
                        <p>Who are all the Poject Leads?</p>
                        <Input type="text" name="projLead" value={this.state.projLead} onChange={this.handleChangeInput} placeholder="Enter Poject Leads" />
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove={this.state.disableRemove} />
                    </div>
                )
            case 9:
                return (
                    <div className="questionSurvey">
                        <p>Is the MSA-(Master Service Agreement) signed?</p>
                        <Input type="radio" name="msa" value="yes" onChange={this.handleRadio} /> Yes
                        <Input type="radio" name="msa" value="no" onChange={this.handleRadio} /> No
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove="true" />
                    </div>
                )
            case 10:
                return (
                    <div className="questionSurvey">
                        <p>If No, when will the MSA-(Master Service Agreement) be signed? Specify the Date</p>
                        <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} dateFormat="MM/dd/yyyy" placeholderText="MM/DD/YYYY" />
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove={this.state.disableRemove} />
                    </div>
                )
            case 11:
                return (
                    <div className="questionSurvey">
                        <p>Is the NDA-(Non Disclosure Agreement) signed?</p>
                        <input type="radio" name="nda1" value="yes" onChange={this.handleRadio} /> Yes
                        <input type="radio" name="nda1" value="no" onChange={this.handleRadio} /> No
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove="true" />
                    </div>
                )
            case 12:
                return (
                    <div className="questionSurvey">
                        <p>If No, when will the NDA-(Non Disclosure Agreement) be signed? Specify the Date</p>
                        <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} dateFormat="MM/dd/yyyy" placeholderText="MM/DD/YYYY" />
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove={this.state.disableRemove} />
                    </div>
                )
            case 13:
                return (
                    <div className="questionSurvey">
                        <p>Is the Project Room and other Infrastructures ready?</p>
                        <Input type="radio" name="projRoom" value="yes" onChange={this.handleRadio} /> Yes
                        <Input type="radio" name="projRoom" value="no" onChange={this.handleRadio} /> No
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove="true" />
                    </div>
                )
            case 14:
                return (
                    <div className="questionSurvey">
                        <p>If No, when will the Project Room and other Infrastructures be completed? Specify the Date</p>
                        <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} dateFormat="MM/dd/yyyy" placeholderText="MM/DD/YYYY" />
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove={this.state.disableRemove} />
                    </div>
                )
            case 15:
                return (
                    <div className="questionSurvey">
                        <p>Is the Program funding / Budget approved?</p>
                        <input type="radio" name="progFund" value="yes" onChange={this.handleRadio} /> Yes
                        <input type="radio" name="progFund" value="no" onChange={this.handleRadio} /> No
                        <input type="radio" name="progFund" value="IDK" onChange={this.handleRadio} /> IDK
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove="true" />
                    </div>
                )
            case 16:
                return (
                    <div className="questionSurvey">
                        <p>Specify the Budget amount. (Currency Format)</p>
                        <Input type="text" name="budgetAmt" value={this.state.budgetAmt} onChange={this.handleChangeInput} placeholder="Enter Budget amount" />
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove={this.state.disableRemove} />
                    </div>
                )
            case 17:
                return (
                    <div className="questionSurvey">
                        <p>If No, when will Program funding / Budget be approved? Specify the Date</p>
                        <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} dateFormat="MM/dd/yyyy" placeholderText="MM/DD/YYYY" />
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove={this.state.disableRemove} />
                    </div>
                )
            case 18:
                return (
                    <div className="questionSurvey">
                        <p>Is the Trial System provided to make the client familiar with S4H?</p>
                        <input type="radio" name="trail" value="yes" onChange={this.handleRadio} /> Yes
                        <input type="radio" name="trail" value="no" onChange={this.handleRadio} /> No
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove="true" />
                    </div>
                )
            case 19:
                return (
                    <div className="questionSurvey">
                        <p>If No, when will it be provided? Specify the Date</p>
                        <DatePicker selected={this.state.startDate} onChange={this.handleDateChange} dateFormat="MM/dd/yyyy" placeholderText="MM/DD/YYYY" />
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove={this.state.disableRemove} />
                    </div>
                )
            case 20:
                return (
                    <div className="questionSurvey">
                        <p>Brief comment about this Setup Sub-phase</p>
                        <Input type="text" name="comment" value={this.state.comment} onChange={this.handleChangeInput} placeholder="Enter Comment" />
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove="true" />
                    </div>
                )
            default:
                return (
                    <div className="questionSurvey">
                        <p>What is the Project Number?</p>
                        <Input type="text" name="projNumber" value={this.state.projNumber} onChange={this.handleChangeInput} placeholder="Enter Project Number" />
                        <QuestionButton add={this.handleAddQuest} remove={this.handleRemoveQuest} disable={this.state.disable} disableRemove="true" />
                    </div>
                )
        }
    }
}

export default Questions;