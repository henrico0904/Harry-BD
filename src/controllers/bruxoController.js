//lógica , tratativa de erros e regras de negócio

//importar model
import * as BruxoModel from './../models/bruxoModel.js'

export const listarTodos = async (req, res) => {
    try {
        const bruxos = await BruxoModel.findAll()

        if(!bruxos || bruxos.length === 0){
            res.status(404).json({
                total: bruxos.length,
                mensagem: 'Mão há bruxos na lista',
                bruxos 
            })
        }

        res.status(200).json({
            total: bruxos.length,
            mensagem: 'Lista de Bruxos',
            bruxos
        })

    } catch (error) {
        res.status(500).json ({
            erro: 'Erro interno do servidor',
            detalhes: error.message,
            status: 500
        })
    }
}