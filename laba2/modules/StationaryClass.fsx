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

type Stationary (propreties : string array) = class
    member val itemPrice = float propreties[0]
    member val userPhoneNumber = int64 propreties[1]

    override this.ToString() =
        sprintf "%f %d" this.itemPrice this.userPhoneNumber 
end

type Pencil (propreties : string array) = class
    inherit Stationary(propreties[0..1])

    member val itemHardness = int propreties[2]
    member val itemColor = Colors[propreties[3]]
    
    override this.ToString() =
        sprintf "%s %d %s" (base.ToString()) this.itemHardness this.itemColor
end

type Pen (propreties:string array) = class
    inherit Stationary(propreties[0..1])

    member val itemType = PenBallType[propreties[2]]
    member val itemPenBallThickness = float propreties[3]

    override this.ToString() =
        sprintf "%s %s %f" (base.ToString()) this.itemType this.itemPenBallThickness 
end

type Paper (propreties:string array) = class
    inherit Stationary(propreties[0..1])

    member val itemDensity = int propreties[2]
    member val itemResolution = string propreties[3]

    override this.ToString() =
        sprintf "%s %d %s" (base.ToString()) this.itemDensity this.itemResolution 
end