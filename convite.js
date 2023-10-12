

function realizarTransformacoes() {
    const lidOne = document.querySelector('.lid.one');
    const lidTwo = document.querySelector('.lid.two');
    const letter = document.querySelector('.letter');

    lidOne.style.transform = 'rotateX(90deg)';
    lidOne.style.transitionDelay = '0.75s';

    lidTwo.style.transform = 'rotateX(180deg)';
    lidTwo.style.transitionDelay = '1.25s';

    letter.style.transform = 'translateY(-75%)';
    letter.style.transitionDelay = '2.5s';
}