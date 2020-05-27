import React, {useState} from 'react';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import RegisterForm from './RegisterForm';

const Register = (props) => {
    const {buttonLabel} = props;
    const [modal, setModal] = useState (false);
    const toggle = () => setModal(!modal);

    return(
        <div className="d-flex align-items-center ml-2">
            <Button color="info" onClick={toggle} id="btn-sm">{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>Register User</ModalHeader>
                <ModalBody>
                    <RegisterForm/>
                </ModalBody>
                <ModalFooter>Welcome to our website! Please, register!</ModalFooter>
            </Modal>
        </div>
    );
}

export default Register;