(function(global, $) {

    var Greetr = function (firstName, lastName, language){
      return new Greetr.init(firstName, lastName, language);
    }

    var supportLang = ['pl', 'en'];

    var greetings = {
      pl: 'Czesc',
      en: 'Hello'
    };

    var formalGreetings = {
      pl: 'Dzien dobry',
      en: 'Good morning'
    };

    var logMessage = {
      pl: 'Zalogowany',
      en: 'Logged in'
    };

    Greetr.prototype = {

      fullName: function(){
        return this.firstName + ' ' + this.lastName;
      },

      validate: function(){
        if (supportLang.indexOf(this.language) === -1) {
          throw "Niewlasciwy jezyk";
        }
      },

      greeting: function(){
        return greetings[this.language] + ', ' + this.firstName + '!';
      },

      formalGreetings: function(){
        return formalGreetings[this.language] + ', ' + this.fullName();
      },

      greet: function(formal){
        var msg;

        if (formal){
          msg = this.formalGreetings();
        } else {
          msg = this.greeting();
        }
        if (console){
          console.log(msg);
        }
         return this;
      },

      log: function(){
        if (console){
          console.log(logMessage[this.language] + ': ' + this.fullName());
        }
        return this;
      },

      setLang: function(lang){
        this.language = lang;

        this.validate();

        return this;
      }

    };

    Greetr.init = function (firstName, lastName, language){

      var self = this;
      self.firstName = firstName || '';
      self.lastName = lastName || '';
      self.language = language || 'pl';

    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
