import UsuarioRepository from '../repositories/UsuarioRepository.js';

class UsuarioController {

    async index(req, res) { 
        const result = await UsuarioRepository.findAll();
        res.json(result);    
    }
    
    async show(req, res) { 
        const result = await UsuarioRepository.findById(req.params.id);
        res.json(result);
    }
    
    async store(req, res) { 
        const result = await UsuarioRepository.create(req.body.username, req.body.email, req.body.grupo)
        res.json(result);
    }
    
    async update(req, res) { 
        const result = await UsuarioRepository.update(req.body.username, req.body.email, req.body.grupo, req.params.id);
        res.json(result);
    }
    
    async delete(req, res) { 
        const result = await UsuarioRepository.delete(req.params.id);
        res.json(result);
    }


}

export default new UsuarioController();