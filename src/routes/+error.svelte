<script>
  import { page } from "$app/state";
</script>

<p>Uh oh, you found an error</p>

<p>{page.status}: {page.error.message}</p>
