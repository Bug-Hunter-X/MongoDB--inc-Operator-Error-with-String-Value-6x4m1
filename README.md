# MongoDB $inc Operator Error with String Value

This repository demonstrates a common error when using the `$inc` operator in MongoDB.  The `$inc` operator is used to increment a numerical field.  However, if you provide it with a string instead of a number, MongoDB will throw an error.

## Bug

The provided JavaScript code shows how to reproduce the error: It attempts to increment the 'age' field of a document with a string value. This will result in a MongoDB error.

## Solution

The solution involves ensuring the value being used with `$inc` is a number. The corrected JavaScript code shows how to fix the error.