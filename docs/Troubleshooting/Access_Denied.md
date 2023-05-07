You receive an "Access Denied - Error code: 1020" message after you log in.  

![Screenshot from the Cloudflare_Access_Denied error message](/assets/access_denied.png){ width="300" }


## Check version
Please check that you have the newest update of the V-Shop app.

## Check DNS & VPN settings
**The following should be disabled:**<br/>

- Public DNS (like Cloudflare 1.1.1.1) also apps like Cloudflare WARP
- VPN (of all public services, like NordVPN)

VPN should always be disabled, because Cloudflare detects them most of the time.<br/>
The login could also be blocked in public WLANs by certain policies.

## Check network (WLAN)
An active internet connection is required to log in.
Certain protocols might be blocked on your network (e.g. guests & school WLAN). Try another network. 

If the problem still exists, please contact us on our [Discord](https://vshop.one/discord/).
