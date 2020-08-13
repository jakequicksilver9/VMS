// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/VMS$1.0.0/views/manageOpportunities.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html xmlns:th=http://www.thymeleaf.org lang=en><head><title>Manage Opportunities</title><script src=/js/jquery.js></script><script>\r\n            $(document).ready(function(){\r\n                $.ajax({\r\n                    url: '/manageOpportunities',\r\n                    complete: function(data) {\r\n                      console.log(data);\r\n                    }\r\n                  });\r\n                \r\n                \r\n              var email,pass\r\n              $(\"#logOut\").click(function(){\r\n                  email=\"\";\r\n                  pass=\"\";\r\n                  \r\n                  $.post(\"/login\",{email:email,pass:pass},function(data){\r\n                      if(data==='done') {\r\n                          window.location.href=\"/logout\"\r\n                      }\r\n                  })\r\n              })\r\n            });\r\n\r\n            </script></head><body><h1>" +
    marko_escapeXml(input.greeting) +
    "</h1><h1>Opportunities to manage</h1><input type=button value=\"log out\" id=logOut onclick(\"logOut\")>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "7");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/VMS$1.0.0/views/manageOpportunities.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
