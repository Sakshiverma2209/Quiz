const allQuestionsArr = [
    {
        q: "HTML stands for_______.",
        options: ["Hyperactive Text Markup Language", "Hyper Text Markup Language", "Hyper Text Machine Language", "None of these"],
        answer: 1,
        explanation: "HTML stands for 'Hyper Text Markup Language'.",
    },
    {
        q: "Which is the correct syntax to include comment in an HTML document?",
        options: ["//", "/* Comment */", "// Comment //", "<!-- Comment -->"],
        answer: 3,
        explanation: "You can add comments to your HTML source by using the syntax: <!-- Write your comments here -->",
    },
    {
        q: "Can we hide content using the comment?",
        options: ["Yes", "No", "-", "-"],
        answer: 0,
        explanation: "Yes, comments can be used to hide content. Syntax example: <!-- <p>Hello, world!</p> -->",
    },
    {
        q: "Can we hide inline content using the comment?",
        options: ["Yes", "No", "-", "-"],
        answer: 0,
        explanation: "Yes, comments can be used to hide inline content. Syntax example: <p>Hello, world! <!-- This is some text --> How are you?</p>",
    },
    {
        q: "Which element/tag defines a paragraph?",
        options: ["<p>", "<pre>", "<panel>", "None of the above"],
        answer: 0,
        explanation: "The <p> tag defines a paragraph.",
    },
    {
        q: "Which tag/element defines the HTML document's body?",
        options: ["<HTML>", "<HTMLbody>", "<bdy>", "<body>"],
        answer: 3,
        explanation: "The <body> element defines the HTML document's body.",
    },
    {
        q: "Which tag contains the meta information about the HTML page?",
        options: ["<html>", "<title>", "<head>", "<body>"],
        answer: 2,
        explanation: "The <head> tag contains the meta information about the HTML page.",
    },
    {
        q: "Which tag is the root element of an HTML page?",
        options: ["<html>", "<title>", "<head>", "<body>"],
        answer: 0,
        explanation: "The <html> tag is the root element of an HTML page.",
    },
    {
        q: "Who invented HTML?",
        options: ["Dave Raggett", "Tim Berners-Lee", "Denis Ritchie", "All of the above"],
        answer: 1,
        explanation: "Tim Berners-Lee invented HTML in 1991.",
    },
    {
        q: "HTML tags with no content are called _____.",
        options: ["Special tags", "Advanced tags", "Empty tags", "Other tags"],
        answer: 2,
        explanation: "HTML tags with no content are called empty tags. For example, the <br> tag, <hr> tag.",
    },
    {
        q: "Nested HTML Elements are allowed in HTML?",
        options: ["Yes", "No", "-", "-"],
        answer: 0,
        explanation: "Yes, Nested HTML Elements (<p><b><u>Some text</u></b></p>) are allowed in HTML.",
    },
    {
        q: "Is HTML a case sensitive?",
        options: ["Yes", "No", "-", "-"],
        answer: 1,
        explanation: "No, HTML is Not Case Sensitive.",
    },
    {
        q: "HTML headings are defined with the _____ tags.",
        options: ["<head1> to <head6>", "<p1> to <p6>", "<h1> to <h6>", "<h1> to <h3>"],
        answer: 2,
        explanation: "HTML headings are defined with the <h1> to <h6> tags.",
    },
    {
        q: "Which tag is used to display a horizontal rule (horizontal line)?",
        options: ["<br>", "<hr>", "<hr>...</hr>", "<line>"],
        answer: 1,
        explanation: "The <hr> tag is used to display a horizontal rule.",
    },
    {
        q: "What is the correct syntax of <hr> tag?",
        options: ["<hr>", "<hr />", "<hr></hr>", "All of the above"],
        answer: 0,
        explanation: "Both <hr> and <hr /> can be used to display a horizontal line.",
    },
    {
        q: "Which tag is used to define a line break?",
        options: ["<\\n>", "<lr>", "<br>", "<br>...</br>"],
        answer: 2,
        explanation: "The <br> tag is used to define a line break.",
    },
    {
        q: "What is the correct syntax of <br> tag?",
        options: ["<br>", "<br />", "<br></br>", "All of the above"],
        answer: 0,
        explanation: "Both <br> and <br /> can be used to display a line break.",
    },
    {
        q: "Which tag is used to define preformatted text?",
        options: ["<pf>", "<p>", "<pre>", "<code>"],
        answer: 2,
        explanation: "The <pre> tag is used to define preformatted text.",
    },
    {
        q: "Which HTML attribute is used to define styles of an element?",
        options: ["<style>", "<css>", "style", "css"],
        answer: 2,
        explanation: "The style attribute is used to define the styles of an element.",
    },
    {
        q: "Which is the correct HTML statement to define the red color of the paragraph text?",
        options: ['<p style="color: #ff0000;">', '<p style="color: red;">', "Both A. and B.", "None of the above"],
        answer: 2,
        explanation: 'The correct HTML statement to define red paragraph color is: <p style="color: #ff0000;"> or <p style="color: red;">.',
    },
    {
        q: "Which HTML tag is used to define bold text, without any extra importance?",
        options: ["<strong>", "<bold>", "<bolder>", "<b>"],
        answer: 3,
        explanation: "The HTML <b> tag is used to define bold text, without any extra importance.",
    },
    {
        q: "Which HTML tag is used to define text with strong importance?",
        options: ["<strong>", "<bold>", "<bolder>", "<b>"],
        answer: 0,
        explanation: "The HTML tag <strong> is used to define text with strong importance.",
    },
    {
        q: "Which HTML tag is used to define italic text?",
        options: ["<italic>", "<em>", "<i>", "<it>"],
        answer: 2,
        explanation: "The HTML tag <i> is used to define italic text.",
    },
    {
        q: "Which HTML tag is used to define emphasized text?",
        options: ["<italic>", "<em>", "<i>", "<it>"],
        answer: 1,
        explanation: "The HTML tag <em> is used to define emphasized text.",
    },
    {
        q: "Which HTML tag is used to define smaller text?",
        options: ["<normal>", "<span>", "<smaller>", "<small>"],
        answer: 3,
        explanation: "The HTML tag <small> is used to define smaller text.",
    },
    {
        q: "Which HTML tag is used to define marked or highlighted text?",
        options: ["<mark>", "<highlight>", "<m>", "<highlighted>"],
        answer: 0,
        explanation: "The HTML tag <mark> is used to define marked or highlighted text.",
    },
    {
        q: "Which HTML tag is used to define strike a line through deleted text?",
        options: ["<delete>", "<del>", "<deleted>", "<through>"],
        answer: 1,
        explanation: "The HTML tag <del> is used to define strike a line through deleted text.",
    },
    {
        q: "Which HTML tag is used to define underline inserted text?",
        options: ["<underline>", "<text-decoration>", "<u>", "Both C and D"],
        answer: 3,
        explanation: "The HTML tags <ins> and <u> are used to define underline inserted text.",
    },
    {
        q: "Which HTML tag is used to define subscript text?",
        options: ["<sub>", "<subscript>", "<s>", "<subscripted>"],
        answer: 0,
        explanation: "The HTML <sub> tag is used to define subscript text.",
    },
    {
        q: "Which HTML tag is used to define superscript text?",
        options: ["<sup>", "<superscript>", "<s>", "<superscripted>"],
        answer: 0,
        explanation: "The HTML <sup> tag is used to define superscript text.",
    },
    {
        q: "Which is the correct HTML statement to display H<sub>2</sub>O in a paragraph?",
        options: ["<p>H<sup>2</sup>O</p>", "<p>H<ins>2</ins>O</p>", "<p>H<below>2</below>O</p>", "<p>H<sub>2</sub>O</p>"],
        answer: 3,
        explanation: "The correct HTML statement to display H2O in a paragraph is: <p>H<sub>2</sub>O</p>",
    },
    {
        q: "Which is the correct HTML statement to display HelloWorld in a paragraph?",
        options: ["<p>Hello<sup>World</sup></p>", "<p>Hello<top>World</top></p>", "<p>Hello<sub>World</sub></p>", "<p>Hello<above>World</above></p>"],
        answer: 0,
        explanation: "The correct HTML statement to display HelloWorld in a paragraph is: <p>Hello<sup>World</sup></p>",
    },
    {
        q: "Which is the correct HTML statement to display HelloHi! in a paragraph?",
        options: ["<p><del>Hello</del><ins>Hi!</ins></p>", "<p><strike>Hello</strike><ins>Hi!</ins></p>", "<p><cut>Hello</cut><ins>Hi!</ins></p>", "All of the above"],
        answer: 0,
        explanation: "The correct HTML statement to display HelloHi! in a paragraph is/are: <p><del>Hello</del><ins>Hi!</ins></p> and <p><strike>Hello</strike><ins>Hi!</ins></p>",
    }
];




