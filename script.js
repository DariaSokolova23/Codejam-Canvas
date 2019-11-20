let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

//debugger
let imageData = [];
if (window.image32src) {
    let pixelRatio = 8; //256/32;
    let arr32 = window.image32src;
    for (let line32 of arr32) {
        for (let k1 = 0; k1 < pixelRatio; k1++) {//повторим по длине и высоте 8 раз пиксели
            for (let column32 of line32) {
                for (let k = 0; k < pixelRatio; k++) {  //повторим по длине и высоте 8 раз пиксели          
                    for (let component of column32) {
                        imageData.push(component); //массив 32х32
                    }
                }
            }
        }
    }
    let imageDataObj = context.createImageData(256, 256);
    for (let i = 0; i < imageData.length; i++) {
        imageDataObj.data[i] = imageData[i];
    }
    context.putImageData(imageDataObj, 0, 0);
};
if (window.image4src) {
    let pixelRatio = 64; //256/4
    let arr4 = window.image4src;
    for (let line4 of arr4) {
        for (let n = 0; n < pixelRatio; n++) {
            for (let cell of line4) {
                for (let n1 = 0; n1 < pixelRatio; n1++) {
                    let r = parseInt(cell.substring(0, 2), 16);
                    let g = parseInt(cell.substring(2, 4), 16);
                    let b = parseInt(cell.substring(4, 6), 16);
                    let a = 255;
                    imageData.push(r, g, b, a)
                }
            }
        }
    }
    let imageDataObj = context.createImageData(256, 256);
    for (let i = 0; i < imageData.length; i++) {
        imageDataObj.data[i] = imageData[i];
    }
    context.putImageData(imageDataObj, 0, 0);

}