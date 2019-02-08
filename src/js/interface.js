$( document ).ready(function() {
  var thermostat = new Thermostat();

  $('#temperature').text(thermostat.getCurrentTemperature());

  $('#temp-up').click(function() { // event listener
    thermostat.up(); // update model
  $('#temperature').text(thermostat.getCurrentTemperature()); // update view
})

  $('#temp-down').click(function() {
    thermostat.down();
    $('#temperature').text(thermostat.getCurrentTemperature());
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    $('#temperature').text(thermostat.getCurrentTemperature());
  });

  });
