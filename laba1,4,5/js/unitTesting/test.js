export async function runTest() {
    'use strict'
  
    async function it(desc, fn) {
        try {
            await fn()
            console.log(desc)
            console.log("\tpassed");
        } 
        catch (error) {
            console.log('\n')
            console.log(desc)
            console.error("\t", error)
        }
    }
    
    it('doublyLinkedList:append() test', () => checkLinkedListAppend())
    it('doublyLinkedList:delete() test', () => checkLinkedListDelete())
}

const checkLinkedListAppend = async () => {
    const module = await import("../doublylinkedList.js")
    let container = new module.doublyLinkedList()

    container.append({"somthing" : 2})
    if(container.size == 0) {
        throw new Error("append method does not work properly")
    }
}

const checkLinkedListDelete = async () => {
    const module = await import("../doublylinkedList.js")
    let container = new module.doublyLinkedList()

    container.append({"something" : 2})
    container.delete("something", "==", "2")

    if(container.size != 0) {
        throw new Error("delete method does not work properly")
    }
}