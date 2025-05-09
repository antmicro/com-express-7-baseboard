# Introduction

The `Baseboard` supports COM Express `Type 7` modules. The board breaks out major communications and peripheral interfaces as defined by the COM Express standard. It features front panel connectors for cable interfaces and a backplane edge connector designed for integrating the board into larger systems.

One of the supported COM Express Type 7 modules is the `SolidRun LX2160A`. It features 16 Arm Cortex-A72 processors, 4 x 10GbE and 18x PCIe Gen 3.0 lanes and is fully supported by Linux.

The board design files were created in `KiCad 8.x`.
You can find out more about the `COM Express 7 Baseboard` by visiting Antmicro's portals listed below:

* [Open Hardware Portal](https://openhardware.antmicro.com/boards/com-express-7-baseboard/)
* [System Designer](https://designer.antmicro.com/hardware/devices/com_express_7_baseboard_with_lx2160a)
* [Open Source Portal](https://opensource.antmicro.com/projects/com-express-7-baseboard/)
 
They provide 3D renders and the board [stackup definition](https://openhardware.antmicro.com/boards/com-express-7-baseboard/?view=top-ortho&tab=stackup), as well as [an interactive preview](https://openhardware.antmicro.com/boards/com-express-7-baseboard/?view=top-ortho&amp%3Btab=stackup&tab=preview) of the board schematic.
A [PDF schematic](../com-express-7-baseboard-schematic.pdf) of the board is also available.

## Block diagram

<iframe src="_static/COM_Express_baseboard_VSD_graph.html" style="border:0px" height="800px" width="100%" title="COM Express 7 baseboard graph"></iframe>

## IO map 

A map of on-board connectors, status LEDs, control buttons and I/O interfaces is provided below.

:::{figure-md}
![](img/io-map.png)

COM Express 7 Baseboard interface map
:::

## Power
 
`COM Express 7 Baseboard` can be powered with a DC voltage via the on-board locking DC connector ([`J6`](#J6)) with Molex Nano-Fit plug, or backplane PCB-edge connector ([`J16`](#J16)).
More details in [Power supply](./power_supply.md) section.

## Available interfaces and features

- 2x SFP+ 10 Gigabit Ethernet port ([`J2`](#J2))
- Gigabit Ethernet RJ45 connector ([`J1A`](#J1))
- OCuLink PCIe x4 connector ([`J4`](#J4))
- USB-C console ([`J3`](#J3))
- USB 3.0 - two type A ports: ([`J1B`](#J1)) and ([`J1C`](#J1))
- 2x M.2 2280 key M connector with PCIe x4 ([`J5`](#J5)) and ([`J8`](#J8))
- M.2 2230 key E connector with PCIe x1 and USB ([`J100`](#J100))
- Backplane PCB edge connector ([`J16`](#J16)) with PCIe x2, USB 2.0, UART console and 1x GPIO
- SD card connector ([`J15`](#J15))
- Board EEPROM and support for carrier MAFS BIOS
- Power button ([`SW1`](#SW1))
- Fan connectors: CPU fan ([`J11`](#J11)) + 2x case fan ([`J10`](#J10)) and ([`J9`](#J9))
- Board temperature sensors (`Q9`) and (`Q10`)
- 2x RGB LED for status indication

## Mechanics

The `COM Express 7 Baseboard` PCB is `227.5`x`104.0` millimeters (WxL) which translates into `8.96`x`4.09` inch.
The overall height of the set depends on the attached cooling module.
