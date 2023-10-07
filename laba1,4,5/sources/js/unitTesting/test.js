test("Check doublyLinkedList::append", async () => {
    let module = await import("../doublylinkedList.js")
    let containerList = new module.doublyLinkedList()

    containerList.append({"itemPrice" : 2.99})
    expect(containerList.size).toStrictEqual(1)
})

test("Check doublyLinkedList::delete", async () => {
    let module = await import("../doublylinkedList.js")
    let containerList = new module.doublyLinkedList()

    containerList.append({"something" : 2})
    containerList.delete("something", "==", 2)
    expect(containerList.size).toStrictEqual(0)
})

test("Check doublyLinkedList::toArray", async () => {
    let module = await import("../doublylinkedList.js")
    let containerList = new module.doublyLinkedList()

    containerList.append({"something" : 2})
    let array = containerList.toArray()
    expect(array[0]).toStrictEqual({"something" : 2})
})

test("Custom unit test", async () => {
    let module = await import("../doublylinkedList.js")
    let containerList = new module.doublyLinkedList()

    containerList.append({"head" : 2})
    containerList.append({"mid" : 4})
    containerList.append({"tail" : 5})

    containerList.delete("mid", "==", 4)
    containerList.delete("tail", "==", 5)
    containerList.delete("head", "==", 2)
    
    expect(containerList.size).toStrictEqual(0)
})