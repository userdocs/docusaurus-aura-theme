"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[41],{1904:(r,n,e)=>{e.r(n),e.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var t=e(4848),s=e(8453);const a={},o=void 0,i={id:"workflows",title:"workflows",description:"",source:"@site/docs/workflows.md",sourceDirName:".",slug:"/workflows",permalink:"/docusaurus-aura-theme/docs/workflows",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/workflows.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"json",permalink:"/docusaurus-aura-theme/docs/json"},next:{title:"yaml",permalink:"/docusaurus-aura-theme/docs/yaml"}},c={},u=[];function l(r){const n={code:"code",pre:"pre",...(0,s.R)(),...r.components};return(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-yaml",children:'name: musl-cross-make - build and release\r\n\r\non:\r\n  workflow_dispatch:\r\n    inputs:\r\n      docker_only:\r\n        description: "Docker job only"\r\n        required: true\r\n        default: false\r\n        type: boolean\r\n\r\njobs:\r\n  bootstrap-matrix:\r\n    runs-on: ubuntu-latest\r\n    outputs:\r\n      matrix_includes: ${{ steps.triples.outputs.matrix_includes }}\r\n    steps:\r\n      - uses: actions/checkout@v4\r\n      - name: bootstrap the matrix\r\n        id: triples\r\n        run: echo "matrix_includes=$(jq -c . triples.json)" >> $GITHUB_OUTPUT\r\n\r\n  build:\r\n    if: inputs.docker_only == \'0\'\r\n    needs: bootstrap-matrix\r\n    runs-on: ubuntu-latest\r\n    container:\r\n      image: alpine:edge\r\n    permissions:\r\n      contents: write\r\n    strategy:\r\n      fail-fast: false\r\n      matrix: ${{ fromJSON(needs.bootstrap-matrix.outputs.matrix_includes) }}\r\n\r\n    name: build ${{ matrix.arch_type }}\r\n\r\n    steps:\r\n      - uses: actions/checkout@v4\r\n\r\n      - name: apk install build deps\r\n        run: >\r\n          apk add --no-cache\r\n          autoconf automake\r\n          bash bison build-base\r\n          curl\r\n          findutils flex\r\n          git\r\n          libarchive-tools libtool linux-headers\r\n          patch perl pkgconf\r\n          rsync\r\n          tar texinfo\r\n          xz\r\n          zip\r\n\r\n      - name: Set ${{ matrix.arch_type }} musl to ${{ matrix.arch_config }}\r\n        run: sed "s|GCC_CONFIG_FOR_TARGET +=|GCC_CONFIG_FOR_TARGET += ${{ matrix.arch_config }}|" -i config.mak\r\n\r\n      - name: Show updated config.mak\r\n        run: cat config.mak\r\n\r\n      - name: install ${{ matrix.arch_type }} toolchain\r\n        run: make -j"$(nproc)" install TARGET="${{ matrix.arch_type }}" OUTPUT="$(pwd)/build/${{ matrix.arch_type }}"\r\n\r\n      - name: archive ${{ matrix.arch_type }} toolchain\r\n        run: |\r\n          cd "$(pwd)/build"\r\n          XZ_OPT=-9T0 tar -cvJf ${{ matrix.arch_type }}.tar.xz ${{ matrix.arch_type }}/\r\n\r\n      - name: Docker - upload artifacts\r\n        uses: actions/upload-artifact@v4\r\n        with:\r\n          name: "musl-cross-make-${{ matrix.arch_type }}"\r\n          path: "build/${{ matrix.arch_type }}.tar.xz"\r\n\r\n  release:\r\n    name: Upload artifacts to release\r\n    runs-on: ubuntu-latest\r\n    needs: [bootstrap-matrix, build]\r\n    permissions:\r\n      contents: write\r\n    if: always() && contains(needs.*.result, \'success\') && !contains(needs.*.result, \'failure\') && !contains(needs.*.result, \'cancelled\') && inputs.docker_only == \'0\'\r\n    env:\r\n      GH_TOKEN: "${{ github.TOKEN }}"\r\n    steps:\r\n      - name: Checkout\r\n        uses: actions/checkout@v4\r\n\r\n      - name: Host - Download artifacts\r\n        uses: actions/download-artifact@v4\r\n        with:\r\n          path: musl-cross-make\r\n          pattern: musl-cross-make-*\r\n          merge-multiple: true\r\n\r\n      - name: set release info from versions.mak\r\n        run: |\r\n          cp -f versions.mak release_body.md\r\n          jq -R \'split(" = ") | {(.[0]):.[1]}\' versions.mak | jq -s \'add\' > versions.json\r\n\r\n      - name: set tag via date\r\n        run: echo "github_tag=$(date +"%y%V")" >> $GITHUB_ENV\r\n\r\n      - name: Create release - tag - assets\r\n        uses: ncipollo/release-action@v1\r\n        with:\r\n          prerelease: false\r\n          artifacts: "musl-cross-make/*.tar.xz,versions.json"\r\n          replacesArtifacts: true\r\n          tag: "${{ env.github_tag }}"\r\n          name: "musl-cross-make toolchains"\r\n          bodyFile: release_body.md\r\n          allowUpdates: true\r\n\r\n  docker-publish:\r\n    if: always() && contains(needs.*.result, \'success\') && !contains(needs.*.result, \'failure\') && !contains(needs.*.result, \'cancelled\')\r\n    needs: [bootstrap-matrix, build, release]\r\n    runs-on: ubuntu-latest\r\n    permissions:\r\n      contents: write\r\n      packages: write\r\n    strategy:\r\n      fail-fast: false\r\n      matrix: ${{ fromJSON(needs.bootstrap-matrix.outputs.matrix_includes) }}\r\n\r\n    name: docker ${{ matrix.arch_type }}\r\n\r\n    steps:\r\n      - name: Checkout\r\n        uses: actions/checkout@v4\r\n\r\n      - name: Extract metadata (tags, labels) for Docker\r\n        uses: docker/metadata-action@v5\r\n        with:\r\n          images: ${{ env.REGISTRY }}/${{ github.repository }}\r\n\r\n      - name: Set up Docker Buildx\r\n        uses: docker/setup-buildx-action@v3\r\n\r\n      - name: Log in to the Container registry\r\n        uses: docker/login-action@v3\r\n        with:\r\n          registry: ghcr.io\r\n          username: ${{ github.actor }}\r\n          password: ${{ github.token }}\r\n\r\n      - name: Build and push\r\n        uses: docker/build-push-action@v5\r\n        with:\r\n          platforms: linux/amd64\r\n          context: .\r\n          file: Dockerfile\r\n          push: true\r\n          no-cache: true\r\n          tags: ghcr.io/${{ github.repository }}:${{ matrix.arch_type }}\r\n          labels: ${{ steps.meta.outputs.labels }}\r\n          build-args: |\r\n            TARGET=${{ matrix.arch_type }}\r\n            BASE_URL=https://github.com/userdocs/musl-cross-make/releases/latest/download\r\n            NINJA_URL=https://github.com/userdocs/qbt-ninja-build/releases/latest/download/ninja-x86_64\n'})})}function d(r={}){const{wrapper:n}={...(0,s.R)(),...r.components};return n?(0,t.jsx)(n,{...r,children:(0,t.jsx)(l,{...r})}):l(r)}},8453:(r,n,e)=>{e.d(n,{R:()=>o,x:()=>i});var t=e(6540);const s={},a=t.createContext(s);function o(r){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof r?r(n):{...n,...r}}),[n,r])}function i(r){let n;return n=r.disableParentContext?"function"==typeof r.components?r.components(s):r.components||s:o(r.components),t.createElement(a.Provider,{value:n},r.children)}}}]);