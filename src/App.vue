<script setup>
import { ref, watch } from "vue";
import useUser from "./composables/useUser"

// composable с пользователем и логикой
const { user, guestText, login, logout } = useUser()

//Для демонстрации использую полное имя пользователя. Оно вычисляется в watch
const fullName = ref()

//Почему watch, а не computed? Потому что реактивность с методами не работает. 
// Да, vue увидит, что объект поменялся, но методы не вызовет. Надо помочь vue с этим. Для этого есть watch 
watch(user, (newUser) => {
  fullName.value = `${newUser.getName()} ${newUser.getSurname()}`
})

</script>

<template>

  <p><span>Полное имя пользователя:</span> {{ fullName }}</p>
  <p><span>Является ли гостем?:</span> {{ guestText }}</p>
  <p><span>Состояние объекта:</span> {{ user }}</p>

  <button @click="login">Получить пользователя</button>

  <p></p>

  <button @click="logout">Выйти</button>

</template>
