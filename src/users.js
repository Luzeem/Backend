
//Controladores para las peticiones de usuarios

const userController = async (req, res, next) =>{
try{
    
    console.log(req.body);
    res.send({
        status: 'error',
        message: 'No hay codigo'
    });
} catch(error){
next(error);//cualquier error en el catch lo pasara a next y next al middleware de errores.
}
};

const getUserController = async(req, res, next) =>{
try{
    res.send({
        status: 'error',
        message: 'No hay codigo',
    });
}catch(error){
    next(error);
}
};

const loginController = async (req, res, next) =>{
    try{
        res.send({
            status: 'error',
            message: 'No hay codigo',
        });
    }catch(error){
        next(error);
    }

};

module.exports = {
 userController,
 getUserController,
 loginController,

};