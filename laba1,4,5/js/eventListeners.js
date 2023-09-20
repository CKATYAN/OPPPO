import {handleScript} from "./eventHandlers.js"
import {runTest} from "./unitTesting/test.js"

document.getElementById("runCode").addEventListener("click", handleScript)
document.getElementById("runTest").addEventListener("click", runTest)