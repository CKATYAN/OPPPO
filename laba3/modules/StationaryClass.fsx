module StationaryClass

let private Colors = Map[
    ("red", "red");
    ("blue", "blue");
    ("white", "white");
]

let private PenBallType = Map[
    ("ballpoint", "ballpoint");
    ("gel", "gel")
]

type Stationary (properties : string array) = class
    member val itemPrice = float properties[0]
    member val userPhoneNumber = int64 properties[1]

    override this.ToString() =
        sprintf "%f %d" this.itemPrice this.userPhoneNumber 
end

type Pencil (properties : string array) = class
    inherit Stationary(properties[0..1])

    member val itemHardness = int properties[2]
    member val itemColor = Colors[properties[3]]
    
    override this.ToString() =
        sprintf "%s %d %s" (base.ToString()) this.itemHardness this.itemColor
end

type Pen (properties:string array) = class
    inherit Stationary(properties[0..1])

    member val itemType = PenBallType[properties[2]]
    member val itemPenBallThickness = float properties[3]

    override this.ToString() =
        sprintf "%s %s %f" (base.ToString()) this.itemType this.itemPenBallThickness 
end

type Paper (properties:string array) = class
    inherit Stationary(properties[0..1])

    member val itemDensity = int properties[2]
    member val itemResolution = string properties[3]

    override this.ToString() =
        sprintf "%s %d %s" (base.ToString()) this.itemDensity this.itemResolution 
end