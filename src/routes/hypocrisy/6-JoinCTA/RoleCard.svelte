<script lang="ts">
import type { RoleIcon } from "./role-icons";

interface Props {
  title: string;
  description: string;
  type: string;
  icon: RoleIcon;
}

const { title, description, type, icon: Icon }: Props = $props();
</script>

<div class="role-card">
  <div class="role-info">
    <Icon class="role-icon" />
    <div>
      <h3 class="role-title">{title}</h3>
      <p class="role-description">{description}</p>
    </div>
  </div>
  <span class="role-type">{type}</span>
</div>

<style src="./RoleCard.css"></style>
