#!/usr/bin/env node

// thanks:
// https://bretkikehara.wordpress.com/2013/05/02/nodejs-creating-your-first-global-module/

var controller = require("projector-controller");

var command = process.argv[2];

controller.config({
    name: "DELL",
    baudRate: 19200,
	on: [0xbe, 0xef, 0x10, 0x05, 0x00, 0xc6, 0xff, 0x11, 0x11, 0x01, 0x00, 0x01], 
    off: [0xbe, 0xef, 0x10, 0x05, 0x00, 0x0c, 0x3e, 0x11, 0x11, 0x01, 0x00, 0x18]
}, () => {
    controller[command]((success) => {
        return;
    });
});