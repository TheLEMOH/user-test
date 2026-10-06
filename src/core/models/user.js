export default class User {
    constructor({ name, surname }) {
        this.name = name
        this.surname = surname
        this.isGuest = this.setGuest({ name, surname })
    }

    getName() {
        //Я думаю тут ничего объяснять не надо
        return this.name
    }

    getSurname() {
        return this.surname
    }

    setGuest({ name, surname }) {
        // Можно вычислить является ли пользователь гостем по другим полям, например по JWT, я сделал по имени и фамилии. 
        // В данном случае, наверное, это не влияет на концепцию. Если JWT есть, то он точно не гость, я думаю это понятно.
        if (!name && !surname) {
            return true
        }
        else {
            return false
        }

    }
}