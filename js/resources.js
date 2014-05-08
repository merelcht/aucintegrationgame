/*
 * Neverwell Moor, a fantasy action RPG
 * Copyright (C) 2012  Jason Oster
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

game.resources = {
    /* Graphics. */
    "img" : [
        // UI
        "dialog",
        "heart_empty",
        "heart_half",
        "heart_full",
        "logo",

        // Characters
        "rachel",
        "rachel_eyes",
        "abi",
        "abi_eyes",
        "george",
        "george_eyes",
        "jessica",
        "jessica_eyes",
        "whitey",
        "whitey_eyes",
        "char_shadow",
        "bikerfemale",

        // Baddies
        "snake",
        "bikepathEW",


        // Collectibles
        "coin_gold",
        "coin_silver",
        "coin_shadow",
        "hammer",

        // Interactive objects
        "chests",

        // Tile maps
        /* island */
        "animwater",
        "grass",
        "sandwater",
        "treetop",
        "trunk",

        /* rachels_room */
        "accessories",
        "cabinets",
        "country",
        "floor",
        "house",
        "inside",
        "stairs",
        "victoria",
        /*train station */
        "train",
        /* rachels_house */
        "kitchen",

        /*AUC */
        "classroom",

        /*Science Park*/
        "roadNS",
        "roadTW",
        "roadEW",
        "greenbuilding",
        "bikepathTW",
        "auc",
        "dorms",
        "amolf",


        /* earth */
        "barrel",
        "bridges",
        "buckets",
        "dirt",
        "dirt2",
        "doors",
        "farming_fishing",
        "fence",
        "fence_alt",
        "flowers_2",
        "grassalt_flowers",
        "housey",
        "misc",
        "mountains",
        "shadow",
        "signs",
        "stonepattern",
        "town_buildings",
        "tree_stump",
        "victorian_house",
        "windmill"
    ],

    /* Maps from Tiled. */
    "map" : [
        "island",
        "earth",
        "general_store",
        "rachels_room",
        "rachels_house",
        "train_station",
        "shed",
        "sciencepark",
        "auc",
        "empty_dorm_room",
        "dorm_room_furnished"
    ],

    /* 1-channel audio. Usually sound effects. */
    "sfx" : [
        "chests",
        "collect_coin",
        "dying",
        "fanfare",
        "hurt",
        "mallet_swing",
        "mallet_whomp"
    ],

    /* 2-channel audio. Usually music. */
    "bgm" : [
        "bells",
        "del_erad",
        "pink_and_lively",
        "random_and_cheap"
    ]
};

game.info = {
    "audio_error" : [
        {
            "messages" : [
                "Your browser does not support Ogg-Vorbis audio.",
                "Sounds have been disabled.",
                "",
                "Press [Enter] or [Space] to continue."
            ]
        }
    ]
};

game.story = {
    "intro" : [
        {
            "image" : null,
            "messages" : [
                "You just arrived in the most awesome city in the world.",
                "The place called Amsterdam, birthplace of sex, drugs and Rock 'n Roll",
                "Try to survive!"
            ]
        },
        {
            "image" : null,
            "messages" : [
                "Your first task is to find the AUC dorms, your new home!",
                "Make sure to stay of the 'red road', it's a cycle lane",
                "and if you walk on it a biker might drive into you."
                
            ]
        },
        
        {
            "image" : null,
            "messages" : [
                "You can talk to people by pressing [ENTER], but not everyone",
                "speaks English that well, so they might answer in Dutch."
            ]
        },
        /*
        {
            "image" : null,
            "messages" : [
                "Papa would talk about about so many things that it seemed",
                "impossible to put it all on one island. I guess that's why he",
                "set some of his adventures on smaller islands around",
                "the mainland."
            ]
        },
        {
            "image" : null,
            "messages" : [
                "I remember the moor on Neverwell held a special place in",
                "Papa's heart. He said it was the most dangerous place he",
                "ever saw, but that it held some kind of a secret...",
                "Maybe it was the source of the inhabitants' magic?"
            ]
        },
        {
            "image" : null,
            "messages" : [
                "Papa died 10 years ago, so I'll never know the answer.",
                "I'm 15 now."
            ]
        },
        {
            "image" : null,
            "messages" : [
                "These days I help my best friend Jessica with chores. That's",
                "about as adventurous as I get. We live on an island we",
                "call Earth. The only island there is..."
            ]
        }*/
    ],

    "gameover" : [
        {
            "image" : null,
            "messages" : [
                "Ohh no.. It seems like you've been seriously hit by a bike..",
                "Or maybe you just smoked a joint too many.. ",
                "Anyway..explore Science park a bit more",
                "and try not to get too distracted by the temptations Amsterdam has to offer.",
                "",
                "Press [Enter] or [Space] to continue."
            ]
        }
    ]
};

