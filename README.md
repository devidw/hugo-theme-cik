# Hugo Theme: Content is King
This Hugo theme focuses purely on content: Content is king. Layout and appearance are simply by design. The primary goal of the theme is to give the website visitor maximal user experience for reading and enjoying the published content elegantly. No Sidebars or any other annoying elements that interrupt the reading experience.

## Installation
1. Clone this theme to your `themes` directory
```cmd
git submodule add https://github.com/devidw/hugo-theme-cik ./themes/hugo-theme-cik
```
3. Add this theme to your list of themes inside your config-file
Using `config.toml`
```toml
theme = ["…", "hugo-theme-cik", "…"]
```
Using `config.yaml`
```yaml
theme: ["…", "hugo-theme-cik", "…"]
```
or
```yaml
theme: 
  - "…"
  - "hugo-theme-cik"
  - "…"
```


## Update
```cmd
git submodule update --init --recursive --remote
```


## Configuration

### Config

#### Main Sections
Please specifiy in which sections you posts are located:
```yaml
mainSections:
  - posts
```
#### Author
```yaml
author: 
  name: David Wolf
  email: david@wolf.gdn
  signature: signature.svg # static file path
```

#### Theme color
```yaml
themeColor: "#8b7355"
```

#### Icons
```yaml
icons:
  favicon: logo.svg
  touchIcon: logo.svg # Safari
  maskIcon: logo.svg # Safari
```


### Frontmatter

#### `noindex`
```yaml
noindex: true
```

* sets robots meta tag
* excludes via `robots.txt`
* excludes from `sitemap.xml`
* excludes from RSS feed

#### `math`
```yaml
math: true
```

* Enables [KaTeX](https://katex.org) math rendering for the given page
