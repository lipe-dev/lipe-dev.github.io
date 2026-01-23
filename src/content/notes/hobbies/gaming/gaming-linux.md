---
name: Gaming on Linux
slug: gaming-linux
tags:
  - gaming
  - linux
growth: budding
---

# Gaming on Linux

Linux gaming has come incredibly far in recent years. What was once a niche activity with limited options has become a viable primary gaming platform.

## Why Linux for Gaming?

- **It's my primary OS** - I use Linux for development, so having games work natively means one OS for everything
- **Proton is amazing** - Valve's compatibility layer runs most Windows games seamlessly
- **Steam Deck effect** - Valve's handheld runs Linux, so developers are testing on Proton more
- **Privacy and control** - No telemetry, no forced updates, my computer does what I tell it

## The Stack

### Distro
Running a stable distribution that doesn't break with updates. Gaming needs reliability.

### Graphics Drivers
- NVIDIA proprietary drivers (necessary evil)
- Mesa for AMD would be nicer but NVIDIA has the GPU

### Gaming Platforms
- **Steam** - Native client, Proton for Windows games
- **Heroic Launcher** - Epic and GOG games with Proton
- **Lutris** - Everything else

### Proton Variants
- **Proton** - Valve's official builds
- **Proton-GE** - Community builds with extra patches
- **Wine-GE** - For non-Steam games

## Game Compatibility

Most games work now. The exceptions are:
- Games with kernel-level anti-cheat (some are enabling it)
- Some very new releases (give it a few days)
- Games with aggressive DRM

[ProtonDB](https://www.protondb.com) is invaluable for checking compatibility.

## Tips and Tricks

### Performance
- Enable gamemode for CPU scheduling
- MangoHud for performance overlay
- FSR for upscaling on supported games
- Proper shader cache location on fast storage

### Troubleshooting
- Check ProtonDB for game-specific tweaks
- Try different Proton versions
- Custom launch options when needed
- Verify game files after Proton updates

## The Experience

Day-to-day, gaming on Linux feels normal now. Launch Steam, click play, game runs. Most of the time I don't even think about it running through a compatibility layer.

## Related

- [[gaming]] - Main gaming page
- [[gaming-pc]] - The hardware
