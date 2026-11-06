# DNS, HTTP and HTTPS Concepts (Task 8)

## Domain Name
A human-friendly address for a website, such as `ajoshvarghese.in`. It is rented yearly from a registrar (GoDaddy). Parts: `.in` is the top-level domain, `ajoshvarghese` is the name, and `www` is a subdomain.

## DNS (Domain Name System)
The internet's address book. Computers find each other by IP address, so DNS translates a name like `ajoshvarghese.in` into an IP address like `216.198.79.1`.

## A Record
Links a domain name to an **IPv4 address**.
Example: `@` (root) → `216.198.79.1`.

## CNAME Record
An alias that links one name to **another name** instead of an IP.
Example: `www` → `cname.vercel-dns.com`. A CNAME is normally not used on the root domain.

## HTTP (HyperText Transfer Protocol)
The rules browsers and servers use to exchange web pages. The browser sends a request (such as `GET /`) and the server sends a response with a status code (`200` OK, `308` redirect, `404` not found). It uses port 80 and is **not encrypted**.

## HTTPS
HTTP sent through an encrypted TLS connection, on port 443. It protects data from being read or changed on the way and shows the browser padlock.

## SSL/TLS
Security protocols that encrypt web traffic. TLS is the modern version of SSL. A server proves its identity with a **certificate** issued by a trusted authority. The browser and server agree on encryption keys in a **handshake**. Vercel issues and renews certificates automatically once the DNS records are correct.

## DNS Resolution
The step-by-step lookup of an IP address for a name:
1. Browser and operating-system caches are checked.
2. The request goes to a recursive resolver (for example the ISP's or `8.8.8.8`).
3. The resolver asks a **root server**, which points to the `.in` servers.
4. The **TLD server** points to the domain's authoritative name servers (GoDaddy).
5. The **authoritative server** returns the A record.
6. The answer is cached for the record's TTL.

## Public IP
An address that is unique and reachable on the internet. Web servers use public IPs. Example: `216.198.79.1`.

## Private IP
An address used only inside a local network (home, office, cloud network). It cannot be reached directly from the internet. Reserved ranges: `10.0.0.0/8`, `172.16.0.0/12`, `192.168.0.0/16`. Routers use NAT to let private devices reach the internet through one public IP.

| | Public IP | Private IP |
|---|---|---|
| Reachable from internet | Yes | No |
| Unique worldwide | Yes | Only inside its own network |
| Example | `216.198.79.1` | `192.168.1.10` |
