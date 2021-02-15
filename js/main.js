alert('Угадайте цвет');

const color = 'white';
let i = 1;
do {
    let userColor = prompt('Ваш вариант ?', 'Может быть зеленый?' );
    if (userColor !== color){
        alert('Не угадал');
    }else if (userColor == color){
        alert('Угадал');
        break
    }else if (userColor == null){
        alert('Вы отменили ввод');
    }
    i++

}while (i < 4)
