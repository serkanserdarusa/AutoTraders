$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Autotraders.feature");
formatter.feature({
  "name": "",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoke_test"
    }
  ]
});
formatter.scenario({
  "name": "User goes to Autotrader Website",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoke_test"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User is in landing page",
  "keyword": "Given "
});
formatter.match({
  "location": "AutotradersSteps.user_is_in_landing_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that \"Browse by Make\" are present",
  "keyword": "Then "
});
formatter.match({
  "location": "AutotradersSteps.verify_that_are_present(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that \"Browse by Style\" are present",
  "keyword": "Then "
});
formatter.match({
  "location": "AutotradersSteps.verify_that_are_present(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify that \"Ahgjkn Search\" are present",
  "keyword": "Then "
});
formatter.match({
  "location": "AutotradersSteps.verify_that_are_present(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cA[hgjkn] Search\u003e but was:\u003cA[dvanced] Search\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat org.junit.Assert.assertEquals(Assert.java:144)\r\n\tat com.autotraders.Pages.AutotradersPage.verification(AutotradersPage.java:58)\r\n\tat com.autotraders.StepDefinitions.AutotradersSteps.verify_that_are_present(AutotradersSteps.java:28)\r\n\tat ✽.Verify that \"Ahgjkn Search\" are present(file:src/test/resources/features/Autotraders.feature:8)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "verify that search button is present.",
  "keyword": "And "
});
formatter.match({
  "location": "AutotradersSteps.verify_that_search_button_is_present()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "verify that \"make\" and \"model\" is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "AutotradersSteps.verify_that_and_is_visible(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});