Manifiesto de Diseño Responsivo para Pizzaria Napoli
Este documento establece la estrategia y las convenciones para crear un diseño responsivo y mobile-first para el sitio web de Pizzaria Napoli, utilizando Tailwind CSS v4.
1. Filosofía Mobile-First
El desarrollo de todos los componentes y páginas debe comenzar desde la vista móvil. Esto significa:
Escribir primero las clases CSS base: Estas clases (text-center, flex-col, w-full) se aplicarán a todos los tamaños de pantalla, desde el más pequeño hacia arriba.
Añadir prefijos de breakpoints progresivamente: Utilizar modificadores como sm:, md:, lg: para aplicar estilos que solo se activen en pantallas más grandes. Esto evita la necesidad de deshacer estilos móviles y conduce a un CSS más limpio y eficiente.
Ejemplo Incorrecto (Desktop-First):
code
Html
<!-- No hacer esto -->
<div class="flex-row sm:flex-col">...</div>
Ejemplo Correcto (Mobile-First):
code
Html
<!-- Hacer esto -->
<div class="flex flex-col sm:flex-row">...</div>
Esto establece la dirección de flexión en columna para móviles (por defecto) y la cambia a fila en pantallas pequeñas (sm) y superiores.
2. Puntos de Quiebre (Breakpoints)
Usaremos el conjunto de breakpoints estándar de Tailwind CSS. Cualquier modificación debe ser discutida y aplicada globalmente en tailwind.config.ts.
Prefijo	Tamaño Mínimo	CSS	Dispositivos Típicos
sm	640px	@media (min-width: 640px) { ... }	La mayoría de los teléfonos en modo paisaje.
md	768px	@media (min-width: 768px) { ... }	Tablets (iPad Mini, etc.).
lg	1024px	@media (min-width: 1024px) { ... }	Laptops y tablets grandes (iPad Pro).
xl	1280px	@media (min-width: 1280px) { ... }	Monitores de escritorio estándar (1080p).
2xl	1536px	@media (min-width: 1536px) { ... }	Monitores grandes (1440p y superiores).
Nota: No hay prefijo para pantallas más pequeñas que sm. Los estilos sin prefijo se aplican a todos los tamaños de pantalla, empezando desde el más pequeño.
3. Estrategias de Layout Responsivo
3.1. Grids Flexibles (Flexbox y Grid)
Utilizaremos flexbox y CSS Grid para crear diseños fluidos que se adapten al tamaño de la pantalla.
Flexbox (flex, flex-col, md:flex-row): Ideal para alinear elementos en una sola dimensión (horizontal o verticalmente). Perfecto para menús, encabezados y listas.
CSS Grid (grid, grid-cols-*, gap-*): Excelente para diseños de dos dimensiones, como la galería de fotos o tarjetas de productos.
Ejemplo:```html
<!-- Dos columnas en pantallas medianas y superiores, una columna en móviles -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
<div>Columna 1</div>
<div>Columna 2</div>
</div>
```
3.2. Visibilidad de Elementos (hidden, block, flex)
Controlaremos la visibilidad de elementos específicos para diferentes tamaños de pantalla para optimizar la experiencia del usuario.
Ejemplo: Ocultar un menú de navegación completo en pantallas pequeñas y mostrar un botón "hamburguesa".
code
Html
<!-- Navegación para escritorio -->
<nav class="hidden md:flex">...</nav>

<!-- Botón de menú para móviles -->
<button class="md:hidden">...</button>
3.3. Tamaños Responsivos (Padding, Margin, Width, etc.)
Utilizaremos las variantes de breakpoint para ajustar espaciados y tamaños.
Ejemplo: Aumentar el espaciado en pantallas más grandes.
code
Html
<section class="py-12 sm:py-16 md:py-24">...</section>
3.4. Tipografía Responsiva
El tamaño del texto debe adaptarse al tamaño de la pantalla para mantener la legibilidad.
Ejemplo: Títulos más grandes en escritorio, más pequeños en móvil.
code
Html
<h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
  Pizzaria Napoli
</h1>
3.5. Imágenes Responsivas
Las imágenes deben escalar correctamente y cargarse de manera eficiente.
Usar el componente <Image> de Next.js para optimización automática.
Aplicar clases como w-full y h-auto para asegurar que las imágenes se ajusten a su contenedor sin distorsión.
Para imágenes de fondo que cubren un contenedor, usar object-cover.
Ejemplo:
code
Jsx
import Image from 'next/image';

<div className="relative h-64 w-full">
  <Image
    src="/path/to/image.jpg"
    alt="Descripción de la imagen"
    layout="fill"
    objectFit="cover"
  />
</div>
4. Pruebas y Verificación
Todo componente o página nueva debe ser probado en los siguientes anchos de pantalla como mínimo:
Móvil: 375px
Tablet: 768px
Escritorio: 1024px
Escritorio grande: 1440px
Se deben utilizar las herramientas de desarrollador del navegador para simular estos dispositivos antes de finalizar una tarea.
5. Componentes que Requerirán Lógica de Estado (Client Components)
Algunos componentes necesitarán ser "Client Components" para manejar interacciones del usuario o adaptarse al entorno del navegador.
Header.tsx: Ya es un use client para manejar el menú móvil y el cambio de tema.
ThemeToggle.tsx: Por definición, necesita ser un componente de cliente para usar el hook useTheme.
Galería de Imágenes: Si se implementa una vista de modal o carrusel, este componente necesitará estado para controlar la imagen activa.
Formulario de Contacto: Requerirá estado para manejar las entradas del usuario y la lógica de envío.

---


