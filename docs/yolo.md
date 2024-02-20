---
title: yolo
hide_title: true
---

```js
// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

"https://docusaurus.io/docs/api/docusaurus-config";

// import lightCodeTheme from "./src/prism/themes/aura/aura-soft-dark-color-theme.js";
// import darkCodeTheme from "./src/prism/themes/aura/aura-soft-dark-color-theme.js";
// import darkCodeTheme from "./src/prism/themes/OneDark-Pro/OneDark-Pro.js";

import { themes as prismThemes } from "prism-react-renderer";
// import PrismDark from "./src/utils/prismDark";
import PrismDark from "./src/prism/themes/github.ts";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "My Site",
  tagline: "Dinosaurs are cool",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "My Site",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Tutorial",
          },
          { to: "/blog", label: "Blog", position: "left" },
          {
            href: "https://github.com/facebook/docusaurus",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/intro",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/docusaurus",
              },
              {
                label: "Discord",
                href: "https://discordapp.com/invite/docusaurus",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/docusaurus",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/facebook/docusaurus",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: PrismDark,
        additionalLanguages: ["bash"],
      },
    }),
};

export default config;
```

```bash
# CI triggered on pushes to the build script. Tests on x86_64 Debian buster/sid Ubuntu Focal/hirsute to make sure it all works on these platforms.
debian_based_CI.yml

 # qbittorrent-nox qmake, cmake, libtorrent v1 and v2 multi build and release across these architectures - x86_64 armhf armv7 aarch64 cross built via musl prebuilt toolchains. 32 builds are created. 16 per release.
matrix_multi_build_and_release.yml

# Same as above but with options to specificy tags so that I can update previous releases.
matrix_multi_build_and_release_customs_tags.yml

# Uses https://github.com/userdocs/qbt-workflow-file to create artifacts of dependencies for the worklows.
matrix_multi_build_and_release_artifacts.yml


# Uses https://github.com/userdocs/qbt-workflow-file as a source for dependencies for the worklows.
matrix_multi_build_and_release_qbt_workflow_files.yml
```

```yaml
permissions:
  contents: write
```

```yml title=".github/workflows/deploy.yml"
name: Deploy to GitHub Pages

on:
  pull_request:
    branches: [main]
  push:
    branches: [main]

permissions:
  contents: write

jobs:
  test-deploy:
    if: github.event_name != 'push'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: yarn
      - name: Install dependencies
        run: yarn install --frozen-lockfile
      - name: Test build website
        run: yarn build
  deploy:
    if: github.event_name != 'pull_request'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: yarn
      - uses: webfactory/ssh-agent@v0.5.0
        with:
          ssh-private-key: ${{ secrets.GH_PAGES_DEPLOY }}
      - name: Deploy to GitHub Pages
        env:
          USE_SSH: true
        run: |
          git config --global user.email "actions@github.com"
          git config --global user.name "gh-actions"
          yarn install --frozen-lockfile
          yarn deploy
```

```yml title=".github/workflows/deploy.yml"
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
    # Review gh actions docs if you want to further define triggers, paths, etc
    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on

permissions:
  contents: write

jobs:
  deploy:
    name: Deploy to GitHub Pages
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: yarn

      - name: Install dependencies
        run: yarn install --frozen-lockfile
      - name: Build website
        run: yarn build

      # Popular action to deploy to GitHub Pages:
      # Docs: https://github.com/peaceiris/actions-gh-pages#%EF%B8%8F-docusaurus
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          # Build output to publish to the `gh-pages` branch:
          publish_dir: ./build
          # The following lines assign commit authorship to the official
          # GH-Actions bot for deploys to `gh-pages` branch:
          # https://github.com/actions/checkout/issues/13#issuecomment-724415212
          # The GH actions bot is used by default if you didn't specify the two fields.
          # You can swap them out with your own user credentials.
          user_name: github-actions[bot]
          user_email: 41898282+github-actions[bot]@users.noreply.github.com
```

