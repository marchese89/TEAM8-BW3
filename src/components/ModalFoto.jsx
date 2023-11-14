import {Col, Container, FormControl, FormGroup, Modal, Row} from "react-bootstrap";
import {Plus} from "react-bootstrap-icons";
import {useState} from "react";


const ModalFoto = ()=>{
 const [show, setShow]=useState(true)


    const showChange = () => {
     setShow(true)

    }


    return(
        <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true" id="modalPhoto">
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className={'modal-title'}> <h3>Add a Profile Photo</h3> </div>
                </div>
            </div>
        </div>
    )
}

export default ModalFoto