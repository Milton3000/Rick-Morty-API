import React from "react";

const InputGroup = ({ total, name, setID }) => {
  console.log([...Array(total).keys()]);
  return (
    <div class="input-group mb-3">
      <select
        onChange={(e) => setID(e.target.value)}
        class="form-select"
        id={name}
      >
        <option value="1" selected> Choose... </option>

        {[...Array(total).keys()].map((x) => {
          return (
            <option value={x + 1}>
              {name} - {x + 1}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default InputGroup;

/* Hämtar InputGroup från Boostrap, skapar en ny komponent som heter Input Group
Använder de-structuring för {total} i Episodes.jsx: <InputGroup total={51}/>
Gör en map över arrayen och returnar option value x + 1.
Slutligen, lägger till en onChange på select, för att få sidan att ändra episodes när man trycker på rätt episode.
*/
