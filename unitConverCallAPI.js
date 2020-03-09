const axios = require("axios");

async function getValueConverted(data) {
  return axios({
    method: "POST",
    url: "http://localhost:4000/unitConvertor",
    data: data
  });
}
async function getunits(data1) {
  var a = data1.type1;
  var url = "http://localhost:4000/unitType/" + a;
  return axios({
    method: "GET",
    url: url
  });
}

async function gettype() {
  return axios({
    method: "GET",
    url: "http://localhost:4000/type"
  });
}
exports.getValueConverted = getValueConverted;
exports.getunits = getunits;
exports.gettype = gettype;
