var x=0, y=0, z=0;
function displayValues(){
  console.log("X=%d; Y=%d; Z=%d", x, y, z);
}
function updateX(){
  x += 1;
}
function updateY(){
  y += 1;
}
function updateZ(){
  z += 1;
  displayValues();
}

function updateall(){
setInterval(updateX, 500);
setInterval(updateY, 1000);
setInterval(updateZ, 2000);
}

exports.simpleinterval = simpleinterval;
exports.updateX = updateX;
exports.updateY = updateY;
exports.updateZ = updateZ;
exports.displayValues = displayValues;
exports.updateall = updateall;
