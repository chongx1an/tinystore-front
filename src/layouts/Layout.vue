<template>
  <div class="layout">
    <sidebar class="p-5 border border-gray-100 overflow-clip">
      <div class="flex items-center">
        <img src="@/assets/logo.svg" height="50" width="50" />
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
    <main class="p-5 bg-gray-50">
      <slot />
    </main>
    <footer class="p-5 border border-gray-100">
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
  grid-template-columns: 20% 80%;
  grid-template-rows: 92%;
  grid-template-areas:
    "sidebar main"
    "footer footer";
}
</style>