# 📧 Detector de Correos Sospechosos

## 🎯 Problema
En la actualidad, el phishing es una de las técnicas más comunes y peligrosas usadas por ciberdelincuentes para engañar a los usuarios y obtener información sensible, como contraseñas, datos bancarios o acceso a cuentas personales. Los correos electrónicos fraudulentos suelen imitar comunicaciones legítimas de empresas reconocidas, lo que dificulta que los usuarios puedan identificar cuándo un correo es malicioso.

Este proyecto aborda la necesidad de una herramienta sencilla y didáctica que permita a los usuarios aprender a identificar correos sospechosos mediante la visualización y clasificación manual de mensajes simulados, fomentando así la conciencia sobre los riesgos del phishing y mejorando la seguridad personal y corporativa.

## ✅ SoluciónClaro, aquí tienes una versión ampliada y más detallada para la descripción de tu proyecto que puedes incluir en el README o la documentación de GitHub:

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
git clone https://github.com/NickHatone/Phishing-Page.git
cd phishing-detector
npm install
npm run dev