```yml title=".github/workflows/test-deploy.yml"
name: Test deployment

on:
  pull_request:
    branches:
      - main
    # Review gh actions docs if you want to further define triggers, paths, etc
    # https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#on

jobs:
  test-deploy:
    name: Test deployment
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: 18
          cache: yarn

      - name: Install dependencies
        run: yarn install --frozen-lockfile
      - name: Test build website
        run: yarn build
```

```ts
// Original: https://raw.githubusercontent.com/PrismJS/prism-themes/master/themes/prism-ghcolors.css
import type { PrismTheme } from "../types";
const theme: PrismTheme = {
  plain: {
    color: "#393A34",
    backgroundColor: "#f6f8fa",
  },
  styles: [
    {
      types: ["comment", "prolog", "doctype", "cdata"],
      style: {
        color: "#999988",
        fontStyle: "italic",
      },
    },
    {
      types: ["namespace"],
      style: {
        opacity: 0.7,
      },
    },
    {
      types: ["string", "attr-value"],
      style: {
        color: "#e3116c",
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: "#393A34",
      },
    },
    {
      types: [
        "entity",
        "url",
        "symbol",
        "number",
        "boolean",
        "variable",
        "constant",
        "property",
        "regex",
        "inserted",
      ],
      style: {
        color: "#36acaa",
      },
    },
    {
      types: ["atrule", "keyword", "attr-name", "selector"],
      style: {
        color: "#00a4db",
      },
    },
    {
      types: ["function", "deleted", "tag"],
      style: {
        color: "#d73a49",
      },
    },
    {
      types: ["function-variable"],
      style: {
        color: "#6f42c1",
      },
    },
    {
      types: ["tag", "selector", "keyword"],
      style: {
        color: "#00009f",
      },
    },
  ],
};
export default theme;
```

