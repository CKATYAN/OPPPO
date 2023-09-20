import {getCommandList} from "./fileHandler.js"
import {Pencil, Pen, Paper} from "./stationaryClass.js"
import {doublyLinkedList} from "./doublylinkedList.js"

let container = new doublyLinkedList()

export async function handleScript() {
    const commandList = await getCommandList()

    for(const [index, command] of commandList.entries()) {
        try {
            let cases = {
                "add" : () => addFunction(...command.operators),
                "rem" : () => remFunction(...command.operators),
                "print" : () => printFunction()
            }
    
            if(cases[command.operand]) cases[command.operand]()
            else throw new Error("INVALID_COMMAND")
        }

        catch (error) {
            console.error(`error in line ${index}: "${error.message}"`)
        }
    }
}

const addFunction = (itemClass, ...operators) => {
    let object = {}
    let cases = {
        "pencil" : () => {object = new Pencil(...operators)},
        "pen" : () => {object = new Pen(...operators)},
        "paper" : () => {object = new Paper(...operators)}
    }

    if (cases[itemClass]) cases[itemClass]()
    else throw new Error("INVALID_CLASS_TYPE")

    container.append(object)
}

const remFunction = (...operators) => {
    container.delete(...operators)
}

const printFunction = () => {
    console.log(container.getListInArray())
}