export default {
  async fetch(request, env, ctx) {
    const domain = "www.akamai.com";

    const dnsQueryUrl = `https://cloudflare-dns.com/dns-query?name=${domain}&type=A`;

    const dns = await fetch(dnsQueryUrl, {
      headers: { "accept": "application/dns-json" },
      method: "GET"
    });

    const dnsdata = await dns.json();


    console.log(dnsdata);

    // Wrap the JSON data in a Response object
    return new Response(JSON.stringify(dnsdata), {
      headers: { "Content-Type": "application/json" }
    });
  },
};
