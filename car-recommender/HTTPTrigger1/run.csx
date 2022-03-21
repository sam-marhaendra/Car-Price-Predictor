#r "Newtonsoft.Json"
#r "Microsoft.Azure.DocumentDB.Core"
#r "Microsoft.Azure.WebJobs.Extensions.CosmosDB"

using System.Net;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Primitives;
using Newtonsoft.Json;

public static async Task<IActionResult> Run(HttpRequest req,
[CosmosDB(databaseName: "fantasticfour", collectionName: "transactional-data",
ConnectionStringSetting = "fantasticfour-cosmosdb_DOCUMENTDB")]IAsyncCollector<dynamic> outputDocument, 
ILogger log) 
{
    log.LogInformation("C# HTTP trigger function processed a request.");

    string model = req.Query["model"];
    string year = req.Query["year"];
    string transmission = req.Query["transmission"];
    string mileage = req.Query["mileage"];
    string fuelType = req.Query["fuelType"];
    string tax = req.Query["tax"];
    string mpg = req.Query["mpg"];
    string engineSize = req.Query["engineSize"];

    string requestBody = await new StreamReader(req.Body).ReadToEndAsync();
    dynamic data = JsonConvert.DeserializeObject(requestBody);
    model = model ?? data?.model;
    year = year ?? data?.year;
    transmission = transmission ?? data?.transmission;
    mileage = mileage ?? data?.mileage;
    fuelType = fuelType ?? data?.fuelType;
    tax = tax ?? data?.tax;
    mpg = mpg ?? data?.mpg;
    engineSize = engineSize ?? data?.engineSize;    

    await outputDocument.AddAsync(new
        {
            id = System.Guid.NewGuid().ToString(),
            model = model,
            year = year,
            transmission = transmission,
            mileage = mileage,
            fuelType = fuelType,
            tax = tax,
            mpg = mpg,
            engineSize = engineSize    
        }
    );

    string responseMessage = string.IsNullOrEmpty(model)
        ? "This HTTP triggered function executed successfully."
                : $"You've input this car specifications: {model}, {year}, {transmission}, {mileage}, {fuelType}, {tax}, {mpg}, {engineSize}. This HTTP triggered function executed successfully.";

            return new OkObjectResult(responseMessage);
}
