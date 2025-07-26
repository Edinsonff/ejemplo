import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import jsxA11y from 'eslint-plugin-jsx-a11y'

export default [
  { ignores: ['dist'] },
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: { react: { version: '18.3' } },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,

      // 🔹 Mejoras en React y JSX
      'react/no-unescaped-entities': 'warn', // Evita errores con caracteres especiales en JSX
      'react/jsx-uses-vars': 'error', // Evita variables definidas pero no usadas en JSX
      'react/jsx-no-useless-fragment': 'warn', // Evita el uso innecesario de Fragment <> </>
      'react/jsx-no-duplicate-props': 'error', // Evita que se repitan props en un mismo componente
      'react/jsx-pascal-case': 'error', // Obliga a que los componentes se escriban en PascalCase

      // 🔹 Reglas para Mejor Código y Prevención de Errores
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }], // Ignora variables no usadas que empiezan con "_"
      'no-duplicate-imports': 'error', // Evita importar el mismo módulo varias veces
      'no-shadow': 'error', // Evita redefinir variables en ámbitos anidados

      // 🔹 Reglas de Buenas Prácticas en React
      'react/self-closing-comp': 'warn', // Sugiere cerrar automáticamente etiquetas vacías <div></div> -> <div />
      'react-hooks/rules-of-hooks': 'error', // Asegura que los hooks solo se usen en funciones React
      'react-hooks/exhaustive-deps': 'warn', // Asegura que los efectos tienen las dependencias correctas

      // 🔹 Reglas de Accesibilidad
      'jsx-a11y/alt-text': 'warn', // Asegura que todas las imágenes tengan texto alternativo
      'jsx-a11y/anchor-is-valid': 'warn', // Evita enlaces `<a>` sin href válido
      'jsx-a11y/click-events-have-key-events': 'warn', // Evita problemas de accesibilidad en eventos de clic

      // 🔹 Reglas Opcionales (ajústalas según el proyecto)
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ], // Mantiene mejores prácticas en Fast Refresh de React
    }

  },
]
