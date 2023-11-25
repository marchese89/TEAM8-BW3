import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";

import User from "./User";
const RetePage = () => {
  // const dispatch = useDispatch();
  const usersFromRedux = useSelector((state) => state.profile.profiles);
  // const [profiles, setprofiles]=useState()

  // useEffect(() => {

  // }, []);

  return (
    <>
      <Container>
        <Row className="justify-content-center d-flex w-100">
          {usersFromRedux.map((user) => {
            return (
              <>
                <Container key={user._id} className="flex-row">
                  <User user={user} />
                </Container>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default RetePage;
