//필요 모듈 불러오기
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');                 //http리퀘스트에 대해 로깅하는 모듈

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();      //app 객체 선언 후 express()함수로 생성

// view engine setup. 웹서버의 특징 기술
app.set('views', path.join(__dirname, 'views'));    //뷰 템플릿 파일 경로 라우팅 
app.set('view engine', 'pug');       //뷰에 사용될 기본엔진 이름을 정함

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));     //디렉토리 구조를 url에 반영

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler 에러발생 시 어떻게 처리할지에 대한 코드
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
