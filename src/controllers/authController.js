const authService = require('../services/authService');

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const user = await authService.registerUser(name, email, password);

        return res.status(201).json({
            message: 'Usuário cadastrado com sucesso!',
            user
        });
    } catch (error) {

        console.error("Erro ao registrar usuário:", error);

        return res.status(error.cause || 500).json({
            message: error.message || 'Erro interno do servidor'
        });
    }
};

exports.login = async (req, res) => {
    const authHeader = req.headers.authorization;

    // Correção: remover "Bearer " corretamente
    const idToken = authHeader?.replace('Bearer ', '');

    if (!idToken) {
        return res.status(401).json({
            message: 'Token não enviado. Use Authorization: Bearer <token>'
        });
    }

    try {
        const user = await authService.authenticateUser(idToken);

        return res.status(200).json({
            message: 'Autenticação bem-sucedida',
            user
        });
    } catch (error) {
        console.error("Erro ao autenticar usuário:", error);

        return res.status(error.cause || 401).json({
            message: error.message || 'Falha na autenticação'
        });
    }
};
