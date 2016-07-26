# Weekly Js Challenge - Week 02 readme

Generated on 2016-07-26 using
[generator-yeogurt@1.5.3](https://github.com/larsonjj/generator-yeogurt)

## Description

Site on Facebook: [Weekly JavaScript Challenge - week 02 event](https://www.facebook.com/events/1091460824257459/?active_tab=highlights)

***

Szczegółowe informacje
Drugie zadanie to głównie praca ze zdarzeniami. Tego typu problemy są właściwie codziennością w pracy front-endowców przy tworzeniu stron internetowych i prostych aplikacji.

# Zadanie:
Stwórz aplikację w JavaScripcie i HTML. Aplikacja po uruchomieniu ma wyświetlać formularz, który umożliwia przeliczanie jednostek długości. Użytkownik ma możliwość wpisania liczby w polu oraz wyboru dwóch jednostek – wejściowej i wyjściowej.

## Założenia i wymagania:
- użytkownik może wpisywać liczbę w pole
- w trakcie wpisywania aplikacja ma automatycznie na bieżąco przeliczać i wyświetlać wynik – bez konieczności np. klikania w przycisk
- ponadto, użytkownik może dokonać wyboru dwóch jednostek: metr, kilometr, decymetr, centymetr, milimetr, cal, stopa, jard, mila
- wpisanie w pole bzdur nie powinno „popsuć” aplikacji
- oceniane będą: Prawidłowa odpowiedź, obsługa błędów, czytelność kodu
- dopuszczalne jest używanie bibliotek pomocniczych, np. jQuery

## Tagi:
- zdarzenia (events)
- el.addEventListener(…)
- jQuery.on(…)

Rozwiązania wrzucamy na Codepen / jsfiddle / plnkr / jsbin, a następnie pod tym wydarzeniem dodajemy posta z linkiem i krótkim komentarzem do kodu :)


## Technologies used

JavaScript
- [Browserify](http://browserify.org/)
- [Node](https://nodejs.org/)

Styles
- [Sass](http://sass-lang.com/) via ([node-sass](https://github.com/sass/node-sass))

Markup
- [Jade](http://jade-lang.com/)

Optimization
- [Imagemin](https://github.com/imagemin/imagemin)
- [Uglify](https://github.com/mishoo/UglifyJS)

Server
- [BrowserSync](http://www.browsersync.io/)

Linting
- [ESlint](http://eslint.org/)

Automation
- [Gulp](http://gulpjs.com)

Code Management
- [Editorconfig](http://editorconfig.org/)
- [Git](https://git-scm.com/)


## Automated tasks

This project uses [Gulp](http://gulpjs.com) to run automated tasks for development and production builds.
The tasks are as follows:

`gulp --production`: Same as `gulp serve --production` also run `gulp test` and  not boot up production server

`gulp serve`: Compiles preprocessors and boots up development server
`gulp serve --open`: Same as `gulp serve` but will also open up site/app in your default browser
`gulp serve --production`: Same as `gulp serve` but will run all production tasks so you can view the site/app in it's final optimized form

`gulp test`: Lints all `*.js` file in the `source` folder using eslint

***Adding the `--debug` option to any gulp task displays extra debugging information (ex. data being loaded into your templates)***
