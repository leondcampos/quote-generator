var quotes = [
    "If'\ You Want To Achieve Greatness Stop Asking For Permission. -Unknown",
    "Things work out best for those who make the best of how things work out. -Unknown",
    "To live a creative life, we must lose our fear of being wrong. -Unknown",
    "If'\ You Are Not Willing To Risk The Usual You Will Have To Settle For The Ordinary. -Unknown",
    "Trust Because You Are Willing To Accept The Risk, Not Because It's Safe Or Certain. -Unknown",
    "The Way Get Started Is To Quit Talking And Being Doing. -Walt Disney",
    "All Our Dreams Can Come True If'\ We Have The Courage To Pursue Them. -Unknown",
    "Good Things Come To People Who Wait, But Better Things Come To Those Who Go Out And Get Them. -Unknown",
    "If'\ You Do What You Always Did, You Will Get What You Always Got. -Unknown",
    "Success Is Walking From Failure To Failure With No Loss Of Enthusiasm. -Unknown",
]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

