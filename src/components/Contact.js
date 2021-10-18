import React, { useState } from 'react';
import { Divider } from 'primereact/divider';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';
import Email from './Email';

function Contact(props) {
    const [name, setName] = useState("");
    const [company, setCompany] = useState("");
    const [email, setContact] = useState("");
    const [query, setQuery] = useState("");
    var templateParams = {
        name: name,
        company: company,
        contact: email,
        query: query
    }

    return (
        <div className="contactText">

            <div className="p-grid">
                <div className="p-col-5 p-d-flex p-ai-center p-jc-center">
                    <form className="p-fluid" >
                        <div className="p-field">
                            <span style={{ textDecoration: "overline", fontSize: "xx-large" }}>Service Enquiry</span> <br /> <br />
                            <label htmlFor="username">Your Name</label>
                            <InputText id="name" type="text" tooltip="Please enter your name"
                                value={name}
                                validateOnly={true}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <div className="p-field">
                            <label >Company Name</label>
                            <InputText id="company" type="text" tooltip="Please your company name"
                                value={company}
                                onChange={(e) => setCompany(e.target.value)} />
                        </div>
                        <div className="p-field">
                            <label >Email</label>
                            <InputText id="contactNumber" type="text" tooltip="Please enter phone number"
                                value={email}
                                onChange={(e) => setContact(e.target.value)} />
                        </div>
                        <div className="p-field">
                            <label >Query</label>
                            <InputTextarea autoResize id="query" rows={5} cols={30} tooltip="Enter you query"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)} />
                        </div>
                        <Button label="Send" icon="pi pi-send" className="p-button-success" style={{ textAlign: "inherit" }}
                            tooltip="Send your queries" onClick={(e) => {
                                e.preventDefault();
                                <div>
                                    <Email templateParams={templateParams} /></div>
                            }} />
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

export default Contact;