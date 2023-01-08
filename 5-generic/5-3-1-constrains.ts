/**
 * @description 세부적인 조건 constrains(2)
 * 조건부를 사용하여 좀더 세밀하게 타입을 제한해서 정의!
 * <K extends keyof T>
 */
const obj = {
  name: "ellie",
  age: 20,
};

const obj2 = {
  animal: "🐕",
};

console.log(getValue(obj, "name")); // ellie
console.log(getValue(obj, "age")); // 20
console.log(getValue(obj2, "animal")); // 🐕

// ✅ <extends keyof T>를 추가해야 T[K] 및 obj[key] 가능!!
// Type 'K' cannot be used to index type 'T'

function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
