import { useEffect } from "react";
import { jobsListAction } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";
import { Col, Container, Row } from "react-bootstrap";
import Job from "./Job";
import styled from "styled-components";

export default function Jobs() {
  const jobsFromReduxStore = useSelector((state) => state.jobs.jobs_list);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(jobsListAction());
  }, []);

  return (
    <Container className="cont">
      <Row>
        <Col xs={7} className="mx-auto">
          {jobsFromReduxStore &&
            jobsFromReduxStore.map((job) => {
              return <Job data={job} key={job._id} />;
            })}
        </Col>
      </Row>
    </Container>
  );
}
