<script setup></script>

<template>
  <div class="container-fluid">
    <div class="row g-0">
      <aside class="col-12 col-lg-3 border-lg-end py-4">
        <slot name="sideNav" />
      </aside>
      <main class="col-12 col-lg-9 py-4 px-4">
        <slot />
      </main>
    </div>
  </div>
</template>
