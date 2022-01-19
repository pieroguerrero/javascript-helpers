const ftoc = function (deg) {
  if (typeof deg === "number") {
    return Number(((deg - 32) * (5 / 9)).toFixed(1));
  } else return "ERROR";
};

const ctof = function (deg) {

  if (typeof deg === "number") {
    return Number(((deg * (9 / 5)) + 32).toFixed(1));
  } else return "ERROR";
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
