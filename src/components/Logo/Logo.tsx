import { render } from "@testing-library/react"


export const Logo = () => {
    return (
        <h1 className="{styles.logo}">
            <span role="img" aria-label="Hat">
                U+1F91F
            </span>
            <span role="img" aria-label="Ethiopian Flag">
                U+1F1EA U+1F1F9
            </span>
            <span role="img" aria-label="Musical Sign">
                U+1F3B5
            </span>
        </h1>
    )
}