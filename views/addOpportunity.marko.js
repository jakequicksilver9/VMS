// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/VMS$1.0.0/views/addOpportunity.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html xmlns:th=http://www.thymeleaf.org lang=en><head><title>Add Opportunitys</title><link rel=stylesheet type=text/css href=/js/datatables.min.css><link rel=stylesheet type=text/css href=/js/bootstrap.min.css><script type=text/javascript src=/js/jquery.min.js></script><script type=text/javascript src=/js/datatables.min.js></script><script type=text/javascript src=/js/bootstrap.min.js></script> <script>\n            $(document).ready(function(){\n                \n              var email,pass\n              $(\"#logOut\").click(function(){\n                  email=\"\";\n                  pass=\"\";\n                  \n                  $.post(\"/login\",{email:email,pass:pass},function(data){\n                      if(data==='done') {\n                          window.location.href=\"/logout\"\n                      }\n                  })\n              })\n\n              $(\"#cancel\").click(function() {\n                window.location.href=\"/manageOpportunities\"\n                })\n\n            });\n\n            function validateForm(event) {\n                var inputEmail = document.forms[\"addOpportunity\"][\"email\"].value\n                var emailPat = new RegExp(\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\")\n                if (inputEmail && (!inputEmail.match(emailPat))) {\n                    alert(\"Incorrect Email Format\")\n\n                    return false;\n                }\n                var phoneNumber = document.forms[\"addOpportunity\"][\"phonenumber\"].value\n                var phonePat = new RegExp(\"^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$\")\n                if (phoneNumber && (!phoneNumber.match(phonePat))) {\n                    alert(\"Incorrect Phone number Format\")                    \n                    return false;\n                }\n\n                var inputAddress = document.forms[\"addOpportunity\"][\"address\"].value\n                var addressPat = new RegExp(\"^[0-9]+\\\\s[A-Z||a-z||\\\\s||.]*\\\\s[0-9][0-9][0-9][0-9][0-9]\\\\s[A-Z||a-z]+$\")\n                if (inputAddress && (!inputAddress.match(addressPat))){\n                    alert(\"Incorrect Address, use format: house# street zip state\")\n                    return false;\n                }\n            }\n\n            </script></head><body><h1>" +
    marko_escapeXml(input.greeting) +
    "</h1><h1>Opportunitys to add</h1><form action=/addOpportunity method=post name=addOpportunity onsubmit=\"return validateForm()\"><label for=name>Opportunity:</label><input type=text id=name name=name><br><br><label for=email>Email:</label><input type=text id=email name=email><br><br><label for=address>Address:</label><input type=text id=address name=address><br><br><label for=phonenumber>Phone Number:</label><input type=text id=phonenumber name=phonenumber><br><br><input type=submit value=Submit></form><input type=button value=Cancel id=cancel><input type=button value=\"log out\" id=logOut onclick(\"logOut\")>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "28");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/VMS$1.0.0/views/addOpportunity.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
