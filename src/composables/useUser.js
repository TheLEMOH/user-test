import { computed, shallowRef } from "vue";
import getUser from "../core/data/userService";
import User from "../core/models/user";

export default function useUser() {
    // Здесь создаем "Пустого" пользователя, чтобы все поля работали. Это отображено в App.vue в watch. Без этого пришлось бы писать if
    const user = shallowRef(new User({ name: '', surname: '' }))

    // Здесь получение пользователя от сервера. Сервера нет, понятное дело, просто есть некая функция, которая вернет типа данные от сервера
    // Получаем данные и на их основе создаем нового пользователя с полями
    const login = () => {
        const result = getUser()
        //Здесь мы кладем данные в user через value, потому что это реактивный объект. Мы работает по правилам vue и просто заменить константу не можем.
        user.value = new User(result)
    }

    //Выход из системы. Сброс пользователя. 
    // Мы не пишем null или undefined, мы создаем пустового пользователя, чтобы октрытые страницы/компоненты смогли правильно обработать изменения без if. 
    const logout = () => {
        user.value = new User({ name: '', surname: '' })
    }

    // Вычисляем какой текст отобразить. Используется сокращенный if
    const guestText = computed(() => user.value.isGuest ? 'Это гость' : 'Это пользователь')

    return { user, guestText, login, logout }
} 