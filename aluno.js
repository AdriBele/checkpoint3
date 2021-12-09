const aluno = {
    listaAlunos: [],
    
    adicionarAlunos: function (nome, quantidadeFaltas, notas) {
        this.listaAlunos.push({
            nome: nome,
            quantidadeFaltas: quantidadeFaltas,
            notas: notas,
            media: 0,
        });
    },
    faltas: function () {
        this.quantidadeFaltas++;
        return this.quantidadeFaltas;
    },
    mediaAluno: function () {
        let total;

        this.listaAlunos.forEach(aluno => {
            total = 0;

            aluno.notas.forEach(nota => {
                total += nota;
            });

            aluno.media = total / aluno.notas.length;

        });
    
    }
}

// aluno.adicionarAlunos('Adriana', 2, [10, 8, 9]);
// aluno.adicionarAlunos('Andrea', 3, [9, 8, 7]);
// aluno.adicionarAlunos('Andressa', 4, [8, 7, 6]);
// aluno.adicionarAlunos('Lucia', 5, [7, 7, 8]);
// aluno.mediaAluno();

// console.log(aluno.listaAlunos);
// console.log(aluno.faltas());
// console.log(aluno.listaAlunos);

module.exports = aluno;
