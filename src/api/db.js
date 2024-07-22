import { get, post } from 'aws-amplify/api';
import { fetchAuthSession } from 'aws-amplify/auth';
export async function getAboutInfo() {
}

// This function is called immediately when the page loads, before populating the table with this data
export async function getUserItems() {
    try {
        const email = (await fetchAuthSession()).tokens.idToken?.payload?.email
        console.log('token: ', email);
        const restOperation = get({
            apiName: 'info', // by mistake the APIs names as info but its main API
            path: '/items/' + email,
        });
        const response = await restOperation.response;
        console.log('GET call succeeded: ', response.body);
        return response;
    } catch (e) {
        console.log('GET call failed: ', e);
    }
}

// This function is called when a user clicks the button 'Add'
export async function addItem(itemName) {
    const email = (await fetchAuthSession()).tokens.idToken?.payload?.email
    try {
        const restOperation = post({
            apiName: 'info',
            path: '/items',
            options: {
                body: {
                    timestamp: new Date().getTime(),
                    user: email,
                    itemName
                }
            }
        });

        const { body } = await restOperation.response;
        const response = await body.json();

        console.log('POST call succeeded');
        console.log(response);
    } catch (e) {
        console.log('POST call failed: ', JSON.parse(e.response.body));
    }
}


// This function is called when a user deletes an existing item in the table
export async function deleteItem(timestamp) {

}
