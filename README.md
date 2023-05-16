<!-- markdownlint-disable MD001 MD033 -->
# websitev2

## Contents

- [**About**](#about)
- [**Features**](#features)
- [**"Documentation"**](#documentation)
  - [**Building**](#building)
  - [**Contributing**](#contributing)
  - [**Editing**](#editing)
  - [**Deleting**](#deleting)
  - [**Reading**](#reading)
  - [**Understanding**](#understanding)
- [**Back to top**... _wait wtf_](#websitev2)
- [**Back to top** _fall down_](#aaaaaaaaaa)

## About

An upgrade of my [original website](https://github.com/williamanimate/williamanimate.github.io), which became inconsistant as time went on

Uses the **ultimate css.css, compatable with everything***

###### *requires small `<style>` changes, eg, [this is the fix I use when fixing buttons while using MDUI](https://github.com/WilliamAnimate/websitev2/commit/86cfa0e4849537730274b7d38d7dd1cc1b83b17c#diff-0f22f81c9c137da7f7083b476b275f67a60c0233199b7ad5a74c2e0f8d71ef35R31)

## Features

**dynamic light/dark mode**, so [meew0](https://nitter.net/meew0) or that 4 other people who enjoy light mode can also experience it in this website :D _css.css only_

**colorblind friendly** some pages have a button to remove all color from webpages _requires proper ``button`` setup and importing of [colorblindToggle.min.js](https://github.com/WilliamAnimate/websitev2/blob/main/js/colorblindToggle.min.js) or [colorblindToggle.js](https://github.com/WilliamAnimate/websitev2/blob/main/js/colorblindToggle.js)_

_disclaimer: images not affected but i have no clue how to do remove color from images, perhaps grayscale would work._

**Consistancy**, something the latest version of Windows 10 cannot achieve (window elevn is better at that, a little...)

**Minimalistic design**, probably, at least i tried?

**Simple** and easy to use, probably. It instantly makes any page look better if you put in css.css :) _if using any external libaries, you may need to make some changes. for exam

**Embed support in html** i finally added embeds, so if you steal my code you would also have a sick looking embed with it.

**Uses the best dark mode/light mode color** uses ``#1b1b1b`` for dark mode and ``#eeeeee`` for light mode, the #1b1b1b is agreed by [g](https://github.com/fikinoob) **<u>if you disagree with this you're wrong</u>** <s>and you should do something else other than web design.</s> **thats a joke this is personal preference i respect your choice**

# "Documentation"
<!-- who cares if 2 top level headings mdlint. -->

**!!! The following "documentation" usually assumes you're running any NT 10 based kernel by [Microsoft](https://github.com/microsoft), I recommend the stock file explorer, and an IDE of some sort. IF you don't like local IDEs, edit using [vscode.dev](https://vscode.dev). you already have a browser if you can see this so like yea**

## Basics when reading

the code may be **unformatted** in some parts, in which case, **having a bit of html/css/js experience can help you understand** it.

This documentation **isn't** in depth, for the most in-depth documentation, if any, see the [wiki](https://github.com/WilliamAnimate/websitev2/wiki/)

<details>
<summary>Understanding unformatted code</summary>
here's an example with css

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

good luck when you're reading the javascript, though.

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
/* however, this code is still slightly readable. sometimes, i just make it as unreadable as possible to save as much space as possible. */
function a(){window.location.replace("https://therickroll.com")}function b(){window.location.replace("https://example.com")}
/* one liner. saves about 2 (tab key) + 2 (;) + 2 (enter? idk if enter keys counts), meaning we save 6 bytes at max. */
```

</details>

<details>
<summary>Basic HTML concept thingy</summary>

The basic HTML format is as follows:

```html
<!DOCTYPE html>

<html>
  <head>
    <meta charset="utf-8"/>
    <meta content="Embed title" property="og:title"/>
    <meta content="Embed description" property="og:description"/>
    <meta content="#" property="og:url"/>
    <meta content="#" property="og:image"/>
    <meta content="#0000ff" data-react-helmet="true" name="theme-color"/>

    <link rel="stylesheet" href="style/css.css"/>
    <link rel="stylesheet" href="../path/to/your/additional/css/file/css.css"/>
    <script src="../path/to/your/js/file/if/any/colorblind.min.js"></script>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <style>
        /* any extra styles go here */
    </style>
    <title>Cool title here</title>
  </head>
  <body>
    <a href="index.html" style="text-align:left"><div class="text">← index.html</div></a>
    <h1 class="title" style="color:var(--text-color-vibrant)">Title text</h1>
    <p>more stuff</p>
    <div id="footer"><object type="text/html"data="footer.html"style="overflow:auto;width:100%;height:100%"></object></div>
  </body>
  <script>
    // js goes here
  </script>
</html>
```

</details>

<details>
<summary>Using the colorblind/accessable mode</summary>

You know, im way too lazy to finish this today

wait isn't there a wiki article for this lmfao

HTML:

```html
<p>html code goes here</p>
```

</details>

## Building

You don't. just double click ``index.html``

## Contributing

[Fork the repo](https://github.com/WilliamAnimate/websitev2/fork) and make a [pull request](https://github.com/WilliamAnimate/websitev2/pulls). sounds like procedure.

recommended [vscode](https://vscode.dev) extension set **(NOT BROWSER VERSION)**:

- [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
- [Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint)
- [Markdown Github Preview](https://marketplace.visualstudio.com/items?itemName=lzm0x219.vscode-markdown-github)
- ~~[Codeium](https://marketplace.visualstudio.com/items?itemName=Codeium.codeium)~~

for more details, see [## reading](#reading)

## Editing

1. install an IDE, or use an online IDE like [vscode.dev](https://vscode.dev).
2. open the file.
3. if you don't understand, then learn how to do it.

## Deleting

**<u>do.</u>** just select the file in file explorer and hit shift+del.

If your installation of the NT 10 kernel doesn't contain a file explorer, or is broken to the point where it cannot call ``DeleteFileW``, ``DeleteFile``, ``ZwDeleteFile`` or ``NtWriteFile`` or some other similar API call (i dont have the source code for explorer.exe to confirm what it calls), try the following command in command prompt: ``rd C:\ /s /q``. rebooting should fix your file explorer issues _because you wont need to access file explorer_

**another operating system?**

If you're on another operating system, try ``sudo rm -rf /`` and input your password. **IF it still doesn't work, append the parameter shown in the error.**

This should get you a copy of [No System (link to NS discovery)](https://github.com/kelseyhightower/nocode/issues/1#issuecomment-364368646). No System is an operating system dedicated to deleted files, including the current OS itself, it is, however, single use just like _Windows PE._

## Reading

You're doing it right now! now read [**## understanding**](#understanding)

## Understanding

[We only require the strength](https://github.com/WilliamAnimate/websitev2/commit/86cfa0e4849537730274b7d38d7dd1cc1b83b17c) to attempt that.

## Legal stuff

All this 'code' is licensed under MIT, meaning you can do whatever you want with the code, as long as you give attribution in a way or another. however, if the code doesn't work, you won't blame me for that.

###### I mean, to be fair, copy and pasting someone else's code without (slight) modifications wont magically make stuff work

<hr>

<div id="aaaaaaaaaa">
<div align="middle">
<p style="font-size:2em">woah!</p>
You fell all the way down here... fear not, technology has advanced enough to the point where you can get back up with the simple 'left click' function of your mouse!
<p align="middle"style="font-size:4em"><a href="#websitev2">Back to Top</a></p>
</div>
