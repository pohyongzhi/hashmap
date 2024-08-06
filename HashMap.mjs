import { LinkedList } from "./LinkedList.mjs";

class HashMap {
    constructor() {
        this.bucket = new Array(16);
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    set(key, value) {
        const hashCode = this.hash(key) % 16;

        this.bucket[hashCode] = value;
    }

    print() {
        for (let i = 0; i < this.bucket.length; i++) {
            console.log(i + " " + this.bucket[i]);
        }
    }
}

const test = new HashMap();

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// console.log(test.bucket);
test.print();
