const getSum = (a, b) => {
  // ex) 1111 100

  while (b != 0) {
    /**
     * 1) a+b 자릿수가 올라가야할 digit을 찾는 단계
     * 연산: AND
     * - 0 AND 0 => 0
     * - 0 AND 1 => 0
     * - 1 AND 0 => 0
     * - 1 AND 1 => 1
     */
    let carryHint = a & b; // ex) 0100, 1000, 10000, 0
    /**
     * 2) a에서 살려야할 1 살리는 단계
     * 연산: XOR
     * - 0 XOR 0 => 0
     * - 0 XOR 1 => 1
     * - 1 XOR 0 => 1
     * - 1 XOR 1 => 0
     */
    a = a ^ b; // ex) 1011, 0011, 10011, 10011
    /**
     * 3) a+b 자릿수 digit을 실제로 올려주는 단계
     * 연산: Left Shift
     * - 1000 << 1 => 10000
     */
    b = carry = carryHint << 1; // ex) 1000, 10000, 100000, 0
  }

  return a;
};
