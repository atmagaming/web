<script lang="ts">
import Button from "@/components/ui/Button.svelte";
</script>

<section class="snap-section min-h-screen flex flex-col items-center justify-center closing-inner bg-dark-950 px-6 lg:px-16 py-24 text-center border-t-[1.5px] border-dark-950">
  <p class="font-display text-[clamp(2rem,5vw,5rem)] leading-none text-white tracking-[0.02em] max-w-[900px] mx-auto mb-10">
    CHANGE <span class="text-gold">MINDS.</span><br>
    CHANGE SYSTEMS.<br>
    CHANGE THE WORLD.
  </p>
  <div class="flex gap-4 justify-center flex-wrap">
    <Button
      variant="primary"
      href="https://atmagaming.notion.site/Vision-dc4f14be61f741c38881701ac9c2ab74"
      target="_blank"
      rel="noopener noreferrer"
      class="bg-white text-dark-950 border-white hover:bg-gold hover:text-white hover:border-gold"
    >Read the Full Vision &nearr;</Button>
    <Button variant="outline-light" href="mailto:ceo@atmagaming.com">
      Get in Touch &rarr;
    </Button>
  </div>
</section>
