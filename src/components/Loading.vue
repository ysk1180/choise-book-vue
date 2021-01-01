<template>
  <div class="flex pt-6 pb-1">
    <div class="w-12 h-12 border-2 border-red-600 rounded-full loader mx-auto"></div>
  </div>
  <div class="flex pb-6">
    <div class="my-1 text-gray-700 mx-auto">
      Loading
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