const Compare = {
    "<" : (a,b) => {return a < b },
    "<=" : (a,b) => {return a <= b },
    ">" : (a,b) => {return a > b },
    ">=" : (a,b) => {return a >= b },
    "==" : (a,b) => {return a == b },
}

class doublyLinkedListNode {
    constructor(object, next = null, prev = null) {
        this.object = object;
        this.next = next;
        this.prev = prev;
    }
}

export class doublyLinkedList {
    #head = null
    #tail = null
    #size = null

    get size() {
        return this.#size
    }

    append(object) {
        if(typeof object !== "object" || object === null) {
            throw new Error("APPEND_ITEM_IS_NOT_OBJECT_TYPE")
        }

        const newNode = new doublyLinkedListNode(object, null, this.#tail)
        if (this.#tail) {this.#tail.next = newNode}
        if (!this.#head) {this.#head = newNode}
        
        this.#tail = newNode
        this.#size++
        return this
    }

    delete(field, operator, value) {
        if(!this) {return null}

        let deletedNode = null
        for (let currentNode = this.#head; currentNode; currentNode = currentNode.next) {
            if (!Compare[operator](currentNode.object[field], value)) {continue}

            deletedNode = currentNode
            switch(deletedNode) {
                case this.#head:
                    this.#head = deletedNode?.next

                    if(this.#head) {this.#head.prev = null}
                    if(deletedNode === this.#tail) {this.#tail = null}

                    this.#size--
                    break
                case this.#tail:
                    this.#tail = deletedNode.prev
                    this.#tail.next = null

                    this.#size--
                    break
                default:
                    const prevNode = deletedNode.prev
                    const nextNode = deletedNode.next
                    
                    prevNode.next = nextNode
                    nextNode.prev = prevNode

                    this.#size--
            }
        }
    }

    toArray() {
        if(!this) {return null}
        
        let outputArray = []
        for (let currentNode = this.#head; currentNode; currentNode = currentNode.next) {
            outputArray.push(currentNode.object)
        }

        return outputArray
    }
}