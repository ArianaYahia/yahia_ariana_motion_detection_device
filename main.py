while True:
    print(input.rotation(Rotation.ROLL))
    if input.rotation(Rotation.ROLL) > 17 or input.rotation(Rotation.ROLL) < -17:
        light.clear()
    else:
        light.show_animation(light.rainbow_animation, 100)
        music.magic_wand.play_until_done()