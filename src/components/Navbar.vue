<template>
  <nav class="bg-gray-800 h-14 flex">
    <div class="max-w-3xl w-full mx-auto flex">
      <div class="text-gray-200 text-xl font-bold my-auto px-4 font-serif">
        <router-link to="/" class="flex">
          <img src="@/assets/img/book-icon.png" class="object-contain w-6" />
          <p class="pl-2 my-auto">
            技術書選び
          </p>
        </router-link>
      </div>
      <div class="text-gray-300 pr-4 my-auto ml-auto">
        <router-link to="/about">
          これはなに？
        </router-link>
      </div>
    </div>
  </nav>
</template>