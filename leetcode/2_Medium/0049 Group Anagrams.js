/**
 * @param {string[]} strs
 * @return {string[][]}
 */

const isAnagram = (str1, str2) => {
  if (str1.length !== str2.length) return false;

  for (const char of str1) {
    const index = str2.indexOf(char);

    if (index === -1) return false;
    str2 = str2.slice(0, index) + str2.slice(index + 1);
  }
  return str2 === '';
};

const groupAnagrams = (strs) => {
  const groups = [];

  for (const str of strs) {
    const index = groups.findIndex((group) => isAnagram(group[0], str));
    if (index === -1) {
      groups.push([str]);
    } else {
      groups[index].push(str);
    }
  }
  return groups;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
// [["bat"],["nat","tan"],["ate","eat","tea"]]

console.log(groupAnagrams(['']));
// [[""]]

console.log(groupAnagrams(['a']));
// [['a']];
