// Original: https://raw.githubusercontent.com/PrismJS/prism-themes/master/themes/prism-ghcolors.css
import type { PrismTheme } from "prism-react-renderer";
const theme: PrismTheme = {
    plain: {
        color: "#bdbdbd", // --white-soft: #bdbdbd;
        backgroundColor: "#21202E", // --black-soft-custom: #21202E;
    },
    styles: [

        {
            types: ["keyword"],
            style: {
                color: "#8464c6", // --purple-soft: #8464c6;
            },
        },

        {
            types: ["for-or-select"],
            style: {
                color: "#ff0000", // --place-holder: #ff0000;
            },
        },

        {
            types: ["assign-left"],
            style: {
                color: "#ff0000", // --place-holder: #ff0000;
            },
        },

        {
            types: ["environment"],
            style: {
                color: "#ff0000", // --place-holder: #ff0000;
            },
        },

        {
            types: ["file-descriptor"],
            style: {
                color: "#ff0000", // --place-holder: #ff0000;
            },
        },

        {
            types: ["builtin"],
            style: {
                color: "#ff0000", // --place-holder: #ff0000;
            },
        },

        {
            types: ["class-name"],
            style: {
                color: "#c7a06f", // --orange-soft: #c7a06f;
            },
        },

        {
            types: ["maybe-class-name"],
            style: {
                color: "#c7a06f", // --orange-soft: #c7a06f;
            },
        },

        {
            types: ["function"], // bash
            style: {
                color: "#c7a06f", // --orange-soft: #c7a06f;
            },
        },

        {
            types: ["function-name"],
            style: {
                color: "#ff0000", // --place-holder: #ff0000;
            },
        },

        {
            types: ["function-variable"],
            style: {
                color: "#ff0000", // --place-holder: #ff0000;
            },
        },

        {
            types: ["boolean"],
            style: {
                color: "#c55858", // --red-soft: #c55858;
            },
        },

        {
            types: ["number"],
            style: {
                color: "#c55858", // --red-soft: #c55858;
            },
        },

        {
            types: ["string"],
            style: {
                color: "#54c59f", // --green-soft: #54c59f;
            },
        },

        {
            types: ["char"],
            style: {
                color: "#ff0000", // --place-holder: #ff0000;
            },
        },

        {
            types: ["symbol"],
            style: {
                color: "#ff0000", // --place-holder: #ff0000;
            },
        },

        {
            types: ["regex"],
            style: {
                color: "#ff0000", // --place-holder: #ff0000;
            },
        },

        {
            types: ["url",],
            style: {
                color: "#ff0000", // --place-holder: #ff0000;
            },
        },

        {
            types: ["operator"],
            style: {
                color: "#FFD700", // --yellow-hard: #FFD700;
            },
        },

        {
            types: ["variable"],
            style: {
                color: "#c17ac8", // --pink-soft: #c17ac8;
            },
        },

        {
            types: ["constant"],
            style: {
                color: "#c17ac8", // --purple-soft: #8464c6;
            },
        },

        {
            types: ["property"],
            style: {
                color: "#c17ac8", // --pink-soft: #c17ac8;
            },
        },

        {
            types: ["punctuation"],
            style: {
                color: "#FFD700", //  --yellow-hard: #FFD700;
            },
        },

        {
            types: ["important"],
            style: {
                color: "#c55858", // --red-soft: #c55858;
            },
        },

        {
            types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
            style: {
                color: "#6d6d6d", // --gray-soft: #6d6d6d;
            },
        },

        {
            types: ["tag"],
            style: {
                color: "#c55858", // --red-soft: #c55858;
            },
        },

        {
            types: ["attr-name"], // ini
            style: {
                color: "#c17ac8", // --pink-soft: #c17ac8;
            },
        },

        {
            types: ["attr-value"],
            style: {
                color: "#54c59f", // --green-soft: #54c59f;
            },
        },

        {
            types: ["namespace"],
            style: {
                color: "#ff0000" // --place-holder: #ff0000;
            },
        },

        {
            types: ["entity"], // bash
            style: {
                color: "#6cb2c7", // --blue-soft: #6cb2c7;
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

        {
            types: ["atrule"],
            style: {
                color: "#c17ac8", // --pink-soft: #c17ac8;
            },
        },


        {
            types: ["inserted"],
            style: {
                color: "#54c59f", // --green-soft: #54c59f;
            },
        },

        {
            types: ["deleted"],
            style: {
                color: "#c55858", // --red-soft: #c55858;
            },
        },

        {
            types: ["selector"], // ini
            style: {
                color: "#8464c6", // --purple-soft: #8464c6;
            },
        },

        {
            types: ["selector-id"],
            style: {
                color: "#ff0000", // --place-holder: #ff0000;
            },
        },

        {
            types: ["selector-class"],
            style: {
                color: "#ff0000", // --place-holder: #ff0000;
            },
        },

        {
            types: ["unit"],
            style: {
                color: "#ff0000", // --place-holder: #ff0000;
            },
        },

        {
            types: ["hexcode"],
            style: {
                color: "#ff0000", // --place-holder: #ff0000;
            },
        },

        {
            types: ["parameter"],
            style: {
                color: "#6cb2c7", // --blue-soft: #6cb2c7;
            },
        },

        {
            types: ["delimiter"],
            style: {
                color: "#ff0000", // --place-holder: #ff0000;
            },
        },

        {
            types: ["imports"],
            style: {
                color: "#6cb2c7",
            },
        },

        {
            types: ["property-access"],
            style: {
                color: "#6cb2c7",
            },
        },

    ],
}
export default theme
