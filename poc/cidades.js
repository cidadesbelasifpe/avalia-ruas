const db = require('./auth')

const create = async(data) => {
    const cidade = await db.collection('cidades').doc()
    await cidade.set(data)
    
    
}

const findAll = async() => {
    const cidadesDB = await db.collection('cidades').get()

    if(cidadesDB.empty){
        return []
    }
    const cidades = []

    cidadesDB.forEach(cidade => {
        cidades.push({
            ...cidade.data(),
            id: cidade.id
        })
    })

    return cidades
}

const getCidadeByNome = async(nome) => {
    const cidadesDB = db.collection('cidades')
    const snapshot = await cidadesDB.where('nome','==',nome).get()
    if(snapshot.empty){
        console.log('nenhuma cidade encontrada')
        return;
    }
    
    var cidade = {}
    snapshot.forEach(doc => {
        
        cidade = {
            ...doc.data(),
            id: doc.id
        } 
        
        
        
    })

    return cidade
    /*console.log("cidade", cidade)
    const cidadeRef = db.collection('cidades').doc(cidade.id)
    console.log("cidadeRef.data()",cidadeRef.data())
    return cidadeRef*/

}

const remove = async(id) => {
    const cidade = db.collection('cidades').doc(id)
    await cidade.delete()
}

const update = async(id,data) => {
    const cidade = db.collection('cidades').doc(id) 
    await cidade.update(data)
}

module.exports = {
    create,
    findAll,
    getCidadeByNome,
    update,
    remove
}