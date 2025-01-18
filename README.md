# Town Star Hub

Welcome to visualizer website repository. The Code for the visualizer will not evolve, it will remain frozen at current stage. Current repository contains all working files needed to run the website. This repository allows for maintaining the game data (with mechanics implementation that was already covered in the past).

This is meant to be a community based repository, anyone can join and is welcome to contribute. We have a discord channel, please contact Stan to get obtain the write access to this repository.

Please note, the code is compiled there will be no collaboration on evolving the code (no feature implementation), the collaboration is about updating game data (images, recipes, crafts, buildings, new nfts). This also means no coding skills are required, just a limited experience with editing json files, the git related operations can be mastered very easily for what this maintenance requires.

# Recommended Setup

We highly recommend to use Visual Studio as IDE for editing this repository.

Install `Live Server` extension by Riwick Dey. This adds adds a button on bottom taskbar on right corner with `Go Live` that allows to open the website on local computer and see the made changes before pushing to git.

Optionally, install `Office Viewer(Mardown Editor` by Weijan Chen. This allows to read/edit markdown pages (like this page) in a more Word like interface.

Optionally, install `Node Extension Pack` by Swellaby, that should cover the basics for javascript linting, hints, etc, for working with JS files.

# A few words about maintenance

Current game objects (`recipes` / `townstarobjects`) have been scrapped from old visualizers made for Legacy game. Not all properties are used in the code.

## TownStarObjects

For `townstarobjects` here are some explanations for how properties are used in the code and how to edit them:

#### **FileUrl**

NOT USED. Ignore it. All Image paths are generated automatically using the name of place like this:

```javascript
// for recipes, crafts
this.fileUrl = '/images/recipes/' + craftName + '/icon_' + craftName + '.png';
// for objects
this.fileUrl ='/images/townstarobjects/' + place.Name + '/icon_' + place.Name + '.png';
```

You only need to respect this exact path-ing and naming of images and the visualizer will load correctly the associated image. When in doubt, open the dev tools and inspect the missing image, look at the expected image path in inspector, compare it to uploaded image.

#### Size of Building

Default size is 4 tiles. To make the building smaller, use SizeX and SizeY properties:

```javascript
"SizeX": 2,
"SizeY": 2,
```

Note: both are needed. If you omit one of those, it will be set to default (and get a non-square shape). Non-square shape are partially compatible with visualizer (rotation might not work, moving around was never tested with those), we foreseen the existence of them (like in game benches) but since Gala never really used them in the game we have not solved / tested the full usage.

#### Building Costs

Bellow is an example of building costs information. Note that Material and Amount must be numbered (1, 2, 3...), up to 10 Materials / Amounts are being expected by the code (to cover eventual fails of Gala for overloading building requirements). Name of materials (crafts) must match existing items (otherwise grouping overall materials needed for the build will not count correctly).

```javascript
// how much it cost to build in cash
"BuildCost": 300000,
// list of materials needed
"Material1": "Lumber",
"Material2": "Wood",
"Material3": "Energy",
"Material4": "None",	 // <- "None" is same as omitting the line
// amount needed from each material
"Ammount1": 10,
"Ammount2": 10,
"Ammount3": 10,
"Ammount4": 0		 // <- 0 is equivalent of "None" on material
```

#### Basic Neighbor effects.

Here is a simplistic approach of defining effects distribution as seen in Legacy game code (except the Step property). Note, we took the old objects and thus got stuck with old mechanics and the way these were encoded in properties in old objects.

how this works: `ProximityDist` (here at 1) will define how far away the effect would reach (the radius), We start from exterior of that radius with effect of Zero, then go towards center and add 1 to each step (thus always incrementing the values towards the center). We added an additional property called  `ProximityEmitStep` to allow incrementing by another value then default 1. Thus, for `Rare Water Pump` we obtain 3 `Water Drum` at a distance of 1 (neighboring cells).

Note: `ProximityImmune` is not for emitting effects (how current building is influencing other ones), but rather for absorbing effects (how other buildings influence current one). Immune means the building gets no penalty (think of industrial plants that work just fine in any dirty / shady conditions)

Note: uniform distribution of effects at a set X value for a given Y distance is not implemented, it would have required adding additional properties and additional logic in the code. At the time we coded the visualizers there were no examples of such mechanisms.

```javascript
"Rare_Water_Pump": {
        // [...]
        "ProximityDist": 1,
        "ProximityEmit": "Water_Drum",
        "proximityEmitStep": 3,
        "ProximityImmune": false,
        // [...]
},
```

#### Crafts

Please note, current data structure requires that you use Recipe Name and not the Recipe Output. For example, Green Forges Craft `Green_Gold` (=Recipe), while the recipe of `Green_Gold` will output `Gold` as storable item (the `Name` property in recipe).

The property need updating each time a new recipe is added to that building. The recipe must exist in the Recipes object.

Note: since a lot of nfts extend in-game objects, you'll need to manually add the recipe (or create a new recipe if nft facilitates the crafting) to all those nfts (ex: think of Table of Appreciation)

```javascript
"Crafts": "Copper_Wire,Silver_Wire,Gold_Wire",
```

#### Edge Requirements

The property `EdgeRequirements` allows defining if placeable building need special neighbors to work, or `None` otherwise.

The values are:

| value                                                        | description                                                                                       |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------- |
| `Road`                                                     | Any type of road (dust or paved)                                                                  |
| `Paved_Road`                                               | Paved Road required                                                                               |
| `Paved_Road:AND:OpenWorld`                                 | Paved Road (inside the grid) and open edge (not mountains, not ocean, not river)                  |
| `Place_A:AND:Place_B` (ex: `Paved_Road:AND:Water_Pump` ) | AND connects concepts (terrain, buildings, edges), at least one neighbor of each must be present |
| `Pond:OR:Waterway`                                         | OR switches concepts (terrain, buildings, edges), Any of those must match as neighbor            |

Note: Gala kept notations from Legacy. They even kept the OR BRIDGE notation (which only had meaning when we used the map of word to locate the city as of path-ing needed to reach nearest city). We deleted those extra notations from the objects. `Waterway` describes both Rivers and Oceans, `OpenWorld` describes forests, plains and deserts (= where you can place a truck)

## Recipes

Ignore `proximityBonus` , `proximityPenalty` and `proximityReverse` properties. These are related to the building making the recipe and not to the recipe in itself (a Wind Mill would have same penalty based on neighbors regardless of what recipe it makes internally). The existence of these properties at this object was a mistake from the start (which made me think that we needed to re-think these objects)

#### Recipe Name and Craft Name

Note, the Recipe name (here `Appreciation_Jam` defines how a craft will be created (special timings, special ingredients list), while the `Name` property describes the output (=craft) that will be made from this recipe. This allows making `Energy` using a lot of recipes in different places.

Note, `Name` field was added at a later time, it's optional, if no Name is given the recipe would output a craft of same name (ex, look at `Brine` recipe)

```javascript
"Appreciation_Jam": {
        "CityPoints": 275,
        "CityPrice": 25000,
        "Class": "Pantry",
        "Name": "Jam",
	// [...]
```

#### City Points and City Price

Try as possible to keep these values correct. These are used in the Craft explorer to show the selling price / stars (was meant for new players to have access to information, as a sort of wiki explorer)
