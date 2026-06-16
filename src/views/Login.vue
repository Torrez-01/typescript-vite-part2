<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-xl-5 col-lg-6">
        <div class="card shadow-lg border-0" style="background: rgba(255,255,255,0.98);">
          <div class="card-header bg-dark text-white text-center">
            <strong>🔒 Sistema de Gestión - ITPM</strong>
          </div>
          <div class="card-body p-4">
            <div class="mb-3 text-center text-muted">
              <small>Usuario Docente</small>
            </div>

            <div class="mb-3">
              <input v-model="usuario" type="text" class="form-control" placeholder="Ej: felix.maldonado" />
            </div>

            <div class="mb-3 text-center text-muted">
              <small>Contraseña</small>
            </div>
            <div class="mb-3">
              <input v-model="contrasena" type="password" class="form-control" placeholder="*******" />
            </div>

            <div class="d-grid">
              <button @click="ingresar" class="btn btn-primary">Ingresar al Sistema</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const usuario = ref('felix.maldonado')
const contrasena = ref('itpm2026')

function ingresar() {
  // Aquí solo simulamos login; en un caso real validaríamos credenciales
  router.push('/catalog')
}
</script>

<style scoped>
.card-header {
  padding: 0.8rem 1rem;
  font-size: 1.05rem;
}
</style>
