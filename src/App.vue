<template>
  <div>
    <div class="route-container">
      <h2>Navigation Links</h2>
      <div class="route-links">
        <router-link to="/" class="route-link">Home</router-link>
        <router-link to="/TextEdit" class="route-link">TextEdit</router-link>
        <router-link to="/DraggableView" class="route-link">Draggable</router-link>
        <router-link to="/contact" class="route-link">Contact</router-link>
        <router-link to="/profile" class="route-link">Profile</router-link>
      </div>
    </div>
  </div>

  <router-view></router-view>

</template>

<script setup></script>

<style lang="scss" scoped></style>
