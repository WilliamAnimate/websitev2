# website

an upgrade of my original website, which became inconsistant as time went on

## new features

**light/dark mode**, so [meew0](https://twitter.com/meew0) or that 4 other people who enjoy light mode can also experience it in this website :D

**Accessible** (colorblind mode), because the original website was written and brought online by [tristan poland](https://github.com/tristanpoland). Unfortantly I'm not usre HOW im supposed to make this accessible to those with reduced contrast... sorry?
*note: colorblind mode toggles are put into sites that I determine "too much colors"*
*colorblind mode puts underlines on links, but can be misleading if you use a lot of ``<u>``*

**Consistancy**, something the latest version of Windows 10 cannot achieve

**Minimalistic design**, or at least i tried

**Simple framework** and easy to read+easy usuable css

**FINALLY EMBEDS** i finally added embeds.

## using the code

the code may be unreadable/unformatted in some parts, in which case, having a bit of html/css/js experience can help you understand & reformat it.

if you need help, or don't want to format it, create [an issue](https://github.com/williamanimate/websitev2/issues). the code is unformatted to save like ~3 bytes, or in the case of one-rule css files (example below)

```css
.warning {
    color: yellow;
}
/*
takes up 3 lines, ugly.
use this instead:
*/
.warning {color: yellow;}
/*
a bit more readable, or less if you're used to the first one.
however, the ";" is unnesscary and can be removed safely. or at least of 4/22/2023.
but then, we have spaces, taking up 2 bytes, so... we save 3 bytes by doing this
*/
.warning{color:yellow}
/*
very readable.
*/
```

I can't say the same for JS. when unformatted, you **cannot** read it easily, paired with my terrible js knowlege, it is impossible.

```js
function a(){
    window.location.replace("https://therickroll.com");
}    
function b(){
    window.location.replace("https://example.com");
}
/* same process as css */
function a(){window.location.replace("https://therickroll.com")}    
function b(){window.location.replace("https://example.com")}
/* however, this code is still slightly readable */
function a(){window.location.replace("https://therickroll.com")}function b(){window.location.replace("https://example.com")}
/* one liner. saves about 2 (tab key) + 2 (;) + 2 (enter? idk if enter keys counts), meaning we save 6 bytes at max. */
```
