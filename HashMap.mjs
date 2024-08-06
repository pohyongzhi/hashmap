import { Node } from "./Node.mjs";

export class HashMap {
    size = 0;
    capacity = 16;

    constructor() {
        this.bucket = new Array(this.capacity).fill(null);
    }

    hash(key) {
        let hashCode = 0;

        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }

        return hashCode;
    }

    calculateLoadFactor() {
        return this.size / this.bucket.length;
    }

    resizeAndRehash() {
        const oldBucket = this.bucket;
        this.bucket = new Array(oldBucket.length * 2).fill(null);
        this.size = 0;

        for (let i = 0; i < oldBucket.length; i++) {
            let currentNode = oldBucket[i];

            if (currentNode !== null) {
                while (currentNode !== null) {
                    this.set(currentNode.key, currentNode.value);
                    currentNode = currentNode.nextNode;
                }
            }
        }
    }

    set(key, value) {
        if (this.calculateLoadFactor() >= 0.75) {
            this.resizeAndRehash();
        }

        const hashCode = this.hash(key) % this.bucket.length;

        if (this.bucket[hashCode] === null) {
            this.bucket[hashCode] = new Node(key, value);
        } else {
            let currentNode = this.bucket[hashCode];

            while (currentNode.nextNode !== null) {
                currentNode = currentNode.nextNode;
            }

            currentNode.nextNode = new Node(key, value);
        }

        this.size++;
    }

    get(key) {
        const hashCode = this.hash(key) % this.bucket.length;

        if (this.bucket[hashCode] === null) {
            return null;
        }

        const currentNode = this.bucket[hashCode];

        while (currentNode !== null) {
            if (currentNode.key === key) {
                return currentNode.value;
            }
            currentNode = currentNode.nextNode;
        }
    }

    has(key) {
        const hashCode = this.hash(key) % this.bucket.size;

        if (this.bucket[hashCode] === null) {
            return false;
        } else {
            let currentNode = this.bucket[hashCode];

            while (currentNode !== null) {
                if (currentNode.key === key) {
                    return true;
                }

                currentNode = currentNode.nextNode;
            }
        }

        return false;
    }

    length() {
        return this.size;
    }

    clear() {
        this.bucket = new Array(this.capacity).fill(null);
    }

    keys() {
        let result = [];

        for (let i = 0; i < this.bucket.length; i++) {
            let currentNode = this.bucket[i];

            while (currentNode !== null) {
                result.push(currentNode.key);

                currentNode = currentNode.nextNode;
            }
        }

        return result;
    }

    values() {
        let result = [];

        for (let i = 0; i < this.bucket.length; i++) {
            let currentNode = this.bucket[i];

            while (currentNode !== null) {
                result.push(currentNode.value);

                currentNode = currentNode.nextNode;
            }
        }

        return result;
    }

    entries() {
        let result = [];

        for (let i = 0; i < this.bucket.length; i++) {
            let currentNode = this.bucket[i];

            while (currentNode !== null) {
                let singleResult = [];
                singleResult.push(currentNode.key);
                singleResult.push(currentNode.value);

                currentNode = currentNode.nextNode;
                result.push(singleResult);
            }
        }

        return result;
    }
}
