const Compare = {
    "<" : (a,b) => {return a < b },
    "<=" : (a,b) => {return a <= b },
    ">" : (a,b) => {return a < b },
    ">=" : (a,b) => {return a <= b },
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

    append(object) {
        const newNode = new doublyLinkedListNode(object, null, this.#tail)
        if (this.#tail) {this.#tail.next = newNode}
        this.#tail = newNode
        if (!this.#head) {this.#head = newNode}
        
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
                    this.#head = deletedNode.next

                    if(this.#head) {this.#head.prev = null}
                    if(deletedNode === this.#tail) {this.#tail = null}
                    break
                case this.#tail:
                    this.#tail = deletedNode.prev
                    this.#tail.next = null
                    break
                default:
                    const prevNode = deletedNode.prev
                    const nextNode = deletedNode.next
                    
                    prevNode.next = nextNode
                    nextNode.prev = prevNode
            }
        }
    }

    getListInArray() {
        if(!this) {return null}
        
        let outputArray = []
        for (let currentNode = this.#head; currentNode; currentNode = currentNode.next) {
            outputArray.push(currentNode.object)
        }

        return outputArray
    }
}
