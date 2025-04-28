/******************stack vs heap memory allocation*****************/

let a = 10; // stack memory allocation
let b = a; // stack memory allocation
b=12;
console.log(a," ",b) // 10 12
// a and b are primitive data types, so they are stored in stack memory. Changing b does not affect a.
// Primitive data types are stored in stack memory, and they are passed by value. This means that when you assign a primitive data type to another variable, a copy of the value is created in memory.

let obj1 = {
    name:"John",
    city: "New York"
}; // heap memory allocation

let obj2 = obj1; // heap memory allocation
obj2.name = "Jane";
console.log(obj1.name, " ", obj2.name) // Jane Jane
// obj1 and obj2 point to the same object in memory, so changing one affects the other
// Reference data types are stored in heap memory, and they are passed by reference. This means that when you assign a reference data type to another variable, both variables point to the same object in memory.
// In JavaScript, objects and arrays are reference data types, while strings, numbers, booleans, null, and undefined are primitive data types.
// This means that when you assign an object or array to another variable, both variables point to the same object or array in memory. If you change one, the other will also change. However, if you assign a primitive data type to another variable, a copy of the value is created in memory. If you change one, the other will not change.
// This is because primitive data types are stored in stack memory, while reference data types are stored in heap memory. Stack memory is faster to access than heap memory, but it is also limited in size. Heap memory is larger and can store more complex data structures, but it is slower to access.
// In summary, stack memory is used for primitive data types, while heap memory is used for reference data types. This affects how variables are assigned and how they behave when they are changed
// In JavaScript, objects and arrays are reference data types, while strings, numbers, booleans, null, and undefined are primitive data types.
// This means that when you assign an object or array to another variable, both variables point to the same object or array in memory. If you change one, the other will also change. However, if you assign a primitive data type to another variable, a copy of the value is created in memory. If you change one, the other will not change.