let columnSet = new Set(['name', 'age', 'email']);

let column = 'address';

if (!columnSet.has(column)) {
    // If column is not in columnSet, add it
    columnSet.add(column);
}

console.log(columnSet);
// Output: Set { 'name', 'age', 'email', 'address' }
