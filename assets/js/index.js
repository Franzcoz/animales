import { Animal } from './animales.js';
import { Leon } from './animales.js';
import { Lobo } from './animales.js';
import { Oso } from './animales.js';
import { Serpiente } from './animales.js';
import { Aguila } from './animales.js';

let lista = [];
const DibujarAnim = newan => {
  const card = $('#tarjetas');
  card.append(`<div class="col m-1 p-0 h-mia">
            <div class="card h-100">
              <img src=${newan.Img} class="card-img-top h-75" alt="...">
              <div class="card-body">
                <h5 class="card-title">${newan.Nombre}</h5>
                <a class="text-dark">
                  <img src="assets/imgs/audio.svg" class="card-img-top w-25" alt="...">
                </a>
              </div>
            </div>
          </div>
        </div>`);
}

$('#btnRegistrar').on('click', function() {
  const anim = $('#animal').val();
  console.log(anim)
  const ed = $('#edad').val();
  console.log(ed);
  const comen = $('#comentarios').val();
  console.log(comen);
  if (anim == 'Leon') {
    const animalnuevo = new Leon(anim, ed, comen);
    lista.push(animalnuevo);
    DibujarAnim(animalnuevo);
  } else if (anim == 'Lobo') {
    const animalnuevo = new Lobo(anim, ed, comen);
    lista.push(animalnuevo);
    DibujarAnim(animalnuevo);
  } else if (anim == 'Oso') {
    const animalnuevo = new Oso(anim, ed, comen);
    lista.push(animalnuevo);
    DibujarAnim(animalnuevo);
  } else if (anim == 'Serpiente') {
    const animalnuevo = new Serpiente(anim, ed, comen);
    lista.push(animalnuevo);
    DibujarAnim(animalnuevo);
  } else if (anim == 'Aguila') {
    const animalnuevo = new Aguila(anim, ed, comen);
    lista.push(animalnuevo);
    DibujarAnim(animalnuevo);
  }
  console.log(lista);
  })
//const Feli = new Leon(animal, edad, comen);
