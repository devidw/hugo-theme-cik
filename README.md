<h1 align=center>
    👑
    &nbsp; <!-- only for toc -->
    <br>
    Hugo Theme: Content is King
</h1>

## Installation
1. Install dependecies
    1. [Hugo Theme Component: Asciidoctor Skin](https://github.com/devidw/hugo-theme-component-asciidoctor-skin)
3. Clone this theme to your `themes` directory
```bash
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
