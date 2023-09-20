const addResourcesToCache = async (resources) => {
    const cache = await caches.open("v1");
    await cache.addAll(resources);
  };
  
  self.addEventListener("install", (event) => {
    console.log("Service worker installed to cache");
    event.waitUntil(
      addResourcesToCache([
        "/",
        "/index.html",
      ]),
    );
  });