# Burger Boom — Sitio Web de Hamburguesería

Proyecto desarrollado como **segunda preentrega del curso de Desarrollo Web Flex (CoderHouse)**.  
El objetivo fue aplicar una estructura avanzada de HTML, CSS y Bootstrap, incorporando estilos personalizados, diseño responsive, modo oscuro y control de versiones con Git y GitHub.

---

## Descripción del proyecto

**Burger Boom** es una hamburguesería moderna con identidad visual basada en colores bordó y dorado.  
El sitio web busca transmitir una experiencia visual cálida y profesional, destacando los productos, la historia del local y ofreciendo canales de contacto directos para los usuarios.

El proyecto cuenta con un total de **5 páginas HTML**:
1. `index.html` — Página principal con hero, secciones destacadas y links a las demás páginas.  
2. `pages/menu.html` — Menú completo de hamburguesas.  
3. `pages/galeria.html` — Galeria de imagenes de la hamburgueseria.  
4. `pages/nosotros.html` — Historia, valores e información del local.  
5. `pages/contacto.html` — Formulario de contacto con validación y enlaces a redes sociales.

---

## Estructura del proyecto

```
hamburgueseria/
├─ index.html
├─ pages/
│  ├─ menu.html
│  ├─ galeria.html
│  ├─ nosotros.html
│  └─ contacto.html
├─ assets/
│  ├─ css/style.css
│  ├─ js/main.js
│  └─ img/
│     ├─ logo.png
│     ├─ american-boom.jpg
│     ├─ crispy.jpg
│     ├─ chesse-bacon.jpg
│     ├─ onion-boom.jpg
│     └─ otras imágenes...
└─ README.md
```

Cada página está conectada mediante una **barra de navegación común**, con diseño responsive y soporte para **modo oscuro**.

---

## Tecnologías utilizadas

- **HTML5**: Estructura semántica y jerarquía limpia.  
- **CSS3**: Estilos personalizados, variables de color y animaciones.  
- **Bootstrap 5.3.3**: Grillas, utilitarias, botones, formularios y responsive design.  
- **JavaScript (Vanilla)**:  
  - Activación del modo oscuro (`theme-dark`)  
  - Año automático en el footer  
  - Navbar activo según página  
- **Git y GitHub**: Control de versiones, commits descriptivos y publicación mediante **GitHub Pages**.

---

## Modo oscuro

Implementado con un botón que alterna la clase `.theme-dark` en el elemento `<html>`, aplicando un esquema de colores oscuros para todo el sitio.

```js
document.getElementById('btnTheme')?.addEventListener('click', ()=>{
  document.documentElement.classList.toggle('theme-dark');
});
```

Los estilos oscuros están definidos al final del `style.css` y adaptan:
- Fondos (`bg-body`, `bg-white`, `bg-body-secondary`)
- Bordes, tablas, inputs y botones
- Textos secundarios y links

---

## Galería

En la página de galería se implementó:
- Carga diferida con `loading="lazy"` para optimizar el rendimiento.  
- Efecto **hover** con `transform` y `brightness` para destacar las imágenes al pasar el mouse.

```css
.gallery img {
  transition: transform 0.3s ease, filter 0.3s ease;
}
.gallery img:hover {
  transform: scale(1.05);
  filter: brightness(80%);
}
```

---

## Publicación en GitHub Pages

El proyecto se encuentra publicado en:  
 **[https://valentin2236.github.io/hamburgueser-a/](https://valentin2236.github.io/hamburgueser-a/)**

### Configuración:
1. Rama: `main`  
2. Carpeta: `/ (root)`  
3. Activado desde: **Settings → Pages → Build and deployment**

---

## Buenas prácticas aplicadas

- Rutas relativas (`../assets/...`) para compatibilidad con GitHub Pages.  
- Meta etiquetas `description`, `theme-color` y `og:image`.  
- Atributos `alt` descriptivos en todas las imágenes.  
- Código indentado y comentado según las consignas del curso.  
- Commits ordenados y descriptivos para versionado.  

---

## Autor

**Valentín Arriola**  
 Tucumán, Argentina  
 Desarrollador Web Frontend  
 valentinarriola04@gmail.com  

---

##  Conclusión

El proyecto demuestra la integración de HTML, CSS, Bootstrap y JavaScript con enfoque en diseño responsive, identidad visual coherente y buenas prácticas de desarrollo.  
Además, el uso de GitHub Pages permite desplegar el sitio como un ejemplo funcional y profesional de una página comercial.

---
