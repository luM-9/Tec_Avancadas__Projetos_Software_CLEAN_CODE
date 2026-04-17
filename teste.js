function contarAdultos(pacientes){
    const vistos = new Set();

   pacientes.forEach(paciente => {
    const identificador = `${paciente.nome}|${paciente.idade}`;
    vistos.add(identificador); 
   });

   const adultos = Array.from(vistos).filter(identificador => {
    const partes = identificador.split('|');
    const idade = Number(partes[1]);
    return idade >= 18;
   });

   return adultos.length;
}

// Teste

const pacientes = [
    {nome: "Ana" ,  idade: 20},
    {nome: "Lu" ,  idade: 29},
    {nome: "Bel" ,  idade: 14},
    {nome: "Rafa", idade: 17},

];

console.log(contarAdultos(pacientes));