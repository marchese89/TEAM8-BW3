
export const ALL_PROFILES = "ALL_PROFILES";
export const MY_PROFILE = "MY_PROFILE";
export const USER_PROFILE = "USER_PROFILE";
export const UPDATE_PROFILE = "UPDATE_PROFILE";

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
        console.log(data);
        dispatch({
          type: ALL_PROFILES,
          payolad: data,
        });
      })
      .catch((err) => console.log("ERRORE!", err));
  };
};
