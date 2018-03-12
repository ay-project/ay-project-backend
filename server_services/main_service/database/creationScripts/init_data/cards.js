const cards = [
    {
        "name" : "Mandragora",
        "specs" : {
            "HP" : "1",
            "Atk" : "2",
            "cost" : "1",
            "type" : "creature",
            "abilities" : {
                "battlecry" : {
                    "type" : "heal",
                    "potency" : "2"
                }
            }
        }
    },{
        "name" : "Spriggan",
        "specs" : {
        "family" : "monster",
        "HP" : "1",
        "Atk" : "2",
        "cost" : "1",
        "type" : "creature",
        "abilities" : {
            "battlecry" : {
                "type" : "charge"
            }
        }
    }
    },{
        "name" : "Sylvan Sough",
        "specs" : {
        "family" : "sylph",
        "HP" : "1",
        "Atk" : "2",
        "cost" : "1",
        "type" : "creature",
        "abilities" : {  
        }
    }
    },{
        "name" : "Raptor",
        "specs" : {
        "family" : "monster",
        "HP" : "3",
        "Atk" : "2",
        "cost" : "2",
        "type" : "creature",
        "abilities" :{
        }
    }
    },{
        "name" : "Mammet",
        "specs" : {
        "HP" : "1",
        "Atk" : "1",
        "cost" : "2",
        "type" : "creature",
        "abilities" : {
            "battlecry" : {
                "type" : "draw",
                "potency" : "1"
            }
        }
    }
    },{
        "name" : "Ahriman",
        "specs" : {
        "family" : "monster",
        "HP" : "2",
        "Atk" : "3",
        "cost" : "2",
        "type" : "creature",
        "abilities" : {
        }
    }
    },{
        "name" : " Qiqirn",
        "specs" : {
        "HP" : "1",
        "Atk" : "3",
        "cost" : "3",
        "type" : "creature",
        "abilities" : {
            "battlecry" : {
                "type" : "charge"
            } 
        }
    }
    },{
        "name" : "Puksi Piko the Shaggysong",
        "specs" : {
        "HP" : "2",
        "Atk" : "2",
        "cost" : "3",
        "type" : "creature",
        "abilities" : {
            "bonus" : {
                "type" : "atk",
                "potency" : "1"
            }
        }
    }
    },{
        "name" : "Tonberry Creeper",
        "specs" : {
        "HP" : "1",
        "Atk" : "5",
        "cost" : "3",
        "type" : "creature",
        "abilities" : {
        }
    }
    },{
        "name" : "Dullahan",
        "specs" : {
        "HP" : "5",
        "Atk" : "3",
        "cost" : "4",
        "type" : "creature",
        "abilities" : {
            "taunt" : ""
        }
    }
    },{
        "name" : "Adamantoise",
        "specs" : {
        "family" : "monster",
        "HP" : "7",
        "Atk" : "2",
        "cost" : "4",
        "type" : "creature",
        "abilities" : {
        }
    }
    },{
        "name" : "Cactuar",
        "specs" : {
        "HP" : "4",
        "Atk" : "4",
        "cost" : "5",
        "type" : "creature",
        "abilities" : {
            "battlecry" : {
                "type" : "dmg",
                "potency" : "4",
                "target" : "face"
            }
        }
    }
    },{
        "name" : "Raubahn",
        "specs" : {
        "HP" : "2",
        "Atk" : "5",
        "cost" : "6",
        "type" : "creature",
        "abilities" : {
            "battlecry" : {
                "type" : "charge"
            }
        }
    }
    },{
        "name" : "Goobue",
        "specs" : {
        "HP" : "7",
        "Atk" : "6",
        "cost" : "6",
        "type" : "creature",
        "abilities" : {
        }
    }
    }

]

module.exports = {
    cards
}