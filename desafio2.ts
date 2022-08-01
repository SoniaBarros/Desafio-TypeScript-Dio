// Como podemos melhorar o esse código usando TS? 
enum Profissao {ATRIZ, PADEIRO}

type Humano = {
    nome: string,
    idade: number,
    profissao: Profissao
}

let pessoa1: Humano = { 
    nome: "maria",
    idade: 29,
    profissao: Profissao.ATRIZ
}

let pessoa2: Humano= { 
    nome: "roberto",
    idade: 19,
    profissao: Profissao.PADEIRO
}

let pessoa3: Humano = {
    nome: "laura",
    idade: 32,
    profissao: Profissao.ATRIZ
}

let pessoa4: Humano = {
    nome: "carlos",
    idade : 19,
    profissao : Profissao.PADEIRO
}