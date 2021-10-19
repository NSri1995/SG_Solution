import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import Spinner from 'react-bootstrap/Spinner'
import 'bootstrap/dist/css/bootstrap.css';

function EmailModal(props) {
    const [open, setOpen] = useState(props.mailSend);

    //const onOpenModal = () => setOpen(props.mailSend);
    const onCloseModal = () => setOpen(false);

    return (
        <div>
            <Modal open={open} closeOnOverlayClick={true} onClose={onCloseModal} center>
                {props.mailResponse ? <h4 style={{ paddingTop: "20px" }} className="text-success">{props.mailSendResponse}</h4> :
                    <div style={{textAlign:"center"}}>
                        <Spinner animation="grow" variant="primary" />
                        <Spinner animation="grow" variant="secondary" />
                        <Spinner animation="grow" variant="success" />
                        <Spinner animation="grow" variant="danger" />
                        <Spinner animation="grow" variant="warning" />
                        <h4 style={{ paddingTop: "20px" }}> Sending your query.Please wait...</h4>
                    </div>}
            </Modal>
        </div>
    );
}

export default EmailModal;