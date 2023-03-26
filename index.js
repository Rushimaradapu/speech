annyang.addCallback(
    'resultMatch',
    function (userSaid, commandText, phrases) {
      console.log(userSaid);
      console.log(commandText);
      console.log(phrases);
    }
  );
  
  annyang.addCallback('resultNoMatch', function (phrases) {
    console.log('I think the user said: ', phrases[0]);
    console.log(
    'But then again, it could be any of the following: ',
    phrases
    );
  });