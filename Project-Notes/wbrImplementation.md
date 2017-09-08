# Implementing <wbr>

Find text-formatting.ts here: `Template.Docs\global\ts\text-formatting.ts`.

zero-width space causes problems- double-clicking to select text doesn't work, copy paste issues/hacks.

- change \u200B to <wbr> in breakDots function
- Polyfill for IE11
http://plnkr.co/edit/9v71eusqwKlogzXaoM4T?p=preview    

- Remove hack copy code for \u200B

in the future
----
Need Edge bug fixed before we can break before periods, for now break after periods: 
https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/12752184/

Internal bug tracker link:
https://microsoft.visualstudio.com/OS/_workitems?id=12752184


## Required

1. parse the original string, adding WBR elements nctions with replace.
2. parse the next string, ignoring the <wbr> elements contained within.

or

1. modify the regex to include more characters than just A-Z / a-z.
2. parse the original string, adding WBR elements with replace.