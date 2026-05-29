Day 1 revision.

we can create variables using let, const and var. all three have their own benefits.

in modern js we use let mostly because it's block level, it only works inside the block and that's the advantage of using let.

var is global level, if we create variable using var in block level it can be accessed outside the block and it's problematic so we ignore var while creating variables.

You can declare the same var variable twice without error — dangerous.

const is used when we need to create a variable whose value shouldn't be changed.

when we reassign variable which is created using const then what happens is:
JavaScript stops the reassignment completely
and throws an error immediately.

now let's talk about objects in js.

objects are widely used in js. we see object as key value pairs.
