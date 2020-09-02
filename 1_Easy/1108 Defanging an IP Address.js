/* https://leetcode.com/problems/defanging-an-ip-address/ */

var defangIPaddr = function (address) {
  let pos = 0,
    newPos = 0;
  let result = "";

  while (true) {
    newPos = address.indexOf(".", pos);
    if (newPos == -1) break;
    result += address.slice(pos, newPos) + "[.]";
    pos = newPos + 1;
  }
  result += address.slice(pos);

  return result;
};
