// Task-1
function doubleArray(arr) {
    return arr.map((e) => e * 2);
  }
  console.log(doubleArray([10, 4, 6]));
  
  // Task-2
  function capitalizeName(arr) {
    let letter = arr.map((e) => e.charAt(0).toUpperCase() + e.substring(1));
    return letter;
  }
  console.log(capitalizeName(["apple", "banana"]));
  
  // Task-3
  function namesOnly(arr) {
    return arr.map((e) => e.name);
  }
  console.log(
    namesOnly([
      {
        name: "Jon",
        age: 22,
      },
      {
        name: "Alex",
        age: 30,
      },
      {
        name: "Devid",
        age: 24,
      },
    ])
  );
  
  // Task-4
  wrapper = document.querySelector(".wrapper");
  function redyToPutDom(arr) {
    let loops = arr.map((e) => {
      wrapper.insertAdjacentHTML(
        "afterbegin",
        `<h1>${e.name}</h1> <h2>${e.age}</h2>`
      );
    });
  }
  redyToPutDom([
    {
      name: "Jon",
      age: 22,
    },
    {
      name: "Alex",
      age: 30,
    },
    {
      name: "Devid",
      age: 24,
    },
  ]);
  