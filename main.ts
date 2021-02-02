while (true) {
    console.log(input.acceleration(Dimension.X))
    if (input.acceleration(Dimension.X) > 17 || input.acceleration(Dimension.X) < -17) {
        light.clear()
    } else {
        light.showAnimation(light.rainbowAnimation, 100)
        music.magicWand.playUntilDone()
    }
    
}
