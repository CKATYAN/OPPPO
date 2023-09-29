module StationaryClass

let Colors = Map[
    ("red", "red");
    ("blue", "blue");
    ("white", "white");
]

let PenBallType = Map[
    ("ballpoint", "ballpoint");
    ("gel", "gel")
]

type Stationary(propreties:string array) = class
    let itemPrice = float propreties[0]
    let userPhoneNumber = int64 propreties[1]

    override this.ToString() =
        sprintf "%f %d" itemPrice userPhoneNumber
end

type Pencil(propreties:string array) = class
    inherit Stationary(propreties[0..1])

    let itemHardness = int propreties[2]
    let itemColor = Colors[propreties[3]]

    override this.ToString() =
        sprintf "%s %d %s" (base.ToString()) itemHardness itemColor
end

type Pen(propreties:string array) = class
    inherit Stationary(propreties[0..1])

    let itemType = PenBallType[propreties[2]]
    let itemPenBallThickness = float propreties[3]

    override this.ToString() =
        sprintf "%s %s %f" (base.ToString()) itemType itemPenBallThickness
end

type Paper(propreties:string array) = class
    inherit Stationary(propreties[0..1])

    let itemDensity = int propreties[2]
    let itemHeight = int propreties[3]
    let itemWidth = int propreties[4]

    override this.ToString() =
        sprintf "%s %d %d %d" (base.ToString()) itemDensity itemHeight itemWidth
end