// Arrays for Easy and Hard questions
const easyQuestionsArr = [
  {
    q: "HTML stands for_______.",
    options: ["Hyperactive Text Markup Language", "Hyper Text Markup Language", "Hyper Text Machine Language", "None of these"],
    answer: 1,
    explanation: "HTML stands for 'Hyper Text Markup Language'.",
},
{
    q: "Which is the correct syntax to include comment in an HTML document?",
    options: ["//", "/* Comment */", "// Comment //", "<!-- Comment -->"],
    answer: 3,
    explanation: "You can add comments to your HTML source by using the syntax: <!-- Write your comments here -->",
},
{
    q: "Can we hide content using the comment?",
    options: ["Yes", "No", "-", "-"],
    answer: 0,
    explanation: "Yes, comments can be used to hide content. Syntax example: <!-- <p>Hello, world!</p> -->",
},
{
    q: "Can we hide inline content using the comment?",
    options: ["Yes", "No", "-", "-"],
    answer: 0,
    explanation: "Yes, comments can be used to hide inline content. Syntax example: <p>Hello, world! <!-- This is some text --> How are you?</p>",
},
{
    q: "Which element/tag defines a paragraph?",
    options: ["<p>", "<pre>", "<panel>", "None of the above"],
    answer: 0,
    explanation: "The <p> tag defines a paragraph.",
},
{
    q: "Which tag/element defines the HTML document's body?",
    options: ["<HTML>", "<HTMLbody>", "<bdy>", "<body>"],
    answer: 3,
    explanation: "The <body> element defines the HTML document's body.",
},
{
    q: "Which tag contains the meta information about the HTML page?",
    options: ["<html>", "<title>", "<head>", "<body>"],
    answer: 2,
    explanation: "The <head> tag contains the meta information about the HTML page.",
},
{
    q: "Which tag is the root element of an HTML page?",
    options: ["<html>", "<title>", "<head>", "<body>"],
    answer: 0,
    explanation: "The <html> tag is the root element of an HTML page.",
},
{
    q: "Who invented HTML?",
    options: ["Dave Raggett", "Tim Berners-Lee", "Denis Ritchie", "All of the above"],
    answer: 1,
    explanation: "Tim Berners-Lee invented HTML in 1991.",
},
{
    q: "HTML tags with no content are called _____.",
    options: ["Special tags", "Advanced tags", "Empty tags", "Other tags"],
    answer: 2,
    explanation: "HTML tags with no content are called empty tags. For example, the <br> tag, <hr> tag.",
},
{
    q: "Nested HTML Elements are allowed in HTML?",
    options: ["Yes", "No", "-", "-"],
    answer: 0,
    explanation: "Yes, Nested HTML Elements (<p><b><u>Some text</u></b></p>) are allowed in HTML.",
},
{
    q: "Is HTML a case sensitive?",
    options: ["Yes", "No", "-", "-"],
    answer: 1,
    explanation: "No, HTML is Not Case Sensitive.",
},
{
    q: "HTML headings are defined with the _____ tags.",
    options: ["<head1> to <head6>", "<p1> to <p6>", "<h1> to <h6>", "<h1> to <h3>"],
    answer: 2,
    explanation: "HTML headings are defined with the <h1> to <h6> tags.",
},
{
    q: "Which tag is used to display a horizontal rule (horizontal line)?",
    options: ["<br>", "<hr>", "<hr>...</hr>", "<line>"],
    answer: 1,
    explanation: "The <hr> tag is used to display a horizontal rule.",
},
{
    q: "What is the correct syntax of <hr> tag?",
    options: ["<hr>", "<hr />", "<hr></hr>", "All of the above"],
    answer: 0,
    explanation: "Both <hr> and <hr /> can be used to display a horizontal line.",
}
];

