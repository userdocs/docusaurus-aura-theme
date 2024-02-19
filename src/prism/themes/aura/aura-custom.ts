// Original: https://raw.githubusercontent.com/PrismJS/prism-themes/master/themes/prism-ghcolors.css
import type { PrismTheme } from "../types"
const theme: PrismTheme = {
    plain: {
        color: "#bdbdbd", // --white-soft: #bdbdbd;
        backgroundColor: "#21202E", // --black-soft: #21202E;
    },
    styles: [
        {
            types: ["namespace"],
            style: {
                opacity: 0.7,
                color: "#fff"
            },
        },
        {
            types: ["comment", "block-comment"],
            style: {
                color: "#6d6d6d",
                fontStyle: "italic",
            },
        },
        {
            // good
            types: ["string"],
            style: {
                color: "#54c59f", // --green-soft: #54c59f;
            },
        },
        {
            types: ["operator"],
            style: {
                color: "#c7a06f", // --orange-soft: #c7a06f;
            },
        },
        {
            types: ["punctuation"],
            style: {
                color: "#FFD700",
            },
        },
        {
            types: ["number"],
            style: {
                color: "#54c59f",
            },
        },
        {
            types: ["boolean"],
            style: {
                color: "#6cb2c7",
            },
        },
        {
            types: ["property"],
            style: {
                color: "#c17ac8",
            },
        },
        {
            types: ["atrule"],
            style: {
                color: "#c17ac8", // yaml
            },
        },
        {
            types: ["tag"],
            style: {
                color: "#FFD700", // yaml weirdness
            },
        },
        {
            types: ["keyword"],
            style: {
                color: "#8464c6",
            },
        },
        {
            types: ["imports"],
            style: {
                color: "#bdbdbd",
            },
        },
        {
            types: ["class-name"],
            style: {
                color: "#6cb2c7",
            },
        },
        {
            types: ["maybe-class-name"],
            style: {
                color: "#bdbdbd",
            },
        },
        {
            types: ["property-access"],
            style: {
                color: "#c7a06f",
            },
        },
        {
            types: ["important"],
            style: {
                color: "#6cb2c7",
            },
        },
        {
            types: ["function"], // bash
            style: {
                color: "#c7a06f",
            },
        },

        {
            types: ["selector"], // ini
            style: {
                color: "#8464c6",
            },
        },
        {
            types: ["attr-name"], // ini
            style: {
                color: "#c17ac8",
            },
        },
        {
            types: ["attr-value"],
            style: {
                color: "#54c59f",
            },
        },
        {
            types: ["parameter"], // bash
            style: {
                color: "#c55858",
            },
        },
        {
            types: ["bold"],
            style: {
                fontWeight: "bold",
            },
        },
        {
            types: ["italic"],
            style: {
                fontStyle: "italic",
            },
        },





        // {
        //     types: ["builtin"],
        //     style: {
        //         color: "#E80808",
        //     },
        // },
        // {
        //     types: ["hexcode"],
        //     style: {
        //         color: "#E80808",
        //     },
        // },
        // {
        //     types: ["function-name"],
        //     style: {
        //         color: "#E80808",
        //     },
        // },
        // {
        //     types: ["selector-id"],
        //     style: {
        //         color: "#E80808",
        //     },
        // },
        // {
        //     types: ["selector-class"],
        //     style: {
        //         color: "#E80808",
        //     },
        // },
        // {
        //     types: ["variable"],
        //     style: {
        //         color: "#E80808",
        //     },
        // },
        // {
        //     types: ["deleted"],
        //     style: {
        //         color: "#E80808",
        //     },
        // },
        // {
        //     types: ["function-variable"],
        //     style: {
        //         color: "#E80808",
        //     },
        // },
        // {
        //     types: ["regex"],
        //     style: {
        //         color: "#E80808",
        //     },
        // },
        // {
        //     types: ["char"],
        //     style: {
        //         color: "#E80808",
        //     },
        // },
        // {
        //     types: ["delimiter"],
        //     style: {
        //         color: "#E80808",
        //     },
        // },
        // {
        //     types: ["prolog"],
        //     style: {
        //         color: "#E80808",
        //     },
        // },
        // {
        //     types: ["doctype"],
        //     style: {
        //         color: "#E80808",
        //     },
        // },
        // {
        //     types: ["cdata"],
        //     style: {
        //         color: "#E80808",
        //     },
        // },
        // {
        //     types: ["constant"],
        //     style: {
        //         color: "#E80808",
        //     },
        // },
        // {
        //     types: ["inserted"],
        //     style: {
        //         color: "#E80808",
        //     },
        // },
        // {
        //     types: ["entity"],
        //     style: {
        //         color: "#E80808",
        //     },
        // },
        // {
        //     types: ["url",],
        //     style: {
        //         color: "#E80808",
        //     },
        // },
        // {
        //     types: ["symbol"],
        //     style: {
        //         color: "#E80808",
        //     },
        // },
    ],
}
export default theme
