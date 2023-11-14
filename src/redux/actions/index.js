export const ALL_PROFILES = "ALL_PROFILES";
export const MY_PROFILE = "MY_PROFILE";
export const USER_PROFILE = "USER_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";
export const EXPERIENCES_LIST = "EXPERIENCES_LIST";
export const ADD_EXPERIENCE = "ADD_EXPERIENCE";
export const GET_EXPERIENCE = "GET_EXPERIENCE";
export const MODIFY_EXPERIENCE = "GET_EXPERIENCE";
export const DELETE_EXPERIENCE = "GET_EXPERIENCE";
export const POST_LIST = "POST_LIST";
export const NEW_POST = "NEW_POST";
export const GET_POST = "GET_POST";
export const MODIFY_POST = "MODIFY_POST";
export const DELETE_POST = "DELETE_POST";
export const JOBS_LIST = "JOBS_LIST";
export const SEARCH_BY_QUERY = "SEARCH_BY_QUERY";
export const SEARCH_BY_COMPANY = "SEARCH_BY_COMPANY";
export const SEARCH_BY_CATEGORY = "SEARCH_BY_CATEGORY";

export const QUERY = "QUERY";
export const COMPANY = "COMPANY";
export const CATEGORY = "CATEGORY";

export const token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTUxZmRkMWM1NWU3ZTAwMThmODNjMTciLCJpYXQiOjE2OTk4NzIyMDksImV4cCI6MTcwMTA4MTgwOX0.CEioZrDUaNceaNFzixFssH01uUo-q0MlvWhg9uzuxc0`;

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
          payload: data,
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
          payload: data,
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
          payload: data,
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
          payload: data,
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
          payload: data,
        });
      })
      .catch((err) => console.log("ERRORE!", err));
  };
};

export const addExperienceAction = (userId, exp) => {
  console.log("sono in add exp, id: " + userId + " exp: " + exp);
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
        console.log("response", response);
        if (response.ok) {
          console.log("response ok");
          // return response.json();
        } else {
          console.log("risposta non ok");
          throw new Error("errore nella fetch");
        }
      })
      // .then((data) => {
      //   console.log("di di add exp", data);
      //   dispatch({
      //     type: ADD_EXPERIENCE,
      //     payload: data,
      //   });
      // })
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
          payload: data,
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
          // payload: data,
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
          // payload: data,
        });
      })
      .catch((err) => console.log("ERRORE!", err));
  };
};

export const postListAction = () => {
  return async (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/posts/", {
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
          type: POST_LIST,
          payload: data,
        });
      })
      .catch((err) => console.log("ERRORE!", err));
  };
};

export const newPostAction = (post) => {
  return async (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/posts/", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
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
          type: NEW_POST,
          payload: data,
        });
      })
      .catch((err) => console.log("ERRORE!", err));
  };
};

export const getPostAction = (postId) => {
  return async (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/posts/" + postId, {
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
          type: GET_POST,
          payload: data,
        });
      })
      .catch((err) => console.log("ERRORE!", err));
  };
};

export const modifyPostAction = (postId, post) => {
  return async (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/posts/" + postId, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
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
          type: MODIFY_POST,
          payload: data,
        });
      })
      .catch((err) => console.log("ERRORE!", err));
  };
};

export const deletePostAction = (postId) => {
  return async (dispatch) => {
    fetch("https://striveschool-api.herokuapp.com/api/posts/" + postId, {
      method: "DELETE",
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
          type: DELETE_POST,
          // payload: data,
        });
      })
      .catch((err) => console.log("ERRORE!", err));
  };
};

// export const SEARCH_BY_QUERY = "SEARCH_BY_QUERY";
export const searchAction = (type, query) => {
  return async (dispatch) => {
    let url = "https://strive-benchmark.herokuapp.com/api/jobs?";
    let action = "";

    switch (type) {
      case QUERY:
        url += "search=";
        action = SEARCH_BY_QUERY;
        break;
      case COMPANY:
        url += "company=";
        action = SEARCH_BY_COMPANY;
        break;
      case CATEGORY:
        url += "category=";
        action = SEARCH_BY_CATEGORY;
        break;
      default:
        return;
    }

    fetch(url + query, {
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
          type: action,
          payload: data,
        });
      })
      .catch((err) => console.log("ERRORE!", err));
  };
};
