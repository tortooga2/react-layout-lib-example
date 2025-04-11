# Simple Layout Library

## NewPage

To create a new single page application that fills the screen. It will set some properties like, vw and vh and overflow hidden. but not much more than that.

```Javascript
const App = () => {
    return (
        <NewPage>
            <p> Hello world <p>
        </NewPage>
    )
}
```

## Vertical Layout

This is exactly what is sounds like. All children will be arranged vertically with by default `gap: 1rem`. If you content is long enough to be larger than the div itself, it will automatically turn into a scrollable area.

### Properties:

```javascript
    width = "100%",
    height = "100%",
    color = "rgba(0, 0, 0, 0)",
    padding = "1rem",
    gap = "1rem",
    style = {},
    playAnimation = false,
    before = {},
    after = {},
```

before and after exists to create animations. And you begin the transition to after with the playAnimation prop being set to true.

the below example was my attempt at making a div fold into itself and disappear. its not as elegant as I would like as I had to manually remove the gap and instead use marginLeft in order to animate it closing completely. if I just left the gap at 1rem, it would have left a strange empty area.

```Javascript
const App = () => {
    return (
        <NewPage>
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
                        This is a vertical div with a width of 50% and a light
                        blue background color.
                    </p>
                </VerticalDiv>
        </NewPage>
    )
}
```

## Horizontal DIv

Its exactly the same as vertical div but it will layout children horizontally, duh!.

okay thank you... xoxoxoxo
