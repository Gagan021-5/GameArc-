

const handler = (reqhandler) => {
    return(req,res,next)=>{
        Promise.resolve(reqhandler(req,res,next).catch((err)=> next(err)));
    }
    
}

export {handler}