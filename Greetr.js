;(function(global, $) {

    let Greetr = (firstName, lastName, language) =>{
      return new Greetr.init(firstName, lastName, language);
    }

    let supportLang = ['pl', 'en', 'es'];

    let greetings = {
      pl: 'Cześć',
      en: 'Hello',
      es: 'Hola'
    };

    let formalGreetings = {
      pl: 'Dzień dobry',
      en: 'Good morning',
      es: 'Buenos dias'
    };

    let logMessage = {
      pl: 'Zalogowany',
      en: 'Logged in',
      es: 'En linea'
    };

    Greetr.prototype = {

      fullName: function() {
        return this.firstName + ' ' + this.lastName;
      },

      validate: function(){
        if (supportLang.indexOf(this.language) === -1) {
          throw "Nie wybrano jezyka";
        }
      },

      greeting: function(){
        return greetings[this.language] + ', ' + this.firstName + '!';
      },

      formalGreetings: function(){
        return formalGreetings[this.language] + ', ' + this.fullName() + '.';
      },

      greet: function(formal){
        let msg;

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
      },

      HTMLGreeting: function(selector, formal){
        if(!$){
          throw 'jQuery nie zostało załadowane';
        }
        if(!selector){
          throw 'Nie wybrano selektora jQuery';
        }
        let msg;
        if(formal){
          msg = this.formalGreetings();
        } else {
          msg = this.greeting();
        }
        $(selector).html(msg);

        return this;
      }

    };

    Greetr.init = function (firstName, lastName, language){

      let self = this;
      self.firstName = firstName || '';
      self.lastName = lastName || '';
      self.language = language || 'pl';

    }

    Greetr.init.prototype = Greetr.prototype;

    global.Greetr = global.G$ = Greetr;

}(window, jQuery));
