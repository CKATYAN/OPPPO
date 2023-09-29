module DoublyLinkedList

type Node<'a> = {
    data: 'a
    mutable prev: Node<'a> option
    mutable next: Node<'a> option 
}

type DoublyLinkedList<'a> = {
    mutable head: Node<'a> option
    mutable tail: Node<'a> option
    mutable size: int
}

let createLinkedList () = { head = None; tail = None; size = 0}

let addToEmpty newValue linkedList =  
    let node = Some { data = newValue; prev = None; next = None }
    linkedList.head <- node
    linkedList.tail <- node

let push newValue linkedList = 
    match linkedList.tail with
    | None   -> addToEmpty newValue linkedList
    | Some t -> 
        t.next <- Some { data = newValue; prev = Some t; next = None }
        linkedList.tail <- t.next

let delete value linkedList =
    let mutable currentNode = linkedList.head
    while not (currentNode = None) do
        match currentNode with
        | None -> ()
        | Some node when Some node = linkedList.head ->
            if (value = node.data) then
                linkedList.head <- node.next
                
        | Some node when Some node = linkedList.tail -> ()
        | Some node ->
            if (value = node.data) then
                let mutable prevNode = node.prev
                let mutable nextNode = node.next
                match prevNode with
                | None -> ()
                | Some node -> prevNode <- node.next
                match nextNode with
                | None -> ()
                | Some node -> nextNode <- node.prev
            currentNode <- node.next


let print linkedList =
    let mutable currentNode = linkedList.head
    while not (currentNode = None) do
        let Some node = currentNode
            printfn "%A" node.data
            currentNode <- node.next
        // match currentNode with
        // | None -> ()
        // | Some node -> 
        //     printfn "%A" node.data
        //     currentNode <- node.next
