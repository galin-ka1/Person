const persons = [];

addPerson.onclick = function () {
    //TODO Person must be unique. add person to list with ButtonDel.
    // If person added, total will be increment
    // If person removed, total will be decrement
    // functionality with remove is optional
    //при удалении через кнопку х - должен ли человек удаляться из массива persons и уменьшаться счётчик?

    const person = new Person(personId.value.trim(),
        firstName.value.trim(),
        lastName.value.trim(),
        age.value);

    if (findPersonById(persons, person.id) >= 0) {// проверяем на уникальность
        alert(`Person with id=${person.id} exist`);
        return;
    }
    persons.push(person);// Добавляем в массив
    const li = document.createElement("li");// Создаём элемент списка Persons
    li.append(person.toString(), buttonDel()); // Добавляем кнопку удаления
    buttonDel.addEventListener('click', () => {
        const index =findPersonById(persons,person.id);
    persons.splice(index,1);
    showPersonQuantity()
    });
    personsList.append(li);

    showPersonQuantity();// увеличиваем счётчик
    personId.value=firstName.value=lastName.value=age.value='';// Очищаем input-поля



   }
function showPersonQuantity(){
    totalPersons.textContent = `Total persons: ${persons.length}`;// записывает в totalcounter- это длина массива persons

}

function findPersonById(arr, id) {//функция проверки на уникальность по id
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
            return i;
        }
    }
    return -1;
}

function Person(id, firstName, lastName, age) {// конструктор для Person
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    this.toString = function () {
        return `ID: ${this.id}, name: ${this.firstName}, lastName: ${this.lastName},
                age: ${this.age}`;
    }
}

