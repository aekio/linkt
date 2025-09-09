<script>
import AddGroupButton from './AddGroupButton.vue';
</script>

<template>
  <div class="group-container">
    <slot class="DiscreetButton">
        <AddGroupButton />
    </slot>
    <slot class="CardList"></slot>

  </div>
</template>