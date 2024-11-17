var qoutes = [
  { q: "“Be yourself; everyone else is already taken.”", a: "― Oscar Wilde" },
  {
    q: "“A room without books is like a body without a soul.”",
    a: "― Marcus Tullius Cicero",
  },
  {
    q: "“Be the change that you wish to see in the world.”",
    a: "― Mahatma Gandhi ",
  },
  {
    q: "“You only live once, but if you do it right, once is enough.”",
    a: "― Mae West",
  },
  {
    q: "“If you tell the truth, you don't have to remember anything.”",
    a: "― Mark Twain",
  },
  {
    q: "“To live is the rarest thing in the world. Most people exist, that is all.”",
    a: "― Oscar Wilde",
  },
  {
    q: "“Always forgive your enemies; nothing annoys them so much.”",
    a: "― Oscar Wilde",
  },
  {
    q: "“Live as if you were to die tomorrow. Learn as if you were to live forever.”",
    a: "― Mahatma Gandhi",
  },
  {
    q: "“Be the change that you wish to see in the world.”",
    a: "― Mahatma Gandhi",
  },
  { q: "“So many books, so little time.”", a: "― Frank Zappa" },
];

function generateQoute() {
  var random = Math.floor(Math.random() * 10);
  document.getElementById("quote").innerHTML = qoutes[random].q;
  document.getElementById("author").innerHTML = qoutes[random].a;
}
