while (true) {
    console.log(input.rotation(Rotation.Roll))
    if (input.rotation(Rotation.Roll) > 18 || input.rotation(Rotation.Roll) < -18) {
        light.clear()
    } else {
        light.showAnimation(light.rainbowAnimation, 100)
        music.magicWand.playUntilDone()
    }
    
}
