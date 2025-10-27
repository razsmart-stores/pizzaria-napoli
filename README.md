Pizzaria Napoli - Sitio Web Oficial
![alt text](https://raw.githubusercontent.com/alvarosaburido/react-pizza-landing/main/public/images/logo.png)
Descripción del Proyecto
Este es el repositorio oficial del sitio web de Pizzaria Napoli, una pizzería con más de 10 años de tradición. Este proyecto tiene como objetivo crear una plataforma en línea moderna, rápida y atractiva para nuestros clientes, permitiéndoles explorar nuestro menú, conocer nuestra historia y realizar pedidos fácilmente.
Tecnologías Utilizadas
Framework: Next.js
Lenguaje: TypeScript
Estilos: Tailwind CSS
Linting: ESLint
Gestor de Paquetes: pnpm
Características
Página de Inicio: Presenta las especialidades de la pizzería, promociones destacadas y un llamado a la acción claro para realizar pedidos.
Menú Interactivo: Una sección detallada y categorizada de nuestras pizzas (Tradicionais, Especiais, Premium, Doces) y bebidas.
Nuestra Historia: Una página dedicada a contar la historia y los valores de Pizzaria Napoli.
Galería de Fotos: Una colección visual de nuestras deliciosas pizzas y el ambiente acogedor de nuestro restaurante.
Contacto y Ubicación: Información de contacto, un formulario para consultas y un mapa interactivo para encontrar nuestras sucursales.
Pedidos en Línea: Integración con nuestro sistema de pedidos para una experiencia de usuario fluida.
Cómo Empezar
Para comenzar a trabajar en este proyecto, sigue estos pasos:
Clonar el repositorio:
code
Bash
git clone https://github.com/tu-usuario/napoli-flash.git
cd napoli-flash
Instalar dependencias:
Asegúrate de tener pnpm instalado. Si no es así, puedes instalarlo con npm install -g pnpm. Luego, instala las dependencias del proyecto:
code
Bash
pnpm install
Ejecutar el servidor de desarrollo:
code
Bash
pnpm dev
Abre http://localhost:3000 en tu navegador para ver la aplicación en acción.
Scripts Disponibles
En el directorio del proyecto, puedes ejecutar los siguientes comandos:
pnpm dev: Inicia la aplicación en modo de desarrollo.
pnpm build: Compila la aplicación para producción.
pnpm start: Inicia un servidor de producción.
pnpm lint: Ejecuta el linter para verificar el estilo del código.
Estructura del Proyecto
code
Code
.
├── .next/                  # Directorio de compilación de Next.js
├── public/                 # Contiene archivos estáticos
│   ├── images/
│   │   └── ...
│   └── ...
├── src/
│   ├── app/                # Directorio principal de la aplicación
│   │   ├── layout.tsx      # Estructura principal de la página
│   │   └── page.tsx        # Página de inicio
│   ├── components/         # Componentes reutilizables
│   ├── lib/                # Funciones y utilidades
│   └── styles/             # Estilos globales
├── .eslintrc.json          # Configuración de ESLint
├── .gitignore              # Archivos y carpetas a ignorar por Git
├── next-env.d.ts           # Definiciones de tipos para Next.js
├── next.config.js          # Configuración de Next.js
├── package.json            # Dependencias y scripts del proyecto
├── pnpm-lock.yaml          # Archivo de bloqueo de dependencias de pnpm
├── postcss.config.mjs      # Configuración de PostCSS
├── README.md               # ¡Este archivo!
└── tailwind.config.ts      # Configuración de Tailwind CSS

Raz Podestá - MetaShark Tech
Florianópois/Sc/Brasil
2025
