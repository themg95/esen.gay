<script lang="ts">
  import "../app.css";
  import { checkAdBlock } from "adblock-checker";
  import Marquee from "svelte-fast-marquee";
  import { browser } from "$app/environment";
  import * as Bowser from "bowser";

  let { children } = $props();

  let adblock: boolean = $state(true);
  let bowserParser: Bowser.Parser.Parser = $state(null);

  if (browser) {
    checkAdBlock().then((value) => {
      adblock = value;
      if (!adblock) {
        bowserParser = Bowser.getParser(window.navigator.userAgent);
      }
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
  <main class="text-center">
    <h1 class="text-4xl">Uh oh!</h1>
    <h1 class="text-3xl">You dont seem to have an ad blocker installed!</h1>
  </main>
{/if}
