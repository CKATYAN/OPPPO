module FileHandler

let getCommandList (filePath:string) = seq {
    use streamReader = new System.IO.StreamReader (filePath)
    let mutable lineIndex = 0

    while not streamReader.EndOfStream do
        let line = streamReader.ReadLine ()

        lineIndex <- lineIndex + 1
        let operand = (line.Split " ")[0]
        let operators = (line.Split " ")[1..]

        yield (lineIndex, operand, operators)
}