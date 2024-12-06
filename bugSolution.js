```javascript
const query = { name: 'John Doe' };

// Correct usage of $inc operator
db.collection('users').updateOne(query, { $inc: { age: 1 } });
```