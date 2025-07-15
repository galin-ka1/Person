const persons = [];
let totalCounter = 0;

const addPerson = document.getElementById('addPerson');

addPerson.onclick = function () {
    //TODO Person must be unique. add person to list with ButtonDel.
    // If person added, total will be increment
    // If person removed, total will be decrement
    // functionality with remove is optional
    //при удалении через кнопку х - должен ли человек удаляться из массива persons и уменьшаться счётчик?

    const person = {};

    person.id = document.getElementById('personId').value.trim();
    person.name = document.getElementById('firstName').value.trim();
    person.lastName = document.getElementById('lastName').value.trim();
    person.age = +document.getElementById('age').value;

    let unique = findPersonById(persons, person.id);// проверяем на уникальность
    if (unique !== -1) {
        alert('Person is already exist');
        return;
    }
    persons.push(person);// Добавляем в массив и увеличиваем счётчик
    totalCounter += 1;
    document.getElementById('totalPersons').textContent = `Total persons: ${totalCounter}`;// записывает в totalcounter

    const li = document.createElement("li");// Создаём элемент списка Persons

    li.textContent = `ID: ${person.id}, name: ${person.name}, lastName: ${person.lastName}, age: ${person.age} `;

    li.appendChild(createButtonDel(person, li)); // Добавляем кнопку удаления

    document.getElementById('personsList').appendChild(li);

    document.getElementById('personId').value = "";// Очищаем input-поля
    document.getElementById('firstName').value = "";
    document.getElementById('lastName').value = "";
    document.getElementById('age').value = "";
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
