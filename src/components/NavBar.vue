<script setup lang="ts">
import { ref } from 'vue'; 
import { RouterLink } from 'vue-router';

</script>

<template>
    <header class="p-6 bg-white shadow-md">
        <nav>
        <ul class="flex justify-end text-lg">
            <li class="hover:text-blue-500 cursor-pointer px-4">
            <router-link to="/">Boule-gbg</router-link>
            </li>
            <li class="hover:text-blue-500 cursor-pointer px-4">
            <router-link to="/map">Karta</router-link>
            </li>
            <li class="hover:text-blue-500 cursor-pointer px-4">
            <router-link to="/scorecard">Scorecard</router-link>
            </li>
        </ul>
        </nav>
    </header>
</template>