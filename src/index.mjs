export default {
    fetch(request/*, env, ctx*/) {
        //Response class must be a promise
        try {
            var allowedOrigins = [
                "https://h0u8vv.csb.app",
                "https://commie.dev",
                "https://4vosh.csb.app",
                "https://wavv.art"
            ];

            const urlObject = new URL(req.url); //.pathname;//path
            var origin = urlObject.origin; // request.headers.get("Origin");
            const headers = {
                "Access-Control-Allow-Origin": origin,//new URL(req.url),//
                "Access-Control-Allow-Headers": [
                    //"Access-Control-Allow-Origin",
                    //"Access-Control-Allow-Methods",
                    "Content-Type",
                    "Origin",
                    "Referer",
                    "Accept",
                    //"X-Requested-With",
                    "Allow"
                ],
                "Access-Control-Allow-Methods": ["POST", "OPTIONS"]
            }
            if (allowedOrigins.indexOf(origin) === -1) return new Response(
                `{error:${"no access for this origin- " + origin}}`,
                {
                    status: 400,
                    message: "no access for this origin: " + origin
                    //headers: { "Content-Type": "application/json" }
                }
            );

            if (request.method === "OPTIONS")
                return new Response(`preflight response for POST`, {
                    status: 200,
                    message: `preflight response for POST`,
                    headers
                });
            return new Response(`{data:${snipcartkey}}`, {
                status: 200,
                message: "success",
                headers: { ...dataHead }
            });
            // wrap the body of your callback in a try/catch block to ensure it cannot throw an exception.
            // is return, "the body?"
        } catch (e) {
            return new Response(e.message);
        }
    }
};
