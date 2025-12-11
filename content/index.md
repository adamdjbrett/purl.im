---
layout: base.njk
title: ShortLinks
description: Shorten links Project by Adam DJ Brett
---
## About
I am firmly committeed to the premise of having [A Domain of One's Own](https://library.educause.edu/resources/2019/10/7-things-you-should-know-about-a-domain-of-ones-own) or in my case many domains. Sadly with coporate shortlink tools there are many problems. There is always the chance of them going away and causing link rot like what happend with goo.gl (may it rest in peace and rise in glory). Another common issue issue or challenge is the potiential for misstyping a link and winding up at uninttended destination. Recognizing the need for a stable reliable shortlink system I started to see what were my options. Netlify provides a super simple way to shorten links, however I also wanted to be able to automatically generate QR codes for the shortlinks because if I need one I will need the other. After asking around on mastodon and discord I found two wonderful projects which I combined to make this project.


### Acknowledgements
By the powers of [1y](https://github.com/nhoizey/1y) and [findth.at](https://github.com/philhawksworth/findthat.at), I give you Frankenstein's Monster. The goal of this project was two fold, first to see if I could combine two of my favorite open source projects into one and second to make a useful linkshortner and QR code generator for myself an dmy colleagues to use. My deepests gratitutde and apologies to everyone involved. [@Nhoizey](https://github.com/nhoizey) and [@philhawksworth](https://github.com/philhawksworth) you are both brilliant and incredible web devlopers, thank you for shipping such wonderful open source projects.

## Project Stack
*  [Built with 11ty](https://11ty.dev) 
*  [hosted on  xmit](https://xmit.co)
*  [Pages CMS](https://pagescms.org)

## How to use
1. Have an invite
2. go to [Pages CMS](https://pagescms.org/)
3. login with your github account
4. Connect Pages CMS with the repository for the first time only
5. go to ```shortlinks```
6. Add an entry
7. the title will become the shortlink so make sure there are no spaces
8. enter the destination URL
9. Save
10. wait a minute or less.
11. check [purl.im/links](https://purl.im/links) and the shortlink should be there and so should the QR code.
