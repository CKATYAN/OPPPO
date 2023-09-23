#load "modules/FileHandler.fs"
open FileHandler

module Functions =
    let addFunction (operators:string array) =
        for element in operators do
            printfn "%A" element

    let remFunction (operators:string array) =
        for element in operators do
            printfn "%A" element

    let printFunction () =
        printfn "dfd"

    for command in commandList do
        match command[0] with
        | "add" -> addFunction command[1..]
        | "rem" -> remFunction command[1..]
        | "print" -> printFunction ()
        | _ -> printfn "error"