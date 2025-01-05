# How to send Substack posts straight to your Kindle using Google App Scripts

Last year a friend of mine gifted me an old Kindle. I never quite made the jump to reading books on it, since my "to read" pile was already pretty large and physically sitting on my shelves and the shelves of my nearby library. But, I found myself wishing I could use it to read the [Substack](https://substack.com/) newsletters I had been devouring from my tiny phone screen. If I could automatically sync those to the Kindle I'd have a physical, book-ish object on which to read all those lovely essays!

I took a break from the idea, but came back to it recently and built out a working solution in a weekend, using [Google Apps Script](https://developers.google.com/apps-script), [Send to Kindle](https://www.amazon.com/sendtokindle/email), and a bit of HTML munging. Best of all, the solution ended up easily extending to other newsletters that land in my email but don't route through Substack, like Oliver Burkeman's ["The Imperfectionist"](https://www.oliverburkeman.com/the-imperfectionist). 

## Other Existing Solutions

When I did an initial search to see what support already existed for this problem I came across [Readbetter](https://www.readbetter.io/), which pretty much does exactly what I want. Unfortunately, I was quickly hitting the 3 article / month maximum on the free tier, and $7 a month was more than I wanted to pay for something long into the future when I felt I could build my own version as a fun weekend project. If you're less interested in building out your own solution, Readbetter might be exactly the right fit.

## Existing Infrastructure

The solution I built relies on a couple different pieces of existing and supported features. (Let's hope they keep being supported!)

1. Substack can email you new posts when they are published. These emails are formatted with HTML.
2. You can send documents straight to your Kindle via a special email address assigned to your Kindle. You just attach the document to an email. (You can also do this via web portal and Google Chrome extension.)
3. Google Apps Script lets you programmatically interact with your Gmail inbox (e.g., reading, labeling, archiving, and sending emails).
4. Google Apps Script also lets you run certain functions at specified intervals (e.g., once daily between 7-8 am).
5. Gmail supports filtering by sender and label.
6. Cheerio is a library that supports HTML parsing and modifying, and has been ported over for Google Apps Script thanks to TODO.

## Vision


## Pieces



## Set it up yourself





