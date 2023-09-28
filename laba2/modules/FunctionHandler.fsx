#load "StationaryClass.fsx"

module Functions =
    let add (operators:string array) =
        let classItem = operators[0]
        let propreties = operators[1..]
        
        let item:StationaryClass.Stationary =
            match classItem with
            | "pencil" -> StationaryClass.Pencil(propreties)
            | "pen" -> StationaryClass.Pen(propreties)
            | "paper" -> StationaryClass.Paper(propreties)
            | _ -> StationaryClass.Pencil(propreties)
        printfn "%A" item

    let rem (operators:string array) =
        printfn "%A" operators

    let print () =
        printfn "dfd"