import GeraCPF from './modules/geraCPF';
import './assets/CSS/style.css';

const btn  = document.querySelector('.btn');

btn.addEventListener('click', e => generate());

function generate() {

    const gera = new GeraCPF();
    const cpfGerado = document.querySelector('.result');
    cpfGerado.innerHTML = gera.geraNovoCpf();

}
