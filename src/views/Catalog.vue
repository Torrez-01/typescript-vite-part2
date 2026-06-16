<template>
  <div class="container py-5">
    <div class="rounded-lg shadow p-5 mb-5" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)">
      <h2 class="mb-2 text-white" style="font-size: 2.5rem; font-weight: 700; letter-spacing: -0.5px">Bienvenido, Lic. Félix Maldonado</h2>
      <p class="mb-0 text-white" style="font-size: 1.2rem; font-weight: 400; opacity: 0.95">Inventario verificado por TypeScript:</p>
    </div>

    <div class="row g-4">
      <div class="col-md-4" v-for="producto in productos" :key="producto.id">
        <div class="card h-100 shadow-lg border-0 overflow-hidden hover-card">
          <div class="overflow-hidden" style="height: 250px; background: #f0f0f0">
            <img 
              :src="producto.imagen" 
              class="card-img-top w-100 h-100 object-fit-cover"
              :alt="producto.nombre"
              style="object-fit: cover; transition: transform 0.3s ease"
            />
          </div>
          <div class="card-body d-flex flex-column">
            <h5 class="card-title fw-bold mb-1">{{ producto.nombre }}</h5>
            <p class="text-muted small mb-3">ID: {{ producto.id }}</p>
            
            <div class="d-flex justify-content-between align-items-center mb-3">
              <span class="badge bg-success fs-6">Bs. {{ producto.precio }}</span>
              <span class="badge bg-primary">{{ producto.stock }} pzas.</span>
            </div>
            
            <button class="btn btn-outline-primary btn-sm mt-auto">Gestionar Stock</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Producto } from '../types/Producto'

const productos: Producto[] = [
  {
    id: 101,
    nombre: 'Teclado Mecánico RGB',
    precio: 250,
    stock: 12,
    imagen: 'https://images.pexels.com/photos/1772123/pexels-photo-1772123.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    id: 102,
    nombre: 'Mouse Óptico Inalámbrico',
    precio: 110,
    stock: 20,
    imagen: 'https://images.pexels.com/photos/2115256/pexels-photo-2115256.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    id: 103,
    nombre: 'Monitor Gamer 24\' 144Hz',
    precio: 1450,
    stock: 5,
    imagen: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    id: 104,
    nombre: 'Auriculares Gamer RGB',
    precio: 320,
    stock: 8,
    imagen: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    id: 105,
    nombre: 'Webcam HD 1080p',
    precio: 190,
    stock: 15,
    imagen: 'https://images.pexels.com/photos/3205735/pexels-photo-3205735.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  },
  {
    id: 106,
    nombre: 'Micrófono USB RGB',
    precio: 280,
    stock: 10,
    imagen: 'https://images.pexels.com/photos/3525055/pexels-photo-3525055.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop'
  }
]
</script>

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
