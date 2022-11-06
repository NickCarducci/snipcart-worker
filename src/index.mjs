export default {
    fetch(request /*, env, ctx*/) {
      //Response class must be a promise
      try {
        var allowedOrigins = [
          "https://h0u8vv.csb.app",
          "https://commie.dev",
          "https://4vosh.csb.app",
          "https://wavv.art"
        ];
  
        //const urlObject = new URL(request.url); //.pathname;//path
        //var origin = urlObject.origin;
        var origin = request.headers.get("Origin");
        const dataHead = {
          "Access-Control-Allow-Origin": origin, //new URL(req.url),//
          "Access-Control-Allow-Headers": [
            "Access-Control-Request-Headers",
            //"Access-Control-Allow-Methods",
            "Content-Type",
            "Origin",
            "Referer"
          ],
          "Access-Control-Allow-Methods": ["GET", "POST", "OPTIONS"]
        };
  
        if (request.method === "OPTIONS") {
          if (allowedOrigins.indexOf(origin) === -1) {
            console.log(origin + " not ", allowedOrigins);
            return new Response(
              `{error:${"no access for this origin- " + origin}}`,
              {
                status: 401,
                message: "no access for this origin: " + origin
                //headers: { "Content-Type": "application/json" }
              }
            );
          }
          console.log("OPTIONS for " + origin);
          return new Response(`preflight response for POST`, {
            status: 200,
            message: `preflight response for POST`,
            headers: dataHead
          });
        }
        console.log("POSTing from " + origin);
        //this needs to be tokenized by a snipcart forged RSA
        //https://support.snipcart.com/t/hiding-api-keys/325/4?u=nmc123
        //window.Snipcart.api is useless (in the client)
        return new Response(`{data:${snipcartkey}}`, {
          status: 200,
          message: "success",
          headers: {
            ...dataHead,
            "Content-Type": "application/json"
          }
        });
        // wrap the body of your callback in a try/catch block to ensure it cannot throw an exception.
        // is return, "the body?"
      } catch (e) {
        return new Response(e.message);
      }
    }
  };
  
