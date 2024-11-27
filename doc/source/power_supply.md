# Power supply
 
COM Express 7 baseboard can be powered with a stable DC voltage via the on-board locking DC connector ([`J6`](#J6)) with Molex Nano-Fit plug, or backplane PCB-edge connector ([`J16`](#J16)). 
These two power inputs are directly connected on the PCB. These inputs are protected with a 12A fuse and 15V TVS diode. The nominal supply voltage is 12V. 
When LX2160A is used, absolute maximum is 15V and it requires 50W full system.

### Supply current monitoring
Three `INA219AIDCNR` ICs are used to monitor the current draw on `12V` input, `3V3` and `5V` rails.
They are connected to one I2C bus. Their addresses are `0x40`, `0x41` and `0x42` respectively.

## Power sequence

```{md-mermaid}
graph LR
+12V_AON --> +5V_AON --> +3V3_AON --> Power_button -->  +12V --> +5V --> +3V3 --> +1V8 --> +1V0
```

- When 12V is supplied to the baseboard, `+5V_AON` is generated from `+12V_AON`, and `+3V3_AON` is generated from `+5V_AON`.
- LED [`D18`](#D18) glows red, indicating power is connected
- The `PSON` signal turns on the [`Q1`](#Q1) MOSFET, which in turn switches [`Q2`](#Q2) MOSFET on, passing power from `+12V_AON` to `+12V` rail.
There is a combinational logic circuit which pulls the `PSON` net low, if the COM Express module is NOT type 7. It is determined by the state of 
`!TYPE0`, `!TYPE1` and `!TYPE2` signals, which come from the connected COM Express module (pins C54, C57 and D57 of [`J12`](#J12))
- There is a circuit, which simulates button click for autostart. If `R173` and `C101` are desoldered, the autostart is disabled and then [`SW1`](#SW1) button is used to power on the baseboard. 
- After all power supplies start-up correctly, 1V0 rail will trigger `PWR_OK` line to set to high state after 120ms (the delay is created by `U20`). 
This will result in ([`D18`](#D18)) changing color from red to green, which signals successful power supply section startup.

## Power indicator LEDs

There are power indicator LEDs for every power rail ([`D26`](#D26), [`D27`](#D27), [`D28`](#D28), [`D30`](#D30), [`D31`](#D31), [`D32`](#D32), [`D33`](#D33) and [`D34`](#D34)).
