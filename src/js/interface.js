$( document ).ready(function() {
  var thermostat = new Thermostat();

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
