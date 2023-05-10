<template>
  <nav class="shadow-md">
    <div class="flex flex-wrap items-center justify-between mx-auto p-4">
      <NuxtLink :to="{ name: 'index' }" class="flex items-center max-h-10">
        <img
          src="/img/h-logo.png"
          class="mr-3 w-28"
          alt=" Logo dalan.capital" />
      </NuxtLink>
      <div class="flex space-x-4 md:order-2">
        <button class="hidden lg:flex">
          <a
            href="#"
            class="text-gray-700 bg-transparent hover:bg-amber-50 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm px-5 py-3 text-center md:mr-0"
            aria-current="page"
            >Sign in</a
          >
        </button>
        <button
          type="button"
          class="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-sm text-sm px-5 py-3 text-center mr-3 md:mr-0">
          Sign up free
        </button>

        <button
          data-collapse-toggle="navbar-cta"
          type="button"
          class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-cta"
          aria-expanded="false">
          <span class="sr-only">Open main menu</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clip-rule="evenodd"></path>
          </svg>
        </button>
      </div>
      <div
        class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
        id="navbar-cta">
        <ul
          class="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
          <li
            v-for="(link, index) in navLinks"
            :key="index"
            class="px-3 py-2 hover:bg-amber-50 border border-x-transparent border-t-transparent border-b-gray-400 md:border-none">
            <NuxtLink
              active-class=" text-gray-900"
              :to="link.link"
              class="block py-2 pl-3 pr-4 rounded md:bg-transparent text-gray-600 hover:text-gray-900 md:p-0"
              aria-current="page">
              {{ link.title }}
            </NuxtLink>
          </li>
          <li>
            <button class="flex md:hidden w-full">
              <a
                href="#"
                class="text-gray-700 w-full text-center border border-gray-800 bg-transparent hover:bg-gray-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium text-sm rounded-sm px-5 py-3 md:mr-0"
                aria-current="page"
                >Sign in</a
              >
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});

const navLinks = ref([
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Services", link: "/" },
  { title: "Contact", link: "/contact" },
]);
</script>
