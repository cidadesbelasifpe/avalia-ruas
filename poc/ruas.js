const db = require('./auth')
const ruaRef = []
const create = async(data) => {
    const ruaRef = await db.collection('ruas').doc()
    await ruaRef.set(data)
    
}

const findAll = async() => {
    const ruasRef = await db.collection('ruas').get()
    if(ruasRef.empty)
        return []
    const ruas = []

    ruasRef.forEach(element => {
        ruas.push({
            ...element.data(),
            id: element.id
        })
    });

    return ruas;
}

const update = async(id, data) => {
    const ruaRef = db.collection('ruas').doc(id)
    await ruaRef.update(data)
}

const updateNomeByNome = async(nome, novoNome) => {
    ruaRef = await getRuaRefByNome(nome)
    console.log(ruaRef)
    await ruaRef.update({nome: novoNome})
}

const getRuaRefByNome = async(nome) => {
    const ruasDB = db.collection('ruas')
    const snapshot = await ruasDB.where('nome','==',nome).get()
    if(snapshot.empty){
        console.log('nenhuma rua encontrada')
        return;
    }
    
    var rua = {}
    snapshot.forEach(doc => {
       
        rua = {
            ...doc.data(),
            id: doc.id
        } 
        
        
        
    })
    
    
    const ruaRef = db.collection('ruas').doc(rua.id)
    
    return ruaRef

}

module.exports = {
    create,
    findAll,
    updateNomeByNome
    
}