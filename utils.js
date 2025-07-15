function createButtonDel(person,li) {
    const buttonDel = document.createElement('button');
    buttonDel.append('X');
    buttonDel.style.color = 'red';
    buttonDel.style.marginLeft = '5px';

    return buttonDel;
}