const ruas = require('./ruas')
const cidades = require('./cidades')

const testes = async() => {
    /*await cidades.create({
        nome: 'Recife'
    })*/

    
    /*const cidadeRef = await cidades.getCidadeRefByNome('Recife')
    //console.log(cidadeRef)
    await ruas.create({
        nome: 'av. rosa e silva',
        cidade: cidadeRef
    })*/

    /*
    await ruas.updateNomeByNome('av. rosa e silva', 'avenida rosa e silva')
    listaRuas = await ruas.findAll()
    console.log(listaRuas)
    */

    /*
    const listaCidades = await cidades.findAll()
    console.log(listaCidades)
    */

    /*var cidade = await cidades.getCidadeRefByNome('Garanhuns')
    console.log(cidade)
    console.log(cidade.id)
    await cidades.update(cidade.id,{nome: 'Caruaru'})*/
    
    var cidade = await cidades.getCidadeByNome('Caruaru')
    console.log('cidade após update:',cidade)
    

    await cidades.remove(cidade.id)
    var cidadeaposdelete = await cidades.getCidadeByNome('Caruaru')
    console.log('cidadeaposdelete:',cidadeaposdelete)

} 

testes()