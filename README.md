# Detector de Correos Sospechosos INACAP

## 🎯 Problema
En la actualidad,es una de las técnicas más comunes y peligrosas usadas por ciberdelincuentes para engañar a los usuarios y obtener información sensible, como contraseñas, datos bancarios o acceso a cuentas personales. Los correos electrónicos fraudulentos suelen imitar comunicaciones legítimas de empresas reconocidas, lo que dificulta que los usuarios puedan identificar cuándo un correo es malicioso.

Este proyecto aborda la necesidad de una herramienta sencilla y didáctica que permita a los usuarios aprender a identificar correos sospechosos mediante la visualización y clasificación manual de mensajes simulados, fomentando así la conciencia sobre los riesgos del phishing y mejorando la seguridad personal y corporativa.

## ✅ Solución

---

## Descripción del Proyecto

Este proyecto es una aplicación web interactiva desarrollada con **React** y **Vite** que simula una bandeja de entrada con correos electrónicos, tanto legítimos como falsos (phishing). Su propósito principal es ofrecer una herramienta educativa que permita a los usuarios identificar y clasificar correos electrónicos sospechosos para mejorar su conocimiento sobre la seguridad digital y la prevención de ataques de phishing.

### Funcionalidades principales

* **Simulación de correos electrónicos**: La aplicación presenta una lista de correos simulados que incluyen mensajes legítimos y correos con características comunes de phishing, tales como dominios falsificados, lenguaje urgente y enlaces fraudulentos.

* **Clasificación manual**: El usuario puede marcar cada correo como "seguro" o "sospechoso", lo que permite practicar la detección de phishing en un entorno controlado.

* **Persistencia de datos**: Los estados de clasificación se guardan en el navegador mediante **LocalStorage**, de modo que la información no se pierde al recargar o cerrar la página.

* **Consejos dinámicos**: Para cada correo mostrado, la aplicación genera y despliega consejos basados en patrones comunes de phishing detectados en el contenido y el remitente del correo.

* **Interfaz clara y responsiva**: Se implementó una interfaz sencilla y visualmente atractiva que muestra los correos, estadísticas y recomendaciones en un diseño adaptativo para facilitar la experiencia del usuario.

### Tecnologías y herramientas utilizadas

* **React**: Librería principal para construir la interfaz de usuario de manera declarativa y modular.
* **Vite**: Herramienta de bundling y desarrollo rápido para aplicaciones modernas de JavaScript.
* **LocalStorage**: Para mantener la persistencia del estado de los correos y su clasificación localmente en el navegador.
* **CSS inline styles** y flexbox para la disposición visual y responsividad.
* **API pública (opcional)**: En versiones futuras, se planea integrar la carga dinámica de remitentes y contenidos de correo mediante APIs públicas para ampliar el banco de datos y mejorar el realismo.

### Proceso de desarrollo

El proyecto comenzó con la creación de un conjunto de correos ficticios, cuidadosamente diseñados para incluir ejemplos reales de correos legítimos y variaciones comunes en phishing. Se implementó una lógica para actualizar el estado de cada correo según la interacción del usuario, almacenando estos cambios en LocalStorage para persistencia.

Posteriormente, se desarrolló un sistema de consejos automáticos que evalúa ciertos patrones sospechosos en los correos, ayudando a educar al usuario sobre los indicadores más relevantes de phishing.

Finalmente, se diseñó una interfaz dividida en secciones que facilitan la lectura y clasificación de los correos, con estadísticas en tiempo real y feedback claro para el usuario.


## 🚀 Cómo ejecutar

```bash
Perfecto. Aquí tienes una sección ampliada y clara de **Instrucciones de uso**, que puedes insertar en tu `README.md` en GitHub. Incluye explicaciones paso a paso para que cualquier usuario —incluso sin experiencia previa— pueda ejecutar tu proyecto localmente:

---

## 🛠️ Instrucciones de Uso

Sigue los siguientes pasos para clonar, instalar y ejecutar el proyecto en tu máquina local:

### 1. Clona el repositorio

Abre tu terminal o consola y ejecuta el siguiente comando para clonar el proyecto desde GitHub:

```bash
git clone https://github.com/NickHatone/Phishing-Page.git
```

### 2. Accede al directorio del proyecto

Una vez clonado, entra al directorio del proyecto:

```bash
cd Phishing-Page
```

> 🔔 Asegúrate de estar en la carpeta correcta. Puedes usar `ls` (Linux/macOS) o `dir` (Windows) para listar los archivos y verificarlo.

### 3. Instala las dependencias

Instala los paquetes necesarios usando `npm` (Node Package Manager):

```bash
npm install
```

Esto descargará todas las librerías necesarias para que el proyecto funcione correctamente, como React, Vite, etc.

### 4. Ejecuta el servidor de desarrollo

Inicia la aplicación en modo desarrollo con:

```bash
npm run dev
```

Esto abrirá el proyecto en tu navegador, normalmente en la dirección:

```
http://localhost:5173/
```

> 📌 Si no se abre automáticamente, copia y pega esa URL en tu navegador.

---

### ✅ Requisitos Previos

Antes de iniciar asegúrate de tener instalado:

* **Node.js** (recomendado v18 o superior) 👉 [Descargar Node.js](https://nodejs.org/)
* **npm** (incluido con Node.js)
* **Git** 👉 [Descargar Git](https://git-scm.com/)
* **Visual Studio Code** (opcional pero recomendado) 👉 [Descargar VS Code](https://code.visualstudio.com/)

---



