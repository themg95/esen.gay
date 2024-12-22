<script lang="ts">
  import "../app.css";
  import { checkAdBlock } from "adblock-checker";
  import Marquee from "svelte-fast-marquee";
  import { browser } from "$app/environment";
  import AdblockGuide from "$lib/AdblockGuide.svelte";

  let { children } = $props();

  let adblock: boolean = $state(true);

  if (browser) {
    checkAdBlock().then((value) => {
      adblock = value;
    });
  }
</script>

{#if adblock}
  <Marquee>mail me at meow@esen.gay</Marquee>
  <nav class=""></nav>
  <main class="content-center">
    {@render children()}
  </main>
{:else}
  <AdblockGuide />
{/if}
