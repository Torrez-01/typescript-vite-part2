const fs = require('fs');
const path = require('path');
const file = path.join(process.cwd(), 'src', 'App.vue');
let content = fs.readFileSync(file, 'utf8');
const marker = "        <p class=\"mb-0 text-white\" style=\"font-size: 1.2rem; font-weight: 400; opacity: 0.95\">Inventario verificado por TypeScript:</p>\n      </div>\n";
const insert = `      <!-- Login Mockup -->
      <div class="row justify-content-center mb-5">
        <div class="col-xl-5 col-lg-6">
          <div class="card shadow-lg border-0" style="background: rgba(255,255,255,0.96);">
            <div class="card-body p-4">
              <div class="text-center mb-4">
                <h3 class="fw-bold mb-1" style="font-size: 2rem;">Almacén Activo</h3>
                <p class="text-muted mb-0" style="font-size: 1rem;">Sistema de Control de Inventarios</p>
              </div>

              <div class="mb-3">
                <label class="form-label fw-semibold">Usuario</label>
                <input type="text" class="form-control" value="felix.maldonado" readonly />
              </div>

              <div class="mb-3">
                <label class="form-label fw-semibold">Contraseña</label>
                <input type="password" class="form-control" value="itpm2026" readonly />
              </div>

              <div class="d-grid mb-3">
                <button class="btn btn-primary">INGRESAR AL SISTEMA</button>
              </div>

              <div class="text-center text-muted small">
                <p class="mb-1">Datos de prueba:</p>
                <p class="mb-0">Usuario: <span class="fw-semibold">felix.maldonado</span></p>
                <p class="mb-0">Contraseña: <span class="fw-semibold">itpm2026</span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
";
if (!content.includes(marker)) {
  console.error('Marker not found');
  process.exit(1);
}
content = content.replace(marker, marker + insert);
fs.writeFileSync(file, content, 'utf8');
console.log('Login block inserted');
