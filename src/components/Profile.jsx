import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allProfilesAction, myProfileAction } from "../redux/actions";

export default function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProfilesAction());
    dispatch(myProfileAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}

