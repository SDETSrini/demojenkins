$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/feature/test.feature");
formatter.feature({
  "name": "Sanity Test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "verify  homepage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@new"
    }
  ]
});
formatter.step({
  "name": "User is on home page",
  "keyword": "Given "
});
formatter.match({
  "location": "TestStepDefn.user_is_on_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Verify title of the homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "TestStepDefn.verify_title_of_the_homepage()"
});
formatter.result({
  "status": "passed"
});
});