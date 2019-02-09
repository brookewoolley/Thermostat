$( document ).ready(function() {
  var thermostat = new Thermostat();
  // 
  // $.get('https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=3c18869758d249aede21772bcaad8491',
  //   function(data)
  //   {$('#current-temperature').text(data.main.temp);
  // });

  $('#temp-up').click(function() { // event listener
    thermostat.up(); // update model
    updateTemperature(); // update view
  });

  $('#temp-down').click(function() {
    thermostat.down();
    updateTemperature();
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemperature();
  });

  $('#powersaving-on').click(function() {
    thermostat.turnPowerSavingModeOn();
    $('#power-saving-status').text('on')
    updateTemperature(); // issue with this!!
  });

  $('#powersaving-off').click(function() {
    thermostat.turnPowerSavingModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  });

  function updateTemperature() {
    $('#temperature').text(thermostat.getCurrentTemperature());
    $('#temperature').attr('class', thermostat.energyUsage());
  };

});
