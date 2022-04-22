<template>
  <div class="p-5">
    <h1 class="text-2xl text-center py-2">Not Found</h1>
    <div class="flex py-3">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-32 mx-auto text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
    <p class="text-gray-800 leading-relaxed py-4">お探しのページが見つかりませんでした。アドレスが間違っているか、ページが移動した可能性があります。</p>
    <div class="flex">
      <button class="mx-auto my-2 p-4 bg-gray-600 text-white rounded hover:opacity-80">
        <router-link to="/">
          トップページに戻る
        </router-link>
      </button>
    </div>
  </div>
</template>
