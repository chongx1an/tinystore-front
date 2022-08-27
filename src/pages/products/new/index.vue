<script setup>
import Layout from '@/layouts/Layout.vue';
import router from "@/router";
import { reactive, inject } from 'vue'

const api = inject('api')

const product = reactive({
  title: null,
  price: null,
  inventory: null
})

function createProduct() {

  api.post("/products", product)
    .then((result) => {

      if (!result.data.product) return; // pop error

      router.push("/products");

    })

}

</script>

<template>
  <Layout>
    <div class="m-5">

      <div class="flex justify-between">
        <h1 class="text-3xl font-bold">Create product</h1>
        <button class="mr-3 px-10 py-3 bg-black text-white rounded" @click="createProduct">Save</button>
      </div>

      <div class="flex mt-5">
        <div class="w-80 h-80 mt-3 p-5 bg-white rounded border border-gray-100">
          <div class="w-full h-full bg-gray-200 rounded flex justify-center items-center">
            Image
          </div>
        </div>

        <div class="m-3 grow">
          <div class="mb-5 p-5 bg-white rounded border border-gray-100">
            <label for="title">Title</label>
            <br />
            <input class="border border-gray-200 p-2 w-full mt-3 rounded" type="text" v-model="product.title"
              name="title" placeholder="T-shirt" />
          </div>

          <div class="mb-5 p-5 bg-white rounded border border-gray-100">
            <div class="mb-5">
              <label>Price</label>
              <br />
              <input class="border border-gray-200 p-2 w-full mt-3 rounded" type="number" v-model="product.price" />
            </div>

            <div class="mb-5">
              <label>Inventory</label>
              <br />
              <input class="border border-gray-200 p-2 w-full mt-3 rounded" type="number" v-model="product.inventory" />
            </div>
          </div>
        </div>

      </div>
    </div>
  </Layout>
</template>
