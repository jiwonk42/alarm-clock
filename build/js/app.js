(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function(){
  function update() {
  $('#time').html(moment().format('H:mm:ss'));
  }
  setInterval(update, 1000);

  var currentTime = moment().format('H:mm');
  console.log(currentTime);

  $('#alarm-clock').submit(function(event) {
    event.preventDefault();

    var inputtedTime = $('input#inputtedTime').val();
  });

  setInterval(function() {
    if (moment().format('H:mm') === $('input#inputtedTime').val())
    {
      $('.display-time').text('Mr. Grinch is in town!');
    } else {
      $('.display-time').text('Mr. Grinch got arrested.');
    }
  }, 1000)
});

},{}]},{},[1]);
