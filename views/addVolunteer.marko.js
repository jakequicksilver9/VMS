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

  out.w("<!DOCTYPE html><html xmlns:th=http://www.thymeleaf.org lang=en><head><title>Add Volunteers</title><link rel=stylesheet type=text/css href=/js/datatables.min.css><link rel=stylesheet type=text/css href=/js/bootstrap.min.css><script type=text/javascript src=/js/jquery.min.js></script><script type=text/javascript src=/js/datatables.min.js></script><script type=text/javascript src=/js/bootstrap.min.js></script><script>\n            $(document).ready(function(){\n                var email,pass\n              $ (\"#logOut\").click(function(){\n                    email=\"\";\n                    pass=\"\";\n                  \n                    $.post(\"/login\",{email:email,pass:pass},function(data){\n                        if(data==='done') {\n                            window.location.href=\"/logout\"\n                        }\n                    })\n                })\n\n                $(\"#cancel\").click(function() {\n                    window.location.href=\"/manageVolunteers\"\n                })\n\n\n\n            });\n\n   \n\n            function validateForm(event) {\n                var inputEmail = document.forms[\"addVolunteer\"][\"email\"].value\n                var emailPat = new RegExp(\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\")\n                if (inputEmail && (!inputEmail.match(emailPat))) {\n                    alert(\"Incorrect Email Format\")\n\n                    return false;\n                }\n                var inputPhoneNumber = document.forms[\"addVolunteer\"][\"phoneNumber\"].value\n                var inputemergencyPhoneNumber = document.forms[\"addVolunteer\"][\"emergencyPhoneNumber\"].value\n                var phonePat = new RegExp(\"^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$\")\n                if (inputPhoneNumber && (!inputPhoneNumber.match(phonePat))) {\n                    alert(\"Incorrect Phone number Format\")                    \n                    return false;\n                }\n                if (inputemergencyPhoneNumber && (!inputemergencyPhoneNumber.match(phonePat))) {\n                    alert(\"Incorrect Emergency Phone number Format\")                    \n                    return false;\n                }\n                var inputAddress = document.forms[\"addVolunteer\"][\"address\"].value\n                var inputEmergencyAddress = document.forms[\"addVolunteer\"][\"emergencyAddress\"].value\n                var addressPat = new RegExp(\"^[0-9]+\\\\s[A-Z||a-z||\\\\s||.]*\\\\s[0-9][0-9][0-9][0-9][0-9]\\\\s[A-Z||a-z]+$\")\n                if (inputAddress && (!inputAddress.match(addressPat))){\n                    alert(\"Incorrect Address, use format: house# street zip state\")\n                    return false;\n                }\n                if (inputEmergencyAddress && (!inputEmergencyAddress.match(addressPat))){\n                    alert(\"Incorrect Emergency Address, use format: house# street zip state\")\n                    return false;\n                }\n            }\n            </script></head><body><div class=navbar><h1>" +
    marko_escapeXml(input.greeting) +
    "</h1><input type=button value=\"log out\" id=logOut onclick(\"logOut\")></div><div class=\"row justify-content-center\"><div class=col-6><h2 style=\"padding-left: 0;\">Add Volunteer</h2><form action=/addVolunteer method=post name=addVolunteer><div class=form-group><div class=row><label class=form-label for=first>First name: </label><input class=form-control type=text id=first name=firstname><br><br></div></div><div class=form-group><div class=row><label class=form-label for=last>Last name: </label><input class=form-control type=text id=last name=lastname><br><br></div></div><div class=form-group><div class=row><label class=form-label for=userName>User name: </label><input class=form-control type=text id=userName name=username><br><br></div></div><div class=form-group><div class=row><label class=form-label for=password>Password: </label><input class=form-control type=password id=password name=password><br><br></div></div><div class=form-group id=centers><div class=row><label class=form-label for>Perfered Volunteer centers: </label><textarea class=form-control rows=3 cols=40 name=centers id></textarea><br><br></div></div><div id=center> </div><div class=form-group><div class=row><label class=form-label for>Skills/Interests: </label><textarea class=form-control rows=3 cols=40 name=skills id></textarea><br><br></div></div><div class=form-group><div class=row><label class=form-label for>Availability Times: </label><input class=form-control type=text id name=availability><br><br></div></div><div class=form-group><div class=row><label class=form-label for>Address: </label><input class=form-control type=text id=address name=address placeholder=\"house# street zip state\"><br><br></div></div><div class=form-group><div class=row><label class=form-label for>Phone #: </label><input class=form-control type=text id=phoneNumber name=phone placeholder=##########><br><br></div></div><div class=form-group><div class=row><label class=form-label for=email>Email: </label><input class=form-control type=text id=email name=email placeholder=example@exaple.com><br><br></div></div><div class=form-group><div class=row><label class=form-label for=educationalBackground>Edcuational Background: </label><textarea class=form-control rows=3 cols=40 name=education id=educationalBackground></textarea><br><br></div></div><div class=form-group><div class=row><label class=form-label for>Current Licenses: </label><input class=form-control type=text id name=licenses><br><br></div></div><div class=form-group><div class=row><label class=form-label for>Emergency Contact Name: </label><input class=form-control type=text id name=emergencyname><br><br></div></div> <div class=form-group><div class=row><label class=form-label for>Emergency Contact Phone #: </label><input class=form-control type=text id=emergencyPhoneNumber name=emergencyphone placeholder=##########><br><br></div></div><div class=form-group><div class=row><label class=form-label for>Emergency Contact Email: </label><input class=form-control type=text id=emergencyEmail name=emergencyemail placeholder=example@exaple.com><br><br></div></div><div class=form-group><div class=row><label class=form-label>Emergency Contact Address: </label><input class=form-control type=text id=emergencyAddress name=emergencyaddress placeholder=\"house# street zip state\"><br><br></div></div> <div class=form-group><div class=row><label>Copy of Drivers License on File: </label><select class=form-control name=dlfile><option value=true>True</option><option value=false>False</option></select></div></div><div class=form-group><div class=row><label>Copy of SSN on file: </label><select class=form-control name=ssfile><option value=true>True</option><option value=false>False</option></select></div></div><div class=form-group><div class=row><label>Volunteers Approval Status: </label><select class=form-control name=approval><option value=true>Approved</option><option value=false>Denied</option></select></div></div><div class=form-group><div class=row><div class=col-2 style=\"padding-left: 0;\"><input type=submit id=submit value=Submit></div><div class=col-2 style=\"padding-left: 0;\"><input type=button value=Cancel id=cancel></div></div></div></form></div></div>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "134");

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
