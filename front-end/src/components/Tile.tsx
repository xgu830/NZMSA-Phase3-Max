export interface TileProps {
    currentValue: number
}

const colors = [
    "#ffffcc",
    "#ffffcc",
    "#ffffad",
    "#ffff93",
    "#ffff84",
    "#ddffbc",
    "#ccff99",
    "#c1ff84",
    "#99ff99",
    "#84ff84",
    "#99ffcc",
    "#7fffff",
    "#7fbfcc",
]

const Tile = ({currentValue} : TileProps) : JSX.Element => {
    return <div style={{display: "grid", placeContent: 'center', backgroundColor: colors[currentValue]}}>
        {currentValue > 0 ? 
            <p style={{fontSize:"6rem", fontWeight: 700, color: "#fefefe", margin: 0}}>
                {Math.pow(2, currentValue)}
            </p> 
            : 
            null}
        </div>
}

export default Tile;