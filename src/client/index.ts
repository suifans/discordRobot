import {HttpClient} from "tsrpc-browser";
import {serviceProto} from "../shared/protocols/serviceProto";

const client = new HttpClient(serviceProto, {
    server: 'http://localhost:3001',
    json: true,
    // logger: console
});


export {
    client
}
