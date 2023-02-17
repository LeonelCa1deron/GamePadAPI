window.addEventListener("gamepadconnected", (event) => {
    console.log("A gamepad connected:");
    console.log(event.gamepad);
  });

window.addEventListener("gamepaddisconnected", (event) => {
    console.log("A gamepad disconnected:");
    console.log(event.gamepad);
  });

var gamepads = navigator.getGamepads;
console.log("gamepads");

[
    {
      axes: [0.01, 0.01, 0.02, 0.04],
      buttons: [
        { pressed: true, value: 1 },
        { pressed: false, value: 0 },
        { pressed: false, value: 0 },
        { pressed: false, value: 0 }
      ],
      connected: true,
      id: "Xbox 360 Controller (XInput STANDARD GAMEPAD)",
      index: 0,
      mapping: "standard",
      timestamp: 177550
    },
    null,
    null,
    null
]

gamepad.vibrationActuator.playEffect("dual-rumble", {
    startDelay: 0,
    duration: 1000,
    weakMagnitude: 1.0,
    strongMagnitude: 1.0
  });