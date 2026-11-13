# roadmap.sh — práctica de HTML

Prácticas de HTML semántico, sin CSS. El diseño queda para el proyecto de estilos.

## Cómo verlo

Abre el HTML en el navegador. No hace falta instalar nada ni levantar un servidor.

## Sitio de varias páginas

Sitio con inicio, proyectos, artículos, about y contacto. La misma barra de navegación está en todas las páginas.

- **Header:** nombre, rol y navegación.
- **Main:** en inicio, presentación, listas de proyectos, artículos y educación. En el resto, el detalle de esa sección.
- **Footer:** contacto y copyright.
- **Contacto:** formulario con nombre, correo, asunto y mensaje.

Metaetiquetas en cada página: `title`, `description`, `author`, `keywords` y Open Graph (`og:title`, `og:description`, `og:type`).

Archivos:

- `HTML/index.html` — inicio.
- `HTML/projects.html` — proyectos.
- `HTML/articles.html` — artículos.
- `HTML/about.html` — perfil y foto.
- `HTML/contact.html` — formulario de contacto.
- `HTML/foto-cv-web.webp` — foto de la página About.
- `HTML/favicon-32x32.png` — icono de la pestaña.

Proyecto: [Sitio web HTML básico](https://roadmap.sh/projects/basic-html-website)

## CV de una página

Currículum en un solo HTML. Cabecera con nombre y contacto, skills, educación y experiencia. Cada formación y cada proyecto van en su propio `article`.

- `HTML/single-page-cv.html` — la página del CV.

Proyecto: [Single Page CV](https://roadmap.sh/projects/single-page-cv)

## Tabla de comparación de precios

Página de una sola tabla que compara planes de suscripción. Sin CSS: la estructura y la accesibilidad de la tabla son el objetivo.

- **Header:** marca y navegación.
- **Main:** título y tabla de planes (Free, Pro y Business) con almacenamiento, proyectos y soporte.
- **Footer:** copyright.
- **Tabla:** `caption`, `thead` y `tbody`. Los encabezados de columna usan `scope="col"` y el nombre de cada plan usa `scope="row"`. Una fila con `colspan` indica que todos los planes incluyen SSL y copias diarias.

- `HTML/pricin-comparison-table.html` — la página de la tabla.

Proyecto: [Pricing Comparison Table](https://roadmap.sh/projects/pricing-comparison-table)

## Entrada de blog

Dos páginas de artículo, sin CSS. El objetivo es elegir la etiqueta según el significado del texto.

- **Header:** nombre del sitio y navegación.
- **Main:** título, fecha, párrafos, lista, cita, ejemplo de código y un enlace para seguir leyendo.
- **Figure:** imagen con `alt` y `figcaption`.
- **Footer:** copyright.
- **Head:** `title`, `charset`, `viewport` y una `description` que resume la publicación.

- `HTML/blog-post-page.html` — publicación sobre HTML semántico.
- `HTML/blog.html` — publicación sobre esports y Counter-Strike.
- `HTML/mountain-icon-simple-thin-outline_1223784-3557.avif` — imagen del artículo de HTML semántico.
- `HTML/images.jpg` — imagen del artículo de Counter-Strike.

Proyecto: [Semantic HTML](https://roadmap.sh/projects/blog-post-page)


## Formulario de contacto

Página de soporte de Acme, sin CSS y sin JavaScript. El objetivo es el formulario que el navegador convierte en una petición: cada control tiene `name`, una etiqueta asociada y la validación nativa.

- **Header:** marca y navegación (Home, Help, Contact).
- **Main:** título, una frase y el formulario.
- **Formulario:** `action` con una URL de marcador y `method="post"`. Nombre y correo obligatorios, asunto en un `select` con tres opciones, mensaje en un `textarea` con `minlength`, radios dentro de un `fieldset` con `legend` y un checkbox opcional de novedades.
- **Footer:** copyright.
- **Head:** `title`, `charset` y `viewport`.

- `HTML/contacform.html` — la página del formulario.

Proyecto: [Contact Form](https://roadmap.sh/projects/contact-form)
## Repositorio

## Colección de fotos

Página de una colección sobre café, sin CSS. El objetivo es el marcado que decide cómo se carga, se describe y se anuncia el contenido multimedia.

- **Header:** título, una frase y un icono decorativo con `alt=""`.
- **Main:** seis fotos. Cada `img` tiene `src`, `alt`, `width` y `height`. Tres van dentro de `figure` con `figcaption`.
- **Video:** `controls`, `poster` y un texto de reserva por si el navegador no reproduce el archivo.
- **Footer:** la sección está presente, sin texto.
- **Head:** `title`, `charset` y `viewport`, además de `description`, `author`, `keywords` y Open Graph.

Archivos:

- `HTML/photoshowcase.html` — la página.
- `HTML/cafe01.jpg`, `HTML/cafe02.jpg`, `HTML/cafe03.jpg`, `HTML/cafe04.jpg`, `HTML/cafe05.jpg` y `HTML/cafe05.png` — las fotos.
- `HTML/cafecito-video.mp4` — el vídeo.
- `HTML/favicon-32x32.png` — icono decorativo y de la pestaña.

Proyecto: [Photo Showcase](https://roadmap.sh/projects/photo-showcase)

[github.com/gondev94/roadmap-sh-practice](https://github.com/gondev94/roadmap-sh-practice)


## Greeting Builder

Tres funciones de JavaScript que arman un saludo. `formatName` une nombre y apellido, `getGreeting` elige el saludo según el momento del día y `createGreeting` usa las dos y devuelve la frase completa.

- `JAVASCRIPT/greetingBuilder.js` — las tres funciones.

Proyecto: [Greeting Builder](https://roadmap.sh/projects/js-greeting-builder)

## Conversor de temperatura

Tres funciones de JavaScript que convierten y formatean temperaturas. `celciusToFahrenheit` pasa de Celsius a Fahrenheit, `fahrenheitToCelcius` hace el cambio inverso y `formatTemperature` devuelve el valor con el símbolo de grados y la unidad.

- `JAVASCRIPT/js-temperature-converter.js` — las tres funciones.

Proyecto: [JS Temperature Converter](https://roadmap.sh/projects/js-temperature-converter)

## Controlador de números

Seis funciones de JavaScript que verifican los valóres numéricos en `isPositive` , `isNegative`, `isZero`, `isEven`, `isOdd`, `describeNumber`

- `JAVASCRIPT/js-number-checker.js` - las seis funciones.

Proyecto: [JS Number Checker](https://roadmap.sh/projects/js-number-checker)


## Formateador de cadenas

Tres funciones de JavaScript que limpian y presentan un nombre. `cleanText` quita los espacios de los extremos, `capitalize` deja la primera letra en mayúscula y el resto en minúscula, y `formatDisplayName` usa las dos para devolver nombre y apellido listos para mostrar.

- `JAVASCRIPT/js-string-formatter.js` - las tres funciones

Proyecto: [JS Sstring Formatter](https://roadmap.sh/projects/js-string-formatter)

## Calculadora de precios

Cuatro funciones de JavaScript que calculan `calculateSubTotal` retorna precio * cantidad, `calculateDiscount` aplica un descuento y `createCartSummary` que devuelve el total de items por descuento y tax.

- `JAVASCRIPT/js-cart-total-calculator.js` - las cuatro funciones


## Resumen de gastos

Cuatro funciones de JavaScript que resumen una lista de gastos. `calculateTotal` suma todos los importes, `calculateCategoryTotal` suma solo una categoría, `findLargestExpense` devuelve el gasto más alto y `createExpenseSummary` arma un objeto con el total, los totales por categoría y el gasto más grande.

- `JAVASCRIPT/js-expense-summary.js` — las cuatro funciones.

Proyecto: [JS Expense Summary](https://roadmap.sh/projects/js-expense-summary)

## Informe de calificaciones

Cuatro funciones de JavaScript que convierten un puntaje en un informe. `getLetterGrade` pasa el número a A, B, C, D o F, `hasPassed` comprueba si llega a 60, `getFeedBack` elige el mensaje según la letra y `createGradeReport` devuelve nombre, nota, mensaje y si aprobó.

- `JAVASCRIPT/js-grade-report-generator.js` — las cuatro funciones.

Proyecto: [JS Grade Report Generator](https://roadmap.sh/projects/js-grade-report-generator)

## Normalizador de respuestas JSON

Tres funciones de JavaScript que dejan una respuesta de API lista para mostrar. `getPublishedArticles` se queda con los artículos publicados, `toArticleSummary` saca id, título, autor y vistas, y `normalizeArticles` aplica las dos y devuelve la lista resumida.

- `JAVASCRIPT/js-json-response-normalizer.js` — las tres funciones.

Proyecto: [JS JSON Response Normalizer](https://roadmap.sh/projects/js-json-response-normalizer)

## Ayudante de estado de pedidos

Cinco funciones de JavaScript que leen un pedido. `isPaid` y `hasShipped` miran el pago y el envío, `getDeliveryMessage` arma la frase con la fecha estimada, `needsAttention` marca el pedido si falta pagar o enviar, y `createOrderSummary` junta id, cliente, cantidades y ese estado.

- `JAVASCRIPT/js-order-status-helper.js` — las cinco funciones.

Proyecto: [JS Order Status Helper](https://roadmap.sh/projects/js-order-status-helper)

## Validador de contraseñas

Cinco funciones de JavaScript que revisan una contraseña. `hasMinimumLength` pide al menos 8 caracteres, `hasNumber` busca un dígito, `hasUppercaseLetter` busca una mayúscula, `getFailedRules` lista las reglas que fallan y `validatePassword` devuelve si es válida y cuáles fallaron.

- `JAVASCRIPT/js-password-rule-checker.js` — las cinco funciones.

Proyecto: [JS Password Rule Checker](https://roadmap.sh/projects/js-password-rule-checker)

## Calculadora de precio

Cuatro funciones de JavaScript que calculan el precio final. `calculateDiscount` saca el descuento, `calculateTax` calcula el impuesto sobre el precio ya descontado, `calculateFinalPrice` resta el descuento y suma el impuesto, y `createPriceSummary` devuelve la frase con el precio a dos decimales.

- `JAVASCRIPT/js-price-calculator.js` — las cuatro funciones.

Proyecto: [JS Price Calculator](https://roadmap.sh/projects/js-price-calculator)

## Búsqueda y filtro de productos

Cinco funciones de JavaScript que recorren un catálogo. `filterByCategory` filtra por categoría, `filterByMaxPrice` deja los que no superan un precio, `getInStockProducts` se queda con los que tienen stock, `findProductById` busca uno por id y `searchProducts` compara el nombre sin distinguir mayúsculas. Si la lista no es un array, los filtros devuelven `[]` y la búsqueda por id devuelve `null`.

- `JAVASCRIPT/js-product-search-and-filter.js` — las cinco funciones.

Proyecto: [JS Product Search and Filter](https://roadmap.sh/projects/js-product-search-and-filter)

## Calculadora de puntaje de quiz

Cinco funciones de JavaScript que corrigen un quiz. `isAnswerCorrect` compara una respuesta, `countCorrectAnswers` cuenta los aciertos, `calculatePercentage` pasa ese conteo a porcentaje, `getResultMessage` aprueba desde 70 y `createQuizResult` devuelve el porcentaje y el mensaje.

- `JAVASCRIPT/js-quiz-score-calculator.js` — las cinco funciones.

Proyecto: [JS Quiz Score Calculator](https://roadmap.sh/projects/js-quiz-score-calculator)

## Utilidades de lista de tareas

Diez funciones de JavaScript para una lista de tareas. `addTask` agrega una pendiente, `completeTask` la marca hecha, `removeTask` la saca, `findTask` la busca por id y `filterTasks` separa por estado. `countIncompleteTasks` y `countCompletedTasks` cuentan cada grupo. `saveTasks` y `loadTasks` guardan y leen la lista en `localStorage`. `displayTasks` pinta los títulos en el elemento `task-list`.

- `JAVASCRIPT/js-task-list-utilities.js` — las diez funciones.

Proyecto: [JS Task List Utilities](https://roadmap.sh/projects/js-task-list-utilities)

## Formateador de perfil de usuario

Cinco funciones de JavaScript que arman el texto de un perfil. `getDisplayName` une nombre y apellido, `getLocation` junta ciudad y país, `getContactSummary` junta correo y teléfono, `isAccountActive` dice si la cuenta está activa y `createProfileSummary` devuelve el bloque con los cuatro datos.

- `JAVASCRIPT/js-user-profile-formatter.js` — las cinco funciones.

Proyecto: [JS User Profile Formatter](https://roadmap.sh/projects/js-user-profile-formatter)