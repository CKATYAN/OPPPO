#load "StationaryClass.fsx"

let private getObjectPropertyValue object property =
    object.GetType().GetProperty(property).GetValue(object)

module Functions =
    let mutable container : list<StationaryClass.Stationary> = []

    let add (operators:string array) =
        let classItem = operators[0]
        let properties = operators[1..]

        container <- List.append container [
            match classItem with
            | "Pencil" -> properties |> StationaryClass.Pencil
            | "Pen" -> properties |> StationaryClass.Pen
            | "Paper" -> properties |> StationaryClass.Paper
            | _ -> failwith "INVALID_CLASS_TYPE"
        ]

    let rem (operators:string array) =
        for item in container do
            let value = 
                match item with 
                | :? StationaryClass.Pencil as obj -> getObjectPropertyValue obj operators[0]
                | :? StationaryClass.Pen as obj -> getObjectPropertyValue obj operators[0]
                | :? StationaryClass.Paper as obj -> getObjectPropertyValue obj operators[0]
                |_ -> failwith "INVALID_ITEM"
            match operators[1] with
            | "=" -> if (float (string value) = float (string operators[2])) 
                        then container <- List.filter(fun x -> x <> item) container
            | ">" -> if (float (string value) > float (string operators[2])) 
                        then  container <- List.filter(fun x -> x <> item) container
            | "<" -> if (float (string value) < float (string operators[2])) 
                        then container <- List.filter(fun x -> x <> item) container
            |_ -> failwith "INVALID_OPERATORs"

    let print () =
        for item in container do
            printfn "%A" item