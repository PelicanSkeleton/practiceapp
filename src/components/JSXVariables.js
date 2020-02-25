import React from "react";

let name = "Scott";
const thoughts = "is intimidating but also exciting.";
const NoVowels = string => {
  const vowels = ["a", "e", "i", "o", "u"];
  let result = "";

  for(let i = 0; i < string.length; i++){
    if(!vowels.includes(string[i].toLowerCase())) {
      result += string[i];
    }
  }
  return result;
};

function JSXVariables() {
  return (
    <div className="main-container">
      <div className="container">
        <div className="jumbotron">
          <h1>Hi! My name is {name}</h1>
          <h2>My name has {name.length} letters</h2>
          <h2>I think React {thoughts}</h2>
          <h2>My name without vowels is {NoVowels(name)}. </h2>
        </div>
      </div>
    </div>
  );
}

export default JSXVariables;
