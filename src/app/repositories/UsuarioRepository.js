import { consulta } from "../database/conexao.js";

class UsuarioRepository {

    //crud
    create(username, email, grupo) {
        const sql = `INSERT INTO tb_usuarios (username, email, grupo) VALUES (?, ?, ?)`;
        const values = [username, email, grupo];
        return consulta(sql, values, 'erro no registro');

     }

    findAll() {
        const sql = 'SELECT * FROM tb_usuarios;';
        return consulta(sql);

    }
    
    findById(id) { 
        const sql = `SELECT * FROM tb_usuarios where id = ?;`;
        return consulta(sql, id, 'falha na seleção do id');

    }
    
    update(username, email, grupo, id) { 
        const sql = 'UPDATE tb_usuarios SET username = ?, email = ?, grupo = ? WHERE id = ?';
        const values = [username, email, grupo, id];
        return consulta(sql, values, 'ocorreu um erro os dados não foram atualizados');

    }

    delete(id) { 
        const sql = 'DELETE FROM tb_usuarios WHERE id = ?;';
        return consulta(sql, id, 'dado ja foi deletado ou não existe.');
    }

}

export default new UsuarioRepository();