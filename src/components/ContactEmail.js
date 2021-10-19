import React, { Component } from 'react';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import emailjs from 'emailjs-com'
import EmailModal from './EmailModal'

class ContactEmail extends Component {
    state = {
        name: "",
        company: "",
        email: "",
        query: "",
        mailSendResponse: "",
        mailSend:false,
        mailResponse:false
    }

    sendMail = (e) => {
        this.setState({mailSend:true})
        e.preventDefault();
        //console.log(formTemplate)
        var templateParams = {
            name: this.state.name,
            company: this.state.company,
            contact: this.state.email,
            query: this.state.query
        }
        emailjs.send('service_erba51m', 'template_0c80u7q', templateParams, 'user_o8d4kOT06ByD2WS3U2OI7')
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                this.setState({mailResponse:true, mailSendResponse: "Thanks for your enquiry.We will get back to you soon." , name:"",email:"",company:"",query:""})
            })
            .catch((error) => {
                console.log('FAILED...', error);
                this.setState({ mailResponse:true,mailSendResponse: "Sorry! your query coulddn't be send",name:"",email:"",company:"",query:"" })
            })
    }
    render() {
        //const mailSendClassName = this.state.mailSendResponse && this.state.mailSendResponse.includes("Sorry!") ? "text-danger" : "text-success";
        return (
            <div className="contactText">

                <div className="p-grid">
                    <div className="p-col-5 p-d-flex p-ai-center p-jc-center">
                        <form className="p-fluid" >
                            <div className="p-field">
                                <span style={{ textDecoration: "overline", fontSize: "xx-large" }}>Service Enquiry</span> <br /> <br />
                                <label htmlFor="username">Your Name</label>
                                <InputText id="name" type="text" tooltip="Please enter your name"
                                    value={this.state.name}
                                    validateOnly={true}
                                    onChange={(e) => this.setState({ name: e.target.value })}
                                />
                            </div>
                            <div className="p-field">
                                <label >Company Name</label>
                                <InputText id="company" type="text" tooltip="Please your company name"
                                    value={this.state.company}
                                    onChange={(e) => this.setState({ company: e.target.value })} />
                            </div>
                            <div className="p-field">
                                <label >Email</label>
                                <InputText id="contactNumber" type="text" tooltip="Please enter phone number"
                                    value={this.state.email}
                                    onChange={(e) => this.setState({ email: e.target.value })} />
                            </div>
                            <div className="p-field">
                                <label >Query</label>
                                <InputTextarea autoResize id="query" rows={5} cols={30} tooltip="Enter you query"
                                    value={this.state.query}
                                    onChange={(e) => this.setState({ query: e.target.value })} />
                            </div>
                            <Button label="Send" icon="pi pi-send" className="p-button-success" style={{ textAlign: "inherit" }}
                                tooltip="Send your queries" onClick={(e) => { this.sendMail(e) }} 
                               disabled={!this.state.name || !this.state.company || !this.state.query || !this.state.email} /> <br />
                            
                            {this.state.mailSend && <EmailModal mailSend={this.state.mailSend}
                            mailResponse={this.state.mailResponse} mailSendResponse={this.state.mailSendResponse} />}
                        </form>
                    </div>
                    <div className="p-col-2">
                        <Divider layout="vertical">
                            <strong>OR</strong>
                        </Divider>
                    </div>
                    <div className="p-col-5 p-d-flex p-ai-center p-jc-center">
                        <div className="p-field" >
                            <span style={{ textDecoration: "overline", fontSize: "xx-large" }} >For Support </span> <br /><br />
                            <span style={{ color: "red", fontSize: "large" }}><b><u> Call : </u></b>&nbsp;&nbsp;+91-7678334260</span><br />
                            <span style={{ color: "red", fontSize: "large" }}><b><u> Mail :</u></b>&nbsp; &nbsp; nrjsrivastav100@yahoo.com</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactEmail;