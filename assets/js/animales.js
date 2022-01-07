export class Animal {
    constructor (nombre, edad, img, comentarios, sonido){
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }
    get Nombre(){
        return this._nombre
    }
    get Edad(){
        return this._edad
    }
    get Img(){
        return this._img
    }
    set Comentarios(comen){
        this._comentarios = comen;
    }
    get Sonido(){
        return this._sonido;
    }
}

export class Leon extends Animal {
    constructor (nombre, edad, comentarios){
        super(nombre, edad, 'assets/imgs/Leon.png', comentarios, 'assets/sounds/Rugido.mp3')
    }
    Rugir(){
        const play = $('#player');
        play.innerHTML = `<source src="${this.Sonido}" type="audio/mpeg">`
        play.play();
    }
}

export class Lobo extends Animal {
    constructor (nombre, edad, comentarios){
        super(nombre, edad, 'assets/imgs/Lobo.jpg', comentarios, 'assets/sounds/Aullido.mp3')
    }
    Aullar(){
        const play = $('#player');
        play.innerHTML = `<source src="${this.Sonido}" type="audio/mpeg">`
        play.play();
    }
}

export class Oso extends Animal {
    constructor (nombre, edad, comentarios){
        super(nombre, edad, 'assets/imgs/Oso.jpg', comentarios, 'assets/sounds/Gruñido.mp3')
    }
    Gruñir(){
        const play = $('#player');
        play.innerHTML = `<source src="${this.Sonido}" type="audio/mpeg">`
        play.play();
    }
}

export class Serpiente extends Animal {
    constructor (nombre, edad, comentarios){
        super(nombre, edad, 'assets/imgs/Serpiente.jpg', comentarios, 'assets/sounds/Siseo.mp3')
    }
    Sisear(){
        const play = $('#player');
        play.innerHTML = `<source src="${this.Sonido}" type="audio/mpeg">`
        play.play();
    }
}

export class Aguila extends Animal {
    constructor (nombre, edad, comentarios){
        super(nombre, edad, 'assets/imgs/Aguila.png', comentarios, 'assets/sounds/Chillido.mp3')
    }
    Chillar(){
        const play = $('#player');
        play.innerHTML = `<source src="${this.Sonido}" type="audio/mpeg">`
        play.play();
    }
}