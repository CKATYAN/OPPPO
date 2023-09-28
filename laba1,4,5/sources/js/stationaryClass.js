const isFloat = (number) => {
    return Number(number) === number && number % 1 !== 0;
}

const Colors = {
    red : "red",
    blue : "blue",
    white : "white"
}

const PenBallType = {
    ballpoint : "ballpoint",
    gel : "gel"
}

class Stationary {
    #itemPrice
    #userPhoneNumber

    constructor(itemPrice, userPhoneNumber) {
        if(!isFloat(+itemPrice)) {
            throw new Error("ITEM_PRICE_IS_NOT_FLOAT")
        }
        if(!Number.isInteger(+userPhoneNumber)) {
            throw new Error("USER_PHONE_NUMBER_IS_NOT_INT")
        }

        this.#itemPrice = itemPrice
        this.#userPhoneNumber = userPhoneNumber
    }

    get itemPrice() {return this.#itemPrice}
    get userPhoneNumber() {return this.#userPhoneNumber}
}

export class Pencil extends Stationary {
    #itemHardness
    #itemColor

    constructor(itemPrice, userPhoneNumber, itemHardness, itemColor) {
        super(itemPrice, userPhoneNumber)
        if(!Number.isInteger(+itemHardness)) {
            throw new Error("ITEM_HARDNESS_IS_NOT_INT")
        }
        if(!Colors[itemColor]) {
            throw new Error("ITEM_IS_NOT_COLORS_OBJECT")
        }

        this.#itemHardness = itemHardness
        this.#itemColor = Colors[itemColor]
    }

    get itemHardness() {return this.#itemHardness}
    get itemColor() {return this.#itemColor}
}

export class Pen extends Stationary {
    #itemType
    #itemPenBallThickness

    constructor(itemPrice, userPhoneNumber, itemType, itemPenBallThickness) {
        super(itemPrice, userPhoneNumber)
        if(!PenBallType[itemType]) {
            throw new Error("ITEM_IS_NOT_PENBALL_OBJECT")
        }
        if(!isFloat(+itemPenBallThickness)) {
            throw new Error("ITEM_THICKNESS_IS_NOT_FLOAT")
        }

        this.#itemType = PenBallType[itemType]
        this.#itemPenBallThickness = itemPenBallThickness
    }

    get itemType() {return this.#itemType}
    get itemPenBallThickness() {return this.#itemPenBallThickness}
}

export class Paper extends Stationary {
    #itemDensity
    #itemHeight
    #itemWidth

    constructor(itemPrice, userPhoneNumber, itemDensity, itemHeight, itemWidth) {
        super(itemPrice, userPhoneNumber)
        if(!Number.isInteger(+itemDensity)) {
            throw new Error("ITEM_DENSITY_IS_NOT_INT")
        }
        if(!Number.isInteger(+itemHeight)) {
            throw new Error("ITEM_HEIGHT_IS_NOT_INT")
        }
        if(!Number.isInteger(+itemWidth)) {
            throw new Error("ITEM_WIDTH_IS_NOT_INT")
        }

        this.#itemDensity = itemDensity
        this.#itemHeight = itemHeight
        this.#itemWidth = itemWidth
    }

    get itemDensity() {return this.#itemDensity}
    get itemHeight() {return this.#itemHeight}
    get itemWidth() {return this.#itemWidth}
}