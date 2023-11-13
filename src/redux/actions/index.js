export const ALL_PROFILES = "ALL_PROFILES";
export const MY_PROFILE = "MY_PROFILE";
export const USER_PROFILE = "USER_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const EXPERIENCES_LIST = "EXPERIENCES_LIST";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const MODIFY_EXPERIENCE = "GET_EXPERIENCE";
export const DELETE_EXPERIENCE = "GET_EXPERIENCE";

const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZmRkMWM1NWU3ZTAwMThmODNjMTciLCJpYXQiOjE2OTk4NzIyMDksImV4cCI6MTcwMTA4MTgwOX0.CEioZrDUaNceaNFzixFssH01uUo-q0MlvWhg9uzuxc0`;

export const allProfilesAction = () => {
  return async (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        dispatch({
          type: ALL_PROFILES,
          payolad: data,
        });
      })
      .catch((err) => console.log("ERRORE!", err));
  };
};

export const myProfileAction = () => {
  return async (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/me", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        dispatch({
          type: MY_PROFILE,
          payolad: data,
        });
      })
      .catch((err) => console.log("ERRORE!", err));
  };
};

export const userProfileAction = (idUser) => {
  return async (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/" + idUser, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        dispatch({
          type: USER_PROFILE,
          payolad: data,
        });
      })
      .catch((err) => console.log("ERRORE!", err));
  };
};

export const updateProfileAction = (user) => {
  return async (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/profile/", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        dispatch({
          type: UPDATE_PROFILE,
          payolad: data,
        });
      })
      .catch((err) => console.log("ERRORE!", err));
  };
};

export const experienceListAction = (userId) => {
  return async (dispatch) => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        userId +
        "/experiences",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        dispatch({
          type: EXPERIENCES_LIST,
          payolad: data,
        });
      })
      .catch((err) => console.log("ERRORE!", err));
  };
};

export const addExperienceAction = (userId, exp) => {
  return async (dispatch) => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        userId +
        "/experiences",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(exp),
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        dispatch({
          type: ADD_EXPERIENCE,
          // payolad: data,
        });
      })
      .catch((err) => console.log("ERRORE!", err));
  };
};

export const getExperienceAction = (userId, expId) => {
  return async (dispatch) => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        userId +
        "/experiences/" +
        expId,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        dispatch({
          type: GET_EXPERIENCE,
          payolad: data,
        });
      })
      .catch((err) => console.log("ERRORE!", err));
  };
};

export const modifyExperienceAction = (userId, expId, exp) => {
  return async (dispatch) => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        userId +
        "/experiences/" +
        expId,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(exp),
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        dispatch({
          type: MODIFY_EXPERIENCE,
          // payolad: data,
        });
      })
      .catch((err) => console.log("ERRORE!", err));
  };
};

export const deleteExperienceAction = (userId, expId) => {
  return async (dispatch) => {
    fetch(
      "https://striveschool-api.herokuapp.com/api/profile/" +
        userId +
        "/experiences/" +
        expId,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nella fetch");
        }
      })
      .then((data) => {
        dispatch({
          type: DELETE_EXPERIENCE,
          // payolad: data,
        });
      })
      .catch((err) => console.log("ERRORE!", err));
  };
};