const hardQuestionsArr = [
  {
    q: "Which tag is used to define a line break?",
    options: ["<\\n>", "<lr>", "<br>", "<br>...</br>"],
    answer: 2,
    explanation: "The <br> tag is used to define a line break.",
},
{
    q: "What is the correct syntax of <br> tag?",
    options: ["<br>", "<br />", "<br></br>", "All of the above"],
    answer: 0,
    explanation: "Both <br> and <br /> can be used to display a line break.",
},
{
    q: "Which tag is used to define preformatted text?",
    options: ["<pf>", "<p>", "<pre>", "<code>"],
    answer: 2,
    explanation: "The <pre> tag is used to define preformatted text.",
},
{
    q: "Which HTML attribute is used to define styles of an element?",
    options: ["<style>", "<css>", "style", "css"],
    answer: 2,
    explanation: "The style attribute is used to define the styles of an element.",
},
{
    q: "Which is the correct HTML statement to define the red color of the paragraph text?",
    options: ['<p style="color: #ff0000;">', '<p style="color: red;">', "Both A. and B.", "None of the above"],
    answer: 2,
    explanation: 'The correct HTML statement to define red paragraph color is: <p style="color: #ff0000;"> or <p style="color: red;">.',
},
{
    q: "Which HTML tag is used to define bold text, without any extra importance?",
    options: ["<strong>", "<bold>", "<bolder>", "<b>"],
    answer: 3,
    explanation: "The HTML <b> tag is used to define bold text, without any extra importance.",
},
{
    q: "Which HTML tag is used to define text with strong importance?",
    options: ["<strong>", "<bold>", "<bolder>", "<b>"],
    answer: 0,
    explanation: "The HTML tag <strong> is used to define text with strong importance.",
},
{
    q: "Which HTML tag is used to define italic text?",
    options: ["<italic>", "<em>", "<i>", "<it>"],
    answer: 2,
    explanation: "The HTML tag <i> is used to define italic text.",
},
{
    q: "Which HTML tag is used to define emphasized text?",
    options: ["<italic>", "<em>", "<i>", "<it>"],
    answer: 1,
    explanation: "The HTML tag <em> is used to define emphasized text.",
},
{
    q: "Which HTML tag is used to define smaller text?",
    options: ["<normal>", "<span>", "<smaller>", "<small>"],
    answer: 3,
    explanation: "The HTML tag <small> is used to define smaller text.",
},
{
    q: "Which HTML tag is used to define marked or highlighted text?",
    options: ["<mark>", "<highlight>", "<m>", "<highlighted>"],
    answer: 0,
    explanation: "The HTML tag <mark> is used to define marked or highlighted text.",
},
{
    q: "Which HTML tag is used to define strike a line through deleted text?",
    options: ["<delete>", "<del>", "<deleted>", "<through>"],
    answer: 1,
    explanation: "The HTML tag <del> is used to define strike a line through deleted text.",
},
{
    q: "Which HTML tag is used to define underline inserted text?",
    options: ["<underline>", "<text-decoration>", "<u>", "Both C and D"],
    answer: 3,
    explanation: "The HTML tags <ins> and <u> are used to define underline inserted text.",
},
{
    q: "Which HTML tag is used to define subscript text?",
    options: ["<sub>", "<subscript>", "<s>", "<subscripted>"],
    answer: 0,
    explanation: "The HTML <sub> tag is used to define subscript text.",
},
{
    q: "Which HTML tag is used to define superscript text?",
    options: ["<sup>", "<superscript>", "<s>", "<superscripted>"],
    answer: 0,
    explanation: "The HTML <sup> tag is used to define superscript text.",
},
{
    q: "Which is the correct HTML statement to display H<sub>2</sub>O in a paragraph?",
    options: ["<p>H<sup>2</sup>O</p>", "<p>H<ins>2</ins>O</p>", "<p>H<below>2</below>O</p>", "<p>H<sub>2</sub>O</p>"],
    answer: 3,
    explanation: "The correct HTML statement to display H2O in a paragraph is: <p>H<sub>2</sub>O</p>",
},
{
    q: "Which is the correct HTML statement to display HelloWorld in a paragraph?",
    options: ["<p>Hello<sup>World</sup></p>", "<p>Hello<top>World</top></p>", "<p>Hello<sub>World</sub></p>", "<p>Hello<above>World</above></p>"],
    answer: 0,
    explanation: "The correct HTML statement to display HelloWorld in a paragraph is: <p>Hello<sup>World</sup></p>",
},
{
    q: "Which is the correct HTML statement to display HelloHi! in a paragraph?",
    options: ["<p><del>Hello</del><ins>Hi!</ins></p>", "<p><strike>Hello</strike><ins>Hi!</ins></p>", "<p><cut>Hello</cut><ins>Hi!</ins></p>", "All of the above"],
    answer: 0,
    explanation: "The correct HTML statement to display HelloHi! in a paragraph is/are: <p><del>Hello</del><ins>Hi!</ins></p> and <p><strike>Hello</strike><ins>Hi!</ins></p>",
}
];