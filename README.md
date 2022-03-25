# Get IP Address

You can use this project to get your IP address. It's really useful when you don't have any idea to check your container's IP Address under Docker.

## Case

I have a Web Scrapper project from My Client. This project required a proxy, and to use a proxy, I have to know what's my docker container's IP Addr so that he can whitelist that IP Addr to the proxy. The project should run many times in a time on a single computer. So I use docker to run the script in many containers. The problem is I don't know how to use Docker because Docker is new to me. So I created this project, to get my container's IP Addr with Headless Chrome using Puppeteer.

## How to use

```javascript
import getIpAddress from "@novqigarrix/get-ip-addr";

(async function () {
  const myIpAddr = await getIpAddress();
  console.log({ myIpAddr });
})();
```

## That's it

Hope you find it usefull. Happy Coding [^^]
