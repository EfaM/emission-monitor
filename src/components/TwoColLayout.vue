<template>
  <div class="row g-0">
    <aside class="col-12 col-lg-3 py-4">
      <slot name="sideNav" />
    </aside>
    <main class="col-12 col-lg-9 py-4 ps-lg-4">
      <slot />
    </main>
  </div>
</template>
