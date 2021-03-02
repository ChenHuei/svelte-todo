<script>
  import Title from '@/components/Title.svelte'
  import SearchBar from '@/components/SearchBar.svelte'
  import List from '@/components/List.svelte'

  let keyword = ''
  let list = []

  const onKeyPress = (e) => {
    if (keyword && e.charCode === 13) {
      addItem(keyword)
    }
  }

  const addItem = () => {
    const item = {
      id: new Date().getTime(),
      text: keyword.trim(),
      done: false,
    }
    list = [...list, item]

    // remove keyword
    keyword = ''
  }

  const completeItem = (id) => {
    list = list.map((item) =>
      item.id === id ? { ...item, done: !item.done } : item,
    )
  }
</script>

<main class="w-full flex flex-col items-center">
  <Title class="text-2xl my-4" title={'Svelte TODO'} />
  <SearchBar
    type="text"
    placeholder="TODO"
    bind:value={keyword}
    on:keypress={onKeyPress}
    on:click={addItem}
  />
  <List {list} on:complete={(event) => completeItem(event.detail)} />
</main>

<style global lang="postcss">
  /* only apply purgecss on utilities, per Tailwind docs */
  /* purgecss start ignore */
  @tailwind base;
  @tailwind components;
  /* purgecss end ignore */

  @tailwind utilities;
</style>
