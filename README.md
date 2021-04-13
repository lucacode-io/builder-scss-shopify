# Builder Hero - SCSS Shopify 📦


## Como usar esse template ?

1 - Configure seu arquivo **config.yml** do seu projeto shopify, se não tem ele crie o mesmo 

```yml
development:
  password: senha-da-sua-api-do-shopify
  theme_id: "0000000000" #Template da loja
  store: nome-loja.myshopify.com
  ignore_files : 
    - config/settings_data.json
```

2 - Depois, dependendo do que será criado nos estilos ou scripts, nessa parte o mesmo terá que se adptar de acordo com seu projeto

- Aqui temos a config inicial do **gulpfile.js**

```js
const gulp = require('gulp');
const themeKit = require('@shopify/themekit');
const sass = require('gulp-sass');
const clean = require('gulp-clean-css')

gulp.task('sass', function() {
  return gulp.src('./styles/custom-styles.scss')
    .pipe(sass())
    .pipe(clean({ compatibility: 'ie11' }))
    .pipe(gulp.dest('assets'))
})

gulp.task('watch', function() {
  gulp.watch('./styles/**/*.scss', gulp.series('sass'));

  themeKit.command('watch', {
    env: 'development'
  })
})
```

Obs: a configuração do gulpfile vai de acordo com a sua necessidade no projeto

## Rodando o projeto

Essa configuração do **gulpfile.js** permite que a CLI do Shopify , o ThmeKit rode em conjunto como uma task do gulp, sendo assim, para começar um projeto novo , inicialmente rode o comando

```bash
theme download
```

ele irá baixar os arquivos do seu tema  da loja shopify, depois disso se tudo deu certo, rode o comando 

```bash
gulp watch 
```

Agora nesse instante ele irá monitorar e atualizar todas as mudanças na pasta **styles**, e compilará para a pasta **assets**, e em seguida irá atualizar direto na shopify, não se preucupe, pois a shopify só entende os arquivos dela , ou seja, não irá subir nenhuma pasta a mais na loja.
