export async function runTest() {
    'use strict'
  
     function it(desc, fn) {
        try {
            fn()
            console.log(desc)
        } 
        catch (error) {
            console.log('\n')
            console.log(desc)
            console.error(error)
        }
    }
    
    it('kl', () => checkLinkedListPrepend("string"))
}

const checkLinkedListPrepend = async (input) => {
    const module = await import("../doublylinkedList.js")
    let container = new module.doublyLinkedList()
    container.append(input)

    
}