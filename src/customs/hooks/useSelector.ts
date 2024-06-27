// Static import
import { get } from "lodash";
import { useSelector } from "react-redux";
// Dynamic import
import { RootState } from "../../store";

const useSelectors: Function = (value: keyof RootState) =>
  useSelector((state: RootState) => get(state, value, ""));

export default useSelectors;
