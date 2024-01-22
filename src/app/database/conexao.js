import mysql from 'mysql'

const conexao = mysql.createConnection({
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'bd_sistema'
})

export const consulta = (sql, values = '', msgReject = 'ocorreu um erro inesperado') => {
    return new Promise((resolve, reject) => { 
            conexao.query(sql, values, (error, result) => {
                if (error) return reject(msgReject);

                const linha = JSON.parse(JSON.stringify(result));

                return resolve(linha);
            
            })
        })
}

export default conexao;