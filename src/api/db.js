import { get, post, del } from 'aws-amplify/api';
import { fetchAuthSession } from 'aws-amplify/auth';
export async function getAboutInfo() {
}

// This function is called immediately when the page loads, before populating the table with this data
export async function getUserItems() {
    try {
        const email = (await fetchAuthSession()).tokens.idToken?.payload?.email
        const restOperation = get({
            apiName: 'mainApi', // by mistake the APIs names as info but its main API
            path: '/items/' + email,
        });
        const response = await restOperation.response;
        console.log('GET call succeeded: ', response);
        // Convert the response to a readable stream
        const reader = response.body.getReader();
        const stream = new ReadableStream({
            start(controller) {
                function push() {
                    reader.read().then(({ done, value }) => {
                        if (done) {
                            controller.close();
                            return;
                        }
                        controller.enqueue(value);
                        push();
                    });
                }
                push();
            }
        });
        // Convert the stream to a text
        const streamResponse = new Response(stream);
        const textResponse = await streamResponse.text();
        const jsonResponse = JSON.parse(textResponse);
        return jsonResponse;
        //return response;
    } catch (e) {
        console.log('GET call failed: ', e);
    }
}

// This function is called when a user clicks the button 'Add'
export async function addItem(itemName) {
    const email = (await fetchAuthSession()).tokens.idToken?.payload?.email
    try {
        const restOperation = post({
            apiName: 'mainApi',
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
        console.log(response);
        return response;
    } catch (e) {
        console.log('POST call failed: ', JSON.parse(e.response.body));
    }
}


// This function is called when a user deletes an existing item in the table
export async function deleteItem(timestamp) {
    const email = (await fetchAuthSession()).tokens.idToken?.payload?.email
    const restOperation = del({
        apiName: 'mainApi', // by mistake the APIs names as info but its main API
        path: '/items/object/' + email + '/' + timestamp,
    });
    const response = await restOperation.response;
    console.log(response);
    return response;
}
