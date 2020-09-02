/* https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/ */

var kidsWithCandies = function(candies, extraCandies) {
    let len = candies.length;
    let max = Math.max(...candies);
    let result = [];
    for (let i = 0; i < len; i++) {

        if (candies[i] + extraCandies >= max) {
            result.push(true);
            continue;
        } 
        result.push(false);
    }
    console.log(max);

    return result;
};

console.log(kidsWithCandies([2,3,5,1,3], 3));