import { Plus } from "react-bootstrap-icons";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import AddExperience from "./AddExperience";
import SingleExperience from "./SingleExperience";
import { useDispatch, useSelector } from "react-redux";
import { experienceListAction, myProfileAction } from "../redux/actions";

const StyledDiv = styled.div`
  font-size: 16px;
  border: 1px solid #eae8e5;
  padding: 0.5em;
  width: 32em;
  .icon {
    width: 1.3em;
    height: 1.3em;
    font-size: 1.4em;
    color: #5e5e5e;
    cursor: pointer;
    margin-top: 0;
  }
  .icon.fs-1 {
    border-radius: 50%;
  }
  .icon:hover {
    background-color: #ebebeb;
  }

  #pencil {
    border-radius: 50%;
    width: 2.2em;
    height: 2.2em;
    dispay: flex;
    justify-content: center;
    align-items: center;
  }
  .fa-pencil-alt.position-absolute {
    top: 0.5em;
    left: 0.6em;
  }
  #plus {
    right: 1em;
  }

  .drop-down {
    color: #666666;
    z-index: 4;
    background-color: white;
    border-radius: 10px;
    border: 1px solid #eae8e5;
    right: 0.5em;
    top: 3em;
    & ul li:hover {
      background-color: #f3f3f3;
      cursor: pointer;
    }
    & ul li:nth-of-type(1) {
      padding: 0.5em;
      border-radius: 10px 10px 0 0;
    }
    & ul li:nth-of-type(2) {
      padding: 0.5em;
      border-radius: 0 0 10px 10px;
    }
    &ul {
      margin: 0;
      padding: 0;
    }
  }
`;

export default function Experience() {
  const [showDrop, setshowDrop] = useState(false);
  const [showAddExperience, setShowAddExperience] = useState(false);
  const navigate = useNavigate();
  const myExperiencesFromReduxStore = useSelector(
    (state) => state.experience.experiences_list
  );

  const dispatch = useDispatch();

  const my_profileFromReduxStore = useSelector(
    (state) => state.profile.my_profile
  );

  useEffect(() => {
    //prendiamo le informazioni del nostro profilo
    dispatch(myProfileAction());
    // dispatch(allProfilesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (my_profileFromReduxStore !== undefined) {
      dispatch(experienceListAction(my_profileFromReduxStore._id));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [my_profileFromReduxStore]);

  return (
    <>
      <StyledDiv className="d-flex flex-column rounded-3 text-black">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-between position-relative">
            <h4>Esperienza</h4>
            <div id="buttons" className="d-flex">
              <Plus
                className="icon fs-1"
                id="plus"
                onClick={() => {
                  setshowDrop(!showDrop);
                  console.log("setShowDrop", showDrop);
                }}
              />
              <div className="icon position-relative" id="pencil">
                {/* <Pencil id="pencil" /> */}
                <i
                  className="fas fa-pencil-alt position-absolute"
                  onClick={() => {
                    navigate("/in/me/details/experience/");
                  }}
                ></i>
              </div>
            </div>
            {showDrop && (
              <div className="drop-down position-absolute">
                <ul className="list-unstyled d-flex flex-column mb-0">
                  <li
                    onClick={() => {
                      setshowDrop(false);
                      setShowAddExperience(true);
                    }}
                  >
                    <i className="fas fa-suitcase"></i>&nbsp;&nbsp;Aggiungi
                    posizione lavorativa
                  </li>
                  <li>
                    <i className="fas fa-calendar-alt"></i>&nbsp;&nbsp;Aggiungi
                    pausa lavorativa
                  </li>
                </ul>
              </div>
            )}
          </div>
          <div className="d-flex flex-column">
            {myExperiencesFromReduxStore.map((exp) => {
              return <SingleExperience exp={exp} key={exp._id} />;
            })}
          </div>
        </div>
      </StyledDiv>

      {showAddExperience && (
        <AddExperience
          mostra={showAddExperience}
          set_mostra={setShowAddExperience}
        />
      )}
    </>
  );
}
