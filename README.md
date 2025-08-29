# GrowHub

This repository is a [json-server](https://github.com/AlejandroDuqueG-design/GrowHub-server) created to feed data into the GrowHub React Application.

#### [Growhub](https://github.com/AlejandroDuqueG-design/GrowHub-client)

# Server Structure

## Collections

### plants

```javascript
{
  commonName,
  scientificName,
  type,
  watering,
  sunlight,
  description
}
```

### treatments

```javascript
 {
   plantId,
   treatmentDescription,
   timeOfYear
 }
```

## Used API Endpoints in the App

| HTTP Method | URL              | Request Body                | Description                 |
| ----------- | ---------------- | --------------------------- | --------------------------- |
| GET         | `/plants`         |                             | Sends all plants             |
| POST        | `/plants`         | {commonName, scientificName, type}        | Creates a new plant          |
| GET         | `/plants/:plantId` |                             | Sends all details of a plant |
| PUT         | `/plants/:plantId` | {commonName, scientificName, type, watering, sunlight, description} |  Edits a plant object   |
| DELETE      | `/plants/:plantId` |                             | Deletes a plant object       |
| GET         | `/treatments`       |                             | Sends all treatments           |
| POST        | `/treatments`       | {plantId, treatmentDescription, timeOfYear}              | Creates a new treatment        |
| DELETe       | `/treatments`       | {plantId, treatmentDescription, timeOfYear}              | Deletes a treatment object             |


## Links


### Project

[Link to GrowHub/Client repository](www.github.com/AlejandroDuqueG-design/GrowHub-client)

[Link to GrowHub/Server respository](www.github.com/AlejandroDuqueG-design/GrowHub-server)

[Deploy Link](www.your-deploy-url-here.com)

### Figma

[Link to your figma wireframes](www.figma.com/proto/jXSYn3R3NTAs7lhjXw7R7N/React-App---GrowHub?node-id=71-165&t=cUf0wlo8AXdmfMof-1)

### Slides

[Slides Link](www.your-slides-url-here.com)
