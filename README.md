# Cloudbleed

Cloudbleed is one of the biggest leaks in the history of private data. Read on [the news report](https://www.cyberscoop.com/cloudflare-has-been-leaking-massive-data-for-months/) or just google it.

This page allows you to **search for domains** where you wrote sensitive information in the last 6 months to see if they are affected.

> This tool is ONLY to search for domains, not for the sensitive information itself. Please do not write anything sensitive (though [nothing here is tracked and the site is open source](https://github.com/franciscop/cloudbleed))

Priority list for the search:

1. **Domains** where you wrote your credit card in the last 6 months.

2. **Domains** for health, insurance and other sensitive information domains.

3. **Domains** for emails or phone numbers.

4. Social networks **domains**.

5. **Domains** where you reuse your password.

6. Other **domains**.



## S**t, I found a domain where I wrote X

This list contains all domains that use cloudflare DNS, not just the cloudflare SSL proxy (the affected service that leaked data). It's a broad sweeping list that includes everything. Just because a domain is on the list does not mean the site is compromised.

For instance, if the site is using HTTPS with cloudflare but also including Stripe's front-end checkout, they use their own TLS certificates so it wouldn't be compromised.

Some people recommend that if it's a credit card cancel it.

Otherwise change your password and anywhere else where that password was used. Better yet, use this opportunity to start using a Password Manager.



## Questions

### What is this?

This is just a front-end search for the list of domains [published elsewhere](https://github.com/pirate/sites-using-cloudflare/). The site will crash at some point if it gets to the front page of anywhere as it was scrapped together in Node.js in a while. I'm setting up a static site that shouldn't crash as you read this.

To install it locally:

```js
git clone git@github.com:franciscop/cloudbleed.git
cd ./cloudbleed
npm install
node app.js
```

Then open http://localhost:3000/ to use it. However, if you can do the above you might as well [just download the domain list](https://github.com/pirate/sites-using-cloudflare/) and grep it.



### Are you using Cloudflare for disclosing a cloudflare vulnerability?

Uhm... yes. The issue is apparently fixed now. You are free to clone this site and host it wherever you want though.



### Who are you?

It's not really relevant, I just made a front-end to search for the data.
