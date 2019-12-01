# Records API

#### Installation
Clone the project.
Open a command line, cd into folder that you have cloned the project and then run "npm install".

#### How to Run
Open CLI on the project directory and write the following command:
```
node index.js
```
or
```
npm run
```

#### How to Test
Open CLI on the project directory and write the following command:
```
mocha
```

#### Heroku
I also deployed my API to heroku. Here is the url: https://shrouded-springs-69483.herokuapp.com/

#### API Documentation
The Api only includes a single endpoint that fetches the data in the provided MongoDB collection and return the results in the requested format.
The endpoint just handle HTTP POST requests.

You need to make a post request to one of the following urls:
* localhost:5000/records
* https://shrouded-springs-69483.herokuapp.com/records

The request payload should include a JSON with 4 fields.
* “startDate” and “endDate” fields will contain the date in a “YYYY-MM-DD” format. You
should filter the data using “createdAt”
* “minCount” and “maxCount” are for filtering the data. Sum of the “count” array in the
documents should be between “minCount” and “maxCount”.

Sample request json body:
```yaml
{
  "startDate": "2016-01-26",
  "endDate": "2018-02-02",
  "minCount": 2700,
  "maxCount": 3000
}
```

Response payload will have 3 main fields.
* “code” is for status of the request. 0 means success. Other values may be used for
errors that you define.
* “msg” is for description of the code. You can set it to “success” for successful
requests. For unsuccessful requests, you should use explanatory messages.
* “records” will include all the filtered items according to the request. This array should
include items of “key”, “createdAt” and “totalCount” which is the sum of the “counts”
array in the document.

Sample response json body:
Sample:
```yaml
{
  "code":0,
  "msg":"Success",
  "records":[
    { 
    "key":"TAKwGc6Jr4i8Z487",
    "createdAt":"2017-01-28T01:22:14.398Z",
    "totalCount":2800
    },
    {
    "key":"NAeQ8eX7e5TEg7oH",
    "createdAt":"2017-01-27T08:19:14.135Z",
    "totalCount":2900
    }
  ]
}
```
