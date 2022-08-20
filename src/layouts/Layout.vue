<template>
  <div class="layout">
    <sidebar>

      <div class="p-5">
        <img src="../assets/logo.svg" />
      </div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </sidebar>
    <main>
      <slot />
    </main>
    <footer>
      &copy; TinyStore
    </footer>
  </div>
</template>

<style scoped>
sidebar {
  grid-area: sidebar;
}

main {
  grid-area: main;
}

footer {
  grid-area: footer;
}

.layout {
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 10% 80% 5%;
  grid-template-areas:
    "sidebar main main main main"
    "sidebar main main main main"
    "sidebar main main main main"
    "footer footer footer footer footer";
}
</style>