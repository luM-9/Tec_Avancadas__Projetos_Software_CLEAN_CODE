function removerDuplicados(pacientes) {
    const vistos = new Set();

    return pacientes.filter(paciente => {
        const identificador = `${paciente.nome}-${paciente.idade}`;

        if (vistos.has(identificador)) {
            return false;
        }

        vistos.add(identificador);
        return true;
    });
}

function contarAdultos(pacientes) {
    const pacientesUnicos = removerDuplicados(pacientes);

    return pacientesUnicos.filter(paciente => paciente.idade >= 18).length;
}

// Teste

const pacientes = [
    {nome: "Ana" ,  idade: 20},
    {nome: "Lu" ,  idade: 29},
    {nome: "Bel" ,  idade: 14},
    {nome: "Rafa", idade: 17},

];

console.log(contarAdultos(pacientes));