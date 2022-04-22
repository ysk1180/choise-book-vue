<template>
  <div class="p-5">
    <h1 class="text-2xl text-center py-2">Not Found</h1>
    <div class="flex py-3">
      <img src="@/assets/img/not-found.jpeg" class="mx-auto" />
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
