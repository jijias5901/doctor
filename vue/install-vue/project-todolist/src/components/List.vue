<template>
	<div class="List">
		<Item v-for="ToDo in Todos" msg="ToDo" />
	</div>
</template>
<script>
	import Item from './Item.vue'
	export default {
		props:{
			ToDos:Array
		}
		name:'List',
		components:{
			Item
		}
	}
</script>
<style scoped>
	
</style>