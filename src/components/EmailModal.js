import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.css';

function EmailModal(props) {
    const [open, setOpen] = useState(props.mailSend);

    //const onOpenModal = () => setOpen(props.mailSend);
    const onCloseModal = () => setOpen(false);
    const mailSendClassName = props.mailSendResponse && props.mailSendResponse.includes("wrong") ? "text-danger" : "text-success";

    return (
        <div>
            <Modal open={open} closeOnOverlayClick={true} onClose={onCloseModal} center>
                {props.mailResponse ? <h6 style={{ paddingTop: "20px" }} className={mailSendClassName}>{props.mailSendResponse}</h6> :
                    <div style={{textAlign:"center"}}>
                        <Spinner animation="grow" variant="primary" />
                        <Spinner animation="grow" variant="secondary" />
                        <Spinner animation="grow" variant="success" />
                        <Spinner animation="grow" variant="danger" />
                        <Spinner animation="grow" variant="warning" />
                        <h6 style={{ paddingTop: "20px" }}> Sending your query.Please wait...</h6>
                    </div>}
            </Modal>
        </div>
    );
}

export default EmailModal;
