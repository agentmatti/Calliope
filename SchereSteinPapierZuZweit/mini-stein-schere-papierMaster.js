let GegnerPunkte = 0
let MeinePunkte = 0
let MeinWert = ""
let Zufall = 0
input.onGesture(Gesture.Shake, () => {
    basic.setLedColor(Colors.Red)
    Zufall = Math.random(3)
    if (Zufall == 0) {
        MeinWert = "schere"
        basic.showLeds(`
            # # . . #
            # # . # .
            . . # . .
            # # . # .
            # # . . #
            `)
    } else if (Zufall == 1) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
        MeinWert = "stein"
    } else if (Zufall == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        MeinWert = "papier"
    }
    radio.sendString(MeinWert)
    basic.pause(1000)
})
radio.onDataPacketReceived( ({ receivedString: GegnerWert }) =>  {
    if (MeinWert == "schere") {
        if (GegnerWert == "stein") {
            basic.setLedColor(Colors.Red)
            GegnerPunkte += 1
            radio.sendString("gewonnen")
        } else if (GegnerWert == "papier") {
            MeinePunkte += 1
            radio.sendString("verloren")
            basic.setLedColor(Colors.Green)
        } else {
            radio.sendString("unendschieden")
            basic.setLedColor(Colors.Yellow)
        }
    } else if (MeinWert == "stein") {
        if (GegnerWert == "schere") {
            basic.setLedColor(Colors.Green)
            MeinePunkte += 1
            radio.sendString("verloren")
        } else if (GegnerWert == "papier") {
            GegnerPunkte += 1
            radio.sendString("gewonnen")
            basic.setLedColor(Colors.Red)
        } else {
            radio.sendString("unendschieden")
            basic.setLedColor(Colors.Yellow)
        }
    } else if (MeinWert == "papier") {
        if (GegnerWert == "schere") {
            basic.setLedColor(Colors.Red)
            GegnerPunkte += 1
            radio.sendString("gewonnen")
        } else if (GegnerWert == "stein") {
            basic.setLedColor(Colors.Green)
            MeinePunkte += 1
            radio.sendString("verloren")
        } else {
            radio.sendString("unendschieden")
            basic.setLedColor(Colors.Yellow)
        }
    }
})
radio.setGroup(0)
radio.setTransmitPower(7)
basic.showString("Hi")
