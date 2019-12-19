const aggregateData = require("../services/aggregator");

console.log("Root file");
console.log(aggregateData); //[AsyncFunction: aggregateData]

console.log("Root file as func.");
console.log(aggregateData()); //Promise { <pending> }

console.log("Root file as func. w/ await");
let a = async () => {
  return await aggregateData();
}
console.log(await aggregateData()); //Promise { <pending> }


// I am still receiving null/undefined when trying to access the results from aggregator.
// I have made index an async function and have attempted multiple diff. approaches to release the data.

// Will check with mentors tomorrow as to why this issue is still occuring, when it seems
// to work perfectly fine passing data between the services files themselves.

// ( ( Definitely need to read up on Promises! ) )
















const index = async (req, res) => {

  res.render("pages/home");
};

const dashboard = (req, res) => {
  res.render("pages/dashboard", { user: req.user });
};

module.exports = {
  index,
  dashboard
};
