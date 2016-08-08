# Weekly Js Challenge - Week 04 readme

Generated on 2016-08-08 using
[generator-yeogurt@1.5.3](https://github.com/larsonjj/generator-yeogurt)

## Description

Site on Facebook: [Weekly JavaScript Challenge - week 04 event](https://www.facebook.com/events/1062498357132335/?active_tab=highlights)

***

# Szczegółowe informacje
Czwarte zadanie to wykonywanie żądań HTTP i praca z REST API. Jest to niezbędny element wszystkich interaktywnych aplikacji webowych.

# Zadanie:
Stwórz aplikację w JavaScript i HTML. Aplikacja po uruchomieniu ma umożliwić wyszukiwanie zabawnych gifów z Giphy.com.

## Założenia i wymagania:
- aplikacja wyświetla pole tekstowe
- użytkownik może wpisywać tam dowolne słowa
- wyszukiwanie powinno następować automatycznie po wpisaniu tekstu, np. 300ms po wpisaniu ostatniej literki
- gdy znalezione zostaną jakieś rezultaty, powinny zostać one wyświetlone poniżej
- jeśli nie ma żadnych rezultatów, powinien pojawić się stosowny komunikat
- oceniane będą: Prawidłowe działanie, obsługa błędów, czytelność kodu
- ważnym aspektem pracy z jakimkolwiek API jest przewidywanie problemów z połączeniem – użytkownik może na chwilę „stracić internet”, albo serwer może być przez moment offline

Dokumentacja API Giphy wraz z przykładami jest dostępna tutaj: https://github.com/Giphy/GiphyAPI

Do wykonywania żądań do API polecam nie korzystać ani z jQuery, ani z XMLHttpRequest (XHR), tylko z funkcji fetch(). Fetch API działa już teraz we wszystkich popularnych przeglądarkach: Chrome, Firefox, Safari (Technological Preview) oraz Edge (Windows 10 Anniversary Update).

API Giphy zwraca “gify” w kilku formatach. Pliki z rozszerzeniem .gif ważą dużo i długo się ładują, dlatego polecam skorzystać np. z formatu mp4 i tagu <video>.

## Tagi:
- Fetch API
- Promise
- tag video
- debounce

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
