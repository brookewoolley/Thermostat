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

  it("can be reset to default temperature", function(){
    for (var i = 0; i < 6; i++) {
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });


  describe("when power saving mode is on", function() {
    it('has a maximum temperature of 25 degrees', function() {
      for (var i = 0; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe("when power saving mode is off", function() {
    it('has a maximum temperature of 32 degrees', function() {
      thermostat.turnPowerSavingModeOff();
      for (var i = 0; i < 13; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe("displaying usage levels", function() {
    describe("when the temperature is below 18 degrees", function() {
      it('it is considered low-usage', function() {
        for (var i = 0; i < 3; i++) {
          thermostat.down();
        }
        expect(thermostat.energyUsage()).toEqual('low-usage');
      });
    });

    describe("When the temperature is between 18 and 25 degrees", function() {
      it("it is considered medium usage", function() {
        expect(thermostat.energyUsage()).toEqual('medium-usage');
      });
    });

    describe("when the temperature is anything else", function() {
      it("it is considered high-usage", function() {
        thermostat.powerSavingMode = false;
        for (var i = 0; i < 6; i++) {
          thermostat.up();
        }
        expect(thermostat.energyUsage()).toEqual('high-usage');
      });
    });
  });

});
