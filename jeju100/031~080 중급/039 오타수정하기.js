/*
혜원이는 평소 영타가 빠르고 정확한 것을 친구들에게 자랑하고 다녔습니다. 
반 친구들이 혜원이의 타자 속도가 빠르다는 것을 모두 알게 되자 혜원이는 모두의 앞에서 타자 실력을 보여주게 됩니다. 

그런데 막상 보여주려니 긴장이 되서 문장의 모든 e를 q로 잘못 친 것을 발견했습니다. 
혜원이는 프로그램을 돌려 재빠르게 모든 q를 e로 바꾸는 프로그램을 작성하려고 합니다.

문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.

입력 : querty
출력 : euerty

입력 : hqllo my namq is hyqwon
출력 : hello my name is hyewon

*/

console.log("querty".split("q").join("e"));
console.log("hqllo my namq is hyqwon".split("q").join("e"));

console.log("querty".replace(/q/g, "e"));
console.log("hqllo my namq is hyqwon".replace(/q/g, "e"));
