/**
 * @param {number[]} heights
 * @return {number}
 */

const maxArea = (heights) => {
  let answer = 0;
  let l = 0;
  let r = heights.length - 1;

  while (l < r) {
    const w = r - l;
    const h = Math.min(heights[l], heights[r]);
    const area = w * h;

    // answer 업데이트
    answer = Math.max(answer, area);

    // 다음 좌표 설정
    if (heights[l] < heights[r]) {
      let nextL = l;
      while (heights[l] >= heights[nextL] && nextL <= r) {
        nextL++;
      }
      l = nextL;
    } else {
      let nextR = r;
      while (heights[r] >= heights[nextR] && l <= nextR) {
        nextR--;
      }
      r = nextR;
    }
  }

  return Math.max(answer);
};

describe('My Solution', () => {
  test('case 1', () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });

  test('case 2', () => {
    expect(maxArea([1, 1])).toBe(1);
  });
});
