<template>
  <main class="flex">
    <Sidebar />
    <section class="w-full p-2.5">
      <Header />
      <div class="my-2 p-1.5">
        <slot />
      </div>
    </section>
  </main>
</template>
