<template>
  <div class="min-h-screen flex flex-col">
    <nav class="bg-gray-800 h-14">
      <div class="text-gray-200 text-xl font-bold p-3 float-left font-serif">
        <router-link to="/" class="flex">
          <img src="@/assets/img/book-icon.png" width="24" />
          <p class="pl-2">
            技術書えらび
          </p>
        </router-link>
      </div>
      <div class="text-gray-300 px-3 py-4 float-right">
        <router-link to="/about">
          これはなに？
        </router-link>
      </div>
    </nav>
    <main class="flex-grow">
      <router-view/>
    </main>
    <footer class="bg-gray-200">
      <div class="flex my-2 mx-auto w-32 text-xs text-gray-700">
        <p class="mx-1">作成者</p>
        <a href='https://twitter.com/ysk_pro' target="_blank" rel="noopener" class="underline">
          @ysk_pro
        </a>
        <svg class="h-3 w-3 ml-1 mt-1" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      </div>
      <p class="m-2 text-center text-xs text-gray-600">お問い合わせなどはDMでお願いします</p>
    </footer>
  </div>
</template>
