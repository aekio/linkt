<script setup lang="ts">
import HeaderNav from './HeaderNav.vue';
import '../../assets/Header/Header.css';
</script>

<template>
    <div class="header">
        <!-- Logo -->
        <a class="header__logo-link" href="#">
            <img src="../../assets/frame 35.svg" alt="Linkt" class="header__logo" />
        </a>
        <!-- Navigation links -->
       <HeaderNav />
        <!-- Sign Out link -->
        <a href="#">
            Sign Out
        </a>
    </div>
</template>
