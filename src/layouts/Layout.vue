<template>
  <div class="layout">
    <sidebar class="p-5">
      <div class="flex items-center">
        <img src="../assets/logo.svg" height="50" width="50" />
        <h1 class="text-2xl ml-2">TinyStore</h1>
      </div>
      <div class="mt-5 flex flex-col">
        <router-link to="/">

          <div class="px-5 py-3 w-full rounded hover:bg-gray-100">
            Home
          </div>
        </router-link>

        <router-link to="/products">
          <div class="px-5 py-3 w-full rounded hover:bg-gray-100">
            Products
          </div>
        </router-link>

        <router-link to="/orders">
          <div class="px-5 py-3 w-full rounded hover:bg-gray-100">
            Orders
          </div>
        </router-link>



      </div>
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