<script setup></script>

<template>
  <div class="container-fluid">
    <div class="row g-0">
      <aside class="col-12 col-lg-3 border-end">
        <slot name="sideNav" />
      </aside>
      <main class="col-12 col-lg-9 py-4 px-4">
        <slot />
      </main>
    </div>
  </div>
</template>
