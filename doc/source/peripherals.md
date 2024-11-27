# Peripherals

## Master Attached Flash Sharing location selection
MAFS location can be set to be on Module or on Carrier, using ([`J14`](#J14)) jumper.
During normal operation, it is set to `module`.

## Clear CMOS
Using ([`J13`](#J13)) jumper, RTC on COM Express 7 can be cleared.
During normal operation, it is set to `powered`, which provides power to the RTC.

## SFI / KR

1 HS channel needs to be configured (e.g. CH A) for 10G-KR, configure the other HS channel for XFI per the attached instructions,  and use Data Switch to connect CH A to CH B (DST_CONTROL_1/2 registers) [(attached instructions)](https://e2e.ti.com/support/interface-group/interface/f/interface-forum/703878/tlk10034-10gbase-kr-to-sfi-sfp).

By using OR resistors, SFI can be directly connected to 10GBase-KR pins on COM Express Type 7, eliminating the need for the TLK10232CTR IC. This configuration is intended for modules that support SFI-compatible interfaces on 10GBase-KR pins, such as the SolidRun LX2160A


## 10GbE on backplane connector

PCIe B3x4 can be configured as 10G-KR for LX2160A

## GPIO expander

There is a `PCA9539AHF` GPIO expander (address: 0x74) connected to the SMBus. I controls the status LED ([`D17`](#D17)), !PRSNT and GPIO pins on the backplane connector ([`J16`](#J16)),
as well as `Enable` signals controlling power flow to the USB 3.0 ports.

## Devices on the I2C bus
- 0x2D `ADT7476AARQZ`
- 0x40 12V Current/Power Monitor
- 0x41 3V3 Current/Power Monitor
- 0x42 5V0 Current/Power Monitor 
- 0x50, 
  0x58 Module EEPROM 
- 0x57,
  0x5F Board EEPROM

## Fan control

- CPU fan is controlled by the COM Express 7 module (pins `B101`(PWM) and `B102`(TACH) of [`J12`](#J12)).
- Case fans can either share PWM speed control with CPU fan or be individually controlled from `ADT7476AARQZ`.


## Voltage monitor

The `ADT7476AARQZ` is also responsible for voltage monitoring

```{csv-table}
:header: >
:    "Register", "Description"
:widths: 5, 20

"0x20", "1V0 reading"
"0x21", "1V8 reading"
"0x22", "3V3 reading"
"0x23", "5V reading"
"0x24", "12V reading"
```
