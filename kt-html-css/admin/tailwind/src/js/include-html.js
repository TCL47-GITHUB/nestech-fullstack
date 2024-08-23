document.addEventListener("DOMContentLoaded", function () {
  let e = document.getElementsByTagName("include");
  for (var t = 0; t < e.length; t++) {
    let a = e[t];
    n(e[t].attributes.src.value, function (e) {
      a.insertAdjacentHTML("afterend", e);
      let newElement = a.nextElementSibling;
      a.remove();
      executeScripts(newElement);
    });
  }
  
  function n(e, t) {
    fetch(e)
      .then((e) => e.text())
      .then((e) => t(e));
  }

  function executeScripts(container) {
    if (!container) return;

    const scripts = container.getElementsByTagName("script");
    for (let i = 0; i < scripts.length; i++) {
      const script = scripts[i];
      const newScript = document.createElement("script");
      if (script.src) {
        newScript.src = script.src;
      } else {
        newScript.textContent = script.textContent;
      }
      document.head.appendChild(newScript).parentNode.removeChild(newScript);
    }
  }
});
