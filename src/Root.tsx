import { useLocation } from "react-router-dom";

const Root = () => {
  const location = useLocation();
  console.log("location is: ", location);

  return <div>Root</div>;
};

export default Root;
