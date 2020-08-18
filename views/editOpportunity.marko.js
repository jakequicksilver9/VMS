// Compiled using marko@4.22.0 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/VMS$1.0.0/views/editOpportunity.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html xmlns:th=http://www.thymeleaf.org lang=en><head><title>Edit Volunteers</title><script src=/js/jquery.js></script><script src=/js/js/bootstrap.js></script><link rel=stylesheet src=/js/css/bootstrap.css><script>\n            $(document).ready(function(){\n                \n                var email,pass\n                $ (\"#logOut\").click(function(){\n                    email=\"\";\n                    pass=\"\";\n                  \n                    $.post(\"/login\",{email:email,pass:pass},function(data){\n                        if(data==='done') {\n                            window.location.href=\"/logout\"\n                        }\n                    })\n                })\n\n                $(\"#cancel\").click(function() {\n                    window.location.href=\"/manageOpportunities\"\n                })\n\n                $(\"#submit\").click(function() {\n                    window.location.href=\"/manageOpportunities\"\n                })\n\n            });\n\n            function setOption(selectElement, value) {\n                return [...selectElement.options].some((option, index) => {\n                    if (option.value == value) {\n                        selectElement.selectedIndex = index;\n                        return true;\n                    }\n                });\n            }\n\n            function validateForm() {\n                \n                var inputEmail = document.forms[\"editOpportunity\"][\"email\"].value\n                var emailPat = new RegExp(\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\")\n                if (inputEmail && (!inputEmail.match(emailPat))) {\n                    alert(\"Incorrect Email Format\")\n                    return false\n                }\n                var inputPhoneNumber = document.forms[\"editOpportunity\"][\"phoneNumber\"].value\n                var inputemergencyPhoneNumber = document.forms[\"addVolunteer\"][\"emergencyPhoneNumber\"].value\n                var phonePat = new RegExp(\"^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$\")\n                if (inputPhoneNumber && (!inputPhoneNumber.match(phonePat))) {\n                    alert(\"Incorrect Phone number Format\")                    \n                    return false\n                }\n                if (inputemergencyPhoneNumber && (!inputemergencyPhoneNumber.match(phonePat))) {\n                    alert(\"Incorrect Emergency Phone number Format\")                    \n                    return false\n                }\n\n                var inputAddress = document.forms[\"editOpportunity\"][\"address\"].value\n                var inputEmergencyAddress = document.forms[\"addVolunteer\"][\"emergencyAddress\"].value\n                var addressPat = new RegExp(\"^[0-9]+\\\\s[A-Z||a-z||\\\\s||.]*\\\\s[0-9][0-9][0-9][0-9][0-9]\\\\s[A-Z||a-z]+$\")\n                if (inputAddress && (!inputAddress.match(addressPat))){\n                    alert(\"Incorrect Address, use format: house# street zip state\")\n                    return false\n\n                }\n\n                if (inputEmergencyAddress && (!inputEmergencyAddress.match(addressPat))){\n                    alert(\"Incorrect Emergency Address, use format: house# street zip state\")\n                    return false\n\n                }\n                else{\n                    window.location.href=\"/manageOpportunities\"\n                }\n\n            }\n\n            </script></head><body><h1>" +
    marko_escapeXml(input.greeting) +
    "</h1><h1>Edit Opportunity</h1><form" +
    marko_attr("action", "/editOpportunity/" + (input.id == null ? "" : input.id)) +
    " method=post name=editOpportunity><label for=name>Opportunity:</label><input type=text id=name name=name" +
    marko_attr("value", input.opportunity.name) +
    "><br><br><label for=email>Email:</label><input type=text id=email name=email" +
    marko_attr("value", input.opportunity.email) +
    "><br><br><label for=address>Address:</label><input type=text id=address name=address" +
    marko_attr("value", input.opportunity.address) +
    "><br><br><label for=phonenumber>Phone Number:</label><input type=text id=phonenumber name=phonenumber" +
    marko_attr("value", input.opportunity.phonenumber) +
    "><br><br><input type=submit id=submit value=Submit><input type=button value=Cancel id=cancel><input type=button value=\"log out\" id=logOut onclick(\"logOut\")></form>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "27");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/VMS$1.0.0/views/editOpportunity.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
