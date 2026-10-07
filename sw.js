self.addEventListener('install',()=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
// network-only on purpose: no caching of family data on the device
self.addEventListener('fetch',()=>{});
