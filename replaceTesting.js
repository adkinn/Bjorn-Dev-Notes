const wbrBreakTextRegexDots = /([A-Z]\.|[a-z]\.)([A-Z]|[a-z])/g;
const wbrBreakTextRegexCase = /([a-z])([A-Z]+[a-z])/g;
const wbrBreakTextReplace = '$1\<wbr\>$2';
const wbrUnbreakTextRegex = /\<wbr\>/g;
const everythingExceptWbr = /()(\<wbr\>)([])/g


function escapedWbrReplacement(match, p1, p2, offset, str) {
    console.log(match);
    console.log(p1);
    console.log(p2);
    console.log(escape(p1));

    return 'hello'; //escape
}


function wbrBreakText(str, dotsOnly) {
    if (!str || str.length === 0) {
        return str;
    }
    str = str.replace(wbrBreakTextRegexDots, escapedWbrReplacement);
    if (dotsOnly) {
        return str;
    }
    return str.replace(wbrBreakTextRegexCase, escapedWbrReplacement);
}



const htmlEscapes = {
    '&': '&amp',
    '<': '&lt',
    '>': '&gt',
    '"': '&quot',
    "'": '&#39'
};
const reUnescapedHtml = /[&<>"']/g;
const reHasUnescapedHtml = RegExp(reUnescapedHtml.source);

function escape(string) {
    // https://github.com/lodash/lodash/blob/master/escape.js
    return (string && reHasUnescapedHtml.test(string))
        ? string.replace(reUnescapedHtml, (chr) => htmlEscapes[chr])
        : string;
}



// /// let the testing begin

// const normalFuncName = `thisIsAFunctionName`;
// const methodFuncName = `thisIsAFunctionName.someDopeMethod`;
// const twoPropertiesName = `thisIsAnObject.soIsThis.andAProp`;
// const messedUpName = `&@&&!Hello`;
// const wbrIncludedName = `this<wbr>is<wbr>some<wbr>`;
// const wbrMessedUpName = `thi&<wbr>is<a></a>`;

// const arr = [normalFuncName, methodFuncName, twoPropertiesName, messedUpName, wbrIncludedName, wbrMessedUpName ]
// arr.forEach(item){
//     console.log('before', item);
//     item.replace()
//     console.log('after', after);
// }

console.log(escape(`Sm&tp.Mail<Address.For>IPAddress.ND'IS.F"oo.IPAdd<script></script>ress.bar`))