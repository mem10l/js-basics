let persona = {
    vārds: "Andzji",
    vecums: 16,
    IsStudent: true,
    Kurss: "PT"
}

console.log(persona.vārds);
console.log(persona["vārds"]);

if (persona.vecums >=18) {
    console.log(persona.vārds + " Ir pilngadīga");
} else{ 
    persona.vārds + "Nav pilngadīgs"
}
if (IsStudent = true) {
    console.log("Ir students")
}
console.log(persona.Kurss + "24")