```yaml
# @credits https://github.com/c0re100/qBittorrent-Enhanced-Edition
name: matrix multi build and release - qbt-workflow-files

on:
  workflow_dispatch:
    inputs:
      distinct_id:
        description: "Distinct id"
      skip_rerun:
        description: "Skip rerun?"
        required: true
        default: true
        type: boolean
      retries:
        description: "Number of rerun retries"
        required: true
        default: "1"
        type: choice
        options: ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        os_id: [alpine]
        os_version_id: [edge]
        # qbt_cross_name: [armel,armhf,armv7,aarch64,x86_64,x86,s390x,powerpc,ppc64el,mips,mipsel,mips64,mips64el,riscv64]
        qbt_cross_name: ["armhf", "armv7", "aarch64", "x86_64", "x86"]
        qbt_libtorrent_version: ["1.2", "2.0"]
        qbt_build_tool: ["", "cmake"]
        include:
          - qbt_build_tool: ""
            qbt_qt_version_name: "qt5-"
            qbt_qt_version: "5"

          - qbt_build_tool: "cmake"
            qbt_qt_version_name: ""
            qbt_qt_version: "6"

    name: "${{ matrix.qbt_cross_name }}-${{ matrix.qbt_qt_version_name }}libtorrent-v${{ matrix.qbt_libtorrent_version }}"

    env:
      qbt_build_dir: "qbt-build"

    steps:
      - name: Checkout ${{ github.event.inputs.distinct_id }}
        uses: actions/checkout@v4

      - name: Host - phased updates ${{ github.event.inputs.distinct_id }}
        run: printf '%s\n' 'APT::Get::Always-Include-Phased-Updates "false";' | sudo tee /etc/apt/apt.conf.d/99-phased-updates

      - name: Host - set up lunar repo -t lunar ${{ github.event.inputs.distinct_id }}
        run: |
          printf '%b\n' 'Package: *\nPin: release n=lunar\nPin-Priority: 50' | sudo tee /etc/apt/preferences
          printf '%b\n' 'deb http://archive.ubuntu.com/ubuntu/ lunar main universe restricted' | sudo tee /etc/apt/sources.list.d/lunar.list

      - name: Host - update ${{ github.event.inputs.distinct_id }}
        run: sudo apt-get update

      - name: Host - upgrade ${{ github.event.inputs.distinct_id }}
        run: sudo apt-get -y upgrade

      - name: Host - set up qemu-user-static binfmt-support from lunar ${{ github.event.inputs.distinct_id }}
        run: sudo apt install -t lunar libpipeline1 qemu-user-static binfmt-support

      - name: Host - Create Docker template env file ${{ github.event.inputs.distinct_id }}
        run: |
          printf '%s\n' "qbt_libtorrent_version=${{ matrix.qbt_libtorrent_version }}" > env.custom
          printf '%s\n' "qbt_qt_version=${{ matrix.qbt_qt_version }}" >> env.custom
          printf '%s\n' "qbt_build_tool=${{ matrix.qbt_build_tool }}" >> env.custom
          printf '%s\n' "qbt_cross_name=${{ matrix.qbt_cross_name }}" >> env.custom
          printf '%s\n' "qbt_patches_url=${{ github.repository }}" >> env.custom
          printf '%s\n' "qbt_skip_icu=yes" >> env.custom
          printf '%s\n' "qbt_boost_tag=" >> env.custom
          printf '%s\n' "qbt_libtorrent_tag=" >> env.custom
          printf '%s\n' "qbt_qt_tag=" >> env.custom
          printf '%s\n' "qbt_qbittorrent_tag=" >> env.custom
          printf '%s\n' "qbt_libtorrent_master_jamfile=no" >> env.custom
          printf '%s\n' "qbt_workflow_files=yes" >> env.custom
          printf '%s\n' "qbt_workflow_artifacts=no" >> env.custom
          printf '%s\n' "qbt_cache_dir=" >> env.custom
          printf '%s\n' "qbt_optimise_strip=yes" >> env.custom
          printf '%s\n' "qbt_build_debug=no" >> env.custom
          printf '%s\n' "qbt_revision_url=${{ github.repository }}" >> env.custom
          printf '%s\n' "qbt_standard=17" >> env.custom
          printf '%s\n' "qbt_static_ish=no" >> env.custom

      - name: Host - Create docker multiarch container ${{ github.event.inputs.distinct_id }}
        run: docker run --name multiarch -it -d --env-file env.custom -w /root -v ${{ github.workspace }}:/root ${{ matrix.os_id }}:${{ matrix.os_version_id }}

      - name: Docker - apk update ${{ github.event.inputs.distinct_id }}
        run: docker exec -w /root multiarch apk update

      - name: Docker - apk install bash ${{ github.event.inputs.distinct_id }}
        run: docker exec -w /root multiarch apk add bash

      - name: Docker - Bootstrap ${{ github.event.inputs.distinct_id }}
        run: docker exec -w /root multiarch bash qbittorrent-nox-static.sh -bs-a

      - name: Docker - Copy repo patches to build folder ${{ github.event.inputs.distinct_id }}
        run: if [[ -d patches ]]; then docker exec -w /root multiarch cp -r patches/* /root/${{ env.qbt_build_dir }}/patches; fi

      - name: Docker - zlib-ng ${{ github.event.inputs.distinct_id }}
        run: docker exec -w /root multiarch bash qbittorrent-nox-static.sh zlib

      - name: Docker - iconv ${{ github.event.inputs.distinct_id }}
        run: docker exec -w /root multiarch bash qbittorrent-nox-static.sh iconv

      - name: Docker - icu ${{ github.event.inputs.distinct_id }}
        run: docker exec -w /root multiarch bash qbittorrent-nox-static.sh icu

      - name: Docker - openssl ${{ github.event.inputs.distinct_id }}
        run: docker exec -w /root multiarch bash qbittorrent-nox-static.sh openssl

      - name: Docker - boost ${{ github.event.inputs.distinct_id }}
        run: docker exec -w /root multiarch bash qbittorrent-nox-static.sh boost

      - name: Docker - libtorrent ${{ github.event.inputs.distinct_id }}
        run: docker exec -w /root multiarch bash qbittorrent-nox-static.sh libtorrent

      - name: Docker - double_conversion ${{ github.event.inputs.distinct_id }}
        if: matrix.qbt_build_tool == 'cmake'
        run: docker exec -w /root multiarch bash qbittorrent-nox-static.sh double_conversion

      - name: Docker - qtbase ${{ github.event.inputs.distinct_id }}
        run: docker exec -w /root multiarch bash qbittorrent-nox-static.sh qtbase

      - name: Docker - qttools ${{ github.event.inputs.distinct_id }}
        run: docker exec -w /root multiarch bash qbittorrent-nox-static.sh qttools

      - name: Docker - qbittorrent ${{ github.event.inputs.distinct_id }}
        run: docker exec -w /root multiarch bash qbittorrent-nox-static.sh qbittorrent

      - name: Host - qBittorrent v5 transition
        run: |
          # When qBittorrent v5 is released, remove this
          if [[ -f ${{ env.qbt_build_dir }}/release_info/disable-qt5 ]]; then
            printf '%s\n' "disable_qt5=yes" >> $GITHUB_ENV
          fi

      - name: Docker - Set release asset name ${{ github.event.inputs.distinct_id }}
        if: env.disable_qt5 != 'yes' # When qBittorrent v5 is released, remove this
        run: docker exec -w /root/${{ env.qbt_build_dir }}/completed multiarch mv -f qbittorrent-nox ${{ matrix.qbt_cross_name }}-${{ matrix.qbt_qt_version_name }}qbittorrent-nox

      - name: Docker - Release Info ${{ github.event.inputs.distinct_id }}
        if: env.disable_qt5 != 'yes' # When qBittorrent v5 is released, remove this
        run: docker exec -w /root/${{ env.qbt_build_dir }}/release_info multiarch bash -c 'mv *.md *.json '/root/${{ env.qbt_build_dir }}/completed''

      # - name: Docker - upx compression ${{ github.event.inputs.distinct_id }}
      #   run: |
      #     docker exec -w /root multiarch apk add upx
      #     docker exec -w /root/${{ env.qbt_build_dir }}/completed multiarch upx --brute --no-lzma ${{ matrix.qbt_cross_name }}-${{ matrix.qbt_qt_version_name }}qbittorrent-nox

      - name: Host - Upload libtorrent-v${{ matrix.qbt_libtorrent_version }}-qbittorrent-nox and release info artifact ${{ github.event.inputs.distinct_id }}
        if: env.disable_qt5 != 'yes' # When qBittorrent v5 is released, remove this
        uses: actions/upload-artifact@v4
        with:
          name: libtorrent-v${{ matrix.qbt_libtorrent_version }}-${{ matrix.qbt_cross_name }}-${{ matrix.qbt_qt_version_name }}qbittorrent-nox
          path: |
            ${{ env.qbt_build_dir }}/completed/*
            !${{ env.qbt_build_dir }}/completed/*.png

      - name: Host - Upload cmake graphs artifact ${{ github.event.inputs.distinct_id }}
        if: matrix.qbt_build_tool == 'cmake' && env.disable_qt5 != 'yes' # When qBittorrent v5 is released, remove this
        uses: actions/upload-artifact@v4
        with:
          name: "${{ matrix.qbt_cross_name }}-libtorrent-v${{ matrix.qbt_libtorrent_version }}-graphs"
          path: "${{ env.qbt_build_dir }}/completed/*.png"

  release:
    runs-on: ubuntu-latest
    permissions:
      contents: write
    needs: build
    if: always() && contains(needs.*.result, 'success') && !contains(needs.*.result, 'failure') && !contains(needs.*.result, 'cancelled')
    strategy:
      fail-fast: false
      matrix:
        qbt_libtorrent_version: ["1.2", "2.0"]
        include:
          - qbt_libtorrent_version: "1.2"
            preview_release: true

          - qbt_libtorrent_version: "2.0"
            preview_release: false

    name: "Publish release libtorrent-v${{ matrix.qbt_libtorrent_version }}"

    env:
      qbt_build_dir: "qbt-build"

    steps:
      - name: Checkout ${{ github.event.inputs.distinct_id }}
        uses: actions/checkout@v4

      - name: Pandoc - Bootstrap
        run: |
          pandoc_git_tag="$(git ls-remote -q -t --refs https://github.com/jgm/pandoc.git | awk '/tags\/[0-9]/{sub("refs/tags/", ""); print $2 }' | awk '!/^$/' | sort -rV | head -n 1)"
          curl -sLo- "https://github.com/jgm/pandoc/releases/latest/download/pandoc-${pandoc_git_tag}-linux-amd64.tar.gz" | tar xzf - --strip-components 2 -C "$(pwd)" --exclude="share"

      - name: Host - Download 1.2 qbittorrent-nox artifacts ${{ github.event.inputs.distinct_id }}
        uses: actions/download-artifact@v4
        with:
          path: "1.2"
          pattern: libtorrent-v1.2-*-qbittorrent-nox
          merge-multiple: true

      - name: Host - Download 2.0 qbittorrent-nox artifacts ${{ github.event.inputs.distinct_id }}
        uses: actions/download-artifact@v4
        with:
          path: "2.0"
          pattern: libtorrent-v2.0-*-qbittorrent-nox
          merge-multiple: true

      - name: Host - merge release-info ${{ github.event.inputs.distinct_id }}
        run: |
          if [[ ${{ matrix.qbt_libtorrent_version }} == "1.2" ]]; then
            for release in 1\.2/*-release.md; do
              [[ -f "${release}" ]] && release+=("${release}")
            done
          fi

          if [[ ${{ matrix.qbt_libtorrent_version }} == "2.0" ]]; then
            for release in 2\.0/*-release.md; do
              [[ -f "${release}" ]] && release+=("${release}")
            done
          fi

          readarray -t release_sorted < <(printf '%s\n' "${release[@]}" | sort)

          for dependency_version_files in 1\.2/*-dependency-version.json 2\.0/*-dependency-version.json; do
            [[ -f "${dependency_version_files}" ]] && dependency_version+=("${dependency_version_files}")
          done

          readarray -t dependency_version_sorted < <(printf '%s\n' "${dependency_version[@]}" | sort)

          paste -d '\n' "${release_sorted[@]}" | uniq | awk '!(NF && seen[$0]++) || /^>/' > "tmp-release.md"
          paste -d '\n' "${dependency_version_sorted[@]}" | uniq | awk '!(NF && seen[$0]++)' > "dependency-version.json"

          ./pandoc --wrap=preserve -f gfm tmp-release.md -t gfm -o release.md

      - name: Host - Bootstrap release tag ${{ github.event.inputs.distinct_id }}
        run: printf '%s\n' "release_tag=$(cat ${{ matrix.qbt_libtorrent_version }}/tag.md)" >> $GITHUB_ENV

      - name: Host - Bootstrap release title ${{ github.event.inputs.distinct_id }}
        run: printf '%s\n' "release_title=$(cat ${{ matrix.qbt_libtorrent_version }}/title.md)" >> $GITHUB_ENV

      - name: Host- Create release - tag - assets ${{ github.event.inputs.distinct_id }}
        uses: ncipollo/release-action@v1
        with:
          prerelease: "${{ matrix.preview_release }}"
          artifacts: "${{ matrix.qbt_libtorrent_version }}/*-qbittorrent-nox,dependency-version.json"
          replacesArtifacts: true
          tag: "${{ env.release_tag }}"
          name: "${{ env.release_title }}"
          bodyFile: "release.md"
          allowUpdates: true
          token: "${{ github.TOKEN }}"

  rerun-on-failure:
    if: failure() && inputs.skip_rerun == '0'
    name: rerun-on-failure
    needs: release
    permissions:
      actions: write
    runs-on: ubuntu-latest
    env:
      GH_TOKEN: "${{ github.TOKEN }}"
    steps:
      - uses: actions/checkout@v4
      - name: Trigger rerun workflow on job failures
        run: |
          inputs_retries="${{ inputs.retries }}"
          gh workflow run rerun.yml -f run_id=${{ github.run_id }} -f attempts=${{ github.run_attempt }} -f retries=${inputs_retries:-1}
```
