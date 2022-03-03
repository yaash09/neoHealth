# neoHealth
The project contains easy to use wrapper on existing orthan Rest API.

### Running the project

You need a orthan server to communicate. if you don't have one, you can setup a local server by downloading orthan setup from [here](https://www.orthanc-server.com/download.php).
after installation you can check if the orthan server is running or not by going in to services in window, there you should find a running orthac service.

Before running the project make sure you have a .env file as per sample attached containing the orthanc server base url.
you can run the project with npm start in root folder.

>> npm start

### Using the API

#### uploding file

The main feature of orthanc file revolves around dicom file upload and download. below is the post route to do file upload.

>> (Post request)    http://localhost:3001/api/instance  

The file are attached in formdata. one can attach multiple files in single call as shown below.

![image](https://user-images.githubusercontent.com/85926236/156495638-6bd25c40-06eb-4ca4-8b1e-8d1e4644c4a7.png)

#### Listing patients

Once we upload a file it creates a patient , study and series for that instance(file upload).
we can list all the patients, series, instances and studies that are present in our orthan server, by using below get routes.

>> (Get request)  http://localhost:3001/api/list/instances/  
>> (Get request)  http://localhost:3001/api/list/patients/  
>> (Get request)  http://localhost:3001/api/list/series/  
>> (Get request)  http://localhost:3001/api/list/studies/  

![image](https://user-images.githubusercontent.com/85926236/156497698-436b575d-bd82-4d2e-a294-48c76205b48b.png)

This will give you the ids of all the patients present.

you can get detail of any patient by taking respective patientId and using it in the route as shown below.

>> http://localhost:3001/api/patients/< patiendId >

![image](https://user-images.githubusercontent.com/85926236/156497865-e15bef99-94db-4d20-8409-6de9747b906c.png)

We can get details of other entities as well, in the same way
>> http://localhost:3001/api/series/< seriesId >

>> http://localhost:3001/api/studies/< studiesId >
  
 
### Downloading instance/file
  
  To download a file you need it's instanceId.
  
  You can get instance Id with below route:
  
  >> (Get request)  http://localhost:3001/api/list/instances/  

  You can use instance ID from above response and use it in below route to download:
  
  >> http://localhost:3001/api/instance/< instance-id >



