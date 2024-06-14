import { AzureFunction, Context, HttpRequest } from "@azure/functions"
import * as constants from "libraries/common/constants";

const greeting = constants.HELLO + " " + constants.WORLD;
const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    context.res = {
        status: 200, // Healthy,
        body: greeting
    };
};

export default httpTrigger;