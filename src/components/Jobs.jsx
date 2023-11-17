import { useEffect, useState } from "react";
import { jobsListAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row, Card } from "react-bootstrap";
import Job from "./Job";

export default function Jobs() {
  const jobsFromReduxStore = useSelector((state) => state.jobs.jobs_list);
  const searchJobFromReduxStore = useSelector((state) => state.jobs.job_search);
  const [showSearch, setshowSearch] = useState(false);

  useEffect(() => {
    if (searchJobFromReduxStore !== null) {
      setshowSearch(true);
    }
  }, [searchJobFromReduxStore]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(jobsListAction());
  }, []);

  return (
    <Container className="cont d-flex">
      <Row className="d-flex">
        <Card className="bg-light">
          <h4 className="text-center my-3">
            Scegli il Lavoro dei Tuoi sogni tra le offerte di lavoro:
          </h4>

          <Col xs={12} className="d-flex flex-wrap justify-content-center">
            {!showSearch &&
              jobsFromReduxStore &&
              jobsFromReduxStore.map((job) => {
                return <Job data={job} key={job._id} />;
              })}
            {showSearch &&
              searchJobFromReduxStore &&
              searchJobFromReduxStore.map((job) => {
                return <Job data={job} key={job._id} />;
              })}
          </Col>
        </Card>
      </Row>
    </Container>
  );
}
