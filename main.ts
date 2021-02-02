while (true) {
    console.log(input.rotation(Rotation.Pitch))
    if (input.rotation(Rotation.Pitch) > 17 || input.rotation(Rotation.Pitch) < -17) {
        light.clear()
    } else {
        light.showAnimation(light.rainbowAnimation, 100)
        music.magicWand.playUntilDone()
    }
    
}
