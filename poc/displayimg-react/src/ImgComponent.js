import React, {Component} from "react";
//src="https://firebasestorage.googleapis.com/v0/b/teste-gabriel-sofia.appspot.com/o/imagens%2Fpavimentadas%2Foriginais%2F-7.9607_-34.82984999999999_heading%3D180.png?alt=media&token=e659773e-daa6-4bb4-81d0-181a124a677e" 
//src="https://firebasestorage.googleapis.com/v0/b/teste-gabriel-sofia.appspot.com/o/imagens%2Fpavimentadas%2Ftransform%2F-7.9607_-34.82984999999999_heading%3D180.png--7.997429999999999_-34.886790000000005_heading%3D135.png?alt=media&token=0b094a35-8393-4e15-b2eb-0af2bcc2911b"
class ImgComponent extends Component{
    render(){
        return(
            <div>
                <img 
                src="https://firebasestorage.googleapis.com/v0/b/teste-gabriel-sofia.appspot.com/o/imagens%2Fpavimentadas%2Ftransformadas%2F-7.9607_-34.82984999999999_heading%3D180.png--7.997429999999999_-34.886790000000005_heading%3D135.png?alt=media&token=0b094a35-8393-4e15-b2eb-0af2bcc2911b"
                alt="falha no carregamento da imagem"
                />
            </div>
        );
    }
}

export default ImgComponent;