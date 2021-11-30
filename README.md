Original Pl3xMap plugin has been discotinued, this fork will keep the plugin alive. 

Get support at G.E.A.R.S https://discord.gg/syhJgJBE4e

<div align="center">
<img src="https://raw.githubusercontent.com/NeumimTo/Pl3xMap/master/plugin/src/main/resources/web/images/og.png" alt="Pl3xMap">

# Pl3xMap

[![MIT License](https://img.shields.io/github/license/NeumimTo/Pl3xMap?&logo=github)](License)
[![CodeFactor](https://www.codefactor.io/repository/github/NeumimTo/pl3xmap/badge)](https://www.codefactor.io/repository/github/NeumimTo/pl3xmap)

[![Pl3xMap's Stargazers](https://img.shields.io/github/stars/NeumimTo/Pl3xMap?label=stars&logo=github)](https://github.com/NeumimTo/Pl3xMap/stargazers)
[![BillyGalbreath's Followers](https://img.shields.io/github/followers/BillyGalbreath?label=followers&logo=github)](https://github.com/BillyGalbreath?tab=followers)
[![Pl3xMap Forks](https://img.shields.io/github/forks/NeumimTo/Pl3xMap?label=forks&logo=github)](https://github.com/NeumimTo/Pl3xMap/network/members)
[![Pl3xMap Watchers](https://img.shields.io/github/watchers/NeumimTo/Pl3xMap?label=watchers&logo=github)](https://github.com/NeumimTo/Pl3xMap/watchers)

Pl3xMap is a minimalistic and lightweight live world map viewer for Paper servers.

</div>

## What is Pl3xMap

If, like me, you have no real need for 3D views, the novelty of Dynmap and Bluemap have worn off, and you're ready for something actually usable for navigation without all the heavy bulk or slow renders then this is the plugin for you.

## Features

* Ultra fast render times. Get your map viewable today, not next week!
* Simple vanilla-like top down 2D view, designed for navigation.
* Player markers showing yaw rotation, health, and armor
* [Easy configuration](https://github.com/NeumimTo/Pl3xMap/wiki/Default-config.yml). Even a caveman can do it.
* Up to date Leaflet front-end.
* [Addons and integrations](ADDONS_INTEGRATIONS.md) for many popular plugins.

## Contact
[![Join us on Discord](https://img.shields.io/discord/576104470249865247.svg?label=&logo=discord&logoColor=ffffff&color=7389D8&labelColor=6A7EC2)](https://discord.gg/syhJgJBE4e)

Join us on [Discord](https://discord.gg/syhJgJBE4e) in the #「pl3x」support channel in G.E.A.R.S

## Downloads
Downloads can be obtained from the [releases](https://github.com/pl3xgaming/Pl3xMap/releases) section.

## Servers Using Pl3xMap

[Click here](SERVERS.md) to view a list of servers using Pl3xMap.

## License
[![MIT License](https://img.shields.io/github/license/pl3xgaming/Pl3xMap?&logo=github)](License)

This project is licensed under the [MIT license](https://github.com/pl3xgaming/Pl3xMap/blob/master/LICENSE)

Leaflet (the web ui frontend) is licensed under [2-clause BSD License](https://github.com/Leaflet/Leaflet/blob/master/LICENSE)

## bStats

[![bStats Graph Data](https://bstats.org/signatures/bukkit/Pl3xMap.svg)](https://bstats.org/plugin/bukkit/Pl3xMap/10133)

## API

### [Javadoc](https://javadoc.pl3x.net/pl3xmap/)

### Dependency Information
Maven
```xml
<repositories>
    <repository>
        <id>jitpack.io</id>
        <url>https://jitpack.io</url>
    </repository>
</repositories>
```
```xml
<dependency>
	<dependency>
    <groupId>com.github.NeumimTo</groupId>
    <artifactId>Pl3xMap</artifactId>
    <version>master-SNAPSHOT</version>
</dependency>
```

Gradle
```kotlin
allprojects {
    repositories {
        ...
        maven("https://jitpack.io")
    }
}
```
```kotlin
dependencies {
    compileOnly("com.github.NeumimTo:Pl3xMap:master-SNAPSHOT")
}
```

## Building from source

```
./gradlew build
```
