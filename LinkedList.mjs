export class LinkedList {
    _head = null;

    append(value) {
        const node = new Node();
        node.value = value;

        if (this._head === null) {
            this._head = node;
        } else {
            let prev = null;
            let curr = this._head;

            while (curr !== null) {
                prev = curr;
                curr = curr.nextNode;
            }

            prev.nextNode = node;
        }
    }

    prepend(value) {
        const node = new Node();
        node.value = value;

        if (this._head === null) {
            this._head = node;
        } else {
            node.nextNode = this._head;
            this._head = node;
        }
    }

    size() {
        let count = 0;
        let curr = this._head;

        while (curr !== null) {
            count++;

            curr = curr.nextNode;
        }

        return count;
    }

    head() {
        return this._head;
    }

    tail() {
        let prev = null;
        let curr = this._head;

        while (curr !== null) {
            prev = curr;
            curr = curr.nextNode;
        }

        return prev;
    }

    at(index) {
        let count = 0;
        let curr = this._head;

        while (curr !== null) {
            if (count === index) {
                return curr;
            }

            curr = curr.nextNode;
            count++;
        }

        return null;
    }

    pop() {
        let prev = null;
        let curr = this._head;

        while (curr.nextNode !== null) {
            prev = curr;
            curr = curr.nextNode;
        }

        prev.nextNode = null;
    }

    contains(value) {
        let curr = this._head;

        while (curr !== null) {
            if (curr.value === value) {
                return curr;
            }

            curr = curr.nextNode;
        }
    }

    find(value) {
        let count = 0;
        let curr = this._head;

        while (curr !== null) {
            if (curr.value === value) {
                return count;
            }

            curr = curr.nextNode;
            count++;
        }
    }

    toString() {
        let result = "";

        let curr = this._head;

        while (curr !== null) {
            result += `( ${curr.value} ) -> `;

            curr = curr.nextNode;
        }

        result += "null";

        return result;
    }

    print() {
        let curr = this._head;

        while (curr !== null) {
            console.log(curr.value);

            curr = curr.nextNode;
        }
    }
}

export class Node {
    value = null;
    nextNode = null;
}
