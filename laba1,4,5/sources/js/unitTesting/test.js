test("Check doublyLinkedList::append", async () => {
    let module = await import("../doublylinkedList.js")
    let containerList = new module.doublyLinkedList()

    containerList.append({"something" : 2})
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