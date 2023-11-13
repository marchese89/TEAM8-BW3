import {Card, CardSubtitle, Col, Container, Row} from "react-bootstrap";
import StyledH5 from "../StyledComponent/StyleSidePart";
import {Pen} from 'react-bootstrap-icons'
import StyledCardSub from "../StyledComponent/StyledSub";
import '../StyledComponent/Side.css'
import ModalLanguage from "./ModalLenguageChange";
import CardLan from "./CardLanguage";
import Learn from "./Learn";
const SidePart = () => {
    const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUyMTY3N2M1NWU3ZTAwMThmODNjMmUiLCJpYXQiOjE2OTk4Nzg1MjEsImV4cCI6MTcwMTA4ODEyMX0.OUjIWiA8Coq8XIN7HBfmcox3tAoSACAyfSlyL2cR9ow";

    return (
    <div>
        <Col xl={10} className={'mx-4'}>
            <CardLan/>

        </Col>

<ModalLanguage/>

    </div>
  );
};

export default SidePart;
