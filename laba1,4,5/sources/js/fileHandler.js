//bad practice
const filePath = "sources/materials/commands.txt"

const getFile = async (filePath) => {
    return await fetch(filePath)
        .then((response) => response.text())
        .then((file) => {return file})
        .catch(console.error)
}

export async function getCommandList() {
    const file = await getFile(filePath)
    const linedFile = file.split("\r\n")
    let commandList = []

    for (const lineOfFile of linedFile) {
        let [operand, ...operators] = lineOfFile.split(" ")

        commandList.push({
            "operand" : operand, 
            "operators" : operators
        })
    }
    
    return commandList
}