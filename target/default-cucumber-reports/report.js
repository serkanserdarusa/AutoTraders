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
  "name": "Verify that \"Advanced Search\" are present",
  "keyword": "Then "
});
formatter.match({
  "location": "AutotradersSteps.verify_that_are_present(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that search button is present.",
  "keyword": "And "
});
formatter.match({
  "location": "AutotradersSteps.verify_that_search_button_is_present()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify that \"make\" and \"model\" is visible",
  "keyword": "Then "
});
formatter.match({
  "location": "AutotradersSteps.verify_that_and_is_visible(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User checks the Advance search link",
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
  "name": "User click Advance Search link on the home page",
  "keyword": "Given "
});
formatter.match({
  "location": "AutotradersSteps.user_click_Advance_Search_link_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"30004\" in the \"Zip code\" text box",
  "keyword": "Then "
});
formatter.match({
  "location": "AutotradersSteps.user_enter_in_the_text_box(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select \"Certified\" check box under \"Condition\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AutotradersSteps.user_select_check_box_under(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select \"Convertible\" check box under \"Style\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AutotradersSteps.user_select_check_box_under(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user update Year \"From\" to \"To\"",
  "keyword": "Then "
});
formatter.match({
  "location": "AutotradersSteps.user_update_Year_to(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user select \"BMW\" car from Make,Model and Trim section",
  "keyword": "Then "
});
formatter.match({
  "location": "AutotradersSteps.user_select_car_from_Make_Model_and_Trim_section(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks \"Search\" button",
  "keyword": "Then "
});
formatter.match({
  "location": "AutotradersSteps.user_clicks_button(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that he is in result page",
  "keyword": "Then "
});
formatter.match({
  "location": "AutotradersSteps.user_verifies_that_he_is_in_result_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that he sees only \"BMW\" cars in listing",
  "keyword": "Then "
});
formatter.match({
  "location": "AutotradersSteps.user_verifies_that_he_sees_only_cars_in_listing(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Display in console, the number of cars listed in result page",
  "keyword": "Then "
});
formatter.match({
  "location": "AutotradersSteps.display_in_console_the_number_of_cars_listed_in_result_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});