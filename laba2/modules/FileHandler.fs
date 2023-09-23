module FileHandler
    let getCommandList (filePath:string) = seq {
        use sr = new System.IO.StreamReader (filePath)
        while not sr.EndOfStream do
            let line = sr.ReadLine ()
            yield line.Split " "
    }
    let commandList = getCommandList "materials/commands.txt"
