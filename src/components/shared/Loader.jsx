import React from "react";
import { CirclesWithBar } from "react-loader-spinner";

function Loader() {
  return (
    <CirclesWithBar
      height="30"
      width="30"
      color="white"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      outerCircleColor=""
      innerCircleColor=""
      barColor=""
      ariaLabel="circles-with-bar-loading"
    />
  );
}

export default Loader;
