// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/VMS$1.0.0/views/addVolunteer.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html xmlns:th=http://www.thymeleaf.org lang=en><head><title>Add Volunteers</title><script src=/js/jquery.js></script><script>\n            $(document).ready(function(){\n                $.ajax({\n                    url: '/addVolunteer',\n                    complete: function(data) {\n                      console.log(data);\n                    }\n                  });\n                \n                \n              var email,pass\n              $(\"#logOut\").click(function(){\n                  email=\"\";\n                  pass=\"\";\n                  \n                  $.post(\"/login\",{email:email,pass:pass},function(data){\n                      if(data==='done') {\n                          window.location.href=\"/logout\"\n                      }\n                  })\n              })\n            });\n\n            </script></head><body><h1>" +
    marko_escapeXml(input.greeting) +
    "</h1><h1>Volunteers to add</h1><input type=button value=\"log out\" id=logOut onclick(\"logOut\")>");

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
    id: "/VMS$1.0.0/views/addVolunteer.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
