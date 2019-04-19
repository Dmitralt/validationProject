var fs = require("fs");
var contents = fs.readFileSync("out_goods.json");
var jsonContent = JSON.parse(contents);

var reg_PRICE_ACTION = new RegExp('^[0-9]*[.][0-9][0-9]$');//выражение для проверки в поле PRICE_ACTION.  Проверяем чтоб было только число с сотыми
var reg_StringWithNumber= new RegExp('[0-9]');//выражение для проверки в полей SIZE & PHOTO - просто смотрим есть ли в строке число

function Validation_Type(json_testing, key, name, type) {//функция  для проверки на тип и пустоту значений. Выводит ошибку и может возвращать проходит проверку или нет
    if (typeof (json_testing[key][name]) != type && json_testing[key][name] != null) {
        console.log(" Warning!!!  Ключ объекта =" + key + "; Поле с ошибкой = " + name + " must be " + type);
        return false;
    }
    else if (json_testing[key][name] == "") {
        console.log(" Warning!!!  Ключ объекта =" + key + "; Поле с ошибкой = " + name + " cant be empty");
        return false;
    }
    return true;
};

for (var key in jsonContent) {
    /*---------SALE-----------*/
    if (jsonContent[key]["SALE"] == null) {
        console.log(" Error!!!  Ключ объекта =" + key + "; Поле с ошибкой = SALE cant be NULL");
    }
    else {
        if (typeof (jsonContent[key]["SALE"]) != "string") {
            console.log(" Error!!!  Ключ объекта =" + key + "; Поле с ошибкой = SALE must be string");
        }
        else if (jsonContent[key]["SALE"] == "") {
            console.log(" Warning!!!  Ключ объекта =" + key + "; Поле с ошибкой = SALE cant be empty");
        }
    }
    /*---------BRAND-----------*/
    Validation_Type(jsonContent, key, "BRAND", "string");
    /*---------QTY-----------*/
    Validation_Type(jsonContent, key, "QTY", "number");
    /*---------ONLINE_EXCLUSIVE-----------*/
    if(Validation_Type(jsonContent,key,"ONLINE_EXCLUSIVE")==true)
    {
        if(jsonContent[key]["ONLINE_EXCLUSIVE"]!="true"&&jsonContent[key]["ONLINE_EXCLUSIVE"]!="false")
        {
            console.log(" Warning!!!  Ключ объекта ="+key+"; Поле с ошибкой = ONLINE_EXCLUSIVE must be only 'true'or'false'");
        }
    }
    /*---------SEASON_UA-----------*/
    Validation_Type(jsonContent, key, "SEASON_UA", "string");
    /*---------VID_TOVARA_UA-----------*/
    Validation_Type(jsonContent, key, "VID_TOVARA_UA", "string");
    /*---------VERX_UA-----------*/
    Validation_Type(jsonContent, key, "VERX_UA", "string");
    /*---------PODKL_UA-----------*/
    Validation_Type(jsonContent, key, "PODKL_UA", "string");
    /*---------PODOSHVA_UA-----------*/
    /*---------STRANA_UA-----------*/
    Validation_Type(jsonContent, key, "STRANA_UA", "string");
    /*---------STYLE_UA-----------*/
    Validation_Type(jsonContent, key, "STYLE_UA", "string");
    /*---------CVET_UA-----------*/
    Validation_Type(jsonContent, key, "CVET_UA", "string");
    /*---------DESCRIPTION_UA-----------*/
    Validation_Type(jsonContent, key, "DESCRIPTION_UA", "string");
    /*---------TECHNOLOGY-----------*/
    Validation_Type(jsonContent, key, "TECHNOLOGY", "string");
    /*---------PRICE_BASE-----------*/
    Validation_Type(jsonContent, key, "PRICE_BASE", "string");
    /*---------PRICE_ACTION-----------*/
    if (typeof (jsonContent[key]["PRICE_ACTION"]) != "string" && jsonContent[key]["PRICE_ACTION"] != null) {
        console.log(" Error!!!  Ключ объекта =" + key + "; Поле с ошибкой = PRICE_ACTION must be string");
    }
    else if (jsonContent[key]["PRICE_ACTION"] == "") {
        console.log(" Error!!!  Ключ объекта =" + key + "; Поле с ошибкой = PRICE_ACTION cant be empty");
    }
    else if (jsonContent[key]["PRICE_ACTION"] != null)//если строка проверим формат регулярным выражением
    {
        if (reg_PRICE_ACTION.test(jsonContent[key]["PRICE_ACTION"]) == false) {
            console.log(" Error!!!  Ключ объекта =" + key + "; Поле с ошибкой = PRICE_ACTION  must be number like 10.00");
        }
    }
    /*---------ACCESSORY-----------*/
    if (Validation_Type(jsonContent, key, "ACCESSORY", "string") == true) {
        if (jsonContent[key]["ACCESSORY"] != "Y" && jsonContent[key]["ACCESSORY"] != "N") {
            console.log(" Warning!!!  Ключ объекта =" + key + "; Поле с ошибкой = ACCESSORY must be only 'Y'or'N'");
        }
    }
    /*---------SORT-----------*/
    Validation_Type(jsonContent,key,"SORT","string");
    /*---------GENDER_UA-----------*/
    Validation_Type(jsonContent, key, "GENDER_UA", "string");
    /*---------SIZE-----------*/
     if(jsonContent[key]["SIZE"]==null)
     {
         console.log("Error!!! Ключ объекта ="+key+"; Поле с ошибкой = SIZE is null");
     }
     else if(Array.isArray(jsonContent[key]["SIZE"])==false)
     {
     console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = SIZE must be array");
     }
     else 
     {
         for(var i in jsonContent[key]["SIZE"])//в цикле проверяем соответствие каждого елемента условию
         {
             if(reg_StringWithNumber.test(jsonContent[key]["SIZE"][i])==false)
             {
             console.log("Error!!! Ключ объекта ="+key+"; Поле с ошибкой = SIZE. тип элементов должен быть строкой с числом");
             }
         }
     }
     /*---------PHOTO-----------*/
     if(jsonContent[key]["PHOTO"]==null)
     {
        console.log("Error!!! Ключ объекта ="+key+"; Поле с ошибкой = PHOTO is null");
     }
     else if(Array.isArray(jsonContent[key]["PHOTO"])==false)
     {
        console.log(" Error!!!  Ключ объекта ="+key+"; Поле с ошибкой = PHOTO must be array");

     }
    else 
    {
        for(var i in jsonContent[key]["PHOTO"])//в цикле проверяем соответствие каждого елемента условию
        {
            if(reg_StringWithNumber.test(jsonContent[key]["PHOTO"][i])==false)
            {
            console.log("Error!!! Ключ объекта ="+key+"; Поле с ошибкой = PHOTO. тип элементов должен быть строкой с числом");
            }
        }
    }
}


