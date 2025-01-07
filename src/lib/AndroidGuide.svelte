<script lang="ts">
  let stage: number = $state(0);

  function goBack() {
    stage = 0;
  }

  function imSmart() {
    stage = 1;
  }

  function imNormal() {
    stage = 2;
  }
</script>

<div>
  {#if stage === 0}
    <h2 class="text-2xl">Select the one that applies:</h2>
    <button onclick={imSmart}>I can download APKs</button>
    <button onclick={imNormal}>Just give me something that works</button>
  {:else if stage === 1}
    <a href="https://github.com/uazo/cromite/releases/latest">Download Cromite</a>
    <p>requires messing with github and apks</p>
  {:else if stage === 2}
    <a href="https://play.google.com/store/apps/details?id=com.brave.browser">Download Brave</a>
    <p class="text-red">
      ⚠ WARNING: has crypto bullshit and a homophobic ceo. Also uses the brave search engine by
      default. ⚠
    </p>
  {/if}
</div>
{#if stage !== 0}
  <button onclick={goBack}>Go back</button>
{/if}