game.credits = [
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Concept :",
    "                                   ... Jason Oster",
    "    http://www.kodewerx.org/",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Programming :",
    "",
    "",
    "  Neverwell Moor",
    "                                   ... Jason Oster",
    "    http://www.kodewerx.org/",
    "    *The MIT License",
    "    *GNU GPL 3.0 or later",
    "",
    "  melonJS-0.9.4.js",
    "  melonJS                          ... Olivier Biot, et al.",
    "    http://www.melonjs.org/",
    "    *The MIT License",
    "",
    "  cp.js",
    "  Chipmunk-js                      ... Scott Lembcke, Joseph Gentle, et al.",
    "    https://github.com/josephg/Chipmunk-js/",
    "    *The MIT License",
    "",
    "  minpubsub.js",
    "  MinPubSub                        ... Daniel Lamb",
    "    https://github.com/daniellmb/MinPubSub/",
    "    *The MIT License",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Original Art Work :",
    "",
    "",
    "  flowers_2.png",
    "  housey.png",
    "  town_buildings.png",
    "                                   ... Guido Bos",
    "    http://opengameart.org/content/lpc-guido-bos-entries-cut-up",
    "    *CC-BY-SA 3.0",
    "    *GNU GPL 3.0 or later",
    "",
    "",
    "  dialog.png",
    "                                   ... Thane Brimhall (AKA Pennomi)",
    "    http://opengameart.org/content/lpc-pennomis-ui-elements",
    "    *CC-BY-SA 3.0",
    "    *GNU GPL 3.0 or later",
    "",
    "",
    "  doors.png",
    "                                   ... Pol Camara (AKA PolCPP)",
    "    http://opengameart.org/comment/reply/10851/11360",
    "    *CC-BY-SA 3.0",
    "    *GNU GPL 3.0 or later",
    "",
    "",
    "  abi.png",
    "  abi_eyes.png",
    "  george.png",
    "  george_eyes.png",
    "  jessica.png",
    "  jessica_eyes.png",
    "  rachel.png",
    "  rachel_eyes.png",
    "  whitey.png",
    "  whitey_eyes.png",
    "                                   ... Radomir Dopieralski (AKA Sheep)",
    "    http://opengameart.org/lpc-art-entries",
    "    http://opengameart.org/content/one-more-lpc-alternate-character",
    "    http://opengameart.org/content/alternate-lpc-character-sprites-george",
    "    *CC-BY-SA 3.0",
    "    *GNU GPL 3.0 or later",
    "",
    "",
    "  sandwater.png",
    "  farming_fishing.png",
    "  fence.png",
    "  fence_alt.png",
    "                                   ... Daniel Eddeland",
    "    http://opengameart.org/content/lpc-farming-tilesets-magic-animations-",
    "    and-ui-elements",
    "    *CC-BY-SA 3.0",
    "    *GNU GPL 3.0 or later",
    "",
    "",
    "  grassalt_flowers.png",
    "  stonepattern.png",
    "  victorian_house.png",
    "  windmill.png",
    "                                   ... Casper Nilsson",
    "    http://opengameart.org/lpc-art-entries",
    "    *CC-BY-SA 3.0",
    "    *GNU GPL 3.0 or later",
    "",
    "",
    "  snake.png",
    "                                   ... Charles Sanchez (AKA CharlesGabriel)",
    "    http://lpc.opengameart.org/static/lpc-style-guide/authors.html",
    "    *CC-BY-SA 3.0",
    "    *GNU GPL 3.0 or later",
    "",
    "",
    "  barrel.png",
    "  buckets.png",
    "  bridges.png",
    "  cabinets.png",
    "  chests.png",
    "  country.png",
    "  dirt2.png",
    "  dirt.png",
    "  grass.png",
    "  house.png",
    "  inside.png",
    "  kitchen.png",
    "  mountains.png",
    "  shadow.png",
    "  signs.png",
    "  stairs.png",
    "  treetop.png",
    "  trunk.png",
    "  victoria.png",
    "  watergrass.png",
    "                                   ... Lanea Zimmerman (AKA Sharm)",
    "    http://lpc.opengameart.org/static/lpc-style-guide/authors.html",
    "    *CC-BY-SA 3.0",
    "    *GNU GPL 3.0 or later",
    "",
    "",
    "  accessories.png",
    "                                   ... Thane Brimhall (AKA Pennomi)",
    "    http://opengameart.org/content/lpc-tabletop-rpg-pizza",
    "                                   ... Jetrel",
    "    http://opengameart.org/content/rpg-item-set",
    "    *CC0",
    "",
    "",
    "  heart_empty.png",
    "  heart_full.png",
    "  heart_half.png",
    "                                   ... Casper Nilsson",
    "    http://opengameart.org/content/simple-small-pixel-hearts",
    "    *CC-BY-SA 3.0",
    "",
    "",
    "  floor.png",
    "                                   ... Stephen Challener (AKA Redshrike)",
    "    http://opengameart.org/content/16x16-indoor-rpg-tileset-the-baseline",
    "    *CC-BY-SA 3.0",
    "",
    "",
    "  misc.png",
    "                                   ... Matthew Nash",
    "    http://opengameart.org/content/misc-32x32-tiles",
    "    *CC-BY-SA 3.0",
    "    *GNU GPL 3.0",
    "    *GNU GPL 2.0",
    "",
    "",
    "  coin_gold.png",
    "  coin_silver.png",
    "  coin_shadow.png",
    "                                   ... Chris Bellanger",
    "    http://opengameart.org/content/animated-coins",
    "    *CC-BY 3.0",
    "    *CC-BY-SA 3.0",
    "    *GNU GPL 3.0",
    "    *GNU GPL 2.0",
    "",
    "",
    "  char_shadow.png",
    "  logo.png",
    "  hammer.png",
    "                                   ... Jason Oster",
    "    *CC0",
    "",
    "",
    "  Small modifications",
    "                                   ... Jason Oster",
    "    *CC0",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Music :",
    "",
    "",
    "  bells.ogg",
    "                                   ... Nelson James Gatlin",
    "    http://opengameart.org/lpc-art-entries",
    "    *CC-BY-SA 3.0",
    "    *GNU GPL 3.0",
    "",
    "",
    "  del_erad.ogg",
    "                                   ... Janne Hanhisuanto for Radakan",
    "    http://opengameart.org/content/radakan-del-erad",
    "    *CC-BY-SA 3.0",
    "",
    "",
    "  pink_and_lively.ogg",
    "  random_and_cheap.ogg",
    "                                   ... atrk-bu (Auto-generated)",
    "    https://github.com/iamgreaser/it2everything/blob/master/atrk-bu.py",
    "    *CC-0",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Sound Effects :",
    "",
    "",
    "  fanfare.ogg",
    "                                   ... jivatma07",
    "    http://www.freesound.org/people/jivatma07/sounds/122255/",
    "    *CC-BY-SA 3.0",
    "",
    "",
    "  mallet_swing.ogg",
    "  mallet_whomp.ogg",
    "                                   ... Etherian",
    "    http://opengameart.org/comment/reply/11373/12927",
    "",
    "",
    "  chests.ogg",
    "  collect_coin.ogg",
    "  dying.ogg",
    "  hurt.ogg",
    "                                   ... cfxr (Auto-generated)",
    "    http://thirdcog.eu/apps/cfxr/",
    "    *CC-0",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "Level Design :",
    "                                   ... Jason Oster",
    "                                   ... Etherian",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "A Liberated Pixel Cup Production",
    "2012 Jason Oster",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "                             For my Favorite",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
];
