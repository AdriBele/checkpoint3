
const Estudantes = require('./estudantes');

const Curso = {
    nome_curso: "Matemática",
    nota_aprov: 6,
    faltas_maxima: 10,
    alunos_inscritos: Estudantes.listaAlunos,
    inserir_alunos: function (nome, quantidadeFaltas, notas) {
        this.alunos_inscritos.push({
            nome: nome,
            quantidadeFaltas: quantidadeFaltas,
            notas: notas,
            media: 0,

        });
    },
    verificar_aprovacao: function (aluno) {
        if (aluno.quantidadeFaltas < Curso.faltas_maxima && aluno.media >= Curso.nota_aprov) {
            return aluno.nome +' está Aprovado(a)';
        } else if (aluno.quantidadeFaltas === Curso.faltas_maximas &&
            aluno.media > (Curso.nota_aprov * 1.1)) {
            return aluno.nome +' está Aprovado(a)';
        } else {
            return aluno.nome +' está Reprovado(a)';
        }
    },


    listaAprovados: function () {
        const lista = this.alunos_inscritos;
        const resultado = [];

        lista.forEach(function(aluno) {
          resultado.push(Curso.verificar_aprovacao(aluno));
            
        });
              return resultado;
    
    }

};

Estudantes.adicionarAlunos('Roger',5,[10,7,8]);
Estudantes.adicionarAlunos('Tori',7,[9,7,5]);
Estudantes.adicionarAlunos('Alice',3,[7,7,9]);
Estudantes.adicionarAlunos('Giovanna',1,[10,7,5]);
Estudantes.adicionarAlunos('Giulia',2,[8,6,9]);

Estudantes.mediaAluno();

console.log(Curso.listaAprovados());

module.exports = Curso;