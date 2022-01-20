export interface Paises {

    id: {
        M49: number,
        ISO_3166_1_ALPHA_2: string,
        ISO_3166_1_ALPHA_3: string
    },
    nome: {
        abreviado: string
    },
    area: {
        total: string,
        unidade: {
            nome: string,
            simbolo: string,
            multiplicador: number
        }
    },
    localizacao: {
        regiao: {
            id: {
                M49: number
            },
            nome: string
        },
        sub_regiao: {
            id: {
                M49: number
            },
            nome: string
        },
        regiao_intermediaria: string
    },
    linguas: [
        {
            id: {
                ISO_639_1: string,
                ISO_639_2: string
            },
            nome: string
        }
    ],
    governo: {
        capital: {
            nome: string
        }
    },
    unidades_monetarias: [
        {
            id: {
                ISO_4217_ALPHA: string,
                ISO_4217_NUMERICO: string
            },
            nome: string
        }
    ],
    historico: string
}