function contarAdultos(pacientes){
    const vistos = new Set();

   pacientes.forEach(p => {
    const chave = `${p.nome}|${p.idade}`;
    vistos.add(chave); 
   });

   const adultos = Array.from(vistos).filter(chave => {
    const idade = Number (chave.split('|')[1]);
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