const report = require("multiple-cucumber-html-reporter");
report.generate({
    jsonDir: "cypress/reports/cucumber-json",  // ** Path of .json file **//
    reportPath: "cypress/reports/Result/", // ** Path of .html file **//
    metadata: {
        browser: {
            name: "chrome",
            version: "98",
        },
        environment: "Stage",
        platform: {
            name: "MAC",
            version: "14",
        },
    },
});