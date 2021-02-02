while True:
    print(input.acceleration(Dimension.X))
    if input.acceleration(Dimension.X) > 17 or input.acceleration(Dimension.X) < -17:
        light.clear()
    else:
        light.show_animation(light.rainbow_animation, 100)
        music.magic_wand.play_until_done()