/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = (isBadVersion) => {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return (n) => {
    const result = {};
    let left = 1;
    let right = n;

    let i = Math.floor((left + right) / 2);

    while (true) {
      result[i] = isBadVersion(i);

      /* 종료 조건 */
      if ((result[i - 1] === false || i === 1) && result[i] == true) return i;
      if (result[i] === false && result[i + 1] == true) return i + 1;

      /* 범위 조정 */
      if (result[i] === true) right = i - 1;
      if (result[i] === false) left = i + 1;

      i = Math.floor((right + left) / 2);
    }
  };
};
