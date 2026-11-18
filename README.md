# The Far Side — Juan Barrero

Sitio personal construido con Astro. Conserva el diseño original, la fotografía,
las secciones Posts / About / Materials y los apuntes de USTA y MIT.
La sección Games está oculta hasta que exista contenido.

## Publicar en GitHub Pages (sin Ubuntu)

1. Inicia sesión en GitHub y crea un repositorio **público** cuyo nombre sea
   exactamente **TU_USUARIO.github.io** (por ejemplo, `goa.github.io`
   si tu nombre de usuario es `Goa`). No marques las casillas para crear
   un README o `.gitignore` nuevos; estos archivos ya están aquí.
2. Descomprime el ZIP. Sube **todo el contenido de esta carpeta** a la
   **raíz** del nuevo repositorio, incluida la carpeta oculta `.github/`.
   Puedes usar GitHub Desktop (recomendado en Windows) o la opción de
   GitHub **Add file → Upload files**. No subas una carpeta contenedora
   por encima de `src/`, `public/`, `package.json` y `.github/`.
3. Verifica que la rama principal se llama `main`.
4. Abre **Settings → Pages → Build and deployment → Source**, elige
   **GitHub Actions**.
5. Abre la pestaña **Actions**. El flujo `Deploy Astro site to GitHub Pages`
   se ejecuta al subir cambios a `main`. Si no se ha ejecutado, abre el
   flujo y selecciona **Run workflow**.
6. Una vez que la ejecución tenga estado correcto, visita
   `https://TU_USUARIO.github.io/`.

**Nota:** la configuración de Astro y el vínculo de GitHub en el sitio detectan
el propietario real del repositorio durante el build en GitHub Actions, por
lo que no depende de tener exactamente el nombre `goa`.

### Si utilizas GitHub Desktop en Windows

- Crea primero el repositorio público vacío en GitHub.
- En GitHub Desktop: **File → Add local repository** (o **Create a new
  repository** desde esta carpeta); confirma que el directorio raíz contiene
  `package.json`, `src` y `.github`.
- Haz el primer commit y pulsa **Publish repository** o **Push origin**.
- Luego activa **Settings → Pages → GitHub Actions**.

## Trabajar en la página más adelante

Necesitas instalar Node.js 22 o posterior en Windows. Dentro de esta carpeta:

```bash
npm ci
npm run dev
```

Abre la URL local que muestre Astro. Para compilar:

```bash
npm run build
```

Cada `git push` a `main` vuelve a publicar el sitio automáticamente.

## Notas de clase

Los seis PDFs actuales están en `public/pdfs/`, enlazados desde las
páginas de USTA y MIT en `src/pages/materials/`. Se conservan los nombres
originales de los cursos y las categorías. **MIT y USTA son etiquetas de
materiales, no declaraciones de afiliación académica.**

El PDF `real-analysis.pdf` del ZIP original no se distribuye aquí porque
identifica a Tristan Chaang como autor. Es preferible no publicarlo entre
apuntes propios sin revisar sus condiciones de distribución y atribución.

## Secciones para ampliar

- **About:** `src/pages/index.astro` (variable `introBody`).
- **Materiales y enlaces:** `src/data/site.ts` y `src/data/material-pages.ts`.
- **Nuevos PDFs:** coloca el PDF en `public/pdfs/`, crea su página en
  `src/pages/materials/` y enlázala en la categoría correspondiente.
- **Posts:** agrega archivos Markdown reales en `src/content/posts/`.
  El ejemplo de frontmatter requerido es:

  ```md
  ---
  title: "Título de la entrada"
  date: "Nov 18, 2026"
  draft: false
  ---

  Aquí va el texto de tu publicación.
  ```

Los ejemplos ficticios originales fueron eliminados del sitio público.
No se publican enlaces genéricos a cuentas inexistentes ni páginas de
CV o libros que aún no se han preparado.

## Estado del proyecto

- Sitio estático Astro; despliegue automático con GitHub Actions.
- 6 PDFs de notas accesibles desde sus categorías.
- Games retirado de la navegación y del build.
- Foto original `public/profile1.jpg` conservada.
- Bibliotecas `node_modules`, `.astro` y `dist` deliberadamente excluidas.
