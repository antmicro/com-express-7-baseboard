# Board overview

COM Express 7 baseboard is an open hardware board design supporting Type 7 COM Express modules.
The board design files were created in KiCad 7x.
You can find out more about the COM Express 7 baseboard by visiting Antmicro's portals listed below:

* [Open Hardware Portal](https://openhardware.antmicro.com/boards/com-express-7-baseboard/)
* [System Designer](https://designer.antmicro.com/hardware/devices/com_express_7_baseboard_with_lx2160a)
* [Open Source Portal](https://opensource.antmicro.com/projects/com-express-7-baseboard/)
 
They provide 3D renders and the board [stackup definition](https://openhardware.antmicro.com/boards/com-express-7-baseboard/?view=top-ortho&tab=stackup), as well as [an interactive preview](https://openhardware.antmicro.com/boards/com-express-7-baseboard/?view=top-ortho&amp%3Btab=stackup&tab=preview) of the board schematic.
A [PDF schematic](../com-express-7-baseboard-schematic.pdf) of the board is also available.

## IO map 

A map of on-board connectors, status LEDs, control buttons and I/O interfaces is provided below.

:::{figure-md}
![](img/)

COM Express 7 baseboard interface map
:::

## Power
 
COM Express 7 baseboard can be powered with a stable DC voltage via the on-board locking DC connector ([`J6`](#J6)) with Molex Nano-Fit plug, or backplane PCB-edge connector([`J16`](#J16)). These two power inputs are directly connected on the PCB. These inputs are protected with 12A fuse and 15V TVS diode. The nominal supply voltage is 12V. Absolute maximum is 15V, which is dictated by LX2160A Computer on Module ([`A3`](#A3)) , which requires 9V-15V (50W).

### Supply current monitoring
Three `INA219AIDCNR` ICs are used to monitor the current draw on `12V` input, `3V3` and `5V` rails.
They are connected to one I2C bus. Their addresses are `0x40`, `0x41` and `0x42` respectively.

## Available interfaces and features

- Gigabit Ethernet RJ45 connector ([`J1A`](#J1))
- USB 3.0 - two type A ports: ([`J1B`](#J1)) and ([`J1C`](#J1))
- USB-C console output ([`J3`](#J3))
- 2x M.2 2280 key M connector with PCIe x4 ([`J5`](#J5)) and ([`J8`](#J8))
- M.2 2230 key E connector with PCIe x1 ([`J100`](#J100))
- SD card connector ([`J15`](#J15))
- Backplane PCB edge connector with PCIe x2, USB 2.0 and UART console ([`J16`](#J16))

## 2x RGB LED for status indication

## Board EEPROM and support for carrier MAFS BIOS

## Mechanics

The Jetson Orin Baseboard PCB is 225x104 millimeters (WxL) which translates into 10.04x4.09 inch.
The overall height of the set depends on the cooling module attached.
