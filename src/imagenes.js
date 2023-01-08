const getImagenesController = async(req, res, next) =>{
    try{
        res.send({
            status: 'error',
            message: 'No hay codigo',
        });
    }catch(error){
        next(error);
    }
};

const newImagenesController = async (req, res, next) =>{
    try{
        res.send({
            status: 'error',
            message: 'No hay codigo',
        });
    }catch(error){
        next(error);
    }
};
 const getImagenController = async (req, res, next)=>{
    try{
        res.send({
            status: 'error',
            message: 'No hay codigo',
        });
    }catch(error){
        next(error);
    }
 };
  const deleteImagenesController = async (req, res, next) =>{
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
    getImagenesController,
    newImagenesController,
    getImagenController,
    deleteImagenesController
   }