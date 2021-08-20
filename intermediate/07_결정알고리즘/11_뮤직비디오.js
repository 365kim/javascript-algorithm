/*
결정 알고리즘 (이분검색)

DVD에는 총 N개의 곡이 들어가는데, DVD에 녹화할 때에는 라이브에서의 순서가 그대로 유지 되어야 한다.
즉, 1번 노래와 5번 노래를 같은 DVD에 녹화하기 위해서는 1번과 5번 사이의 모든 노래도 같은 DVD에 녹화해야 한다.
또한 한 노래를 쪼개서 두 개의 DVD에 녹화하면 안된다.
지니레코드 입장에서는 이 DVD가 팔릴 것인지 확신할 수 없기 때문에 이 사업에 낭비되는 DVD를 가급적 줄이려고 한다.
고민 끝에 지니레코드는 M개의 DVD에 모든 동영상을 녹화하기 로 하였다. 이 때 DVD의 크기(녹화 가능한 길이)를 최소로 하려고 한다.
그리고 M개의 DVD는 모두 같은 크기여야 제조원가가 적게 들기 때문에 꼭 같은 크기로 해야 한다.


조영필이 라이브에서 부른 순서대로 부른 곡의 길이가 분 단위로(자연수) 주어진다.
부른 곡의 길이는 10,000분을 넘지 않는다고 가정하자.
M(1≤M≤N)
*/

const solution = (songs, m) => {
  let start = Math.min(...songs);
  let end = songs.reduce((acc, cur) => (acc += cur), 0);
  let mid;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);

    if (start === mid) {
      break;
    }

    const sums = Array.from({ length: m }, () => 0);
    let i = 0;
    let okay = true;

    for (const song of songs) {
      if (sums[i] + song < mid) {
        sums[i] += song;
        continue;
      }

      i++;

      if (i >= m) {
        okay = false;
        break;
      }
    }

    if (okay) {
      end = mid;
    } else {
      start = mid;
    }
  }
  return mid;
};

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));
