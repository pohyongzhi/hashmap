## HashMap Class

The `HashMap` class is an implementation of a hash map data structure in JavaScript. It uses an array of `Node` objects to store key-value pairs.

### Properties

-   **size**: Tracks the number of key-value pairs in the hash map.
-   **capacity**: Initial size of the bucket array (default is 16).
-   **bucket**: Array that holds the nodes, initially filled with `null`.

### Methods

-   **constructor()**: Initializes the `bucket` array with the specified `capacity`.

-   **hash(key)**: Computes a hash code for the given key. Uses a prime number to distribute the hash values evenly.

-   **calculateLoadFactor()**: Returns the ratio of the number of elements (`size`) to the length of the `bucket` array.

-   **resizeAndRehash()**: Doubles the size of the `bucket` array and rehashes all existing key-value pairs into the new array.

-   **set(key, value)**: Adds a key-value pair to the hash map. If the load factor exceeds 0.75, the map is resized and rehashed. Uses separate chaining to handle collisions.

-   **get(key)**: Retrieves the value associated with the given key. Returns `null` if the key is not found.

-   **has(key)**: Checks if the given key exists in the hash map. Returns `true` if found, otherwise `false`.

-   **length()**: Returns the number of key-value pairs in the hash map.

-   **clear()**: Resets the `bucket` array to its initial state with `null` values.

-   **keys()**: Returns an array of all the keys in the hash map.

-   **values()**: Returns an array of all the values in the hash map.

-   **entries()**: Returns an array of key-value pairs as arrays (i.e., `[key, value]`).

-   **print()**: Logs each bucket index and its content to the console.

### Usage Example

```javascript
const map = new HashMap();
map.set("name", "Alice");
console.log(map.get("name")); // Outputs: Alice
console.log(map.keys()); // Outputs: ['name']
console.log(map.values()); // Outputs: ['Alice']
console.log(map.entries()); // Outputs: [['name', 'Alice']]
```
