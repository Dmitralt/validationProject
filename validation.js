var fs = require("fs");
var contents = fs.readFileSync("out_goods.json");
var jsonContent = JSON.parse(contents);

for(var key in jsonContent)
{
    /*--------------TYPE--------------------*/
    if(typeof(jsonContent[key]["SALE"])!="string")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = SALE must be string");
    }
    if(typeof(jsonContent[key]["BRAND"])!="string")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = BRAND must be string");
    }
    if(typeof(jsonContent[key]["QTY"])!="number")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = QTY must be number");
    }
    if(typeof(jsonContent[key]["SEASON_UA"])!="string")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = SEASON_UA must be string");
    }
    if(typeof(jsonContent[key]["VID_TOVARA_UA"])!="string")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = VID_TOVARA_UA must be string");
    }
    if(typeof(jsonContent[key]["VERX_UA"])!="string")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = VERX_UA must be string");
    }
    if(typeof(jsonContent[key]["PODKL_UA"])!="string")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = PODKL_UA must be string");
    }
    if(typeof(jsonContent[key]["STRANA_UA"])!="string")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = STRANA_UA must be string");
    }
    if(typeof(jsonContent[key]["STYLE_UA"])!="string")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = STYLE_UA must be string");
    }
    if(typeof(jsonContent[key]["CVET_UA"])!="string")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = CVET_UA must be string");
    }
    if(typeof(jsonContent[key]["DESCRIPTION_UA"])!="string")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = DESCRIPTION_UA must be string");
    }
    if(typeof(jsonContent[key]["TECHNOLOGY"])!="string")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = TECHNOLOGY must be string");
    }
    if(typeof(jsonContent[key]["PRICE_BASE"])!="string")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = PRICE_BASE must be string");
    }
    if(typeof(jsonContent[key]["PRICE_ACTION"])!="string")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = PRICE_ACTION must be string");
    }
    if(typeof(jsonContent[key]["ACCESSORY"])!="string")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = ACCESSORY must be string");
    }
    if(typeof(jsonContent[key]["SORT"])!="string")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = SORT must be string");
    }
    if(typeof(jsonContent[key]["GENDER_UA"])!="string")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = GENDER_UA must be string");
    }
    if(Array.isArray(jsonContent[key]["SIZE"])=="false")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = SIZE must be array");
    }
    if(Array.isArray(jsonContent[key]["PHOTO"])=="false")
    {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = PHOTO must be array");
    }
    

    /*--------------NULL--------------------*/
     if(jsonContent[key]["SALE"]==null)
     {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = SALE is null");
     }
     if(jsonContent[key]["BRAND"]==null)
     {
        console.log(" Warning!!! Ключ объекта ="+key+"; Поле с ошибкой = BRAND is null");
     }
     if(jsonContent[key]["PRICE_ACTION"]==null)
     {
        console.log("Error!!! Ключ объекта ="+key+"; Поле с ошибкой = PRICE_ACTION is null");
     }
     if(jsonContent[key]["SIZE"]==null)
     {
        console.log("Error!!! Ключ объекта ="+key+"; Поле с ошибкой = SIZE is null");
     }
     if(jsonContent[key]["PHOTO"]==null)
     {
        console.log("Error!!! Ключ объекта ="+key+"; Поле с ошибкой = PHOTO is null");
     }

    /*--------------EMPTY--------------------*/
    
     if(jsonContent[key]["SALE"]=="")
     {
        console.log("Error!!! Ключ объекта ="+key+"; Поле с ошибкой = SALE is empty");
     }
     if(jsonContent[key]["BRAND"]=="")
     {
        console.log("Warning!!! Ключ объекта ="+key+"; Поле с ошибкой = BRAND is empty");
     }
     if(jsonContent[key]["QTY"]=="")
     {
        console.log("Warning!!! Ключ объекта ="+key+"; Поле с ошибкой = QTY is empty");
     }
     if(jsonContent[key]["SEASON_UA"]=="")
     {
        console.log("Warning!!! Ключ объекта ="+key+"; Поле с ошибкой = SEASON_UA is empty");
     }
     if(jsonContent[key]["VID_TOVARA_UA"]=="")
     {
        console.log("Warning!!! Ключ объекта ="+key+"; Поле с ошибкой = VID_TOVARA_UA is empty");
     }
     if(jsonContent[key]["VERX_UA"]=="")
     {
        console.log("Warning!!! Ключ объекта ="+key+"; Поле с ошибкой = VERX_UA is empty");
     }
     if(jsonContent[key]["PODKL_UA"]=="")
     {
        console.log("Warning!!! Ключ объекта ="+key+"; Поле с ошибкой = PODKL_UA is empty");
     }
     if(jsonContent[key]["STRANA_UA"]=="")
     {
        console.log("Warning!!! Ключ объекта ="+key+"; Поле с ошибкой = STRANA_UA is empty");
     }
     if(jsonContent[key]["STYLE_UA"]=="")
     {
        console.log("Warning!!! Ключ объекта ="+key+"; Поле с ошибкой = STYLE_UA is empty");
     }
     if(jsonContent[key]["CVET_UA"]=="")
     {
        console.log("Warning!!! Ключ объекта ="+key+"; Поле с ошибкой = CVET_UA is empty");
     }
     if(jsonContent[key]["DESCRIPTION_UA"]=="")
     {
        console.log("Warning!!! Ключ объекта ="+key+"; Поле с ошибкой = DESCRIPTION_UA is empty");
     }
     if(jsonContent[key]["TECHNOLOGY"]=="")
     {
        console.log("Warning!!! Ключ объекта ="+key+"; Поле с ошибкой = TECHNOLOGY is empty");
     }
     if(jsonContent[key]["PRICE_BASE"]=="")
     {
        console.log("Warning!!! Ключ объекта ="+key+"; Поле с ошибкой = PRICE_BASE is empty");
     }
     if(jsonContent[key]["PRICE_ACTION"]=="")
     {
        console.log("Error!!! Ключ объекта ="+key+"; Поле с ошибкой = PRICE_ACTION is empty");
     }
     if(jsonContent[key]["ACCESSORY"]=="")
     {
        console.log("Warning!!! Ключ объекта ="+key+"; Поле с ошибкой = ACCESSORY is empty");
     }
     if(jsonContent[key]["SORT"]=="")
     {
        console.log("Warning!!! Ключ объекта ="+key+"; Поле с ошибкой = SORT is empty");
     }
     if(jsonContent[key]["GENDER_UA"]=="")
     {
        console.log("Warning!!! Ключ объекта ="+key+"; Поле с ошибкой = GENDER_UA is empty");
     }
     if(jsonContent[key]["SIZE"]=="")
     {
        console.log("Error!!! Ключ объекта ="+key+"; Поле с ошибкой = SIZE is empty");
     }
     /*--------------DESCRIPTION--------------------*/

     if(jsonContent[key]["SALE"]==null||jsonContent[key]["SALE"]=="")
     {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = SALE пустая строка");
     }

     
     if(typeof(jsonContent[key]["PRICE_ACTION"])!="number")
     {
        console.log("Error!!! Ключ объекта ="+key+"; Поле с ошибкой = PRICE_ACTION is not a number");
     }

     if(jsonContent[key]["ACCESSORY"]!="Y"&&jsonContent[key]["ACCESSORY"]!="N")
     {
        console.log("Error!!! Ключ объекта ="+key+"; Поле с ошибкой = ACCESSORY must be 'Y' or 'N'");
     }
     
    if(jsonContent[key]["SIZE"]=="")
    {
       console.log("Error!!! Ключ объекта ="+key+"; Поле с ошибкой = SIZE. Должно быть Хотя бы одно значение");
    }
    

if(typeof(jsonContent[key]["SIZE"][0])!="string")
{

    console.log("Error!!! Ключ объекта ="+key+"; Поле с ошибкой = SIZE. тип элементов должен быть строкой с числом");
}
   if(typeof(jsonContent[key]["PHOTO"])!="number")
   {
    console.log("Error!!! Ключ объекта ="+key+"; Поле с ошибкой = PHOTO. тип элементов должен быть числом");
   }
}

 