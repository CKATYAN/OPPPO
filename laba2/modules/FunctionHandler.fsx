#load "StationaryClass.fsx"

module Functions =
    let mutable container : list<StationaryClass.Stationary> = []

    let add (operators:string array) =
        let classItem = operators[0]
        let propreties = operators[1..]

        container <- List.append container [
            match classItem with
            | "Pencil" -> propreties |> StationaryClass.Pencil
            | "Pen" -> propreties |> StationaryClass.Pen
            | "Paper" -> propreties |> StationaryClass.Paper
            | _ -> failwith "INVALID_CLASS_TYPE"
        ]

    let rem (operators:string array) =
        for item in container do
            match item with
            | :? StationaryClass.Pencil as pencilObject ->
                let value = pencilObject.GetType().GetProperty(operators[0]).GetValue(pencilObject)
                if (string value = operators[2]) then 
                    container <- List.filter(fun x -> x <> item) container
            | :? StationaryClass.Pen as penObject ->
                let value = penObject.GetType().GetProperty(operators[0]).GetValue(penObject)
                if (string value = operators[2]) then 
                    container <- List.filter(fun x -> x <> item) container
            | :? StationaryClass.Paper as paperObject ->
                let value = paperObject.GetType().GetProperty(operators[0]).GetValue(paperObject)
                if (string value = operators[2]) then 
                    container <- List.filter(fun x -> x <> item) container
            | _ -> ()

    let print () =
        for item in container do
            printfn "%A" item