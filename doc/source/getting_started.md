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
