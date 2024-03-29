


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

game.NPCEntities = {
    /* Abi */
    "Abi" : game.NPC.extend({
        "init" : function init(x, y, settings) {
            this.value = 1000;
            this.parent(x, y, settings);
            this.velocity = 0;
            // Adjust collision bounding box.
            this.adjustBoxShape(0, -10, 25, 20);
        },

        "interact" : function interact(actor, callback) {
            if (!game.HUD.HUDItems.inventory.hasItem("clock")) {
                game.dialog([
                    "You are looking for the AUC dorms? Uhm.. my English is quite bad.. You have to go... links!",
                ]);
            }
            else {
                game.HUD.HUDItems.inventory.removeItem("clock");
                game.dialog([
                    "Wow! Thanks for the clock! This is all I have to give in return."
                ], function dialogClosed() {
                    game.HUD.updateItemValue("coins", 1500);
                });
            }
        }
    }),

    /* George */
    "George" : game.NPC.extend({
        "init" : function init(x, y, settings) {
            this.value = 1000;
            this.parent(x, y, settings);
            this.velocity = 0;
            // Adjust collision bounding box.
            this.adjustBoxShape(0, -10, 25, 20);
        },

        "interact" : function interact(actor, callback) {
            game.dialog([
                "What's up?",
                "I'm the huisbaas, welcome to your  new home! ",
                "You'll have to furnish your room yourself",
                "But first you should go to AUC and listen to the Dean's welcome speech."
            ]);
        }
    }),
    
    /* Jessica */
    "Jessica" : game.NPC.extend({
        "quest_started" : false,
        "quest_complete" : false,

        "init" : function init(x, y, settings) {
            this.value = 1000;
            this.parent(x, y, settings);
            this.velocity = 0;

            // Adjust collision bounding box.
            this.adjustBoxShape(0, -10, 25, 20);
        },

        "interact" : function interact(actor, callback) {
            var self = this;

            // Turn 2 clicks (180 degrees) from actor's direction.
            self.turn(2, actor.dir_name);

            if (!game.HUD.HUDItems.inventory.hasItem("book")) {
                game.dialog([
                    "Uhm.. wie ben jij? En waarom ben je in mijn kamer??", "Oh, you don't speak Dutch.",
                    "Are you an AUC student?",
                    "This building is not for AUC students!" 
                ]);
            }
            else {
                game.dialog([
                    "That ... book! Rachel, you're a genius!",
                    "How's this for your trouble? You can get to Dangertooth Peak if you follow a hidden path through the woods."
                ]);
            }


            // FIXME ugh!
            if (me.game.currentLevel === "island") {
                if (!self.quest_started) {
                    game.dialog([
                        "Jessica: Hi Rachel! Welcome to Test island!",
                        "Jessica: I seemed to have dropped all of my change. Can you collect it for me?"
                    ], function onDialogEnd() {
                        self.quest_started = true;
                        game.quests.add({
                            "collect coin" : 300 // Jessica wants 300 coins.
                        }, function quest_complete() {
                            self.quest_complete = true;
                            game.dialog([
                                "Congratulations on completing your first quest! Go back and talk to Jessica!"
                            ]);
                        });

                        // Create 3 coins
                        [
                            { "x" : 28, "y" : 6 },
                            { "x" : 25, "y" : 7 },
                            { "x" : 27, "y" : 4 }
                        ].forEach(function forEach(pos) {
                            var x = pos.x * 32;
                            var y = pos.y * 32;
                            me.game.add(new game.CoinEntity(x, y, {
                                "name"          : "coin_gold",
                                "image"         : "coin_gold",
                                "compose"       : '[{"name":"shadow","class":"game.Shadow","image":"coin_shadow","spritewidth":10,"spriteheight":5},{"name":"coin_gold"}]',
                                "spritewidth"   : 18,
                                "spriteheight"  : 21
                            }), self.z);
                        });
                        me.game.sort(game.sort);
                    });
                }
                else if (!self.quest_complete) {
                    game.dialog([
                        "Please collect three coins for me! If you collected any before speaking to me, I can't award you for your efforts!"
                    ]);
                }
                else {
                    game.dialog([
                        "Jessica: Thank you, Rachel! You can keep it.",
                        "Jessica: You should try the chest on the right."
                    ]);
                }
            }
        }
    }),

    /* Whitey */
    "Whitey" : game.NPC.extend({
        "init" : function init(x, y, settings) {
            this.value = 1000;
            this.parent(x, y, settings);
            this.velocity = 0;

            // Adjust collision bounding box.
            this.adjustBoxShape(0, -10, 25, 20);
        },

        "interact" : function interact(actor, callback) {
            game.dialog([
                "Welcome to AUC my lovely Excellent and Diverse students!",
                "I hope you have already had the chance to explore Science Park a bit and found your new home, the dorms.",
                "I am so happy that you diverse people have chosen to study at this excellent university in the global city of Amsterdam.",
                "You will learn a lot about a diverse range of excellent courses covering topics from all over the globe.",
                "At times, this year will be difficult for you. You are all far away from home, and will probably miss your family.",
                "But this is also the time for you to excell and a good future is ahead of you!",
                "I hope you will all enjoy your excellent and diverse lives in global Amsterdam and wish you luck with exploring your new home.",
                "For now, the game ends here. I hope you enjoyed it so far, and perhaps more will come in the future." 
            ]);
        }
    })
};
