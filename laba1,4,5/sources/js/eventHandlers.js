import {getCommandList} from "./fileHandler.js"
import {Pencil, Pen, Paper} from "./stationaryClass.js"
import {doublyLinkedList} from "./doublylinkedList.js"

//bad practice
let containerList = new doublyLinkedList()

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

    containerList.append(object)
}

const remFunction = (...operators) => {
    containerList.delete(...operators)
}

const printFunction = () => {
    let array = containerList.toArray()
    
    console.log("List:");
    for(const [index, element] of array.entries()) {
        console.log(index, element);
    }
}