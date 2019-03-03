radio.onDataPacketReceived( ({ receivedString: komando }) =>  {
    if (komando == "links") {
        motors.dualMotorPower(Motor.B, 0)
        motors.dualMotorPower(Motor.A, 85)
        basic.pause(10)
        motors.dualMotorPower(Motor.B, 0)
        motors.dualMotorPower(Motor.A, 85)
        basic.showLeds(`
            . . # . .
            . # # . .
            # # # # #
            . # # . .
            . . # . .
            `)
    } else if (komando == "rechts") {
        motors.dualMotorPower(Motor.A, 0)
        motors.dualMotorPower(Motor.B, 85)
        basic.pause(10)
        motors.dualMotorPower(Motor.A, 0)
        motors.dualMotorPower(Motor.B, 85)
        basic.showLeds(`
            . . # . .
            . . # # .
            # # # # #
            . . # # .
            . . # . .
            `)
    } else if (komando == "los") {
        motors.dualMotorPower(Motor.A, 100)
        motors.dualMotorPower(Motor.B, 85)
        basic.pause(10)
        motors.dualMotorPower(Motor.B, 85)
        motors.dualMotorPower(Motor.A, 100)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else if (komando == "stop") {
        motors.dualMotorPower(Motor.AB, 0)
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
    }
})
radio.setGroup(0)
