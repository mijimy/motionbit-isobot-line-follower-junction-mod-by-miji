function kanan () {
    motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 200)
    motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Backward, 200)
    basic.pause(400)
}
function line_follow_by_junction (num: number) {
    Junction = 0
    last_state_count = 0
    while (Junction < num) {
        read_sensor()
        junction_count()
        Follow_line()
        basic.pause(10)
    }
}
function stop () {
    motionbit.brakeMotor(MotionBitMotorChannel.All)
}
input.onButtonPressed(Button.A, function () {
    line_follow_by_junction(1)
    kiri()
    line_follow_by_junction(1)
    kanan()
    line_follow_by_junction(1)
    kanan()
    stop_1_sec()
    line_follow_by_junction(2)
    kiri()
    stop_1_sec()
    line_follow_by_junction(1)
    kiri()
    stop_1_sec()
    line_follow_by_junction(2)
    kanan()
    stop_1_sec()
    line_follow_by_junction(1)
    kanan()
    stop_1_sec()
    line_follow_by_junction(2)
    kiri()
    stop_1_sec()
    line_follow_by_junction(1)
    kiri()
    line_follow_by_junction(1)
    kanan()
    foward()
    stop()
})
function Follow_line () {
    if (I3 == 0) {
        if (I2 == 0) {
            motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 125)
            motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 200)
        } else if (I4 == 0) {
            motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 200)
            motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 125)
        } else {
            motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 255)
            motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 255)
        }
    } else if (I2 == 0) {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Backward, 0)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 200)
    } else if (I4 == 0) {
        motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 200)
        motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Backward, 0)
    }
}
function kiri () {
    motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Backward, 200)
    motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 200)
    basic.pause(400)
}
function stop_1_sec () {
    motionbit.brakeMotor(MotionBitMotorChannel.All)
    basic.pause(1000)
}
function read_sensor () {
    I1 = pins.digitalReadPin(DigitalPin.P16)
    I2 = pins.digitalReadPin(DigitalPin.P15)
    I3 = pins.digitalReadPin(DigitalPin.P14)
    I4 = pins.digitalReadPin(DigitalPin.P13)
    I5 = pins.digitalReadPin(DigitalPin.P12)
}
function foward () {
    motionbit.runMotor(MotionBitMotorChannel.M1, MotionBitMotorDirection.Forward, 200)
    motionbit.runMotor(MotionBitMotorChannel.M3, MotionBitMotorDirection.Forward, 200)
    basic.pause(400)
}
function junction_count () {
    if (I1 == 0 && I3 == 0) {
        if (last_state_count == 0) {
            Junction += 1
            last_state_count = 1
            basic.pause(50)
        }
    } else if (I5 == 0 && I3 == 0) {
        if (last_state_count == 0) {
            Junction += 1
            last_state_count = 1
            basic.pause(50)
        }
    } else {
        last_state_count = 0
    }
}
let I5 = 0
let I1 = 0
let I4 = 0
let I2 = 0
let I3 = 0
let last_state_count = 0
let Junction = 0
basic.showString("Go")
Junction = 0
basic.showNumber(Junction)
basic.forever(function () {
	
})
