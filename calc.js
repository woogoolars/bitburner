/** @param {NS} ns */
export async function main(ns) {
function toRad(theta) {let love = theta*Math.PI/180; return love}
let degrees = await ns.prompt("Degrees", {type:"text"})
let mass = await ns.prompt("Mass of object", {type:"text"})
let mew = await ns.prompt("Coefficient of friction", {type:"text"})
let math = (mass*9.8*(Math.sin(toRad(degrees)))-(mew*mass*9.8*(Math.cos(toRad(degrees)))))/mass
ns.tprint(math)
}
