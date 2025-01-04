# Unexpected Type Error in TypeScript Function
This example demonstrates a common TypeScript type error: Argument of type 'string' is not assignable to parameter of type 'number'. This can happen unexpectedly when dealing with functions and their parameters, particularly in larger projects with complex type systems.

## Bug
The provided code contains a simple addition function. It fails to compile because it attempts to pass a string where a number is expected.

## Solution
The solution involves using a type guard or input validation to ensure that only numbers are passed as arguments to the function.