# drug
Hi there

Greetings from Navadhiti

We are building a robust clinical decision support system that leverages patient history and targeted medical data for personalized healthcare delivery for our clients. where which drug requires specific information from the patients. 


For example:
Drug 1
Require form details based on drug1.json

Drug 2 
Require form details based on drug2.json

Let's try to build a dynamic component when the particular drug JSON schema is passed to the dynamic component. The component should render the form based on the JSON schema. The form should render based on the order mentioned in the JSON.

Create a git repository and share/add the repo URL to talent@navadhiti.com

All the best


#{
  "fields": [
    {
      "label": "Date of Birth (YYYY-MM-DD)",
      "key": "birthday",
      "isRequired": true,
      "order": 1,
      "isReadonly": false,
      "type": "date"
    },
    {
      "label": "Sex",
      "items": [
        {
          "value": "male",
          "text": "Male"
        },
        {
          "value": "female",
          "text": "Female"
        }
      ],
      "key": "sex",
      "isRequired": true,
      "order": 2,
      "isReadonly": false,
      "type": "dropdown"
    },
    {
      "label": "Weight",
      "key": "weight",
      "isRequired": true,
      "order": 3,
      "unit": "kg",
      "isReadonly": false,
      "type": "number"
    }
  ]
}

{
    "feilds": [
        {
            "_id": "62c6e99faeaec07025378d72",
            "label": "Sex",
            "key": "sex",
            "order": 2,
            "type": "dropdown",
            "items": [
                {
                    "value": "male",
                    "text": "Male",
                    "_id": "62c6e99faeaec07025378d73"
                },
                {
                    "value": "female",
                    "text": "Female",
                    "_id": "62c6e99faeaec07025378d74"
                }
            ],
            "isRequired": true,
            "isReadonly": false,
            "__v": 0
        },
        {
            "_id": "62c6efe2dbc2ceacb5f99f09",
            "label": "Sex",
            "key": "sex",
            "order": 2,
            "type": "date",
            "items": [
                {
                    "value": "male",
                    "text": "Male",
                    "_id": "62c6efe2dbc2ceacb5f99f0a"
                },
                {
                    "value": "female",
                    "text": "Female",
                    "_id": "62c6efe2dbc2ceacb5f99f0b"
                }
            ],
            "isRequired": true,
            "isReadonly": true,
            "__v": 0
        },
        {
            "_id": "62c6f00bb15780fb73a902b5",
            "label": "Sex",
            "key": "sex",
            "order": 2,
            "type": "date",
            "items": [
                {
                    "value": "male",
                    "text": "Male",
                    "_id": "62c6f00bb15780fb73a902b6"
                },
                {
                    "value": "female",
                    "text": "Female",
                    "_id": "62c6f00bb15780fb73a902b7"
                }
            ],
            "isRequired": true,
            "isReadonly": true,
            "__v": 0
        }
    ]
}

drug2.json
Displaying drug2.json.
