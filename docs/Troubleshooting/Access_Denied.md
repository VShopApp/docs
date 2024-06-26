You receive an "Access Denied - Error code: 1020" message after you log in.  

![Screenshot from the Cloudflare_Access_Denied error message](/assets/access_denied.png){ width="300" }

This has nothing to do with VShop, but is due to Riotgames who use the security service Cloudflare for the login page we have integrated to protect themselves against bot attacks. Unfortunately, this also blocks many requests from VPN services or public DNS servers.

## Check version
Please check that you have the newest update of VShop.

## Check DNS & VPN settings
**The following should be disabled:**<br/>

- Public DNS (like Cloudflare 1.1.1.1 or 8.8.8.8) also apps like Cloudflare WARP
- VPN (of all public services, like NordVPN)

VPN should always be disabled, because Cloudflare detects them most of the time.<br/>
The login could also be blocked in public WLANs by certain policies.

## Check network (WLAN)
An active internet connection is required to log in.
Certain protocols might be blocked on your network (e.g. guests & school WLAN). Try another network. 

Try the connection with your mobile/cellular network.

If the problem still exists, please contact us on our [Discord](https://vshop.one/discord/).
