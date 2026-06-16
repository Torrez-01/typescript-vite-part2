<template>
  <div class="min-vh-100" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <div class="container">
        <div class="navbar-brand d-flex align-items-center">
          <span style="font-size: 2rem">🚀</span>
          <span class="ms-2 fw-bold fs-5">Almacén Activo</span>
        </div>
        <div>
          <button class="btn btn-danger">Salir 🚪</button>
        </div>
      </div>
    </nav>

    <div class="container py-5">
      <router-view />
    </div>
  </div>
</template>


<style scoped>
.hover-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease !important;
}

.hover-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15) !important;
}

.card-img-top:hover {
  transform: scale(1.05);
}

.object-fit-cover {
  object-fit: cover;
}
</style>

