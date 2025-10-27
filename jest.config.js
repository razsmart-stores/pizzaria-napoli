const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Proporciona la ruta a tu aplicación Next.js para cargar next.config.js y los archivos .env en tu entorno de prueba
  dir: './',
});

// Añade cualquier configuración personalizada que quieras pasar a Jest
const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    // Manejar alias de módulos (si has configurado alguno en tsconfig.json)
    '^@/components/(.*)$': '<rootDir>/src/components/$1',
    '^@/pages/(.*)$': '<rootDir>/src/pages/$1',
  },
};

// createJestConfig se exporta de esta manera para asegurar que next/jest pueda cargar la configuración de Next.js que es asíncrona
module.exports = createJestConfig(customJestConfig);
