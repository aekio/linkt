<script setup lang="ts">
defineProps<{
    href: string;
    text: string;
}>();
import '../../assets/Header/ListItem.css';
</script>

<template>
    <li class="header__nav-item">
        <a class="header__nav-link">{{ text }}</a>
    </li>
</template>