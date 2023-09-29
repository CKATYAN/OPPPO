#load "StationaryClass.fsx"
#load "DoublyLinkedList.fsx"

module Functions =
    let container = DoublyLinkedList.createLinkedList ()

    let add (operators:string array) =
        let classItem = operators[0]
        let propreties = operators[1..]
        
        let item:StationaryClass.Stationary =
            match classItem with
            | "pencil" -> StationaryClass.Pencil(propreties)
            | "pen" -> StationaryClass.Pen(propreties)
            | "paper" -> StationaryClass.Paper(propreties)
            | _ -> failwith "INVALID_CLASS_TYPE"
        DoublyLinkedList.push item container

    let rem (operators:string array) =
        
        printfn "%A" operators

    let print () =
        DoublyLinkedList.print container