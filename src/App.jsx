import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import NewPage from "./SimpleLayoutLib/NewPage";
import VerticalDiv from "./SimpleLayoutLib/VerticalDiv";
import HorizontalDiv from "./SimpleLayoutLib/HorizontalDiv";

function App() {
    const [divWidth, setDivWidth] = useState(false);

    return (
        <NewPage>
            <HorizontalDiv
                width="100%"
                color="coral"
                gap="0rem"
                style={{ borderRadius: "0.5rem" }}
            >
                <VerticalDiv
                    width="10%"
                    color="green"
                    style={{
                        display: "flex",
                        alignItems: "center",
                        borderRadius: "0.5rem",
                    }}
                ></VerticalDiv>
                <HorizontalDiv padding="0rem" gap="0rem">
                    <VerticalDiv
                        width="100%"
                        color="lightgreen"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "1rem",
                            borderRadius: "0.5rem",
                        }}
                    >
                        <button
                            style={{
                                width: "100%",
                                height: "100%",
                            }}
                            onClick={() => {
                                setDivWidth(!divWidth);
                            }}
                        >
                            {divWidth ? "Open" : "Close"} Window
                        </button>
                    </VerticalDiv>
                    <VerticalDiv
                        before={{
                            marginLeft: "1rem",
                            width: "200%",
                            borderWidth: "1rem",

                            transition:
                                "width 0.5s ease-in-out 0.1s, border-width 0.2s ease-in-out, margin-left 0.1s ease-in-out 0.05s",
                        }}
                        after={{
                            marginLeft: "0rem",
                            width: "0%",
                            borderWidth: "0rem",

                            transition:
                                "width 0.5s ease-in-out, border-width 0.2s ease-in-out 0.4s, margin-left 0.1s ease-in-out 0.45s",
                        }}
                        playAnimation={divWidth}
                        color="lightblue"
                        style={{
                            overflowX: "hidden",
                            borderRadius: "0.5rem",
                        }}
                    >
                        <h1 style={{ width: "20rem" }}>Vertical Div</h1>
                        <p style={{ width: "20rem" }}>
                            This is a vertical div with a width of 50% and a
                            light blue background color.
                        </p>
                    </VerticalDiv>
                </HorizontalDiv>
            </HorizontalDiv>
        </NewPage>
    );
}

export default App;
