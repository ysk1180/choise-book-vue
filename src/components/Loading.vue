<template>
  <div class="mx-40 my-24">
    <div class="w-12 h-12 border-2 border-red-600 rounded-full loader"></div>
    <div class="my-1 text-gray-800">
      Loading..
    </div>
  </div>
</template>

<style scoped>
	@keyframes loader-rotate {
		0% {
			transform: rotate(0);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.loader {
		border-right-color: transparent;
		animation: loader-rotate 1s linear infinite;
	}
</style>