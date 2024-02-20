/*
 * Synthwave '84 Theme originally by Robb Owen [@Robb0wen] for Visual Studio Code
 * Demo: https://marc.dev/demo/prism-synthwave84
 *
 * Ported for PrismJS by Marc Backes [@themarcba]: https://github.com/themarcba/prism-themes/blob/master/themes/prism-synthwave84.css
 * Ported for prism-react-renderer by Forrest Akin [@forrest-akin]
 */
import type { PrismTheme } from "prism-react-renderer";
const theme: PrismTheme = {
    plain: {
        backgroundColor: "#21202E", //--black-soft-custom: #21202E;
        color: "#bdbdbd", //--white-soft-custom: #bdbdbd;
    },
    styles: [
        {
            types: ["comment", "block-comment", "prolog", "doctype", "cdata"],
            style: {
                color: "#6d6d6d", // --gray-soft: #6d6d6d;
                // fontStyle: "italic",
            },
        },
        {
            types: ["punctuation"],
            style: {
                color: "#FFD700", //  --yellow-hard: #FFD700;
            },
        },
        {
            types: [
                "tag",
                "attr-name",
                "namespace",
                "number",
                "unit",
                "hexcode",
                "deleted",
            ],
            style: {
                color: "#54c59f", // --green-soft: #54c59f;
            },
        },
        {
            types: ["property", "selector"],
            style: {
                color: "#8464c6", // --purple-soft: #8464c6; (js/json)
            },
        },
        {
            types: ["function-name"],
            style: {
                color: "#fff", // ??
            },
        },
        {
            types: ["boolean", "selector-id", "function"],
            style: {
                color: "#c7a06f", // --orange-soft: #c7a06f;
            },
        },
        {
            types: ["class-name", "maybe-class-name", "builtin"],
            style: {
                color: "#6cb2c7", //  --blue-soft: #6cb2c7;
            },
        },
        {
            types: ["constant", "symbol"],
            style: {
                color: "#c55858", // --red-soft: #c55858; IFS/OPTIND
            },
        },
        {
            types: ["important", "atrule", "keyword", "selector-class"],
            style: {
                color: "#8464c6", // --purple-soft: #8464c6;
            },
        },
        {
            types: ["string", "char", "", "regex",],
            style: {
                color: "#54c59f", // --green - soft: #54c59f;
            },
        },

        {
            types: ["variable", ""],
            style: {
                color: "#c17ac8", // --pink-soft: #c17ac8;
            },
        },

        {
            types: ["parameter"],
            style: {
                fontStyle: "italic",
            },
        },
        {
            types: ["entity", "url"],
            style: {
                color: "#c7a06f", // --orange-soft: #c7a06f;
            },
        },
        {
            types: ["operator"],
            style: {
                color: "#c7a06f", // --orange-soft: #c7a06f;
            },
        },
        {
            types: ["important", "bold"],
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
            types: ["entity"],
            style: {
                cursor: "help",
            },
        },
        {
            types: ["inserted"],
            style: {
                color: "green",
            },
        },
    ],
}
export default theme
