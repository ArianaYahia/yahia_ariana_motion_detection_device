while True:
    print(input.rotation(Rotation.PITCH))
    if input.rotation(Rotation.PITCH) > 17 or input.rotation(Rotation.PITCH) < -17:
        light.clear()
    else:
        light.show_animation(light.rainbow_animation, 100)
        music.magic_wand.play_until_done()