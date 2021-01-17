import { Spawn } from "./Spawn.js";
import { Options, Box, Line } from "./Markers.js";
import { P } from '../../map.js';

class World {
    constructor(world) {
        this.name = world.name;
        this.type = world.type;
        this.display_name = world.display_name;
        this.spawn = new Spawn(this);
    }
    unload() {
        this.spawn.hide();
        for (let i = 0; i < P.markerLayers.length; i++) {
            const layer = P.markerLayers[i];
            P.controls.removeLayer(layer);
            layer.remove();
        }
    }
    load(callback) {
        P.getJSON(`tiles/${this.name}/settings.json`, (json) => {
        this.player_tracker = json.settings.player_tracker;
        this.zoom = json.settings.zoom;

        // setup page title
        document.title = P.settings.ui.title
            .replaceAll("{world}", json.display_name);

        // setup background
        document.getElementById("map").style.background = this.getBackground();

        // setup the map tiles layer
        if (P.tileLayer != null) {
            P.map.removeLayer(P.tileLayer);
        }
        P.tileLayer = L.tileLayer(`tiles/${this.name}/{z}/{x}_{y}.png`, {
            tileSize: 512,
            minNativeZoom: 0,
            maxNativeZoom: this.zoom.max
        }).addTo(P.map);

        // update and show spawn point
        this.spawn.x = json.settings.spawn.x;
        this.spawn.z = json.settings.spawn.z;
        this.spawn.show();

        // force self update with existing player list
        P.playerList.update(Array.from(P.playerList.players.values()));

        // load and draw markers
        //this.markers();

        if (callback != null) {
            callback(this);
        }
        });
    }
    getBackground() {
        switch (this.type) {
            case "nether":
                return "url('images/nether_sky.png')";
            case "the_end":
                return "url('images/end_sky.png')";
            case "normal":
            default:
                return "url('images/overworld_sky.png')";
        }
    }
    markers() {
        // json will be in /web/tiles/world/markers/*.json files
        const json = {
            "name":"Regions",
            "markers":[
                {"type":"box","points":[{"x":"25","z":"25"},{"x":"150","z":"250"}],"color":"#ff0000","fillColor":"#0000ff"},
                {"type":"line","points":[{"x":"25","z":"25"},{"x":"150","z":"250"},{"x":"125","z":"125"}],"color":"#ffff00"},
                {"type":"line","points":[{"x":"0","z":"-15"},{"x":"-30","z":"80"},{"x":"45","z":"20"},{"x":"-45","z":"20"},{"x":"30","z":"80"},{"x":"0","z":"-15"}],"color":"#00ffff"}
            ]
        };

        // setup the layer
        const layer = new L.LayerGroup().addTo(P.map);
        P.markerLayers.push(layer);
        P.controls.addOverlay(layer, json.name);

        // draw the markers
        for (const shape in json.markers) {
            let marker;
            const opts = new Options(json.markers[shape]);
            switch(opts.pop("type")) {
                case "box":  marker = new Box(opts);  break;
                case "line": marker = new Line(opts); break;
            }
            if (marker != null) {
                marker.draw(layer);
            }
        }
    }
}

export { World };