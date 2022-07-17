import React, { useEffect, useState } from "react";
import "./PostData.css";
import Card from "./Card";
import Searchbar from "./Search";
const PostData: React.FunctionComponent<{}> = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [filteredData, setFilteredData] = useState<any[]>([]);
  const [searchValue, setSearchValue] = React.useState("");

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");
    const FinalData = await response.json();
    setUsers(FinalData);
    setFilteredData(FinalData);
    console.log(FinalData);
  };

  useEffect(() => {
    getUsers();
  }, []);

  useEffect(() => {
    setFilteredData(
      users.filter((e) => {
        return e.login.toLowerCase().includes(searchValue.toLowerCase());
      })
    );
    console.log("useefect2 is running" + searchValue);
  }, [searchValue]);
  if (filteredData.length === 0) {
    return (
      <div>
        <h2>users Not Found</h2>
        <Searchbar setSearchValue={setSearchValue} />
      </div>
    );
  }
  return (
    <div className="container">
      <Searchbar setSearchValue={setSearchValue} />

      {filteredData.length !== 0 &&
        filteredData.map((curElem) => {
          return <Card key={curElem.id} curElem={curElem} />;
        })}
    </div>
  );
};

export default PostData;
