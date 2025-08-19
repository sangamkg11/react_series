import React, { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  //a;lternative of this method is written down
  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch("https://api.github.com/users/sangamkg11")
  //       .then((response) => response.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);
  return (
    <>
      <div className="text-center m-4 bg-gray-700 text-white text-3xl p-4">
        gitHub followers:{data.followers}
        <img
          className=""
          src={data.avatar_url}
          alt="Github picture"
          width={300}
        />
      </div>
    </>
  );
}

export default Github;

export const gitHubLoader = async () => {
  const response = await fetch("https://api.github.com/users/sangamkg11");
  return response.json();
};
