# 🍔 Burger Boom — Sitio Web (Preentrega 3 – Desarrollo Web Flex)

Proyecto desarrollado para la **tercera preentrega del curso Desarrollo Web Flex – CoderHouse**.  
El objetivo fue crear un sitio web completo, responsive, con maquetación profesional, animaciones, SASS y despliegue en GitHub Pages.

---

## 🚀 Demo Online

🔗 **https://valentin2236.github.io/hamburgueser-a/**

---

## 📌 Objetivos del proyecto

- Crear un sitio web sólido y escalable utilizando **HTML semántico**, **CSS/SASS** y **Bootstrap**.  
- Implementar **responsive design** para mobile, tablet y desktop.  
- Migrar todos los estilos a **SASS**, usando variables, mixins, nesting y parciales.  
- Agregar interactividad visual con **animaciones y transiciones**.  
- Publicar el sitio en **GitHub Pages** y versionarlo con Git.

---

## 🧱 Tecnologías utilizadas

### ✔ **HTML5**
- Estructura semántica  
- SEO tags y Open Graph  
- Accesibilidad (alt, labels, jerarquías correctas)

### ✔ **CSS3 / SASS**
- Variables globales (colores, tamaño, espaciados)
- Nesting  
- Mixins (`@mixin` + `@include`)  
- Operadores  
- Archivos parciales organizados:
```
assets/scss/
  abstracts/
    _variables.scss
    _mixins.scss
  base/
    _reset.scss
    _typography.scss
  layout/
    _header.scss
    _footer.scss
  components/
    _cards.scss
    _gallery.scss
    _buttons.scss
  pages/
    _home.scss
    _menu.scss
    _galeria.scss
    _nosotros.scss
    _contacto.scss
  main.scss
```

### ✔ **Bootstrap 5.3**
- Grid system  
- Flex utilities  
- Navbar responsive  
- Cards  
- Ratio helpers  
- Form controls

### ✔ **AOS (Animate On Scroll)**
- Animaciones de scroll  
- Fade-up / fade-down / zoom-in / fade-left  
- Animaciones con delay, easing y once:true

### ✔ **JavaScript (mínimo para interacción)**
- Modo oscuro  
- Filtros del menú  
- Validaciones del formulario  
- Inicialización de AOS

### ✔ **Git + GitHub**
- Versionado completo  
- Commits descriptivos  
- Uso de `.gitignore`  
- Publicación en GitHub Pages

---

## 📱 Diseño Responsive

El sitio está completamente adaptado para:
- **Mobile (hasta 576px)**  
- **Tablet (768px – 1024px)**  
- **Desktop (1024px o más)**  

Ajustes incluidos:
- Reordenamiento de secciones  
- Imágenes fluidas  
- Grid de menú y galería adaptables  
- Navbar colapsable  
- Hero adaptable según dispositivo

---

## ✨ Animaciones implementadas

### 🔥 Scroll (AOS)
- `data-aos="fade-up"` en headers y títulos  
- `data-aos="fade-left"` en secciones de info  
- `data-aos="zoom-in"` en tarjetas e imágenes  
- Delays progresivos para efectos suaves

### 🔥 Hover Effects
- Tarjetas con **hover-raise** (eleva + sombra suave)  
- Botones con transiciones  
- Galería con blur inicial y aclarado al pasar el mouse

---

## 📄 Estructura del sitio

El proyecto contiene 5 páginas:

- **index.html** → Landing principal  
- **menu.html** → Catálogo con filtros  
- **galeria.html** → Masonry con hover blur/clear  
- **nosotros.html** → Historia, valores, timeline y testimonios  
- **contacto.html** → Formulario validado + mapa  

---

## 🛠 Cómo ejecutar SASS

Modo desarrollo:
```bash
npm run dev
```

Compilación final:
```bash
npm run build
```

---

## 🖥️ GitHub Pages

El sitio fue desplegado usando GitHub Pages:

1. Repositorio → Settings  
2. Pages → Deploy from Branch  
3. Branch: `main`  
4. Carpeta: `/root`  
5. Guardar  

El build se genera automáticamente desde `assets/css/style.css`.

---

## 📞 Autor

**Valentín Arriola**  
Desarrollador Web – Tucumán, Argentina  
GitHub: https://github.com/valentin2236

---

## ✔ Estado del Proyecto
**COMPLETO y listo para entregar ✔**
