module StationaryClass
    let Colors = [
        "red"
        "blue"
        "white"
    ]

    let PenBallType = [
        "ballpoint"
        "gel"
    ]

    type Stationary(propreties:string array) = class
        let _itemPrice = float propreties[0]
        let _userPhoneNumber = int64 propreties[1]

        member this.itemPrice = _itemPrice
        member this.userPhoneNumber = _userPhoneNumber
    end
    
    type Pencil(propreties:string array) = class
        inherit Stationary(propreties[0..1])

        let _itemHardness = int propreties[2]
        let _itemColor = List.find (fun x -> x = propreties[3]) Colors

        member this.itemHardness = _itemHardness
        member this.itemColor = _itemColor

        override this.ToString() =
            sprintf "%f %d %d %A" 
                base.itemPrice base.userPhoneNumber this.itemHardness this.itemColor
    end

    type Pen(propreties:string array) = class
        inherit Stationary(propreties[0..1])

        let _itemType = List.find (fun x -> x = propreties[2]) PenBallType
        let _itemPenBallThickness = float propreties[3]

        member this.itemType = _itemType
        member this.itemPenBallThickness = _itemPenBallThickness

        override this.ToString() =
            sprintf "%f %d %A %f" 
                base.itemPrice base.userPhoneNumber this.itemType this.itemPenBallThickness
    end

    type Paper(propreties:string array) = class
        inherit Stationary(propreties[0..1])

        let _itemDensity = int propreties[2]
        let _itemHeight = int propreties[3]
        let _itemWidth = int propreties[4]

        member this.itemDensity = _itemDensity
        member this.itemHeight = _itemHeight
        member this.itemWidth = _itemWidth

        override this.ToString() =
            sprintf "%f %d %d %d %d" 
                base.itemPrice base.userPhoneNumber this.itemDensity this.itemHeight this.itemWidth
    end