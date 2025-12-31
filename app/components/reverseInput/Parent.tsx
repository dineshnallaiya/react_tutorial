import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import ChildText from "./Child";

const ParentText = () => {
  const [inputData, setInput] = useState("");
  const changeText = useCallback((event: any) => {
    setInput(event.target.value.replace(/[^0-9]+$/, ""));
  }, []);
  const reverseString = useMemo(() => {
    return inputData.split("").reverse().join("");
  }, [inputData]);

  useEffect(() => {
    console.log("useEffect");
  }, []);
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  }, []);
  return (
    <>
      <h3 className="text-[24px]">ReverseInput</h3>
      <input
        type="text"
        value={inputData}
        onInput={(event) => changeText(event)}
        maxLength={10}
      />
      <p>{inputData}</p>
      <ChildText reverseStringtoChild={reverseString} />
    </>
  );
};
export default ParentText;
