let personnel = [
    {
      id: 5,
      name: "Luke Skywalker",
      pilotingScore: 98,
      shootingScore: 56,
      isForceUser: true,
    },
    {
      id: 82,
      name: "Sabine Wren",
      pilotingScore: 73,
      shootingScore: 99,
      isForceUser: false,
    },
    {
      id: 22,
      name: "Zeb Orellios",
      pilotingScore: 20,
      shootingScore: 59,
      isForceUser: false,
    },
    {
      id: 15,
      name: "Ezra Bridger",
      pilotingScore: 43,
      shootingScore: 67,
      isForceUser: true,
    },
    {
      id: 11,
      name: "Caleb Dume",
      pilotingScore: 71,
      shootingScore: 85,
      isForceUser: true,
    },
  ];


//---------filter-------
let judul1 = (" 1. Filter")
console.log(judul1)
  let newPersonal = personnel.filter(a => a.isForceUser == true)
  console.table(newPersonal);
//----------

//--------------Map---------
let judul2 = (" 2. Map")
console.log(judul2)
 const new1personal = personnel.map((b) => b.id);
 console.table(new1personal);

 const new2personal = personnel.map((c) => c.pilotingScore);
 console.table(new2personal);

 const new3personal = personnel.map((d) => d.shootingScore);
 console.table(new3personal);


//---------reduce------
let judul3 = (" 3. Reduce")
console.log(judul3)
 const new4personal = new1personal.reduce(function( accumulator, new1personal){
  return accumulator + new1personal});
 console.log(new4personal);

 const new5personal = new2personal.reduce(function( accumulator, new2personal){
  return accumulator + new2personal});
 console.log(new5personal);

 const new6personal = new3personal.reduce(function( accumulator, new3personal){
  return accumulator + new3personal});
 console.log(new6personal);

