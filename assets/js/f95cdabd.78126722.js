"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[31],{8994:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>l,frontMatter:()=>i,metadata:()=>a,toc:()=>$});var o=e(4848),s=e(8453);const i={},c=void 0,a={id:"bash",title:"bash",description:"",source:"@site/docs/bash.md",sourceDirName:".",slug:"/bash",permalink:"/docs/bash",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/bash.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",next:{title:"ini",permalink:"/docs/ini"}},r={},$=[];function d(t){const n={code:"code",pre:"pre",...(0,s.R)(),...t.components};return(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-bash",children:'#!/bin/sh\n#\n# cowpatch.sh, by Rich Felker\n#\n# Permission to use, copy, modify, and/or distribute this software for\n# any purpose with or without fee is hereby granted.\n#\n# THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL\n# WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED\n# WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE\n# AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL\n# DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA\n# OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER\n# TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR\n# PERFORMANCE OF THIS SOFTWARE.\n#\n# Take the above disclaimer seriously! This is an experimental tool\n# still and does not yet take precautions against malformed/malicious\n# patch files like patch(1) does. It may act out-of-tree and clobber\n# stuff you didn\'t intend for it to clobber.\n#\n\nset -e\n\necho() { printf "%s\\n" "$*"; }\n\ncow() {\n\ttest -h "$1" || return 0\n\tif test -d "$1"; then\n\t\tcase "$1" in\n\t\t\t*/*) set -- "${1%/*}/" "${1##*/}" ;;\n\t\t\t*) set -- "" "$1" ;;\n\t\tesac\n\t\tmkdir "$1$2.tmp.$$"\n\t\tmv "$1$2" "$1.$2.orig"\n  mv "$1$2.tmp.$$" "$1$2"\n\t\t(cd "$1$2" && ln -s ../".$2.orig"/* .)\n\telse\n\t\tcp "$1" "$1.tmp.$$"\n\t\tmv "$1.tmp.$$" "$1"\n\tfi\n}\n\ncowp() {\n\twhile test "$1"; do\n\t\tcase "$1" in\n\t\t\t*/*) set -- "${1#*/}" "$2${2:+/}${1%%/*}" ;;\n\t\t\t*) set -- "" "$2${2:+/}$1" ;;\n\t\tesac\n\t\tcow "$2"\n\tdone\n}\n\ncowpatch() {\n\n\tplev=0\n\tOPTIND=1\n\twhile getopts ":p:i:RNE" opt; do\n\t\ttest "$opt" = p && plev="$OPTARG"\n\tdone\n\n\twhile IFS= read -r l; do\n\t\tcase "$l" in\n\t\t\t+++*)\n\t\t\t\tIFS=" \t" read -r _ pfile _ <<- "EOF"\n\t\t\t\t\t$l\n\t\t\t\tEOF\n\t\t\t\ti=0\n\t\t\t\twhile test "$i" -lt "$plev"; do\n\t\t\t\t\tpfile=${pfile#*/}\n\t\t\t\t\ti=$((i + 1))\n\t\t\t\tdone\n\t\t\t\tcowp "$pfile"\n\t\t\t\techo "$l"\n\t\t\t\t;;\n\t\t\t@@*)\n\t\t\t\techo "$l"\n\t\t\t\tIFS=" " read -r _ i j _ <<- EOF\n\t\t\t\t\t$l\n\t\t\t\tEOF\n\n\t\t\t\tcase "$i" in *,*) i=${i#*,} ;; *) i=1 ;; esac\n\t\t\t\tcase "$j" in *,*) j=${j#*,} ;; *) j=1 ;; esac\n\t\t\t\twhile test "$i" -gt 0 || test "$j" -gt 0; do\n\t\t\t\t\tIFS= read -r l\n\t\t\t\t\techo "$l"\n\t\t\t\t\tcase "$l" in\n\t\t\t\t\t\t+*) j=$((j - 1)) ;;\n\t\t\t\t\t\t-*) i=$((i - 1)) ;;\n\t\t\t\t\t\t*)\n\t\t\t\t\t\t\ti=$((i - 1))\n\t\t\t\t\t\t\tj=$((j - 1))\n\t\t\t\t\t\t\t;;\n\t\t\t\t\tesac\n\t\t\t\tdone\n\t\t\t\t;;\n\t\t\t*) echo "$l" ;;\n\t\tesac\n\tdone\n\n}\n\ngotcmd=0\nwhile getopts ":p:i:RNEI:S:" opt; do\n\tcase "$opt" in\n\t\tI)\n\t\t\tfind "$OPTARG" -path "$OPTARG/*" -prune -exec sh -c \'ln -sf "$@" .\' sh {} +\n\t\t\tgotcmd=1\n\t\t\t;;\n\t\tS)\n\t\t\tcowp "$OPTARG"\n\t\t\tgotcmd=1\n\t\t\t;;\n\t\t*)\n\t\t\texit 1\n\t\t\t;;\n\tesac\ndone\ntest "$gotcmd" -eq 0 || exit 0\n\ncowpatch "$@" | patch "$@"\n'})})}function l(t={}){const{wrapper:n}={...(0,s.R)(),...t.components};return n?(0,o.jsx)(n,{...t,children:(0,o.jsx)(d,{...t})}):d(t)}},8453:(t,n,e)=>{e.d(n,{R:()=>c,x:()=>a});var o=e(6540);const s={},i=o.createContext(s);function c(t){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof t?t(n):{...n,...t}}),[n,t])}function a(t){let n;return n=t.disableParentContext?"function"==typeof t.components?t.components(s):t.components||s:c(t.components),o.createElement(i.Provider,{value:n},t.children)}}}]);