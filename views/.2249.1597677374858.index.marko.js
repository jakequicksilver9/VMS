// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_component = {
        handleChange: function() {
          this.emit("email-change", {
              email: $("#emailid")
            });

          $.post("/login", function(data) {
            if (data === "done") {
              window.location.href = "/admin";
            }
          });
        }
      },
    marko_componentType = "/VMS$1.0.0/views/index.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!doctype html><html><head><title>Home</title><h1>Volunteer Managment System</h1><h2>Managment of Volunteers</h2><script src=/js/jquery.js></script><script>\r\n        $(document).ready(function(){\r\n\r\n            var email,pass\r\n            $(\"#submit\").click(function(){\r\n                email=$(\"#email\").val()\r\n                pass=$(\"#password\").val()\r\n                \r\n                $.post(\"/login\",{email:email,pass:pass},function(data){\r\n                    if(data==='done' && email !='' && pass !='') {\r\n                        window.location.href=\"/admin\"\r\n                    }\r\n                    else{\r\n                        alert(\"Please input Username & Password.\")\r\n                    }\r\n                })\r\n            })\r\n        })\r\n        </script></head><body><form onsubmit=\"return false\"><input id=email type=email" +
    marko_attr("name", input.name) +
    "><input type=password size=40 placeholder=\"Type your password\" id=password><br><input type=submit value=Submit id=submit onclick(\"handleChange\")></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "11");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.meta = {
    id: "/VMS$1.0.0/views/index.marko",
    component: "./",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
