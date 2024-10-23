import { useMediaQuery } from "react-responsive";

const colorPairs = [['#F2BAC9', '#ED4C4C'], ['#B1F8F2', '#188991'], ['#FFF3B0', '#EF946C'], ['#72B1D5', '#4357AD'], ['#D8D4F2', '#5F4BB6'], ['#4BB3FD', '#00487C'], ['#E0EEC6', '#7CA982',],['#858AE3','#23395B'],['#7353BA','#EFC3F5'],['#FAA6FF','#2F195F'],]

export default function Settings() {
    const xsScreen = useMediaQuery({ maxWidth: "1150px" });
    
    return (
        <>
        <div style={xsScreen ? {paddingTop: "var(--header-height-mobile)", marginTop: "var(--header-height-mobile)"} : {}}>
            <h1>Settings</h1>
            <h2>Select your favourite theme:</h2>
            {colorPairs.map(pair => (
                <button
                    key={`${pair[0]},${pair[1]}`}
                    onClick={() => {}}
                    style={{ backgroundColor: [pair[0]], border: `solid 15px ${pair[1]}`, margin: '20px', padding: '50px', }}
                />
            ))}
        </div>
        </>
    )
}