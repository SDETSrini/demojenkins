package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = "src\\test\\java\\feature",
		glue = {"stepdefn"},
		plugin = { "pretty", "html:target/cucumber", "json:target/cucumber.json" },
		tags =  {"@new"}

		)


public class Runner {

}
