import { get } from 'aws-amplify/api';
export async function getAboutInfo() {
    try {

        const restOperation = get({
            apiName: 'infoAPI',
            path: '/info'
        });
        const response = await restOperation.response;
        console.log('GET call succeeded: ', response);
    } catch (e) {
        console.log('GET call failed: ', e);
    }
}

// This function is called immediately when the page loads, before populating the table with this data
export async function getUserItems() {
    return []
}

// This function is called when a user clicks the button 'Add'
export async function addItem(itemName) {

}

// This function is called when a user deletes an existing item in the table
export async function deleteItem(timestamp) {

}
