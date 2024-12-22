<script lang="ts">
  import { browser } from "$app/environment";
  import bowser from "bowser";
  import AndroidGuide from "$lib/AndroidGuide.svelte";

  let bowserParser: bowser.Parser.Parser = $state(null);

  if (browser) {
    bowserParser = bowser.getParser(window.navigator.userAgent);
  }
</script>

<main class="text-center">
  <h1 class="text-4xl">Uh oh!</h1>
  <h1 class="text-3xl">You dont seem to have an ad blocker installed!</h1>
  <div class="w-full border-t border-text"></div>
  <h1 class="text-3xl">Here is the recommendation for you:</h1>
  {#if bowserParser.getOSName().toLowerCase() === "android"}
    <AndroidGuide />
  {:else if (bowserParser.getOSName().toLowerCase() === "ios")}
    <p>Download AdGuard and use Safari</p>
    <a href="https://apps.apple.com/us/app/adguard-adblock-privacy/id1047223162">Click to download AdGuard</a>
  {:else}
    <h2 class="text-2xl">Your browser/OS is not currently supported... Sorry.</h2>
  {/if}
</main>
