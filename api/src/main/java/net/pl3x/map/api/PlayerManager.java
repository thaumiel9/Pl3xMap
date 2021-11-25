package net.pl3x.map.api;

import org.bukkit.entity.Player;
import org.checkerframework.checker.nullness.qual.NonNull;

import java.util.UUID;
import java.util.function.BiFunction;
import java.util.function.Function;

/**
 * Interface for interacting with players on the map
 */
public interface PlayerManager {

    /**
     * Set a player to be temporarily hidden on the map
     * <p>
     * The status will last until the server restarts or the plugin reloads
     *
     * @param uuid player UUID
     */
    default void hide(@NonNull UUID uuid) {
        hide(uuid, false);
    }

    /**
     * Set a player to be hidden on the map
     *
     * @param uuid       player UUID
     * @param persistent persist the hide status
     */
    void hide(@NonNull UUID uuid, boolean persistent);

    /**
     * Set a player to temporarily not be hidden on the map
     * <p>
     * The status will last until the server restarts or the plugin reloads
     *
     * @param uuid player UUID
     */
    default void show(@NonNull UUID uuid) {
        show(uuid, false);
    }

    /**
     * Set a player to not be hidden on the map
     *
     * @param uuid       player UUID
     * @param persistent persist the show status
     */
    void show(@NonNull UUID uuid, boolean persistent);

    /**
     * Set whether a player is hidden on the map temporarily
     * <p>
     * The status will last until the server restarts or the plugin reloads
     *
     * @param uuid player UUID
     * @param hide whether to hide the player
     */
    default void hidden(@NonNull UUID uuid, boolean hide) {
        hidden(uuid, hide, false);
    }

    /**
     * Set whether a player is hidden on the map
     *
     * @param uuid       player UUID
     * @param hide       whether to hide the player
     * @param persistent persist the hide status
     */
    void hidden(@NonNull UUID uuid, boolean hide, boolean persistent);

    /**
     * Get whether a player is hidden on the map
     *
     * @param uuid player UUID
     * @return whether the player is hidden
     */
    boolean hidden(@NonNull UUID uuid);


    /**
     * Function that is used to change player name in a player list
     *
     * Multiple decorators can be registered at the same time, in that case the one with Integer.MAX_VALUE will be run as first
     * These two values should be used only in addons that you do not plan to release for public use.
     *
     * The function takes two arguments - the player and the output of previous decorator
     *
     * @param decorator
     */
    void registerPlayerNameDecorator(int priority, BiFunction<Player, String, String> decorator);
}
