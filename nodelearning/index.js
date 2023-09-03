// export 만 사용했을 경우
// import { PI, getArea, getCircumference } from "./circle.js";
// console.log(PI, getArea(2), getCircumference(2));

// export 만 사용했을 경우 , 위를 간결하게 불러오는 방식
// import * as circle from "./circle.js";
// console.log(circle.PI, circle.getArea(2), circle.getCircumference(2));

//export default를 사용하면
// import circle from "./circle.js";
// console.log(circle.PI, circle.getArea(2), circle.getCircumference(2));

// -------------------------- lodash
import lodash from "lodash";

const arr = [1, 1, 3, 4, 5, 6, 1, 2, 3, 5];
const uniqueArr = lodash.uniqBy(arr); //중복된 배열 제거

console.log(uniqueArr);
