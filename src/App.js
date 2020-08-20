import React from "react";
import Profile from "./Profile";

/// stateless
function App() {
  const users = [
    {
      name: "Keven",
      age: 30,
      img: "https://via.placeholder.com/100",
    },
    {
      name: "Wesley",
      age: 35,
      size: "300",
      img: "https://via.placeholder.com/100",
    },
    {
      name: "Kehomens",
      age: 23.5,
      img: "https://via.placeholder.com/100",
    },
  ];
  return (
    <div className="App">
      {users.map((user) => {
        return <Profile key={user.name} {...user} />;
      })}
    </div>
  );
}

export default App;
