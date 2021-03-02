<script>
  export let value

</script>

<label class="w-1/2 flex h-10 mb-4" for="keyword">
  <input class="w-full pl-2 rounded-none" name="keyword" bind:value={value} {...$$props} on:keypress/>
  <div class="search-bar-button w-10 h-10 flex justify-center items-center bg-blue-400 cursor-pointer" on:click>
    <span class="text-white leading-10">+</span>
  </div>
</label>

<style lang="scss">
  .search-bar-button {
    transition: 0.5s;

    &:hover {
      opacity: 0.6;
    }
  }
</style>
