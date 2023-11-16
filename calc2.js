/** @param {NS} ns */
export async function main(ns) {
function toRad(theta) {let love = theta*Math.PI/180; return love}
let degrees = await ns.prompt("Degrees", {type:"text"})
let mass = await ns.prompt("Mass of object", {type:"text"})
let unitofmass = await ns.prompt("Unit of Mass", {type:"select", choices: ["kg", "N"]})
let unitlookingfor = await ns.prompt("What you are looking for", {type:"select", choices: ["T", "Tx", "Ty"]})
if(unitofmass == "kg") {mass = mass*9.8}
degrees = toRad(degrees)
let t = mass/Math.cos(degrees)
let tx = t*Math.sin(degrees)
let ty = mass
function result() {if(unitlookingfor=="T"){result = t; return result} if(unitlookingfor=="Tx"){result = tx; return result} if(unitlookingfor=="Ty"){result = ty; return result}}
ns.tprint(result())
}
