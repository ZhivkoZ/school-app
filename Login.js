/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import LoginForm from './LoginForm';

const Login = (props) => {
  const {
    buttonLabel,
  } = props;

  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  return (
    <div className="d-flex align-items-center ml-2">
      <Button outline color="light" onClick={toggle} className="btn-sm">{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Submit</ModalHeader>
        <ModalBody>
            <LoginForm/>
        </ModalBody>
      </Modal>
    </div>
  );
}

export default Login;