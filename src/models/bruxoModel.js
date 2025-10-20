//no model que fazemos a consulta do banco de dados
//EX: SELECT * FROM bruxos, porem estamos usando o prisma
// que abstrai o comando SQL

//importar prisma client
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

//cria a variavel findAll e ja exporta
export const findAll = async() => {
    return await prisma.bruxo.findMany({
        orderBy: { nome: 'asc' }
    })
}

//crio a variavel findbyid e ja exporto
export const findById = async (id) => {
    return await prisma.bruxo.findUnique({
        where: { id: Number(id)}
    })
}