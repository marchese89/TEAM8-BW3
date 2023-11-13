import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { allProfilesAction } from "../redux/actions";

export default function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allProfilesAction());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
}
