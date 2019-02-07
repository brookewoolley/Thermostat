describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('starts at 20 degrees', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('increases in temperature with up()', function() {
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it('decreases in temperature with down()', function() {
    thermostat.up();
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  })

  it("won't go below 10 degrees", function(){
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it("it has power saving mode on by default", function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it("can turn Power Saving Mode off", function(){
    thermostat.turnPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it("can turn Power Saving Mode on", function(){
    thermostat.turnPowerSavingModeOff();
    thermostat.turnPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });
  
  describe("when power saving mode is on", function() {
    it('has a maximum temperature of 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

});
