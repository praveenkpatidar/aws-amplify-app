#
You can create App by using this repo in Amplify App using Github Integration.

The APIs may not be created due to some issue, once App is created, pull Amplify pull in blank Amplify Folder
Use Amplify status and amplify push to create API Gateway


✅ Successfully pulled backend environment main from the cloud.
Run 'amplify pull' to sync future upstream changes.

No AppSync API configured. Please add an API

$ amplify status

    Current Environment: main

┌──────────┬──────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name        │ Operation │ Provider plugin   │
├──────────┼──────────────────────┼───────────┼───────────────────┤
│ Api      │ mainApi              │ Create    │ awscloudformation │
├──────────┼──────────────────────┼───────────┼───────────────────┤
│ Auth     │ ppamplifyapp5c11be65 │ No Change │ awscloudformation │
├──────────┼──────────────────────┼───────────┼───────────────────┤
│ Function │ databaseFunction     │ No Change │ awscloudformation │
├──────────┼──────────────────────┼───────────┼───────────────────┤
│ Storage  │ items                │ No Change │ awscloudformation │
└──────────┴──────────────────────┴───────────┴───────────────────┘


amplify push
✔ Successfully pulled backend environment main from the cloud.

    Current Environment: main

┌──────────┬──────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name        │ Operation │ Provider plugin   │
├──────────┼──────────────────────┼───────────┼───────────────────┤
│ Api      │ mainApi              │ Create    │ awscloudformation │
├──────────┼──────────────────────┼───────────┼───────────────────┤
│ Auth     │ ppamplifyapp5c11be65 │ No Change │ awscloudformation │
├──────────┼──────────────────────┼───────────┼───────────────────┤
│ Function │ databaseFunction     │ No Change │ awscloudformation │
├──────────┼──────────────────────┼───────────┼───────────────────┤
│ Storage  │ items                │ No Change │ awscloudformation │
└──────────┴──────────────────────┴───────────┴───────────────────┘
✔ Are you sure you want to continue? (Y/n) · yes


Redeploy the code after pushing the changes.
