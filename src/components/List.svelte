<script>
  import { createEventDispatcher } from 'svelte';
  import { slide } from "svelte/transition";
  import { elasticInOut } from "svelte/easing";

  export let list

  const transition = "{duration: 300, easing: elasticInOut}"
  const dispatch = createEventDispatcher();

  const completeItem = (id) => {
    dispatch('complete', id)
  }
</script>

<ul class="w-1/2 text-center" class:shadow={list.length > 0}>
  {#each list as item}
    <li class="w-full min-h-10 flex items-center px-2 border border-gray-300"  transition:slide="{transition}">
      <span class="overflow-ellipsis overflow-hidden" class:line-through={item.done}>{item.text}</span>
      <div class="flex-1"></div>
      <div class="list-item-icon px-2 py-1 cursor-pointer" on:click={() => completeItem(item.id)}>
        <input bind:checked={item.done} type="checkbox" />
      </div>
    </li>
  {:else}
    <li transition:slide="{transition}">No Data!</li>
  {/each}
</ul>


<style lang="scss">
  .list-item-icon {
    transition: 0.5s;

    &:hover {
      opacity: 0.6;
    }
  }
</style>
