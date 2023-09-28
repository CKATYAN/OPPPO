#load "modules/FileHandler.fsx"
#load "modules/FunctionHandler.fsx"

module Main =
    let commandList = FileHandler.getCommandList "materials/commands.txt"
    for (lineIndex, operand, operators) in commandList do
        match operand with
        | "add" -> FunctionHandler.Functions.add operators
        | "rem" -> FunctionHandler.Functions.rem operators
        | "print" -> FunctionHandler.Functions.print ()
        | _ -> printfn "error in %A line" lineIndex