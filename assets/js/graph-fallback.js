function checkGraphLoad(iframe) {
  try {
    var doc = iframe.contentDocument || iframe.contentWindow.document;
    var title = doc.title || "";
    // Same-origin 404 page has "Page not found" as its title (see 404.md)
    if (title.indexOf("Page not found") !== -1) {
      var wrapper = iframe.parentElement;
      wrapper.innerHTML =
        '<div style="' +
        'position:relative;width:100%;padding-bottom:30%;' +
        'background:#f8f9fa;border:2px dashed #ccc;border-radius:8px;' +
        'box-sizing:border-box;">' +
        '<div style="position:absolute;top:0;left:0;right:0;bottom:0;' +
        'display:flex;justify-content:center;align-items:center;text-align:center;padding:15px;">' +
        '<p style="color:#666;font-family:system-ui,-apple-system,sans-serif;' +
        'font-weight:bold;margin:0;font-size:13px;line-height:1.4;">' +
        '\u26A0\uFE0F Graph data missing or unavailable</p>' +
        '</div></div>';
    }
  } catch (e) {
    // Cross-origin or other access issue — leave the iframe as-is rather than break the page
  }
}
