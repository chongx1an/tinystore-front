<script setup>
import Layout from '../../layouts/Layout.vue';

</script>

<template>
  <Layout>
    <div class="m-5">
      <h1 class="text-3xl font-bold">Products</h1>
      <div class="mt-10 p-3 border rounded border-gray-100">
        <table class="text-left w-full">
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>T-shirt</td>
              <td>$99.99</td>
            </tr>
            <tr>
              <td>Jacket</td>
              <td>$159.99</td>
            </tr>
            <tr>
              <td>Pants</td>
              <td>$109.99</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </Layout>
</template>
