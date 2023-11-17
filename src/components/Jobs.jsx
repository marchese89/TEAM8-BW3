import { useEffect, useState } from "react";
import { jobsListAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
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
        <Col xs={12} className="d-flex flex-wrap">
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
      </Row>
    </Container>
  );
}
