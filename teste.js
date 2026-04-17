function contarAdultos(pacientes) {
    const vistos = new Set();

    const unicos = pacientes.filter(paciente => {
        const identificador = `${paciente.nome}-${paciente.idade}`;

        if (vistos.has(identificador)) {
            return false;
        }

        vistos.add(identificador);
        return true;
    });

    const adultos = unicos.filter(paciente => paciente.idade >= 18);

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