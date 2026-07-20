function checkGraphLoad(iframe) {
  try {
    var doc = iframe.contentDocument || iframe.contentWindow.document;
    var title = doc.title || "";
    // Same-origin 404 page has "Page not found" as its title (see 404.md)
    if (title.indexOf("Page not found") !== -1) {
      var wrapper = iframe.parentElement;

      // Strip the graph's wide "breakout" styling/class so the error box
      // aligns with normal body text instead of looking oversized/misaligned
      wrapper.removeAttribute("class");
      wrapper.setAttribute(
        "style",
        "width:100%;max-width:100%;margin:1.5rem 0;padding:0;" +
          "background:transparent;border:none;box-shadow:none;overflow:visible;"
      );

      wrapper.innerHTML =
        '<div style="width:100%;min-height:150px;background:#f8f9fa;' +
        "border:2px dashed #ccc;border-radius:8px;box-sizing:border-box;" +
        "display:flex;justify-content:center;align-items:center;text-align:center;padding:15px;\">" +
        '<p style="color:#666;font-family:system-ui,-apple-system,sans-serif;' +
        "font-weight:bold;margin:0;font-size:13px;line-height:1.4;\">" +
        "\u26A0\uFE0F Graph data missing or unavailable</p>" +
        "</div>";
    } else {
      // Confirmed a real graph loaded — reveal the iframe now
      iframe.style.opacity = "1";
    }
  } catch (e) {
    // Cross-origin or other access issue — reveal iframe rather than hide it forever
    iframe.style.opacity = "1";
  }
}