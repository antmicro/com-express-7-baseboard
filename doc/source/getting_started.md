# Getting started

## Master Attached Flash Sharing location selection
MAFS location can be set to be on Module or on Carier, using ([`J14`](#J14)) jumper.

## Clear CMOS
Using ([`J13`](#J13)) jumper, RTC on COM Express 7 can be cleared.

## SFI / KR

Using OR resistors, SFI can be directly connected to KR on COM Express 7, omiting the `TLK10232CTR` IC.

## 10GbE on backlane connector

PCIe B3x4 can be configured as 10G-KR for LX2160A

## Power sequence

+5V_AON -> +3V3_AON -> *Power button* ->  +12V -> +5V -> +3V3 -> +1V8 -> +1V0

After all power supplies start-up correctly, 1V0 rail will trigger `PWR_OK` line to set to high state after 120ms (the delay is created by `U20`). 
This will result in ([`D18`](#D18)) changing color from red to green, wihich signals succeful power supply section startup.

## backplane connector pinout

```{csv-table} Frozen Delights!
:header: >
:    "Pin no.", "b", "Pin no.", "a"
:widths: 5, 20, 5, 20

"1", "12V","2", "12V"
"3", "12V","4", "12V"
"5", "12V","6", "12V"
"7", "12V","8", "12V"
"9", "12V","10", "12V"
"11", "GND","12", "GND"
"13", "GND","14", "GND"
"15", "GND","16", "GND"
"17", "PCIe TX0+","18","PCIe RX0-"
"19", "PCIe TX0-","20","PCIe RX0+"
"21", "GND","22", "GND"
"23", "PCIe TX1+","24","PCIe RX1+"
"25", "PCIe TX1-","26","PCIe RX1-"
"27", "GND","28", "GND"
"29", "PCIe REF.CK+","30", "!PERST"
"31", "PCIe REF.CK-","32", "!PRSNT"
"33", "GND","34", "GND"
"35","USB.D+","36","UART.RX"
"37","USB.D-","38","UART.TX"
"39", "GND","40", "GND"
```
