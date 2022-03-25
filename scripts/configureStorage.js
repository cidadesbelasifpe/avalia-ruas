const fs = require('fs')
var path = require('path');
const utilitarios = require('./uploadToFirestoreStorage')

function findFileByExt(folderPath, ext) 
{
    var files = fs.readdirSync(folderPath);
    var result = [];

    files.forEach( 

        function (file) {

            var newbase = path.join(folderPath,file);

            if ( fs.statSync(newbase).isDirectory() ){

                result = findFileByExt(newbase,ext,fs.readdirSync(newbase),result);

            } else             {

                if ( file.substr(-1*(ext.length+1)) == '.' + ext ){

                    result.push(newbase);

                } 

            }

        }

    )

    return result;

}

const isFolder = fileName => {
    return !fs.lstatSync(fileName).isFile()
  }


const folderPath = '/home/rafael/Pesquisa/Street Pavement/Pavement Type Perception Safety/fake_streets_unpav-to-pav/'



var locdirs = fs.readdirSync(folderPath).map(fileName => {
    return path.join(folderPath, fileName)
})
.filter(isFolder)

locdirs.forEach(dir => {
    
    var imgs = findFileByExt(dir,'png')
    console.log(imgs)
   
    utilitarios.upload_image(imgs[0])
    
    
})
