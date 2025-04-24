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
  <div
    style="
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background-color: #f0f0f0;
    "
  >
    <router-view></router-view>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
